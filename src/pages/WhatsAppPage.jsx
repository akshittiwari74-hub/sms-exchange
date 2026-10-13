import { useState } from "react";
import Button from "../components/Button";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";
import "../styles/pages/ServicesWings.css";
import "../styles/components/FAQ.css";

export const WhatsAppPage = ({ onOpenInquiriesModal, navigate }) => {
  const [activeTab, setActiveTab] = useState("otp");
  const [openFaq, setOpenFaq] = useState(0);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (navigate) navigate(path);
  };

  const simulationPresets = {
    otp: {
      type: "otp",
      title: "One-Time Password (OTP)",
      sender: "NAMX Secure Pay",
      time: "10:42 AM",
      text: "Your NAMX 2-Factor Authentication code is below. For your security, never share this code with anyone.",
      code: "894 201",
      actionText: "📋 Copy Code",
      subText: "Valid for 5 minutes. If you didn't request this, contact support immediately."
    },
    order: {
      type: "order",
      title: "Order & Dispatch Updates",
      sender: "Global Logistics Hub",
      time: "11:15 AM",
      icon: "📦",
      text: "Great news! Your international consignment #NX-88291 has been cleared and is out for final delivery.",
      subText: "Estimated delivery: Today before 4:00 PM.",
      actionText: "🚚 Track Live Courier"
    },
    support: {
      type: "support",
      title: "Interactive Customer Desk",
      sender: "NAMX Global Concierge",
      time: "02:30 PM",
      text: "Hello! Welcome to 24/7 Enterprise Support. Please choose how we can assist you today:",
      options: ["1. Check Wholesale Route Status", "2. Top-Up Account Balance", "3. Connect to NOC Engineer"],
      actionText: "💬 Chat with Live NOC"
    },
    promo: {
      type: "promo",
      title: "Rich Media Broadcast",
      sender: "NAMX Cloud Exchange",
      time: "04:05 PM",
      icon: "⚡",
      text: "Exclusive Flash Discount: Enjoy up to 25% lower rates on direct tier-1 routing routes across APAC & Europe this month!",
      code: "CODE: ROUTE25",
      actionText: "🚀 Claim Route Discount"
    }
  };

  const currentSim = simulationPresets[activeTab];

  const waSpecs = [
    {
      title: "Official Meta Cloud API",
      tag: "Direct Infrastructure",
      details: [
        "Direct connection to Meta's enterprise server cluster with zero intermediary lag",
        "Sub-second throughput scaling up to 1,000+ messages per second (MPS)",
        "99.99% high-availability SLA backed by geo-distributed redundancy",
        "Zero server hosting fees or local client maintenance required"
      ]
    },
    {
      title: "Official Green Tick Verification",
      tag: "Brand Trust & Security",
      details: [
        "End-to-end guidance to secure the official WhatsApp Green Tick verified badge",
        "Displays your verified business name even if users haven't saved your contact",
        "Dramatically boosts consumer trust, message open rates, and click engagement",
        "Built-in protection against phishing impersonation and brand spoofing"
      ]
    },
    {
      title: "Automatic Fallback to Bulk SMS",
      tag: "Zero Message Drop",
      details: [
        "Real-time delivery receipt monitoring detects offline or unregistered users",
        "Instant automatic cascade to our Tier-1 MNO SMS routes in under 300ms",
        "Ensures critical 2FA OTP codes and urgent flight alerts are never missed",
        "Unified billing and itemized delivery logging across both channels"
      ]
    },
    {
      title: "Conversational AI & Live Agent Desk",
      tag: "Full Automation Suite",
      details: [
        "Deploy 24/7 AI chatbots powered by LLMs to answer FAQs and resolve tickets",
        "Seamless human-in-the-loop handoff to your agents or helpdesk software",
        "Webhook interconnects for HubSpot, Salesforce, Zoho, Zendesk, and custom CRMs",
        "Rich interactive UI components: List pickers, Quick replies, and CTA buttons"
      ]
    }
  ];

  const waFaqs = [
    {
      q: "How does the official WhatsApp Green Tick verification work?",
      a: "The Green Tick verified badge is granted by Meta to confirm that an account belongs to an authentic, notable enterprise brand. Our connectivity onboarding team assists with Meta Business Manager verification, official display name submission, and expedited Meta review approval."
    },
    {
      q: "What is the message delivery speed for 2FA OTP codes via WhatsApp?",
      a: "Our WhatsApp Cloud API routes deliver time-sensitive 2-Factor Authentication (OTP) codes in under 2.5 seconds globally with sub-second delivery receipts and read timestamps (blue ticks), ensuring minimal friction during customer logins and financial transactions."
    },
    {
      q: "How does automatic failover to Bulk SMS protect message delivery?",
      a: "If a recipient does not have an active WhatsApp account or their mobile device is offline, our intelligent cascade engine automatically re-routes the message via our Tier-1 SS7 Bulk SMS gateway within 300ms, guaranteeing 100% notification reach."
    },
    {
      q: "Can we connect our existing CRM or AI customer support bot to WhatsApp?",
      a: "Yes. We provide native webhooks and REST endpoints that integrate seamlessly with HubSpot, Salesforce, Zoho, Zendesk, or custom AI/LLM conversational agents. You can also build automated menus, list pickers, and interactive button flows."
    },
    {
      q: "What throughput (MPS) can the NAMX WhatsApp Cloud API handle?",
      a: "Our infrastructure supports enterprise-grade throughput scaling from 100 up to 1,000+ messages per second (MPS), backed by direct Meta Cloud server connections and Singapore NOC 99.99% uptime monitoring."
    }
  ];

  return (
    <div className="page-whatsapp">
      {/* Hero Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="wing-hero-badge whatsapp">💬 Official Meta Cloud API Partner</span>
          <h1>Enterprise WhatsApp Business Platform &amp; API Gateway</h1>
          <p>
            Connect directly to the world's most popular messaging app. Deliver verified 2FA OTPs, rich interactive marketing broadcasts, automated AI customer care, and automated fallback to wholesale Bulk SMS.
          </p>
          <div className="wing-hero-actions">
            <Button
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              variant="primary"
              size="lg"
            >
              Get WhatsApp API Access
            </Button>
            <a
              href="/rcs-messaging"
              onClick={(e) => handleNavClick(e, "/rcs-messaging")}
              className="wing-btn-secondary"
            >
              Explore RCS Gateway ➔
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Live Simulator Section */}
      <section className="simulator-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Interactive Visualizer</p>
            <h2>Experience WhatsApp Business Rich Messaging</h2>
            <p>Select a business use case below to see how interactive WhatsApp messages appear on your customer's device.</p>
          </div>

          <div className="simulator-container">
            {/* Left Controls */}
            <div className="simulator-controls">
              <div className="sim-tab-list">
                <button
                  type="button"
                  className={`sim-tab-btn ${activeTab === "otp" ? "active wa-active" : ""}`}
                  onClick={() => setActiveTab("otp")}
                >
                  <span className="sim-tab-icon">🔐</span>
                  <div>
                    <span className="sim-tab-title">Authentication 2FA OTP</span>
                    <p className="sim-tab-desc">Time-sensitive login security codes with single-tap copy button.</p>
                  </div>
                </button>

                <button
                  type="button"
                  className={`sim-tab-btn ${activeTab === "order" ? "active wa-active" : ""}`}
                  onClick={() => setActiveTab("order")}
                >
                  <span className="sim-tab-icon">📦</span>
                  <div>
                    <span className="sim-tab-title">Order &amp; Logistics Tracking</span>
                    <p className="sim-tab-desc">Real-time parcel delivery notifications with live tracking links.</p>
                  </div>
                </button>

                <button
                  type="button"
                  className={`sim-tab-btn ${activeTab === "support" ? "active wa-active" : ""}`}
                  onClick={() => setActiveTab("support")}
                >
                  <span className="sim-tab-icon">🤖</span>
                  <div>
                    <span className="sim-tab-title">Interactive AI Care &amp; Menus</span>
                    <p className="sim-tab-desc">Structured list pickers and quick reply buttons for self-service.</p>
                  </div>
                </button>

                <button
                  type="button"
                  className={`sim-tab-btn ${activeTab === "promo" ? "active wa-active" : ""}`}
                  onClick={() => setActiveTab("promo")}
                >
                  <span className="sim-tab-icon">📢</span>
                  <div>
                    <span className="sim-tab-title">Rich Promotional Broadcast</span>
                    <p className="sim-tab-desc">High-converting multimedia campaigns with coupons and CTA buttons.</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Phone Mockup */}
            <div className="phone-mockup-wrapper">
              <div className="phone-device">
                <div className="phone-speaker-notch">
                  <div className="notch-pill"></div>
                </div>

                <div className="phone-screen">
                  {/* WhatsApp App Header */}
                  <div className="wa-app-header">
                    <div className="wa-avatar">NX</div>
                    <div className="wa-header-info">
                      <div className="wa-brand-name">
                        {currentSim.sender}
                        <span className="wa-verified-tick" title="Official Verified Badge">✓</span>
                      </div>
                      <p className="wa-sub-status">Official Business Account</p>
                    </div>
                  </div>

                  {/* Chat Body */}
                  <div className="wa-chat-body">
                    <span className="wa-date-pill">TODAY</span>

                    <div className="wa-bubble">
                      {currentSim.icon && (
                        <div className="wa-bubble-img">{currentSim.icon}</div>
                      )}

                      <p style={{ margin: "0 0 6px 0" }}>{currentSim.text}</p>

                      {currentSim.code && (
                        <div className="wa-code-highlight">{currentSim.code}</div>
                      )}

                      {currentSim.options && (
                        <div style={{ margin: "8px 0", fontSize: "12px", opacity: 0.9 }}>
                          {currentSim.options.map((opt, i) => (
                            <div key={i} style={{ padding: "3px 0" }}>{opt}</div>
                          ))}
                        </div>
                      )}

                      {currentSim.subText && (
                        <p style={{ fontSize: "11px", opacity: 0.8, margin: "6px 0 0 0" }}>
                          {currentSim.subText}
                        </p>
                      )}

                      <div className="wa-meta-time">
                        <span>{currentSim.time}</span>
                        <span className="wa-read-receipt">✓✓</span>
                      </div>

                      {currentSim.actionText && (
                        <div className="wa-action-buttons">
                          <button type="button" className="wa-act-btn">
                            {currentSim.actionText}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Architecture Grid */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Enterprise Infrastructure</p>
            <h2>WhatsApp Cloud API Platform Capabilities</h2>
          </div>

          <div className="info-grid-2">
            {waSpecs.map((s) => (
              <div key={s.title} className="info-card spec-card">
                <div className="spec-header">
                  <h3>{s.title}</h3>
                  <span className="spec-tag">{s.tag}</span>
                </div>
                <ul className="spec-list">
                  {s.details.map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: SMS vs WhatsApp */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Performance Benchmark</p>
            <h2>Comparing Traditional SMS vs. WhatsApp Business API</h2>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature / Dimension</th>
                  <th>Standard Plain SMS</th>
                  <th>WhatsApp Business API</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brand Identity</td>
                  <td>Alphanumeric Sender ID (11 chars)</td>
                  <td><span className="badge-tag-pos">Verified Green Tick &amp; Profile Banner</span></td>
                </tr>
                <tr>
                  <td>Rich Multimedia</td>
                  <td>Text only (160 characters limit)</td>
                  <td><span className="badge-tag-pos">Images, Video, Audio, PDF Invoices &amp; Catalogs</span></td>
                </tr>
                <tr>
                  <td>Interactive Elements</td>
                  <td>Plain text URLs (unclickable on some devices)</td>
                  <td><span className="badge-tag-pos">Quick Reply Buttons, List Menus &amp; URL CTAs</span></td>
                </tr>
                <tr>
                  <td>Engagement &amp; Read Receipts</td>
                  <td>Carrier Network DLR only</td>
                  <td><span className="badge-tag-pos">Exact Read Receipts (Blue Ticks) &amp; Button Clicks</span></td>
                </tr>
                <tr>
                  <td>Conversational Support</td>
                  <td>One-way broadcast primarily</td>
                  <td><span className="badge-tag-pos">Full 24/7 Two-Way Chatbots &amp; Human Handoff</span></td>
                </tr>
                <tr>
                  <td>Fallback Protection</td>
                  <td>Subject to carrier routing filters</td>
                  <td><span className="badge-tag-pos">Automatic Zero-Delay Failover to SS7 SMS</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cross-Link Banner */}
          <div className="cross-wing-banner">
            <div className="cross-banner-content">
              <h4>Want Rich Messaging Directly in Native SMS Inboxes?</h4>
              <p>Explore our Google RBM interconnect for RCS Business Messaging — with verified badges and carousels requiring zero app installation.</p>
            </div>
            <Button
              href="/rcs-messaging"
              onClick={(e) => handleNavClick(e, "/rcs-messaging")}
              variant="secondary"
              size="md"
            >
              Explore RCS Messaging ➔
            </Button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (SEO Optimized) */}
      <section className="faq">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Frequently Asked Questions</p>
            <h2>WhatsApp Business API &amp; Cloud Platform FAQs</h2>
            <p className="faq-subtext">Find answers to common questions about onboarding, verification, pricing, and technical API integrations.</p>
          </div>

          <div className="faq-list">
            {waFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-q-text">
                      <span className="faq-badge">WhatsApp API</span>
                      <span>{faq.q}</span>
                    </div>
                    <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct="WhatsApp Business API" />
    </div>
  );
};

export default WhatsAppPage;
