import { useState } from "react";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";

export const ServicesPage = ({ onOpenInquiriesModal, navigate }) => {
  const [activeTab, setActiveTab] = useState("smpp");
  const [openFaq, setOpenFaq] = useState(null);

  const smppPdus = [
    {
      command: "bind_transceiver",
      id: "0x00000009",
      direction: "ESME ➔ SMSC",
      purpose: "Establishes a bi-directional session for simultaneous message submission (submit_sm) and receipt delivery (deliver_sm) over a single persistent TCP connection.",
    },
    {
      command: "submit_sm",
      id: "0x00000004",
      direction: "ESME ➔ SMSC",
      purpose: "Submits a short text or binary message payload with destination MSISDN, registered sender ID, registered DCS encoding, and optional validity period.",
    },
    {
      command: "submit_sm_resp",
      id: "0x80000004",
      direction: "SMSC ➔ ESME",
      purpose: "Synchronous network acknowledgement containing message_id assigned by the carrier SMSC and command_status error code (0x00000000 for OK).",
    },
    {
      command: "deliver_sm",
      id: "0x00000005",
      direction: "SMSC ➔ ESME",
      purpose: "Asynchronous delivery receipt (DLR) pushed back to the client ESME containing timestamp, delivery status (DELIVRD), error codes, and network latency.",
    },
    {
      command: "enquire_link",
      id: "0x00000015",
      direction: "Bi-directional",
      purpose: "Active heartbeat health-check probe transmitted every 30 seconds to verify TCP socket connectivity and prevent session timeout drops.",
    },
    {
      command: "unbind",
      id: "0x00000006",
      direction: "Bi-directional",
      purpose: "Gracefully terminates the authenticated SMPP session, ensuring all queued in-flight PDU acknowledgements are flushed cleanly.",
    },
  ];

  const dlrCodes = [
    { code: "DELIVRD", state: "Delivered", statusClass: "success", desc: "Message successfully terminated on recipient mobile handset via radio network." },
    { code: "EXPIRED", state: "Expired", statusClass: "failed", desc: "Handset unreachable within SMSC retry window (handset switched off / out of coverage)." },
    { code: "UNDELIV", state: "Undeliverable", statusClass: "failed", desc: "Destination number is permanently disconnected, invalid MSISDN, or subscriber absent." },
    { code: "REJECTD", state: "Rejected", statusClass: "blocked", desc: "Filtered by SS7 carrier firewall, anti-spam heuristics, or unregistered Sender ID." },
    { code: "ACCEPTD", state: "Accepted", statusClass: "success", desc: "Message validated and queued by intermediate carrier node for final delivery." },
    { code: "UNKNOWN", state: "Unknown", statusClass: "blocked", desc: "Downstream MNO did not provide a definitive delivery status acknowledge." },
  ];

  const serviceFaqs = [
    {
      q: "What throughput and TPS can the NAMX SMPP gateway handle?",
      a: "Our carrier-grade SMPP v3.4 and v5.0 gateway supports up to 10,000 Transactions Per Second (TPS) across multi-session transceiver binds over TLS 1.3 and IPsec VPN tunnels, backed by distributed Redis queues and sliding-window flow control."
    },
    {
      q: "How does the Least Cost Routing (LCR) engine work?",
      a: "Our routing engine recalculates route quality, DLR latency, and price dynamically every 15 milliseconds, guaranteeing optimal cost efficiency, zero-hop termination, and 99.99% message delivery."
    },
    {
      q: "Do you offer WhatsApp Business API and RCS messaging with automated SMS fallback?",
      a: "Yes! NAMX provides unified omnichannel failover routing: Google RCS messages automatically fail over to WhatsApp Business Platform (Cloud API), which in turn falls back to direct Tier-1 SS7 SMS if the recipient is offline, achieving 0% message loss."
    },
    {
      q: "How fast is SMPP bind provisioning?",
      a: "Standard SMPP binds (System ID, Password, Port, IP Whitelisting) and developer API tokens are provisioned within 5 to 15 minutes by our 24/7 Global NOC team once bilateral KYC is verified."
    },
    {
      q: "What character encodings (DCS) and message concatenation standards are supported?",
      a: "We support standard GSM 7-bit (160 chars single / 153 chars multi-part via UDH 0x05/0x06), UCS-2 16-bit Unicode (70 chars single / 67 chars multi-part for Arabic, Chinese, Cyrillic, and Emojis), and raw 8-bit binary."
    },
    {
      q: "How do you protect enterprises against Artificial Traffic Inflation (AIT) and fraud?",
      a: "Our SS7 carrier firewall actively inspects traffic patterns using machine-learning heuristics, blocking SIM farms, high-risk ranges, automated bot bursts, and unauthorized international revenue share fraud (IRSF) before transmission."
    }
  ];

  return (
    <div className="page-services">
      <div className="page-banner">
        <div className="container">
          <p className="stats-eyebrow">360° Carrier-Grade Enterprise Telecom Infrastructure</p>
          <h1>Wholesale Bulk SMS Gateway, SMPP Binds &amp; Omnichannel Routing</h1>
          <p>
            The global telecommunications backbone for high-concurrency enterprise applications, SMS aggregators, and CPaaS platforms. Direct SS7 MNO interconnects, SMPP v3.4/v5.0 high-TPS binds, Meta WhatsApp API, Google RCS, and 24/7 Global NOC operations.
          </p>
        </div>
      </div>

      {/* 360 Architecture Interactive Domain Tabs */}
      <section className="subpage-info-section" style={{ background: "rgba(6, 182, 212, 0.02)" }}>
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Architectural Domains</p>
            <h2>360° Enterprise Telecom &amp; Messaging Capabilities</h2>
            <p>Select a core technology domain below to inspect technical specifications, protocol behaviors, and routing architecture.</p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "36px" }}>
            {[
              { id: "smpp", label: "⚡ SMPP v3.4 / v5.0 Protocol Suite" },
              { id: "a2p", label: "📨 Wholesale A2P SMS & LCR Engine" },
              { id: "wa", label: "💬 WhatsApp Business API (Meta)" },
              { id: "rcs", label: "📲 Google RCS Business Messaging" },
              { id: "cloud", label: "💻 Cloud DevOps & Telecom Engineering" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "12px 20px",
                  fontSize: "14px",
                  fontWeight: 700,
                  borderRadius: "24px",
                  border: activeTab === tab.id ? "1px solid #06b6d4" : "1px solid rgba(255, 255, 255, 0.1)",
                  background: activeTab === tab.id ? "rgba(6, 182, 212, 0.2)" : "rgba(255, 255, 255, 0.03)",
                  color: activeTab === tab.id ? "#06b6d4" : "#ffffff",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "smpp" && (
            <div className="info-grid-2">
              <div className="info-card">
                <h3>⚡ SMPP Protocol Engine Specifications</h3>
                <p>Designed for tier-1 mobile operators and enterprise messaging aggregators needing high-throughput, low-latency persistent sockets.</p>
                <ul className="spec-list" style={{ marginTop: "16px" }}>
                  <li>✓ <strong>Protocol Versions:</strong> SMPP v3.4 (industry standard) and SMPP v5.0 (advanced session control).</li>
                  <li>✓ <strong>Throughput TPS:</strong> Up to 10,000 TPS sustained per transceiver bind with configurable sliding window buffers.</li>
                  <li>✓ <strong>Connection Modes:</strong> Dedicated TRX (Transceiver), TX (Transmitter), and RX (Receiver) session configurations.</li>
                  <li>✓ <strong>Transport Security:</strong> Bank-grade TLS 1.3 socket encryption or point-to-point IPsec VPN tunnels.</li>
                  <li>✓ <strong>Keep-Alive Health Checks:</strong> Automated <code>enquire_link</code> polling every 30 seconds with automatic reconnection logic.</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>📊 Message Encoding &amp; Payload Handling</h3>
                <p>Full support for global multilingual messaging, concatenation, and binary payloads across all destination handsets.</p>
                <ul className="spec-list" style={{ marginTop: "16px" }}>
                  <li>✓ <strong>GSM 7-bit Default Alphabet:</strong> Up to 160 characters for single SMS; 153 characters per segment concatenated.</li>
                  <li>✓ <strong>UCS-2 16-bit Unicode:</strong> Up to 70 characters for single SMS; 67 characters per segment for Arabic, Chinese, Cyrillic, Hindi, and Emojis.</li>
                  <li>✓ <strong>User Data Header (UDH):</strong> Standard 0x05 (8-bit ref) and 0x06 (16-bit ref) concatenation for seamless multi-part reassembly.</li>
                  <li>✓ <strong>Custom Data Coding Scheme (DCS):</strong> Configurable flash SMS (class 0), ME-specific (class 1), and SIM-specific (class 2) routing.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "a2p" && (
            <div className="info-grid-2">
              <div className="info-card">
                <h3>🌐 Wholesale A2P SMS Hubbing &amp; MNO Termination</h3>
                <p>Direct zero-hop signaling links with 250+ Mobile Network Operators across Asia, Europe, Middle East, and the Americas.</p>
                <ul className="spec-list" style={{ marginTop: "16px" }}>
                  <li>✓ <strong>Express OTP Priority Route:</strong> Sub-1.8 second delivery latency with 99.98% delivery rate for 2FA verification codes.</li>
                  <li>✓ <strong>Dynamic Least Cost Routing (LCR):</strong> Algorithm evaluates real-time latency, delivery rate, and cost every 15ms.</li>
                  <li>✓ <strong>Sender ID Whitelist Engine:</strong> Dynamic alphanumeric (e.g., 'YOURBANK'), shortcode, and 10DLC registration support.</li>
                  <li>✓ <strong>HLR / MNP Lookup:</strong> Real-time Home Location Register queries guarantee ported numbers route to the active carrier.</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>🛡️ SS7 Anti-Fraud &amp; Firewall Protection</h3>
                <p>Enterprise firewall heuristics protect your brand reputation and eliminate gray route interception.</p>
                <ul className="spec-list" style={{ marginTop: "16px" }}>
                  <li>✓ <strong>Anti-AIT (Artificial Traffic Inflation):</strong> Heuristic filters stop automated bot OTP generation and credit drainage.</li>
                  <li>✓ <strong>Zero Gray Routes:</strong> 100% white-route legitimate termination with cryptographic end-to-end audit trails.</li>
                  <li>✓ <strong>DND &amp; Opt-Out Scrubbing:</strong> Automatic National Do Not Disturb (DND) checking across regulated corridors.</li>
                  <li>✓ <strong>GSMA AA.19 Compliance:</strong> Bilateral financial clearing and itemized CDR reconciliation for wholesale partners.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "wa" && (
            <div className="info-grid-2">
              <div className="info-card">
                <h3>💬 Meta Cloud API &amp; WhatsApp Business Platform</h3>
                <p>Enterprise-grade WhatsApp messaging integrated alongside your bulk SMS infrastructure for unified communications.</p>
                <ul className="spec-list" style={{ marginTop: "16px" }}>
                  <li>✓ <strong>Official Green Tick Verification:</strong> End-to-end guidance to obtain Meta's verified business badge.</li>
                  <li>✓ <strong>Authentication 2FA Templates:</strong> One-tap copy-code buttons with sub-second delivery for login security.</li>
                  <li>✓ <strong>Interactive Messages:</strong> Rich buttons, list pickers, multi-product catalogs, and carousel cards.</li>
                  <li>✓ <strong>24/7 AI Chatbot Integration:</strong> Webhook pipelines connecting to automated customer care and CRM platforms.</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>🔄 Smart Fallback: WhatsApp to SMS</h3>
                <p>Never lose a high-value customer notification when a recipient is outside cellular data coverage or offline.</p>
                <ul className="spec-list" style={{ marginTop: "16px" }}>
                  <li>✓ <strong>Automatic Delivery Detection:</strong> If a WhatsApp template remains undelivered after 60 seconds, failover triggers.</li>
                  <li>✓ <strong>Direct SS7 SMS Conversion:</strong> Payload is instantly reformatted and delivered via priority SMS route.</li>
                  <li>✓ <strong>Unified Webhooks:</strong> Single unified DLR webhook callback reporting message lifecycle regardless of channel.</li>
                  <li>✓ <strong>Cost Optimization:</strong> Pay premium channel rates only when delivered; fallback routes minimize waste.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "rcs" && (
            <div className="info-grid-2">
              <div className="info-card">
                <h3>📲 Google RCS Business Messaging (RBM)</h3>
                <p>Transform standard text notifications into modern rich app-like experiences natively in Android and iOS 18 Messages.</p>
                <ul className="spec-list" style={{ marginTop: "16px" }}>
                  <li>✓ <strong>Verified Sender Avatar:</strong> Displays your brand logo, verified checkmark, and custom color scheme in the native inbox.</li>
                  <li>✓ <strong>Rich Media Carousels:</strong> High-resolution product images, horizontal swipe cards, and dynamic action buttons.</li>
                  <li>✓ <strong>Suggested Action Chips:</strong> Open URL, dial phone number, view map location, or create calendar event in 1-tap.</li>
                  <li>✓ <strong>Read Receipts &amp; Typing Indicators:</strong> Full engagement telemetry with verified read timestamps.</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>⚡ Cascading RCS-to-SMS Fallback</h3>
                <p>Seamless coverage guarantee across devices without RCS or when carrier signaling is unavailable.</p>
                <ul className="spec-list" style={{ marginTop: "16px" }}>
                  <li>✓ <strong>Capability Discovery:</strong> Real-time query determines if the recipient handset supports RCS protocol.</li>
                  <li>✓ <strong>Zero-Packet Loss:</strong> If RCS capability fails, our gateway immediately fires the plain text SMS payload.</li>
                  <li>✓ <strong>Universal Reach:</strong> Guarantees 100% reachability across both smart and feature phones worldwide.</li>
                  <li>✓ <strong>Single API Endpoint:</strong> Dispatch once via REST or SMPP; gateway handles capability checking and routing.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "cloud" && (
            <div className="info-grid-2">
              <div className="info-card">
                <h3>💻 Enterprise Telecom IT &amp; DevOps Engineering</h3>
                <p>Custom engineering services for telecom operators, fintechs, and aggregators scaling messaging infrastructure.</p>
                <ul className="spec-list" style={{ marginTop: "16px" }}>
                  <li>✓ <strong>Custom SMPP Gateway Development:</strong> High-concurrency C++ / Go / Node.js gateways built for 50,000+ TPS.</li>
                  <li>✓ <strong>Telecom Billing &amp; CDR Engines:</strong> Real-time rating engines calculating bilateral clearing and invoicing.</li>
                  <li>✓ <strong>Cloud Architecture &amp; Kubernetes:</strong> Multi-region active-active deployments on AWS, GCP, and bare-metal nodes.</li>
                  <li>✓ <strong>SS7 &amp; SIGTRAN Protocol Integration:</strong> SCTP, M3UA, SCCP, and MAP stack deployment for direct carrier interconnects.</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>🛡️ 24/7/365 Global Network Operations Center (NOC)</h3>
                <p>Round-the-clock pro-active monitoring and carrier escalation desk.</p>
                <ul className="spec-list" style={{ marginTop: "16px" }}>
                  <li>✓ <strong>Proactive Quality Monitoring:</strong> Real-time monitoring of route DLR ratios, ASR, and latency alerts.</li>
                  <li>✓ <strong>Sub-15 Minute SLA:</strong> Direct engineer-to-engineer support via Telegram, WhatsApp, MS Teams, and ticketing.</li>
                  <li>✓ <strong>Immediate Route Re-routing:</strong> Automated traffic shifting around carrier maintenance and undersea cable cuts.</li>
                  <li>✓ <strong>Wholesale Sandbox Provisioning:</strong> Instant staging binds for load testing and protocol validation.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SMPP Technical PDU Matrix */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Protocol Data Units (PDU)</p>
            <h2>SMPP Command Set &amp; Wire Protocol Reference</h2>
            <p>Complete PDU command mapping implemented in NAMX Telecom carrier-grade gateway binds.</p>
          </div>

          <div className="dlr-table-wrapper">
            <table className="dlr-table">
              <thead>
                <tr>
                  <th>Command Name</th>
                  <th>Command ID (Hex)</th>
                  <th>Direction</th>
                  <th>Technical Functionality</th>
                </tr>
              </thead>
              <tbody>
                {smppPdus.map((pdu) => (
                  <tr key={pdu.command}>
                    <td><span className="dlr-code-badge">{pdu.command}</span></td>
                    <td><code style={{ color: "#34d399", fontWeight: 700 }}>{pdu.id}</code></td>
                    <td><span style={{ fontSize: "13px", color: "var(--accent-cyan)" }}>{pdu.direction}</span></td>
                    <td>{pdu.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Delivery Receipt (DLR) State Matrix */}
      <section className="subpage-info-section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Delivery Reporting</p>
            <h2>DLR Status Code Mapping &amp; Latency Benchmarks</h2>
            <p>Industry-standard delivery receipt states returned via <code>deliver_sm</code> PDU callbacks or webhook notifications.</p>
          </div>

          <div className="dlr-table-wrapper">
            <table className="dlr-table">
              <thead>
                <tr>
                  <th>Status Code</th>
                  <th>State Name</th>
                  <th>Classification</th>
                  <th>Detailed Definition &amp; Handset Behavior</th>
                </tr>
              </thead>
              <tbody>
                {dlrCodes.map((dlr) => (
                  <tr key={dlr.code}>
                    <td><span className="dlr-code-badge">{dlr.code}</span></td>
                    <td><strong>{dlr.state}</strong></td>
                    <td><span className={`dlr-state-badge ${dlr.statusClass}`}>{dlr.statusClass}</span></td>
                    <td>{dlr.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Services />
      <WhyChooseUs />

      {/* Frequently Asked Questions */}
      <section className="faq">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Enterprise Telecommunications</p>
            <h2>Telecom Infrastructure &amp; SMPP Protocol FAQs</h2>
            <p className="faq-subtext">Detailed engineering answers regarding SMPP protocols, TPS throughput, failover logic, and fraud security.</p>
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
                      <span className="faq-badge">Telecom Infrastructure</span>
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

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct="Carrier SMPP Bind" />
    </div>
  );
};

export default ServicesPage;
