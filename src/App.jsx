import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";

import "./styles/variables.css";
import "./App.css";

import logo from "./assets/namx-logo-64.webp";

import Navbar from "./components/Navbar";
import InquiryModal from "./components/InquiryModal";
import Footer from "./components/Footer";
import FloatingChatWidget from "./components/FloatingChatWidget";

import HomePage from "./pages/HomePage";
import RatesPage from "./pages/RatesPage";
import CoveragePage from "./pages/CoveragePage";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import ApiPage from "./pages/ApiPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import GlossaryPage from "./pages/GlossaryPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import LocationPage from "./pages/LocationPage";
import WhatsAppPage from "./pages/WhatsAppPage";
import RcsPage from "./pages/RcsPage";
import ItServicesPage from "./pages/ItServicesPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import OtpSmsPage from "./pages/OtpSmsPage";
import NotFoundPage from "./pages/NotFoundPage";

import posts from "./data/posts.json";
import { pageByPath, canonicalFor } from "./data/routes.js";

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
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
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
    document.querySelectorAll(".ui-section, .kb-section, .home-products").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  const commonProps = {
    navigate: (path) => navigate(path),
    onOpenInquiriesModal: () => setIsInquiryModalOpen(true),
  };

  return (
    <main className="app-main">
      <a href="#content" className="skip-link">Skip to content</a>
      <Navbar logo={logo} currentPath={pathname} navigate={(path) => navigate(path)} />

      <div id="content">
        <Routes>
          <Route path="/" element={<HomePage {...commonProps} />} />
          <Route path="/otp-sms" element={<OtpSmsPage {...commonProps} />} />
          <Route path="/services" element={<ServicesPage {...commonProps} />} />
          <Route path="/whatsapp-business" element={<WhatsAppPage {...commonProps} />} />
          <Route path="/rcs-messaging" element={<RcsPage {...commonProps} />} />
          <Route path="/it-services" element={<ItServicesPage {...commonProps} />} />
          <Route path="/rates" element={<RatesPage {...commonProps} />} />
          <Route path="/coverage" element={<CoveragePage {...commonProps} />} />
          <Route path="/bulk-sms-usa" element={<LocationPage {...commonProps} forcedLocation="usa" />} />
          <Route path="/bulk-sms-uk" element={<LocationPage {...commonProps} forcedLocation="uk" />} />
          <Route path="/bulk-sms-uae" element={<LocationPage {...commonProps} forcedLocation="uae" />} />
          <Route path="/bulk-sms-india" element={<LocationPage {...commonProps} forcedLocation="india" />} />
          <Route path="/bulk-sms-malaysia" element={<LocationPage {...commonProps} forcedLocation="malaysia" />} />
          <Route path="/industries" element={<IndustriesPage {...commonProps} />} />
          <Route path="/api" element={<ApiPage {...commonProps} />} />
          <Route path="/insights" element={<BlogPage {...commonProps} />} />
          <Route path="/insights/:slug" element={<BlogPostPage {...commonProps} />} />
          <Route path="/glossary" element={<GlossaryPage {...commonProps} />} />
          <Route path="/faq" element={<FaqPage {...commonProps} />} />
          <Route path="/contact" element={<ContactPage {...commonProps} />} />
          <Route path="/terms" element={<TermsPage {...commonProps} />} />
          <Route path="/privacy" element={<PrivacyPage {...commonProps} />} />
          <Route path="*" element={<NotFoundPage {...commonProps} />} />
        </Routes>
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
