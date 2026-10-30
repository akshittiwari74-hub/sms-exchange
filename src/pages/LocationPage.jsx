import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import corridors from "../data/corridors.json";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";

export const LocationPage = ({ onOpenInquiriesModal, forcedLocation, navigate }) => {
  const params = useParams();
  const rawKey = (forcedLocation || params?.location || "").toLowerCase().replace("bulk-sms-", "");
  const [openFaq, setOpenFaq] = useState(null);

  // Fallback if not directly matched in corridors.json
  const data = corridors[rawKey] || {
    country: rawKey ? rawKey.toUpperCase() : "Global",
    flag: "🌐",
    iso: rawKey.toUpperCase(),
    dialCode: "",
    title: `Global Wholesale Bulk SMS & SMPP Gateway Provider in ${rawKey.toUpperCase()}`,
    subtitle: `Carrier-grade zero-hop SS7 direct interconnects, SMPP v3.4 binds, and high-throughput OTP delivery for ${rawKey.toUpperCase()}.`,
    regulatoryBody: "National Telecommunications Regulatory Authority",
    senderIdType: "Alphanumeric / Short Code compliant with local telecom regulations",
    avgLatency: "1.5 seconds",
    dlrRate: "99.9%",
    supportedProtocols: "SMPP v3.4 / v5.0 (TLS 1.3), REST JSON API",
    defaultEncoding: "GSM 7-bit & UCS-2 Unicode",
    complianceNotes: "Full compliance with national telecommunications anti-spam legislation and consumer protection frameworks.",
    networks: [
      { name: "Tier-1 Direct Carrier Interconnect", mcc: "---", mnc: "--", marketShare: "Primary", routeType: "Direct SS7 MNO Link", tps: "5,000 TPS", latency: "1.4s", rateEUR: "0.0220" },
      { name: "Secondary Redundant Route", mcc: "---", mnc: "--", marketShare: "Secondary", routeType: "Wholesale Carrier Peering", tps: "4,000 TPS", latency: "1.6s", rateEUR: "0.0195" }
    ],
    pricingTiers: [
      { volume: "Standard Tier", rateEUR: "Competitive", rateUSD: "Competitive", features: "Dedicated SMPP bind, real-time DLR webhooks, 24/7 NOC monitoring" },
      { volume: "Wholesale Tier (500k+)", rateEUR: "Negotiable", rateUSD: "Negotiable", features: "Direct bilateral clearing, custom window sizing, zero-hop routing" }
    ],
    faqs: [
      {
        q: `How quickly can I provision an SMPP bind for ${rawKey.toUpperCase()}?`,
        a: "Standard SMPP v3.4/v5.0 transceiver binds with IP whitelisting are provisioned within 5 to 15 minutes by our 24/7 Global NOC team."
      }
    ]
  };

  const handleNav = (e, path) => {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    }
  };

  return (
    <div className="page-wrapper page-services">
      {/* Dynamic SEO Hero Banner */}
      <div className="page-banner">
        <div className="container">
          <p className="stats-eyebrow">
            {data.flag} {data.country} · Direct MNO Interconnects &amp; SMPP Hubbing
          </p>
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "24px", flexWrap: "wrap" }}>
            <button
              className="btn btn--primary btn--lg"
              onClick={onOpenInquiriesModal}
              style={{ cursor: "pointer" }}
            >
              Request {data.country} Rate Quote
            </button>
            <a
              href="/rates"
              onClick={(e) => handleNav(e, "/rates")}
              className="btn btn--secondary btn--lg"
            >
              View Global Rate Cards
            </a>
          </div>
        </div>
      </div>

      {/* Regulatory & Performance Metadata Matrix */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Regulatory Compliance &amp; Protocol Specs</p>
            <h2>{data.country} Telecom Peering &amp; Interconnect Specifications</h2>
          </div>

          <div className="info-grid-3">
            <div className="info-card">
              <span className="info-icon">🏛️</span>
              <h3>Regulatory Authority</h3>
              <p><strong>Governing Body:</strong> {data.regulatoryBody}</p>
              <p style={{ marginTop: "8px", fontSize: "13px" }}>{data.complianceNotes}</p>
            </div>

            <div className="info-card">
              <span className="info-icon">🏷️</span>
              <h3>Sender ID Regulations</h3>
              <p><strong>Supported Format:</strong> {data.senderIdType}</p>
              <p style={{ marginTop: "8px", fontSize: "13px" }}>Supported encodings include standard GSM 03.38 7-bit and UCS-2 16-bit Unicode.</p>
            </div>

            <div className="info-card">
              <span className="info-icon">⚡</span>
              <h3>Network Benchmark SLA</h3>
              <p><strong>Average Delivery Latency:</strong> {data.avgLatency}</p>
              <p><strong>Handset DLR Rate:</strong> {data.dlrRate}</p>
              <p><strong>Protocols:</strong> {data.supportedProtocols}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MNO Mobile Network Operator Routing Matrix Table */}
      <section className="subpage-info-section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Carrier Signaling Matrix</p>
            <h2>{data.country} Mobile Network Operator (MNO) Interconnects</h2>
            <p>Direct mobile network operator routes with MCC-MNC mapping, throughput benchmarks, and live termination pricing.</p>
          </div>

          <div className="dlr-table-wrapper">
            <table className="dlr-table">
              <thead>
                <tr>
                  <th>Mobile Operator</th>
                  <th>MCC / MNC</th>
                  <th>Market Share</th>
                  <th>Route Quality Tier</th>
                  <th>Throughput</th>
                  <th>SLA Latency</th>
                  <th>Wholesale Rate (EUR)</th>
                </tr>
              </thead>
              <tbody>
                {data.networks.map((net, i) => (
                  <tr key={i}>
                    <td><strong>{net.name}</strong></td>
                    <td>
                      <span className="dlr-code-badge">{net.mcc}-{net.mnc}</span>
                    </td>
                    <td>{net.marketShare}</td>
                    <td><span className="dlr-state-badge success">{net.routeType}</span></td>
                    <td><code>{net.tps}</code></td>
                    <td><span style={{ color: "#34d399", fontWeight: 700 }}>{net.latency}</span></td>
                    <td><strong>€{net.rateEUR}</strong> / SMS</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Volume Tiering Cards */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Tiered Wholesale Rates</p>
            <h2>Volume Pricing for {data.country} SMS Termination</h2>
            <p>Predictable cost scaling for high-concurrency enterprise applications, aggregators, and fintechs.</p>
          </div>

          <div className="info-grid-3">
            {data.pricingTiers.map((tier, idx) => (
              <div key={idx} className="info-card">
                <span className="info-icon">💎</span>
                <h3>{tier.volume}</h3>
                <div style={{ margin: "16px 0", fontSize: "28px", fontWeight: 800, color: "var(--accent-cyan)" }}>
                  {tier.rateEUR} <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>/ SMS</span>
                </div>
                <p>{tier.features}</p>
                <button
                  type="button"
                  className="contact-link-btn"
                  onClick={onOpenInquiriesModal}
                  style={{ border: "none", cursor: "pointer", marginTop: "16px" }}
                >
                  Activate Bind ➔
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Corridor Cross-Linking (Internal Page Authority Mesh) */}
      <section className="subpage-info-section" style={{ background: "rgba(6, 182, 212, 0.02)" }}>
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Global Corridors</p>
            <h2>Explore Additional Regional Wholesale SMS Hubs</h2>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            {[
              { path: "/bulk-sms-usa", name: "🇺🇸 Bulk SMS USA & 10DLC" },
              { path: "/bulk-sms-uk", name: "🇬🇧 Bulk SMS UK & Europe" },
              { path: "/bulk-sms-uae", name: "🇦🇪 Bulk SMS UAE & Middle East" },
              { path: "/bulk-sms-india", name: "🇮🇳 Bulk SMS India & DLT" },
              { path: "/bulk-sms-malaysia", name: "🇲🇾 Bulk SMS Malaysia & APAC" },
              { path: "/rates", name: "📊 195+ Country Rate Cards" },
              { path: "/coverage", name: "🌐 Global Carrier Network Map" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.path}
                onClick={(e) => handleNav(e, link.path)}
                className="contact-link-btn"
                style={{ padding: "10px 20px" }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Corridor Specific FAQs */}
      <section className="faq">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Technical &amp; Regulatory Guidance</p>
            <h2>Frequently Asked Questions: {data.country} SMS Routing</h2>
          </div>

          <div className="faq-list">
            {data.faqs.map((faq, idx) => {
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
                      <span className="faq-badge">{data.country} Compliance</span>
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

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct={`Wholesale SMS Route - ${data.country}`} />
    </div>
  );
};

export default LocationPage;
