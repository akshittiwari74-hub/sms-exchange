// Static pre-rendering: writes one HTML file per page (with page-specific meta
// tags and JSON-LD), a 404 page, and the sitemap.
//
// Page list:   src/data/routes.js  (static pages)
//              src/data/posts.json (guides under /insights/*)
// JSON-LD:     scripts/schemas.js  (+ generated Article / OTP FAQ schema)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";
import { pages, SITE, canonicalFor } from "../src/data/routes.js";
import schemas from "./schemas.js";
import { render, ready } from "../dist/server/entry-server.js";
await ready; // load every code-split page before rendering

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const distDir = path.join(repoRoot, "dist");
const readJson = (p) => JSON.parse(fs.readFileSync(path.join(repoRoot, p), "utf-8"));

const templatePath = path.join(distDir, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}
const template = fs.readFileSync(templatePath, "utf-8");
const posts = readJson("src/data/posts.json");
const otpFaqs = readJson("src/data/otpFaqs.json");

// ---------------------------------------------------------------------------
// Per-page JavaScript preloads. Pages are code-split (src/lazyPage.jsx); each
// HTML file gets <link rel="modulepreload"> for its own page chunk so the
// browser fetches it in parallel with the main bundle instead of after it.
// Route -> source file is read from the lazyPage()/routeTable in App.jsx.
// ---------------------------------------------------------------------------
const manifestPath = path.join(distDir, ".vite/manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
const appSource = fs.readFileSync(path.join(repoRoot, "src/App.jsx"), "utf-8");
const pageFiles = Object.fromEntries(
  [...appSource.matchAll(/const (\w+) = lazyPage\(\(\) => import\("\.\/(pages\/\w+)"\)\)/g)].map((m) => [m[1], `src/${m[2]}.jsx`]),
);
const routeFiles = [...appSource.matchAll(/\["([^"]+)", (\w+)[,\]]/g)].map((m) => [m[1], pageFiles[m[2]]]);
const entryKey = Object.keys(manifest).find((k) => manifest[k].isEntry);
// Files the template already loads or preloads
const entryFiles = new Set([
  manifest[entryKey].file,
  ...[...template.matchAll(/(?:src|href)="\/(assets\/[^"]+\.js)"/g)].map((m) => m[1]),
]);

function chunkFiles(key, seen = new Set()) {
  const chunk = manifest[key];
  if (!chunk || seen.has(chunk.file)) return seen;
  seen.add(chunk.file);
  for (const dep of chunk.imports || []) chunkFiles(dep, seen);
  return seen;
}

function preloadTags(routePath) {
  const hit = routeFiles.find(([pattern]) =>
    pattern === routePath || (pattern.endsWith("/:slug") && routePath.startsWith(pattern.slice(0, -5))));
  if (!hit || !manifest[hit[1]]) {
    if (routePath !== "/404") console.warn(`No page chunk found for ${routePath}`);
    return "";
  }
  return [...chunkFiles(hit[1])]
    .filter((f) => !entryFiles.has(f))
    .map((f) => `  <link rel="modulepreload" crossorigin href="/${f}">\n`)
    .join("");
}

// ---------------------------------------------------------------------------
// Route list
// ---------------------------------------------------------------------------
const routes = [
  ...pages.map((p) => ({ ...p, canonical: canonicalFor(p.path), schema: schemas[p.path] })),
  ...posts.map((post) => {
    const p = "/insights/" + post.slug;
    return {
      path: p,
      title: post.seoTitle || `${post.title} | NAMX Telecom`,
      description: post.seoDescription || post.excerpt,
      keywords: post.keywords || "",
      canonical: canonicalFor(p),
      lastmod: post.updated || post.date,
      schema: articleSchema(post, canonicalFor(p)),
    };
  }),
];

// Every reference to NAMX Telecom inside page schema points at the single
// Organization entity defined in index.html, so Google sees one company.
const ORG_ID = SITE + "/#organization";
function linkOrganization(node) {
  if (Array.isArray(node)) return node.map(linkOrganization);
  if (!node || typeof node !== "object") return node;
  if (node["@type"] === "Organization" && /NAMX/i.test(node.name || "") && !node["@context"]) return { "@id": ORG_ID };
  return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, linkOrganization(v)]));
}
for (const r of routes) if (r.schema) r.schema = linkOrganization(r.schema);

