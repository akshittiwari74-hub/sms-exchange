import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Stats from "../components/Stats";
import Button from "../components/Button";
import "../styles/pages/HomePage.css";

export const HomePage = ({ navigate }) => {
  const portalCards = [
    {
      icon: "📊",
      badge: "Real-Time Rates",
      title: "Wholesale Rate Cards & Estimator",
      desc: "Compare live pricing across 195+ global destination corridors. Calculate exact volume costs in EUR, USDT, or USD.",
      linkText: "Explore Rate Cards →",
      path: "/rates",
    },
    {
      icon: "🌐",
      badge: "Global Reach",
      title: "195+ Country Telecom Coverage",
      desc: "Direct zero-hop signaling links with 250+ mobile network operators (MNOs) across Asia, Europe, Middle East, and Americas.",
      linkText: "View Network Map →",
      path: "/coverage",
    },
    {
      icon: "⚡",
      badge: "SMPP & Web Portal",
      title: "Carrier-Grade Messaging Suite",
      desc: "High-TPS dedicated SMPP v3.4/v5.0 binds over TLS, web broadcast campaign manager, and developer REST APIs.",
      linkText: "View Telecom Products →",
      path: "/services",
    },
    {
      icon: "💬",
      badge: "Meta Cloud API",
      title: "WhatsApp Business Platform",
      desc: "Verified Green Tick messaging, 2FA OTP delivery, interactive catalogs, 24/7 AI care, and automatic SMS fallback.",
      linkText: "Explore WhatsApp API →",
      path: "/whatsapp-business",
    },
    {
      icon: "📲",
      badge: "Google RBM Partner",
      title: "RCS Business Messaging",
      desc: "Native rich messaging with verified brand avatars, rich carousels, action chips, and automated SS7 SMS fallback.",
      linkText: "Explore RCS Gateway →",
      path: "/rcs-messaging",
    },
    {
      icon: "💻",
      badge: "Engineering Wing",
      title: "Enterprise IT & Cloud Solutions",
      desc: "Custom software engineering, telecom SMPP gateway development, cloud DevOps, AI automation, and 24/7 NOC monitoring.",
      linkText: "View IT Services →",
      path: "/it-services",
    },
    {
      icon: "🛠️",
      badge: "Developer Ready",
      title: "REST API & SMPP Specifications",
      desc: "Integrate global SMS in under 5 minutes with SDKs for cURL, Node.js, Python, real-time DLR webhooks, and PDU specs.",
      linkText: "Read API Docs →",
      path: "/api",
    },
    {
      icon: "🏦",
      badge: "Enterprise SLA",
      title: "Industry Verticals & Compliance",
      desc: "Tailored 2FA OTP delivery, SS7 anti-fraud firewalling, and high-priority delivery SLAs for banking and e-commerce.",
      linkText: "See Industry Solutions →",
      path: "/industries",
    },
    {
      icon: "✉️",
      badge: "Global NOC",
      title: "24/7 Consultation & Support",
      desc: "Connect directly with our Global Connectivity Desk for custom bilateral rate clearing or immediate sandbox provisioning.",
      linkText: "Contact Connectivity Desk →",
      path: "/contact",
    },
  ];

  const handleCardClick = (e, path) => {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    }
  };

  return (
    <div className="page-home">
      <Hero navigate={navigate} />
      <TrustBar />

      <section className="home-portal-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Enterprise Telecommunications</p>
            <h2>Global Wholesale SMS Infrastructure &amp; Routing</h2>
            <p className="home-sub">
              Select a dedicated portal section below to inspect rate cards, network benchmarks, API documentation, or request custom carrier binds.
            </p>
          </div>

          <div className="home-portal-grid">
            {portalCards.map((card) => (
              <div key={card.title} className="home-portal-card">
                <div className="portal-card-top">
                  <span className="portal-card-icon">{card.icon}</span>
                  <span className="portal-card-badge">{card.badge}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <a
                  href={card.path}
                  onClick={(e) => handleCardClick(e, card.path)}
                  className="portal-card-link"
                >
                  {card.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="home-quick-cta">
        <div className="container">
          <div className="quick-cta-card">
            <h2>Ready to Connect Your SMS Traffic?</h2>
            <p>Onboard your enterprise or CPaaS application within 2 to 4 hours with guaranteed sub-second delivery SLAs.</p>
            <div className="quick-cta-buttons">
              <Button
                href="/contact"
                onClick={(e) => handleCardClick(e, "/contact")}
                variant="primary"
                size="lg"
                external={false}
              >
                Request Custom Rate Quote
              </Button>
              <Button
                href="/rates"
                onClick={(e) => handleCardClick(e, "/rates")}
                variant="secondary"
                size="lg"
                external={false}
              >
                View Live Rate Cards
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
