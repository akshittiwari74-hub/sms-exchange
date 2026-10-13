import { useState } from "react";
import Button from "../components/Button";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";
import "../styles/pages/ServicesWings.css";
import "../styles/components/FAQ.css";

export const RcsPage = ({ onOpenInquiriesModal, navigate }) => {
  const [activeTab, setActiveTab] = useState("ecommerce");
  const [openFaq, setOpenFaq] = useState(0);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (navigate) navigate(path);
  };

  const simulationPresets = {
    ecommerce: {
      title: "Interactive E-Commerce Card",
      sender: "Apex Retailers",
      subtitle: "Verified Business Sender",
      icon: "🛍️",
      cardTitle: "Summer Flash Collection 2026",
      cardDesc: "Your exclusive 30% discount voucher is now available. Free express delivery on orders placed today.",
      chips: ["🛍️ Shop Now", "📦 Track Shipment", "💬 Chat Support"]
    },
    banking: {
      title: "Banking Security Alert",
      sender: "First Capital Bank",
      subtitle: "Verified Financial Institution",
      icon: "🛡️",
      cardTitle: "Transaction Security Notice",
      cardDesc: "A card payment of $420.00 was authorized at London Duty Free. If this was not you, tap below immediately.",
      chips: ["✓ It Was Me", "🚫 Block Card Now", "📞 Call Anti-Fraud Desk"]
    },
    airline: {
      title: "Flight Check-In & Boarding",
      sender: "SkyGlobal Airways",
      subtitle: "Verified Airline Carrier",
      icon: "✈️",
      cardTitle: "Flight SG-402 · Gate B18",
      cardDesc: "Boarding starts at 14:15. Your digital boarding pass has been generated. Please proceed to Security Terminal 3.",
      chips: ["🎟️ View Boarding Pass", "💺 Change Seat", "📍 Terminal Map"]
    },
    appointment: {
      title: "Healthcare & Service Booking",
      sender: "Apex Medical Center",
      subtitle: "Verified Health Partner",
      icon: "🩺",
      cardTitle: "Consultation Appointment",
      cardDesc: "Your consultation with Dr. Aris is scheduled for tomorrow at 10:30 AM at Clinic Suite 4B.",
      chips: ["✓ Confirm Booking", "🗓️ Add to Calendar", "🔄 Reschedule Time"]
    }
  };

  const currentSim = simulationPresets[activeTab];

  const rcsSpecs = [
    {
      title: "Direct Google RBM Partner Interconnect",
      tag: "Carrier-Grade Gateway",
      details: [
        "Certified Google Rich Business Messaging (RBM) Partner infrastructure",
        "Direct routing across global Tier-1 Mobile Network Operators (MNOs)",
        "Sustained 5,000+ MPS processing throughput with sub-second delivery latency",
        "High-performance REST API and carrier-grade SMPP v3.4 TLV protocol support"
      ]
    },
    {
      title: "Verified Sender Brand Identity",
      tag: "Anti-Spoofing & Trust",
      details: [
        "Branded Sender Profile featuring official company logo, brand banner, and description",
        "Verified Checkmark badge proving authenticity to protect consumers against SMS phishing",
        "Protects your brand reputation and eliminates scam vulnerability common in spoofed SMS",
        "Higher customer trust resulting in up to 3.5x higher engagement and click rates"
      ]
    },
    {
      title: "Rich Carousels & Interactive Chips",
      tag: "App-Like Experience",
      details: [
        "Deliver up to 10 rich horizontal carousel cards with high-definition imagery and titles",
        "Suggested action chips: Open website URL, Dial phone number, or View GPS location",
        "Calendar sync chips: Add flight or appointment directly to the phone's native calendar",
        "Interactive quick-reply chips allowing single-tap user responses without typing"
      ]
    },
    {
      title: "Automatic Zero-Drop SMS Fallback",
      tag: "100% Reach Guarantee",
      details: [
        "Real-time capability check detects whether recipient's phone supports RCS",
        "If RCS is inactive (or device offline), message instantly falls back to our SS7 SMS route",
        "Sub-200ms failover trigger ensures zero lost messages or stranded notifications",
        "Single unified API endpoint automatically manages delivery logic and billing"
      ]
    }
  ];

  const rcsFaqs = [
    {
      q: "What is RCS Business Messaging and how does it differ from Bulk SMS?",
      a: "RCS (Rich Communication Services) is the next-generation upgrade to SMS. It enables verified sender logos, high-resolution media, interactive carousels, and suggested action chips directly inside Android Google Messages and iOS 18 native messaging apps without requiring any third-party app download."
    },
    {
      q: "Does RCS Business Messaging work on Apple iPhones with iOS 18?",
      a: "Yes. Starting with iOS 18, Apple officially supports GSMA Universal Profile RCS messaging. Your rich branded messages reach both modern Android smartphones and updated Apple iPhones seamlessly."
    },
    {
      q: "How does the automatic zero-drop SMS fallback work?",
      a: "Before message transmission, our gateway performs a real-time capability check. If the recipient device is offline or does not support RCS, the message cascades to our Tier-1 SS7 SMS gateway within 200ms, ensuring 100% message delivery."
    },
    {
      q: "What interactive action chips can be included in RCS messages?",
      a: "RCS supports native action chips such as: Open URL in browser, Dial phone number, View location on Google Maps, Add event to calendar, and Single-tap quick reply options for instant customer feedback."
    },
    {
      q: "Can we connect our existing carrier or CPaaS aggregator platform via SMPP?",
      a: "Yes. In addition to high-concurrency JSON REST APIs, NAMX Telecom provides carrier-grade SMPP v3.4 binds with custom TLV payload parameters for aggregators sending high volumes of RCS traffic."
    }
  ];

  return (
    <div className="page-rcs">
      {/* Hero Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="wing-hero-badge rcs">📲 Next-Gen GSMA Universal Profile 2.4</span>
          <h1>RCS Business Messaging Gateway (Rich Communication Services)</h1>
          <p>
            Upgrade traditional Bulk SMS into rich, verified, interactive experiences. Delivered natively inside Android Google Messages and iOS 18 native messaging with zero app installation required.
          </p>
          <div className="wing-hero-actions">
            <Button
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              variant="primary"
              size="lg"
            >
              Connect to RCS Gateway
            </Button>
            <a
              href="/whatsapp-business"
              onClick={(e) => handleNavClick(e, "/whatsapp-business")}
              className="wing-btn-secondary"
            >
              Explore WhatsApp Platform ➔
            </a>
          </div>
        </div>
      </div>

      {/* Interactive RCS Simulator Section */}
      <section className="simulator-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Interactive Visualizer</p>
            <h2>Experience Verified RCS in Native Inboxes</h2>
            <p>Select a scenario to preview how Rich Communication Services transforms standard SMS into an interactive, branded experience.</p>
          </div>

          <div className="simulator-container">
            {/* Left Controls */}
            <div className="simulator-controls">
              <div className="sim-tab-list">
                <button
                  type="button"
                  className={`sim-tab-btn ${activeTab === "ecommerce" ? "active rcs-active" : ""}`}
                  onClick={() => setActiveTab("ecommerce")}
                >
                  <span className="sim-tab-icon">🛍️</span>
                  <div>
                    <span className="sim-tab-title">E-Commerce Rich Carousel</span>
                    <p className="sim-tab-desc">Rich product hero imagery with single-tap purchase &amp; track chips.</p>
                  </div>
                </button>

                <button
                  type="button"
                  className={`sim-tab-btn ${activeTab === "banking" ? "active rcs-active" : ""}`}
                  onClick={() => setActiveTab("banking")}
                >
                  <span className="sim-tab-icon">🛡️</span>
                  <div>
                    <span className="sim-tab-title">Verified Bank Security Notice</span>
                    <p className="sim-tab-desc">Fraud alerts with verified badge and emergency anti-fraud dialer.</p>
                  </div>
                </button>

                <button
                  type="button"
                  className={`sim-tab-btn ${activeTab === "airline" ? "active rcs-active" : ""}`}
                  onClick={() => setActiveTab("airline")}
                >
                  <span className="sim-tab-icon">✈️</span>
                  <div>
                    <span className="sim-tab-title">Airline Boarding Pass &amp; Gates</span>
                    <p className="sim-tab-desc">Interactive boarding pass, terminal navigation, and seat updates.</p>
                  </div>
                </button>

                <button
                  type="button"
                  className={`sim-tab-btn ${activeTab === "appointment" ? "active rcs-active" : ""}`}
                  onClick={() => setActiveTab("appointment")}
                >
                  <span className="sim-tab-icon">🩺</span>
                  <div>
                    <span className="sim-tab-title">Healthcare &amp; Calendar Booking</span>
                    <p className="sim-tab-desc">Single-tap appointment confirmation and native calendar sync.</p>
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
                  {/* RCS Header */}
                  <div className="rcs-app-header">
                    <div className="rcs-brand-logo">NX</div>
                    <div className="rcs-header-text">
                      <div className="rcs-sender-title">
                        {currentSim.sender}
                        <span className="rcs-verified-badge" title="GSMA & Google Verified">✓</span>
                      </div>
                      <p className="rcs-sender-subtitle">{currentSim.subtitle}</p>
                    </div>
                  </div>

                  {/* RCS Chat Body */}
                  <div className="rcs-chat-body">
                    <div className="rcs-card-bubble">
                      <div className="rcs-card-media">
                        <span className="rcs-card-media-icon">{currentSim.icon}</span>
                        <span style={{ fontSize: "11px", opacity: 0.9 }}>VERIFIED RICH MESSAGE</span>
                      </div>

                      <div className="rcs-card-content">
                        <h4 className="rcs-card-title">{currentSim.cardTitle}</h4>
                        <p className="rcs-card-desc">{currentSim.cardDesc}</p>

                        <div className="rcs-chips-row">
                          {currentSim.chips.map((chip, idx) => (
                            <button key={idx} type="button" className="rcs-action-chip">
                              {chip}
                            </button>
                          ))}
                        </div>
                      </div>
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
            <h2>RCS Business Messaging Technical Specifications</h2>
          </div>

          <div className="info-grid-2">
            {rcsSpecs.map((s) => (
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

      {/* Comparison: SMS vs RCS */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Direct Comparison</p>
            <h2>Traditional Bulk SMS vs. RCS Business Messaging</h2>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Standard Plain SMS</th>
                  <th>RCS Business Messaging</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sender Identity</td>
                  <td>Shortcode / Numeric / Alphanumeric</td>
                  <td><span className="badge-tag-pos">Official Verified Logo, Brand Name &amp; Verified Shield</span></td>
                </tr>
                <tr>
                  <td>Media Richness</td>
                  <td>Plain text only (160 GSM chars)</td>
                  <td><span className="badge-tag-pos">High-res images, GIFs, Video &amp; 10-card Carousels</span></td>
                </tr>
                <tr>
                  <td>Action Buttons</td>
                  <td>None (must paste raw hyperlinks)</td>
                  <td><span className="badge-tag-pos">Native suggested chips (Dial, Map, Calendar, URL)</span></td>
                </tr>
                <tr>
                  <td>Recipient App</td>
                  <td>Native SMS Inbox</td>
                  <td><span className="badge-tag-pos">Native SMS Inbox (Google Messages &amp; iOS 18)</span></td>
                </tr>
                <tr>
                  <td>Delivery Assurance</td>
                  <td>Dependent on carrier routing</td>
                  <td><span className="badge-tag-pos">Auto-Fallback to SS7 SMS in &lt; 200ms</span></td>
                </tr>
                <tr>
                  <td>Analytics &amp; ROI</td>
                  <td>Carrier delivery receipts only</td>
                  <td><span className="badge-tag-pos">Read timestamps, button click tracking, conversion stats</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cross-Link Banner */}
          <div className="cross-wing-banner">
            <div className="cross-banner-content">
              <h4>Need Direct Two-Way WhatsApp Conversational Channels?</h4>
              <p>Explore our official Meta WhatsApp Business API platform for verified green-tick messaging, AI customer support, and catalog sales.</p>
            </div>
            <Button
              href="/whatsapp-business"
              onClick={(e) => handleNavClick(e, "/whatsapp-business")}
              variant="secondary"
              size="md"
            >
              Explore WhatsApp Platform ➔
            </Button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (SEO Optimized) */}
      <section className="faq">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Frequently Asked Questions</p>
            <h2>RCS Business Messaging Gateway FAQs</h2>
            <p className="faq-subtext">Everything you need to know about Google RBM, rich carousels, Apple iOS 18 compatibility, and SMS fallback.</p>
          </div>

          <div className="faq-list">
            {rcsFaqs.map((faq, idx) => {
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
                      <span className="faq-badge">RCS Gateway</span>
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
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct="RCS Business Messaging" />
    </div>
  );
};

export default RcsPage;
