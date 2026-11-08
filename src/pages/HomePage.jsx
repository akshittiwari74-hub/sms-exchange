import {
  KeyRound, Cable, MessageCircle, Smartphone, BarChart3, Globe, Code2, Landmark, Laptop, Headset, ArrowRight, Check,
} from "lucide-react";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Button from "../components/Button";
import HomeKnowledge from "../components/HomeKnowledge";
import "../styles/pages/HomePage.css";

const products = [
  {
    Icon: KeyRound,
    tag: "OTP & 2FA",
    title: "OTP SMS & Verification API",
    desc: "Deliver one-time passwords in seconds over direct operator routes, with number-portability lookup, SMS pumping protection and WhatsApp/RCS fallback.",
    points: ["OTP-priority routing", "Real handset DLRs", "Fraud filtering"],
    link: "Explore OTP SMS",
    path: "/otp-sms",
  },
  {
    Icon: Cable,
    tag: "SMPP & A2P",
    title: "Wholesale SMS & SMPP Gateway",
    desc: "Dedicated SMPP v3.4/v5.0 transceiver binds over TLS, quality-weighted least-cost routing, and a REST API for application traffic.",
    points: ["High-TPS binds", "LCR with failover", "Web broadcast portal"],
    link: "View SMS products",
    path: "/services",
  },
  {
    Icon: MessageCircle,
    tag: "Meta Cloud API",
    title: "WhatsApp Business Platform",
    desc: "Verified business messaging, authentication templates for OTP, interactive catalogs and automatic fallback to SMS.",
    points: ["Authentication templates", "Rich interactive messages", "SMS fallback"],
    link: "Explore WhatsApp API",
    path: "/whatsapp-business",
  },
  {
    Icon: Smartphone,
    tag: "Rich messaging",
    title: "RCS Business Messaging",
    desc: "Branded rich messages with verified sender identity, carousels and suggested actions — with SMS fallback for unsupported devices.",
    points: ["Verified brand sender", "Carousels & actions", "SMS fallback"],
    link: "Explore RCS",
    path: "/rcs-messaging",
  },
];

const destinations = [
  { Icon: BarChart3, title: "Rate cards", desc: "Per-country wholesale prices in EUR, USD or USDT", path: "/rates" },
  { Icon: Globe, title: "Coverage", desc: "195+ countries and 250+ mobile operators", path: "/coverage" },
  { Icon: Code2, title: "API & SMPP docs", desc: "REST endpoints, SMPP specs and code samples", path: "/api" },
  { Icon: Landmark, title: "Industries", desc: "Banking, fintech, e-commerce and healthcare", path: "/industries" },
  { Icon: Laptop, title: "IT services", desc: "Gateway development, cloud and NOC services", path: "/it-services" },
  { Icon: Headset, title: "Talk to the NOC", desc: "Custom rates, test binds and onboarding", path: "/contact" },
];

export const HomePage = ({ navigate }) => {
  const go = (e, path) => {
    e.preventDefault();
    if (navigate) navigate(path);
  };

  return (
    <div className="page-home">
      <Hero navigate={navigate} />
      <TrustBar />

      <section className="home-products" aria-labelledby="home-products-title">
        <div className="home-wrap">
          <div className="home-section-head">
            <p className="stats-eyebrow">Products</p>
            <h2 id="home-products-title">Global wholesale SMS infrastructure and messaging channels</h2>
            <p>One connection for OTP, transactional and bulk traffic — over SMS, WhatsApp and RCS.</p>
          </div>

          <div className="product-grid">
            {products.map(({ Icon, tag, title, desc, points, link, path }) => (
              <article key={title} className="product-card">
                <div className="product-card-top">
                  <span className="info-icon"><Icon size="1em" strokeWidth={1.75} aria-hidden="true" /></span>
                  <span className="portal-card-badge">{tag}</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul className="product-points">
                  {points.map((pt) => (
                    <li key={pt}><Check size={14} strokeWidth={2} aria-hidden="true" /> {pt}</li>
                  ))}
                </ul>
                <a href={path} onClick={(e) => go(e, path)} className="product-link">
                  {link} <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          <div className="destination-grid">
            {destinations.map(({ Icon, title, desc, path }) => (
              <a key={title} href={path} onClick={(e) => go(e, path)} className="destination">
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" className="destination-icon" />
                <span className="destination-text">
                  <span className="destination-title">{title}</span>
                  <span className="destination-desc">{desc}</span>
                </span>
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" className="destination-arrow" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <HomeKnowledge navigate={navigate} />

      <section className="home-quick-cta">
        <div className="home-wrap">
          <div className="quick-cta-card">
            <div>
              <h2>Ready to test your traffic?</h2>
              <p>Get a test bind or API key and send real messages to your target countries before you commit volume.</p>
            </div>
            <div className="quick-cta-buttons">
              <Button href="/contact" onClick={(e) => go(e, "/contact")} variant="primary" size="lg" external={false}>
                Request a test route
              </Button>
              <Button href="/rates" onClick={(e) => go(e, "/rates")} variant="secondary" size="lg" external={false}>
                View rate cards
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
