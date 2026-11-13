import { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, matchPath } from "react-router-dom";

import "./styles/variables.css";
import "./App.css";

import logo from "./assets/namx-logo-64.webp";

import Navbar from "./components/Navbar";
import InquiryModal from "./components/InquiryModal";
import Footer from "./components/Footer";
import FloatingChatWidget from "./components/FloatingChatWidget";

import NotFoundPage from "./pages/NotFoundPage";
import { lazyPage } from "./lazyPage";

import posts from "virtual:posts-meta";
import { pageByPath, canonicalFor } from "./data/routes.js";

const HomePage = lazyPage(() => import("./pages/HomePage"));
const OtpSmsPage = lazyPage(() => import("./pages/OtpSmsPage"));
const ServicesPage = lazyPage(() => import("./pages/ServicesPage"));
const WhatsAppPage = lazyPage(() => import("./pages/WhatsAppPage"));
const RcsPage = lazyPage(() => import("./pages/RcsPage"));
const ItServicesPage = lazyPage(() => import("./pages/ItServicesPage"));
const RatesPage = lazyPage(() => import("./pages/RatesPage"));
const CoveragePage = lazyPage(() => import("./pages/CoveragePage"));
const LocationPage = lazyPage(() => import("./pages/LocationPage"));
const IndustriesPage = lazyPage(() => import("./pages/IndustriesPage"));
const ApiPage = lazyPage(() => import("./pages/ApiPage"));
const BlogPage = lazyPage(() => import("./pages/BlogPage"));
const BlogPostPage = lazyPage(() => import("./pages/BlogPostPage"));
const GlossaryPage = lazyPage(() => import("./pages/GlossaryPage"));
const FaqPage = lazyPage(() => import("./pages/FaqPage"));
const ContactPage = lazyPage(() => import("./pages/ContactPage"));
const AboutPage = lazyPage(() => import("./pages/AboutPage"));
const TermsPage = lazyPage(() => import("./pages/TermsPage"));
const PrivacyPage = lazyPage(() => import("./pages/PrivacyPage"));

// Route table: path -> page component (+ extra props). Rendered as <Route>s below.
const routeTable = [
  ["/", HomePage],
  ["/otp-sms", OtpSmsPage],
  ["/services", ServicesPage],
  ["/whatsapp-business", WhatsAppPage],
  ["/rcs-messaging", RcsPage],
  ["/it-services", ItServicesPage],
  ["/rates", RatesPage],
  ["/coverage", CoveragePage],
  ["/bulk-sms-usa", LocationPage, { forcedLocation: "usa" }],
  ["/bulk-sms-uk", LocationPage, { forcedLocation: "uk" }],
  ["/bulk-sms-uae", LocationPage, { forcedLocation: "uae" }],
  ["/bulk-sms-india", LocationPage, { forcedLocation: "india" }],
  ["/bulk-sms-malaysia", LocationPage, { forcedLocation: "malaysia" }],
  ["/industries", IndustriesPage],
  ["/api", ApiPage],
  ["/insights", BlogPage],
  ["/insights/:slug", BlogPostPage],
  ["/glossary", GlossaryPage],
  ["/faq", FaqPage],
  ["/contact", ContactPage],
  ["/about", AboutPage],
  ["/terms", TermsPage],
  ["/privacy", PrivacyPage],
];

/** Load the code for the page at `pathname` (call before hydrating). */
export function preloadPage(pathname) {
  const hit = routeTable.find(([path]) => matchPath(path, pathname));
  return hit ? hit[1].load() : Promise.resolve();
}

/** Load every page (prerendering, and idle prefetch in the browser). */
export function preloadAllPages() {
  return Promise.all([...new Set(routeTable.map(([, Page]) => Page))].map((Page) => Page.load()));
}

// Meta tags for client-side navigation. The prerendered HTML already carries
// the same values (scripts/prerender.js reads the same data files).
function metaFor(path) {
  if (pageByPath[path]) return { ...pageByPath[path], canonical: canonicalFor(path) };
  if (path.startsWith("/insights/")) {
    const post = posts.find((p) => "/insights/" + p.slug === path);
    if (post) {
      return {
        title: post.seoTitle || `${post.title} | NAMX Telecom`,
        description: post.seoDescription || post.excerpt,
        canonical: canonicalFor(path),
      };
    }
  }
  return null;
}

export function AppContent() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const meta = metaFor(pathname);
    document.title = meta ? meta.title : "Page not found | NAMX Telecom";
    if (!meta) return;
    document.querySelector("meta[name='description']")?.setAttribute("content", meta.description);
    document.querySelector("link[rel='canonical']")?.setAttribute("href", meta.canonical);
  }, [pathname]);

  // Gentle fade-in of sections as they scroll into view. Only enabled when JS
  // runs and the user hasn't asked for reduced motion; the prerendered HTML is
  // always fully visible.
  // Pages load asynchronously after navigation, so new sections are picked up
  // with a MutationObserver rather than once per route change.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || typeof MutationObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    // Sections already on screen stay as painted; only ones below the fold fade in.
    document
      .querySelectorAll(".ui-section, .kb-section, .home-products")
      .forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible"); });
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    const scan = () => document
      .querySelectorAll(".ui-section:not(.is-visible), .kb-section:not(.is-visible), .home-products:not(.is-visible)")
      .forEach((el) => io.observe(el));
    scan();
    const content = document.getElementById("content");
    const mo = new MutationObserver(scan);
    if (content) mo.observe(content, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  // After the page has loaded, fetch the other pages' code in the background
  // so in-site navigation is instant (skipped when the user saves data).
  useEffect(() => {
    if (navigator.connection?.saveData) return;
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 2000));
    const start = () => idle(() => preloadAllPages());
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
  }, []);

  const commonProps = {
    navigate: (path) => navigate(path),
    onOpenInquiriesModal: () => setIsInquiryModalOpen(true),
  };

  return (
    <main className="app-main">
      <a href="#content" className="skip-link">Skip to content</a>
      <Navbar logo={logo} currentPath={pathname} navigate={(path) => navigate(path)} />

      <div id="content">
        <Suspense fallback={<div className="route-loading" aria-busy="true" />}>
          <Routes>
            {routeTable.map(([path, Page, extra]) => (
              <Route key={path} path={path} element={<Page {...commonProps} {...extra} />} />
            ))}
            <Route path="*" element={<NotFoundPage {...commonProps} />} />
          </Routes>
        </Suspense>
      </div>

      <Footer navigate={(path) => navigate(path)} />
      <FloatingChatWidget />
      <InquiryModal isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