const otp = routes.find((r) => r.path === "/otp-sms");
if (otp) otp.schema = otpSchema(otp);

function articleSchema(post, url) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: "Insights", item: SITE + "/insights" },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      {
        "@type": "Article",
        headline: post.title.slice(0, 110),
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.updated || post.date,
        articleSection: post.category,
        image: SITE + "/og-image.png",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@id": SITE + "/#organization" },
        publisher: { "@id": SITE + "/#organization" },
      },
    ],
  };
}

function otpSchema(route) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: "OTP SMS", item: route.canonical },
        ],
      },
      {
        "@type": "Service",
        name: "OTP SMS & 2FA Verification API",
        serviceType: "OTP SMS / Two-Factor Authentication Messaging",
        description: route.description,
        provider: { "@id": SITE + "/#organization" },
        areaServed: "Worldwide",
        url: route.canonical,
      },
      {
        "@type": "FAQPage",
        mainEntity: otpFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// HTML helpers
// ---------------------------------------------------------------------------
const escAttr = (s) => String(s).replace(/&(?!amp;|lt;|gt;|quot;|#)/g, "&amp;").replace(/"/g, "&quot;");
const escText = (s) => String(s).replace(/&(?!amp;|lt;|gt;|quot;|#)/g, "&amp;").replace(/</g, "&lt;");

function setMeta(html, attr, key, value) {
  const re = new RegExp(`<meta ${attr}="${key}"\\s+content="[^"]*"\\s*/?>`, "i");
  return html.replace(re, `<meta ${attr}="${key}" content="${escAttr(value)}" />`);
}

function buildHtml(route, appHtml) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Homepage-only JSON-LD (FAQ / service) is removed from every other page
  html = route.path === "/"
    ? html.replace(/<!-- HOMEPAGE_ONLY_SCHEMA_(START|END) -->/g, "")
    : html.replace(/<!-- HOMEPAGE_ONLY_SCHEMA_START -->[\s\S]*?<!-- HOMEPAGE_ONLY_SCHEMA_END -->/g, "");

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escText(route.title)}</title>`);
  for (const [attr, key] of [["name", "title"], ["property", "og:title"], ["name", "twitter:title"]]) html = setMeta(html, attr, key, route.title);
  for (const [attr, key] of [["name", "description"], ["property", "og:description"], ["name", "twitter:description"]]) html = setMeta(html, attr, key, route.description);

  if (route.canonical) {
    html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${route.canonical}" />`);
    html = setMeta(html, "property", "og:url", route.canonical);
    html = setMeta(html, "name", "twitter:url", route.canonical);
  }

  if (route.schema) {
    html = html.replace("</head>", `  <script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n  </script>\n</head>`);
  }
  html = html.replace("</head>", `${preloadTags(route.path)}</head>`);
  return html;
}


// ---------------------------------------------------------------------------
// Render every route
// ---------------------------------------------------------------------------
const NOT_FOUND_MARKER = 'data-page="not-found"';
const missing = [];

for (const route of routes) {
  const appHtml = render(route.path);
  if (appHtml.includes(NOT_FOUND_MARKER)) {
    missing.push(route.path);
    continue;
  }
  const outDir = path.join(distDir, route.path.slice(1));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), buildHtml(route, appHtml), "utf-8");
  console.log("Prerendered", route.path);
}

if (missing.length) {
  console.error(`\nThese routes are listed in src/data/routes.js or posts.json but have no <Route> in App.jsx:\n  ${missing.join("\n  ")}`);
  process.exit(1);
}

// 404 page (Vercel serves dist/404.html with a 404 status for unknown URLs)
{
  let html = buildHtml(
    { path: "/404", title: "Page not found | NAMX Telecom", description: "The page you are looking for does not exist.", canonical: null },
    render("/404-page-not-found"),
  );
  html = html.replace(/<link rel="canonical"[^>]*>\s*/i, "");
  html = html.replace(/<meta name="robots" content="[^"]*"\s*\/?>/i, '<meta name="robots" content="noindex, follow" />');
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, "");
  fs.writeFileSync(path.join(distDir, "404.html"), html, "utf-8");
  console.log("Prerendered 404.html");
}

