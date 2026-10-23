import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";

import "./styles/variables.css";
import "./App.css";

import logo from "./assets/namx-logo.png";

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

const pageMeta = {
  "/": {
    title: "NAMX Telecom | Global Wholesale Bulk SMS Provider, SMPP Gateway & International P2P Routing",
    description: "NAMX Telecom is a global wholesale Bulk SMS provider, SMPP v3.4/v5.0 gateway & international P2P traffic exchange. Send bulk SMS worldwide with direct SS7 carrier interconnects, zero-hop routing & REST APIs.",
    canonical: "https://www.namxtelecom.site/",
  },
  "/whatsapp-business": {
    title: "WhatsApp Business API & Official Meta Platform | NAMX Telecom",
    description: "Official WhatsApp Business Platform & Cloud API. Deliver verified 2FA OTPs, interactive broadcast campaigns, 24/7 AI chatbots, and automated fallback to wholesale SMS.",
    canonical: "https://www.namxtelecom.site/whatsapp-business",
  },
  "/rcs-messaging": {
    title: "RCS Business Messaging Gateway & Google RBM Interconnect | NAMX Telecom",
    description: "Upgrade Bulk SMS with verified sender branding, rich media carousels, action chips, and automated SMS fallback. Native rich messaging for Android and iOS 18.",
    canonical: "https://www.namxtelecom.site/rcs-messaging",
  },
  "/it-services": {
    title: "Enterprise IT Services, Telecom Engineering & Cloud Solutions | NAMX Telecom",
    description: "Full-suite IT services wing: Custom software development, SMPP gateway engineering, cloud DevOps, AI automation, and 24/7 managed Global NOC services.",
    canonical: "https://www.namxtelecom.site/it-services",
  },
  "/rates": {
    title: "Wholesale Bulk SMS Rates [2026] | Live Euro Rate Cards & Pricing | NAMX Telecom",
    description: "Explore live wholesale Bulk SMS rates and international P2P hubbing pricing for 195+ corridors. Compare Tier-1 Direct SS7 and wholesale pricing in EUR, USDT, or USD.",
    canonical: "https://www.namxtelecom.site/rates",
  },
  "/coverage": {
    title: "Global Bulk SMS Coverage & Direct MNO Route Matrix (195+ Countries) | NAMX Telecom",
    description: "Global Bulk SMS and international P2P messaging coverage across 195+ countries. Direct SS7 signaling links, LCR SMS routing engine, and zero-hop carrier termination.",
    canonical: "https://www.namxtelecom.site/coverage",
  },
  "/services": {
    title: "Carrier Bulk SMS Gateway, SMPP v3.4 Binds & P2P Hubbing | NAMX Telecom",
    description: "Carrier-grade messaging suite: dedicated SMPP v3.4/v5.0 binds up to 10,000 TPS, international P2P traffic hubbing, dynamic LCR routing, and REST SMS APIs.",
    canonical: "https://www.namxtelecom.site/services",
  },
  "/industries": {
    title: "Industry Bulk SMS Solutions, Banking 2FA OTP & Telecom P2P SMS Routing | NAMX Telecom",
    description: "Tailored Bulk SMS & intelligent SMS routing for Banking 2FA OTPs, Telecom Aggregator P2P hubbing, E-Commerce DLR tracking, and Healthcare compliance.",
    canonical: "https://www.namxtelecom.site/industries",
  },
  "/api": {
    title: "REST SMS API Specs & SMPP v3.4/v5.0 Protocol Documentation | NAMX Telecom",
    description: "Integrate developer REST SMS APIs and SMPP v3.4/v5.0 transceiver binds in 5 minutes. Code samples for cURL, Node.js, Python with real-time DLR webhooks & PDU payloads.",
    canonical: "https://www.namxtelecom.site/api",
  },
  "/faq": {
    title: "Wholesale SMS & SMPP v3.4 Technical FAQ | Protocol Binds & Routing | NAMX Telecom",
    description: "Technical answers on SMPP v3.4/v5.0 binds, TPS windowing limits, dynamic LCR routing, SS7 anti-fraud firewalling, DLR status codes, and 99.99% SLA uptime.",
    canonical: "https://www.namxtelecom.site/faq",
  },
  "/contact": {
    title: "Contact Wholesale SMS Desk | Request Rates & SMPP Test Binds | NAMX Telecom",
    description: "Connect directly with our 24/7 Global NOC connectivity desk. Request custom wholesale Bulk SMS rates, SMPP v3.4 test binds, or enterprise API credentials.",
    canonical: "https://www.namxtelecom.site/contact",
  },
  "/glossary": {
    title: "Telecom Glossary: SS7, SMPP, PDU & SMS Routing Terminology | NAMX Telecom",
    description: "A comprehensive dictionary of telecommunications acronyms and terms. Understand SS7 signaling, SMPP v3.4 binds, LCR routing, and A2P messaging.",
    canonical: "https://www.namxtelecom.site/glossary",
  },
  "/insights": {
    title: "Telecom Insights & Blog: Bulk SMS, SS7 Security & SMPP Guides | NAMX Telecom",
    description: "Read the latest industry insights, technical guides on SMPP configuration, and trends in global A2P SMS routing from NAMX Telecom experts.",
    canonical: "https://www.namxtelecom.site/insights",
  },
  "/terms": {
    title: "Terms and Conditions | Carrier Master Services Agreement (MSA) | NAMX Telecom",
    description: "Enterprise Terms and Conditions, Master Services Agreement, acceptable messaging policies, SMPP binding SLAs, payment settlement terms, and regulatory compliance guidelines.",
    canonical: "https://www.namxtelecom.site/terms",
  },
  "/privacy": {
    title: "Privacy Policy | Carrier Data Protection & Zero-Payload Purge | NAMX Telecom",
    description: "Privacy Policy and Data Protection standards of NAMX Telecom. Learn how we safeguard carrier metadata, PDU payloads, customer credentials, and adhere to global GDPR frameworks.",
    canonical: "https://www.namxtelecom.site/privacy",
  }
};

