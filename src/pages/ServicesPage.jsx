import { useState } from "react";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";

export const ServicesPage = ({ onOpenInquiriesModal, navigate }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const serviceFaqs = [
    {
      q: "What throughput and TPS can the NAMX SMPP gateway handle?",
      a: "Our carrier-grade SMPP v3.4 and v5.0 gateway supports up to 10,000 Transactions Per Second (TPS) across multi-session transceiver binds over TLS and IPsec VPN."
    },
    {
      q: "Do you offer WhatsApp Business API and RCS messaging?",
      a: "Yes, we provide full omnichannel messaging including official WhatsApp Business Platform (Cloud API) with Green Tick support and Google RCS Business Messaging with zero-drop SMS fallback."
    },
    {
      q: "How fast is SMPP bind provisioning?",
      a: "Standard SMPP binds and developer API tokens are provisioned within 5 to 15 minutes by our 24/7 Global NOC team once IP whitelisting is completed."
    },
    {
      q: "How does the Least Cost Routing (LCR) engine work?",
      a: "Our routing engine recalculates route quality, DLR latency, and price dynamically every 15 milliseconds, guaranteeing optimal cost efficiency and 99.99% message delivery."
    }
  ];

  const serviceSpecs = [
    {
      title: "Wholesale Bulk SMS & A2P Gateway",
      tag: "High Volume OTP & Enterprise Broadcasts",
      details: [
        "Sub-2 second delivery guarantee for time-critical 2FA OTP codes & transactional alerts",
        "Sender ID whitelist & dynamic alphanumeric header registration across 195+ countries",
        "Automatic failover routing across redundant Tier-1 MNO direct interconnect links",
        "JSON REST API & HTTP endpoints with instant DLR callback webhooks",
      ],
    },
    {
      title: "SMPP v3.4 / v5.0 Protocol Binds",
      tag: "High-Speed Carrier & Aggregator Sessions",
      details: [
        "Dedicated TRX (Transceiver), TX (Transmitter), and RX (Receiver) binds over TLS & IPsec VPN",
        "Sustained 10,000+ TPS per session throughput with custom window size tuning",
        "Asynchronous DLR delivery receipt callbacks with configurable error code mapping",
        "Custom PDU payload handling, Data Coding Scheme (DCS), and UDH concatenated SMS support",
      ],
    },
    {
      title: "International P2P Traffic Hubbing",
      tag: "Bilateral Operator Clearing & Roaming Exchange",
      details: [
        "Bilateral traffic swap & rate clearing settlement compliant with GSMA AA.19 billing standards",
        "SS7 / SIGTRAN network firewalling & anti-fraud spam filtering to eliminate gray routes",
        "Zero-hop direct route termination for mobile network operators (MNOs) & MVNOs",
        "Itemized CDR reconciliation, automated invoice clearing & 24/7 Global NOC monitoring",
      ],
    },
    {
      title: "Intelligent SMS Routing Engine",
      tag: "Dynamic Least Cost Routing (LCR) & QoS",
      details: [
        "Dynamic Least Cost Routing (LCR) engine evaluating price, latency, and carrier SLA in under 15ms",
        "Real-time HLR (Home Location Register) lookup for accurate mobile network porting detection",
        "Automated Route Quality-of-Service (QoS) tiering (Direct MNO vs Wholesale Aggregator)",
        "Instant route failover fallback triggers ensuring 99.99% message delivery success",
      ],
    },
  ];

  return (
    <div className="page-services">
      <div className="page-banner">
        <div className="container">
          <p className="stats-eyebrow">Carrier-Grade Enterprise Telecom Infrastructure</p>
          <h1>Wholesale Bulk SMS Gateway, SMPP Binds &amp; International P2P Routing</h1>
          <p>
            Architected for high-concurrency enterprise applications, global aggregators, mobile operators, and fintech platforms requiring maximum deliverability, SMPP protocol binds, and intelligent SMS routing.
          </p>
        </div>
      </div>

      {/* Technical Spec Breakdown */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Technical Architecture</p>
            <h2>Bulk SMS, SMPP Gateway &amp; P2P Hubbing Specifications</h2>
          </div>

          <div className="info-grid-2">
            {serviceSpecs.map((s) => (
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

      <Services />
      <WhyChooseUs />

      {/* Next-Gen Channels & IT Services Highlight */}
      <section className="subpage-info-section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Beyond Bulk SMS</p>
            <h2>Next-Gen Messaging Channels &amp; Enterprise IT Wing</h2>
            <p>Elevate your customer communications and technology stack with our omnichannel platforms and engineering services.</p>
          </div>

          <div className="info-grid-3">
            <div className="info-card">
              <span className="info-icon">💬</span>
              <h3>WhatsApp Business API</h3>
              <p>Verified Green Tick messaging, high-throughput 2FA OTPs, interactive broadcast catalogs, and 24/7 AI chatbots.</p>
              <a
                href="/whatsapp-business"
                onClick={(e) => { e.preventDefault(); if (navigate) navigate("/whatsapp-business"); }}
                className="contact-link-btn"
              >
                Explore WhatsApp API ➔
              </a>
            </div>

            <div className="info-card">
              <span className="info-icon">📲</span>
              <h3>RCS Business Messaging</h3>
              <p>Upgrade plain SMS to native rich media carousels, verified brand avatars, action chips, and automated fallback.</p>
              <a
                href="/rcs-messaging"
                onClick={(e) => { e.preventDefault(); if (navigate) navigate("/rcs-messaging"); }}
                className="contact-link-btn"
              >
                Explore RCS Gateway ➔
              </a>
            </div>

            <div className="info-card">
              <span className="info-icon">💻</span>
              <h3>Enterprise IT Services</h3>
              <p>Full-suite software development, SMPP gateway engineering, cloud DevOps, AI automation, and 24/7 managed NOC.</p>
              <a
                href="/it-services"
                onClick={(e) => { e.preventDefault(); if (navigate) navigate("/it-services"); }}
                className="contact-link-btn"
              >
                View IT Services ➔
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Enterprise Infrastructure</p>
            <h2>Telecom Services &amp; SMPP Binds FAQs</h2>
            <p className="faq-subtext">Technical details on SMPP protocols, throughput TPS, omnichannel APIs, and provisioning.</p>
          </div>

          <div className="faq-list">
            {serviceFaqs.map((faq, idx) => {
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
                      <span className="faq-badge">Telecom Services</span>
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

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct="Carrier SMS Gateway" />
    </div>
  );
};

export default ServicesPage;