// ---------------------------------------------------------------------------
// Sitemap with real <lastmod> dates (last git commit touching each page's
// source). Falls back to the committed public/sitemap.xml date, else omitted.
// ---------------------------------------------------------------------------
const pageSources = {
  "/": ["src/pages/HomePage.jsx", "src/components/HomeKnowledge.jsx", "src/components/Hero.jsx", "src/data/posts.json"],
  "/otp-sms": ["src/pages/OtpSmsPage.jsx", "src/data/otpFaqs.json"],
  "/rates": ["src/pages/RatesPage.jsx", "src/components/RouteRatesTable.jsx", "src/components/TopRoutesSpotlight.jsx"],
  "/coverage": ["src/pages/CoveragePage.jsx", "src/components/Coverage.jsx"],
  "/services": ["src/pages/ServicesPage.jsx"],
  "/whatsapp-business": ["src/pages/WhatsAppPage.jsx"],
  "/rcs-messaging": ["src/pages/RcsPage.jsx"],
  "/it-services": ["src/pages/ItServicesPage.jsx"],
  "/industries": ["src/pages/IndustriesPage.jsx"],
  "/api": ["src/pages/ApiPage.jsx", "src/components/ApiSnippet.jsx"],
  "/faq": ["src/pages/FaqPage.jsx", "src/components/FAQ.jsx"],
  "/contact": ["src/pages/ContactPage.jsx"],
  "/about": ["src/pages/AboutPage.jsx"],
  "/glossary": ["src/pages/GlossaryPage.jsx", "src/components/TelecomDictionary.jsx"],
  "/insights": ["src/pages/BlogPage.jsx", "src/data/posts.json"],
  "/terms": ["src/pages/TermsPage.jsx"],
  "/privacy": ["src/pages/PrivacyPage.jsx"],
};
const locationSources = ["src/pages/LocationPage.jsx", "src/data/corridors.json"];

function gitDate(files) {
  try {
    const existing = files.filter((f) => fs.existsSync(path.join(repoRoot, f)));
    if (!existing.length) return null;
    const dirty = execFileSync("git", ["status", "--porcelain", "--", ...existing], { cwd: repoRoot, encoding: "utf-8" }).trim();
    if (dirty) return new Date().toISOString().split("T")[0];
    return execFileSync("git", ["log", "-1", "--format=%cs", "--", ...existing], { cwd: repoRoot, encoding: "utf-8" }).trim() || null;
  } catch {
    return null;
  }
}

const previousLastmod = {};
try {
  const prev = fs.readFileSync(path.join(repoRoot, "public/sitemap.xml"), "utf-8");
  for (const m of prev.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) previousLastmod[m[1]] = m[2];
} catch {
  /* no previous sitemap */
}

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const route of routes) {
  const files = route.path.startsWith("/bulk-sms-") ? locationSources : pageSources[route.path];
  const lastmod = route.lastmod || (files && gitDate(files)) || previousLastmod[route.canonical];
  sitemap += `  <url>\n    <loc>${route.canonical}</loc>\n${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ""}  </url>\n`;
}
sitemap += "</urlset>\n";
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf-8");
fs.writeFileSync(path.join(repoRoot, "public/sitemap.xml"), sitemap, "utf-8");
console.log(`Sitemap: ${routes.length} URLs`);

// ---------------------------------------------------------------------------
// llms.txt: a plain-text map of the site for AI search assistants
// (https://llmstxt.org). Generated from the same route data as the sitemap.
// ---------------------------------------------------------------------------
{
  const line = (r) => `- [${r.title.replace(/ \| NAMX Telecom$/, "")}](${r.canonical}): ${r.description}`;
  const statics = routes.filter((r) => !r.path.startsWith("/insights/"));
  const guides = routes.filter((r) => r.path.startsWith("/insights/"));
  const txt = [
    "# NAMX Telecom",
    "",
    "> Wholesale SMS carrier and OTP messaging provider. Direct operator routes for OTP, transactional and marketing SMS, SMPP v3.4/v5.0 and REST API connectivity, plus WhatsApp Business and RCS messaging. Contact: admin@namxtelecom.site",
    "",
    "## Pages",
    ...statics.map(line),
    "",
    "## Guides",
    ...guides.map(line),
    "",
  ].join("\n");
  fs.writeFileSync(path.join(distDir, "llms.txt"), txt, "utf-8");
  console.log("llms.txt written");
}

// The build manifest is only needed above; don't publish it.
fs.rmSync(path.join(distDir, ".vite"), { recursive: true, force: true });
