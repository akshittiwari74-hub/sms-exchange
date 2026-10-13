const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('scripts/prerender.js', 'utf8');
let original = content;

// Add home page to routes
if (!content.includes('path: "/",')) {
  const homeRoute = `
  {
    path: "/",
    dir: "",
    title: "NAMX Telecom | Global Wholesale Bulk SMS Provider, SMPP Gateway & International P2P Routing",
    description: "NAMX Telecom is a global wholesale Bulk SMS provider, SMPP v3.4/v5.0 gateway & international P2P traffic exchange.",
    keywords: "Bulk SMS, Global Bulk SMS, Wholesale Bulk SMS, Worldwide Bulk SMS Provider, Direct MNO Interconnect SMS",
    canonical: "https://www.namxtelecom.site/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NAMX Telecom",
      "url": "https://www.namxtelecom.site/"
    }
  },`;
  content = content.replace(/const routes = \[/, 'const routes = [' + homeRoute);
}

// Generate Sitemap
const sitemapCode = `
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n';
  const today = new Date().toISOString().split('T')[0];
  routes.forEach(route => {
    sitemap += '  <url>\\n';
    sitemap += \`    <loc>\${route.canonical}</loc>\\n\`;
    sitemap += \`    <lastmod>\${today}</lastmod>\\n\`;
    sitemap += '    <changefreq>daily</changefreq>\\n';
    sitemap += '    <priority>' + (route.path === '/' ? '1.0' : '0.8') + '</priority>\\n';
    sitemap += '  </url>\\n';
  });
  sitemap += '</urlset>';
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log('Sitemap generated.');
`;

if (!content.includes('Sitemap generated.')) {
  content = content.replace(/console\.log\("SSG Pre-rendering completed.*?successfully.*?"\);/, sitemapCode + '\nconsole.log("SSG Pre-rendering and Sitemap generation completed!");');
}

if (content !== original) {
  fs.writeFileSync('scripts/prerender.js', content);
  console.log('Updated prerender.js with Sitemap generation and Home route.');
}
