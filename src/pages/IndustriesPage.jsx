import { useState } from "react";
import Industries from "../components/Industries";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";

export const IndustriesPage = ({ onOpenInquiriesModal }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const industryFaqs = [
    {
      q: "How does NAMX Telecom guarantee banking 2FA OTP delivery?",
      a: "We utilize dedicated Tier-1 SS7 direct signaling links with priority queuing, sub-2-second global latency, and dynamic failover to secondary routes to guarantee zero OTP drop-offs."
    },
    {
      q: "Can telecom aggregators exchange bilateral P2P traffic?",
      a: "Yes, we offer bilateral international P2P swap arrangements with automated Least-Cost Routing (LCR) and transparent CDR reconciliation."
    },
    {
      q: "How do you ensure data privacy for Healthcare and Fintech clients?",
      a: "Our infrastructure supports end-to-end TLS encryption, zero data retention (ephemeral message processing), and strict compliance with global privacy regulations."
    }
  ];
  const industryDeepDives = [
    {
      sector: "Telecom Aggregators & Mobile Operators (MNO/MVNO)",
      icon: "🌐",
      useCases: "International P2P Traffic Clearing, SMPP v3.4/v5.0 Transceiver Binds, Bilateral Swap Hubbing",
      compliance: "GSMA AA.19 Billing Standards, SS7 Anti-Fraud Firewall, Dynamic Least Cost Routing (LCR)",
    },
    {
      sector: "Banking & Financial Services (BFSI)",
      icon: "🏦",
      useCases: "2FA Authentication, Transaction Alerts, Fraud Prevention, Account Balance Statements",
      compliance: "PCI-DSS Compliant, Encrypted TLS Binds, Sub-2.0s Latency SLA, Zero Data Retention Options",
    },
    {
      sector: "E-Commerce & Digital Retail",
      icon: "🛒",
      useCases: "Order Confirmation, Shipping Tracking, Flash Sale Promos, Abandoned Cart Recovery",
      compliance: "Personalized Merge Tag Support, Timezone Throttling, Instant Opt-Out Handling",
    },
    {
      sector: "Logistics & Supply Chain",
      icon: "📦",
      useCases: "Dispatch Notifications, Driver Route Updates, Delivery Proof Pin, Warehouse Alerts",
      compliance: "Global 195+ Country Coverage, Dynamic Sender ID, High Delivery Rate Guarantee",
    },
    {
      sector: "Healthcare & Telemedicine",
      icon: "🏥",
      useCases: "Appointment Reminders, Prescription Alerts, Lab Test Result Notifications",
      compliance: "HIPAA Compliant Data Handling, Secure Token API, Priority Delivery Queue",
    },
  ];

  return (
    <div className="page-industries">
      <div className="page-banner">
        <div className="container">
          <p className="stats-eyebrow">Industry Specific Solutions</p>
          <h1>Industry Bulk SMS Solutions &amp; Telecom P2P SMS Routing</h1>
          <p>
            Tailored delivery parameters, security protocols, and compliance configurations built for telecom aggregators, banking, e-commerce, and healthcare enterprise platforms.
          </p>
        </div>
      </div>

      <section className="subpage-info-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Enterprise Blueprints</p>
            <h2>Industry Vertical Capabilities</h2>
          </div>

          <div className="info-grid-2">
            {industryDeepDives.map((item) => (
              <div key={item.sector} className="info-card vertical-card">
                <div className="vertical-header">
                  <span className="info-icon">{item.icon}</span>
                  <h3>{item.sector}</h3>
                </div>
                <div className="vertical-content">
                  <p><strong>Primary Use Cases:</strong> {item.useCases}</p>
                  <p><strong>Compliance &amp; Security:</strong> {item.compliance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Industries />
      <WhyChooseUs />

      {/* Frequently Asked Questions */}
      <section className="faq">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Industry Compliance &amp; SLAs</p>
            <h2>Industry Vertical Messaging FAQs</h2>
            <p className="faq-subtext">Answers on 2FA OTP security, bilateral clearing, and regulatory compliance.</p>
          </div>

          <div className="faq-list">
            {industryFaqs.map((faq, idx) => {
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
                      <span className="faq-badge">Industry Solutions</span>
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

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct="Industry SMS Solutions" />
    </div>
  );
};

export default IndustriesPage;
