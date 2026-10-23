import { useEffect } from "react";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";
import "../styles/pages/LegalPage.css";

export const TermsPage = ({ onOpenInquiriesModal, navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNav = (e, path) => {
    if (navigate) {
      e.preventDefault();
      navigate(path);
    }
  };

  const tocItems = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "onboarding", label: "2. Account & SMPP Provisioning" },
    { id: "aup", label: "3. Acceptable Use & Anti-Spam" },
    { id: "sender-id", label: "4. Sender ID & Telecom Compliance" },
    { id: "billing", label: "5. Rates, Billing & Settlement" },
    { id: "sla", label: "6. SLA & Performance Standards" },
    { id: "ip-confidentiality", label: "7. Confidentiality & Data Rights" },
    { id: "liability", label: "8. Limitation of Liability" },
    { id: "suspension", label: "9. Suspension & Termination" },
    { id: "governing-law", label: "10. Governing Law & Jurisdiction" },
    { id: "contact", label: "11. Legal Notices & Contact" }
  ];

  return (
    <div className="page-legal">
      {/* Dedicated Legal Header Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="legal-badge-tag">⚖️ Master Services Agreement</span>
          <h1>Terms and Conditions</h1>
          <p>
            Governing the carrier interconnection, SMPP v3.4/v5.0 bindings, REST API access, and wholesale SMS traffic exchange provided by NAMX Telecom.
          </p>
          <div className="legal-meta-bar">
            <span className="legal-meta-item">📅 Effective Date: October 2026</span>
            <span className="legal-meta-dot"></span>
            <span className="legal-meta-item">🌐 Version 4.2</span>
            <span className="legal-meta-dot"></span>
            <span className="legal-meta-item">🛡️ Enterprise Telecom Standard</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="legal-layout-section">
        <div className="legal-container">
          {/* Quick Sticky Table of Contents */}
          <aside className="legal-sidebar">
            <div className="legal-sidebar-title">Table of Contents</div>
            <ul className="legal-toc-list">
              {tocItems.map((item) => (
                <li key={item.id} className="legal-toc-item">
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="legal-quick-actions">
              <a href="/privacy" onClick={(e) => handleNav(e, "/privacy")} className="legal-quick-link">
                🔒 View Privacy Policy &rarr;
              </a>
              <a href="/faq" onClick={(e) => handleNav(e, "/faq")} className="legal-quick-link">
                ❓ Technical Routing FAQ &rarr;
              </a>
              <a href="/contact" onClick={(e) => handleNav(e, "/contact")} className="legal-quick-link">
                ✉️ Contact NOC Desk &rarr;
              </a>
            </div>
          </aside>

          {/* Legal Article Body */}
          <article className="legal-content-card">
            {/* Section 1 */}
            <section id="acceptance" className="legal-section">
              <h2>
                <span className="legal-section-number">01</span>
                Acceptance of Terms &amp; Scope of Service
              </h2>
              <p>
                These Terms and Conditions, together with any Service Order Forms, Interconnect Master Services Agreements (MSA), and Technical Specifications, constitute a legally binding agreement between <strong>NAMX Telecom</strong> ("NAMX", "we", "us", or "our") and the enterprise, aggregator, mobile operator, or entity ("Customer", "Client", or "You") accessing or utilizing our messaging infrastructure.
              </p>
              <p>
                By establishing an SMPP bind (transceiver, transmitter, or receiver session), issuing API queries via REST endpoints, logging into the web broadcast portal, or transmitting Short Message Peer-to-Peer Protocol (SMPP) Packet Data Units (PDUs) to our switching gateway, you acknowledge that you have read, understood, and agree to be bound by these Terms in full.
              </p>
              <div className="legal-callout info">
                <span className="callout-icon">ℹ️</span>
                <div className="callout-body">
                  <strong>Carrier-Grade Wholesale Interconnect</strong>
                  <p>
                    These terms govern both Application-to-Person (A2P) enterprise messaging and Peer-to-Peer (P2P) international bilateral exchange traffic across 195+ sovereign telecommunication jurisdictions.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="onboarding" className="legal-section">
              <h2>
                <span className="legal-section-number">02</span>
                Account Provisioning, KYC &amp; Static IP Whitelisting
              </h2>
              <p>
                To maintain network integrity and adhere to international telecommunication anti-fraud frameworks, all Customer accounts are subject to mandatory Know Your Customer (KYC) verification and security screening prior to commercial traffic authorization.
              </p>
              <ul>
                <li><strong>Static IP Authorization:</strong> All SMPP sessions and REST API transmissions must originate from pre-whitelisted, customer-owned static IP addresses or CIDR blocks. Dynamic IP ranges are rejected at our edge firewalls.</li>
                <li><strong>Credential Security:</strong> The Customer is solely responsible for maintaining the confidentiality of their assigned SMPP System ID, System Type, Password, API bearer tokens, and web platform user accounts.</li>
                <li><strong>Session &amp; Keep-Alive Limits:</strong> Customers are provisioned with negotiated Transceiver (TRX) sessions. The default <code>enquire_link</code> PDU heartbeat interval is set to 30 seconds. Inactive binds exceeding 90 seconds without PDU acknowledgments are automatically terminated by our session managers.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="aup" className="legal-section">
              <h2>
                <span className="legal-section-number">03</span>
                Acceptable Messaging Policy &amp; Anti-Spam Prohibition
              </h2>
              <p>
                NAMX Telecom maintains a zero-tolerance policy regarding illegal traffic, phishing (smishing), fraudulent financial solicitations, and unsolicited commercial broadcasts. All traffic passing through our core SS7 switches is continuously inspected by automated heuristic firewalls.
              </p>
              
              <div className="legal-callout warning">
                <span className="callout-icon">⚠️</span>
                <div className="callout-body">
                  <strong>Strictly Prohibited Messaging Categories</strong>
                  <p>
                    Any transmission containing unauthorized banking smishing, malware distribution links, counterfeit goods promotions, illegal gambling in unlicensed corridors, unconsented adult content, SIM-box bypass operations, or artificially inflated traffic (AIT) will result in immediate termination of bindings without prior refund.
                  </p>
                </div>
              </div>

              <p>The Customer expressly covenants and warrants that:</p>
              <ol>
                <li>All message recipients (MSISDNs) have provided verifiable, opt-in consent in strict compliance with the destination country’s regulations (e.g., TCPA in the United States, GDPR/PECR in the European Union, TRAI regulations in India).</li>
                <li>All marketing and promotional communications include an immediate, non-punitive opt-out mechanism (such as replying "STOP" or a free unsubscribe web link).</li>
                <li>No automated dictionary attacks, random MSISDN number generators, or grey-route SIM-farm bypass channels will be utilized.</li>
              </ol>
            </section>

            {/* Section 4 */}
            <section id="sender-id" className="legal-section">
              <h2>
                <span className="legal-section-number">04</span>
                Sender ID Whitelisting &amp; Jurisdictional Telecom Regulations
              </h2>
              <p>
                Alphanumeric Sender IDs (up to 11 characters) and Shortcodes are subject to local telecommunication authority approval. The Customer agrees to comply with all regional header registration mandates:
              </p>

              <div className="compliance-badges-grid">
                <div className="compliance-badge-card">
                  <span className="compliance-badge-name">🇮🇳 India DLT Registration</span>
                  <span className="compliance-badge-desc">
                    Mandatory Principal Entity (PE), Header (Sender ID), and Consent Template pre-registration on approved Indian telecom DLT portals.
                  </span>
                </div>
                <div className="compliance-badge-card">
                  <span className="compliance-badge-name">🇦🇪 UAE TRAE Compliance</span>
                  <span className="compliance-badge-desc">
                    Formal enterprise authorization documentation and Brand NOC registration prior to commercial traffic submission.
                  </span>
                </div>
                <div className="compliance-badge-card">
                  <span className="compliance-badge-name">🇺🇸 US 10DLC &amp; Toll-Free</span>
                  <span className="compliance-badge-desc">
                    The Campaign Registry (TCR) brand and campaign approval for Application-to-Person traffic termination across US MNOs.
                  </span>
                </div>
                <div className="compliance-badge-card">
                  <span className="compliance-badge-name">🇬🇧 UK &amp; EU Alphanumeric</span>
                  <span className="compliance-badge-desc">
                    Ofcom and BEREC compliant Sender ID validation to eliminate header spoofing and identity theft.
                  </span>
                </div>
              </div>

              <p>
                NAMX Telecom reserves the right to replace unauthorized or un-whitelisted dynamic Sender IDs with compliant fallback numeric identifiers to prevent destination operator rejections.
              </p>
            </section>

            {/* Section 5 */}
            <section id="billing" className="legal-section">
              <h2>
                <span className="legal-section-number">05</span>
                Pricing, Rate Cards, Bilateral Netting &amp; Payment Settlement
              </h2>
              <p>
                Services are priced in accordance with our real-time wholesale rate card or individual interconnect annexes. Rates are quoted in Euros (EUR), United States Dollars (USD), or Tether (USDT).
              </p>

              <div className="legal-table-wrapper">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Settlement Tier</th>
                      <th>Billing Model</th>
                      <th>Payment Methods</th>
                      <th>CDR Reconciliation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Prepaid Enterprise</strong></td>
                      <td>Real-time balance deduction per submitted SMS PDU</td>
                      <td>Bank Wire (SWIFT/SEPA), USDT (TRC20/ERC20)</td>
                      <td>Daily real-time portal export</td>
                    </tr>
                    <tr>
                      <td><strong>Bilateral Carrier</strong></td>
                      <td>Net 7 / Net 15 / Net 30 with mutually approved credit cap</td>
                      <td>Direct SWIFT Interbank Clearing</td>
                      <td>GSMA AA.19 compliant monthly clearing</td>
                    </tr>
                    <tr>
                      <td><strong>High-Volume Aggregator</strong></td>
                      <td>Dynamic Volume Tiering based on monthly MPS commitments</td>
                      <td>Multi-currency dedicated settlement desk</td>
                      <td>Itemized Call Detail Records (CDR)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Rate Adjustments:</strong> Due to mobile network operator price fluctuations, NAMX Telecom reserves the right to adjust destination corridor rates upon 3 to 7 days written or electronic notice. Emergency operator surcharges or regulatory levies take effect upon implementation by the relevant operator.
              </p>
              <p>
                <strong>Billing Measure:</strong> Charges apply on a per-submission basis (each submitted PDU part of up to 160 GSM 7-bit characters or 70 UCS-2 Unicode characters), regardless of final mobile handset delivery, except where explicit Direct MNO Delivered-receipt (DELIVRD) SLA terms have been executed in writing.
              </p>
            </section>

            {/* Section 6 */}
            <section id="sla" className="legal-section">
              <h2>
                <span className="legal-section-number">06</span>
                Service Level Agreement (SLA) &amp; Network Availability
              </h2>
              <p>
                NAMX Telecom commits to providing an enterprise carrier-grade service availability standard of <strong>99.99% network uptime</strong> for its core switching infrastructure and SMPP endpoints.
              </p>
              <ul>
                <li><strong>OTP &amp; Transactional Latency:</strong> Messages routed through our Tier-1 Direct SS7 routes target a transit delivery time of under <strong>2.5 seconds</strong> globally.</li>
                <li><strong>Network Redundancy:</strong> Our core nodes operate with dual active-active redundancy across Tier-4 data centers with automatic BGP failover across multiple international transit backbones.</li>
                <li><strong>Scheduled Maintenance:</strong> Routine maintenance windows are announced with a minimum of 48 hours advance notice and executed during low-traffic periods with zero expected route disconnection.</li>
              </ul>
              
              <div className="legal-callout success">
                <span className="callout-icon">⚡</span>
                <div className="callout-body">
                  <strong>24/7/365 Global NOC Monitoring</strong>
                  <p>
                    Our Global Network Operations Center operates around the clock. Urgent corridor alerts, route re-optimizations, and ticket escalations have an average initial response SLA of under 15 minutes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="ip-confidentiality" className="legal-section">
              <h2>
                <span className="legal-section-number">07</span>
                Intellectual Property &amp; Confidentiality
              </h2>
              <p>
                All proprietary algorithms, LCR routing engines, API specifications, platform interfaces, trademarks, and documentation remain the exclusive intellectual property of NAMX Telecom.
              </p>
              <p>
                Each party agrees to maintain strict confidentiality regarding all proprietary information received from the other party, including but not limited to wholesale pricing sheets, network topologies, bind credentials, technical architectural guides, and transaction volumes. Confidential information may only be disclosed as required by court order or competent regulatory authorities.
              </p>
            </section>

            {/* Section 8 */}
            <section id="liability" className="legal-section">
              <h2>
                <span className="legal-section-number">08</span>
                Limitation of Liability &amp; Disclaimers
              </h2>
              <p>
                To the maximum extent permitted by applicable law, NAMX Telecom provides its services on an "as-is" and "as-available" basis without warranties of any kind, whether express or implied.
              </p>
              <p>
                NAMX Telecom shall not be held liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, business revenue, data, or operational downtime arising out of destination operator filtering, subscriber handset unavailability, network congestion, or regulatory blocking outside of our direct operational control.
              </p>
              <p>
                In any circumstance, NAMX Telecom's aggregate liability for direct claims arising under this agreement shall not exceed the total fees paid by the Customer to NAMX Telecom during the one (1) month preceding the incident giving rise to liability.
              </p>
            </section>

            {/* Section 9 */}
            <section id="suspension" className="legal-section">
              <h2>
                <span className="legal-section-number">09</span>
                Suspension, Throttling &amp; Termination
              </h2>
              <p>
                NAMX Telecom reserves the right to immediately suspend or throttle customer binds without liability in any of the following events:
              </p>
              <ul>
                <li>Suspected fraudulent activity, phishing smishing campaigns, or high-volume spam broadcasts.</li>
                <li>Failure to maintain positive credit balance or exceedance of approved bilateral credit thresholds.</li>
                <li>Receipt of critical complaints, upstream carrier fines, or warnings from mobile network operators or telecom law enforcement agencies.</li>
                <li>Breach of static IP security protocols or anomalous TPS traffic surges threatening network stability.</li>
              </ul>
              <p>
                Either party may terminate the messaging relationship for convenience upon giving thirty (30) days prior written notice, subject to full settlement of any outstanding balances and reconciliation of itemized CDRs.
              </p>
            </section>

            {/* Section 10 */}
            <section id="governing-law" className="legal-section">
              <h2>
                <span className="legal-section-number">10</span>
                Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Terms and Conditions and any dispute or claim arising out of or in connection with them or their subject matter shall be governed by and construed in accordance with international commercial law principles and the laws governing international telecommunication carrier agreements.
              </p>
              <p>
                Any unresolved dispute, controversy, or claim arising under this agreement shall be settled through good-faith commercial negotiation between designated executive officers. If unresolved within thirty (30) business days, disputes shall be submitted to binding international commercial arbitration under the Rules of Arbitration of the International Chamber of Commerce (ICC).
              </p>
            </section>

            {/* Section 11 */}
            <section id="contact" className="legal-section">
              <h2>
                <span className="legal-section-number">11</span>
                Legal Notices &amp; Enterprise Inquiries
              </h2>
              <p>
                For legal inquiries, compliance certificates, formal notices, or custom Master Services Agreement (MSA) execution, please contact our legal and carrier relations desk:
              </p>

              <div className="legal-contact-box">
                <div className="legal-contact-text">
                  <h4>NAMX Telecom Legal &amp; Compliance Desk</h4>
                  <p>Inquiries regarding MSAs, DLT onboarding, compliance audits &amp; regulatory verification.</p>
                </div>
                <a href="mailto:admin@namxtelecom.site?subject=Enterprise%20Legal%20%26%20MSA%20Inquiry" className="legal-contact-btn">
                  ✉️ Contact Legal Team
                </a>
              </div>
            </section>
          </article>
        </div>
      </section>

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
    </div>
  );
};

export default TermsPage;