export function AppContent() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPath]);

  // Update meta tags dynamically for SEO (Fallback for CSR, SSG will overwrite this at build time)
  useEffect(() => {
    // Dynamic Meta matching for blog and programmatic pages
    let metaInfo = pageMeta[currentPath];
    
    if (!metaInfo) {
      if (currentPath.startsWith('/insights/')) {
        metaInfo = {
          title: "Telecom Insights | NAMX Telecom",
          description: "Read the latest technical guide on Bulk SMS and global routing from NAMX Telecom.",
          canonical: `https://www.namxtelecom.site${currentPath}`
        };
      } else if (currentPath.startsWith('/bulk-sms-')) {
        const country = currentPath.split('-').pop().toUpperCase();
        metaInfo = {
          title: `Bulk SMS Provider in ${country} | Direct Routes & SMPP Gateway`,
          description: `Send Bulk SMS in ${country} with direct MNO interconnects and zero-hop termination. Connect via REST API or SMPP v3.4.`,
          canonical: `https://www.namxtelecom.site${currentPath}`
        };
      } else {
         metaInfo = pageMeta["/"];
      }
    }

    document.title = metaInfo.title;

    let descMeta = document.querySelector("meta[name='description']");
    if (descMeta) descMeta.setAttribute("content", metaInfo.description);

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) canonicalLink.setAttribute("href", metaInfo.canonical);
  }, [currentPath]);

  // To avoid refactoring all components immediately, we pass navigate to them as before.
  const commonProps = {
    navigate: (path) => navigate(path),
    onOpenInquiriesModal: () => setIsInquiryModalOpen(true)
  };

  return (
    <main className="app-main">
      <Navbar logo={logo} currentPath={currentPath} navigate={(path) => navigate(path)} />

      <Routes>
        <Route path="/" element={<HomePage {...commonProps} />} />
        <Route path="/rates" element={<RatesPage {...commonProps} />} />
        <Route path="/coverage" element={<CoveragePage {...commonProps} />} />
        <Route path="/services" element={<ServicesPage {...commonProps} />} />
        <Route path="/whatsapp-business" element={<WhatsAppPage {...commonProps} />} />
        <Route path="/rcs-messaging" element={<RcsPage {...commonProps} />} />
        <Route path="/it-services" element={<ItServicesPage {...commonProps} />} />
        <Route path="/industries" element={<IndustriesPage {...commonProps} />} />
        <Route path="/api" element={<ApiPage {...commonProps} />} />
        <Route path="/faq" element={<FaqPage {...commonProps} />} />
        <Route path="/contact" element={<ContactPage {...commonProps} />} />
        
        {/* New SEO Pages */}
        <Route path="/glossary" element={<GlossaryPage {...commonProps} />} />
        <Route path="/insights" element={<BlogPage {...commonProps} />} />
        <Route path="/insights/:slug" element={<BlogPostPage {...commonProps} />} />
        <Route path="/terms" element={<TermsPage {...commonProps} />} />
        <Route path="/privacy" element={<PrivacyPage {...commonProps} />} />
        <Route path="/bulk-sms-uae" element={<LocationPage {...commonProps} forcedLocation="uae" />} />
        <Route path="/bulk-sms-uk" element={<LocationPage {...commonProps} forcedLocation="uk" />} />
        <Route path="/bulk-sms-usa" element={<LocationPage {...commonProps} forcedLocation="usa" />} />
        <Route path="/bulk-sms-india" element={<LocationPage {...commonProps} forcedLocation="india" />} />
        <Route path="/bulk-sms-malaysia" element={<LocationPage {...commonProps} forcedLocation="malaysia" />} />
        <Route path="/bulk-sms-:location" element={<LocationPage {...commonProps} />} />
      </Routes>
      <Footer navigate={(path) => navigate(path)} />

      <FloatingChatWidget />

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </main>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;