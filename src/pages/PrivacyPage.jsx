import { useEffect } from "react";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";
import "../styles/pages/LegalPage.css";

export const PrivacyPage = ({ onOpenInquiriesModal, navigate }) => {
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
    { id: "overview", label: "1. Overview & Data Controller" },
    { id: "data-collection", label: "2. Categories of Data Collected" },
    { id: "lawful-basis", label: "3. Lawful Basis & Purposes" },
    { id: "retention", label: "4. Automated Purge & Retention" },
    { id: "security", label: "5. Data Security & Encryption" },
    { id: "subprocessors", label: "6. Carrier Routing & Sub-processors" },
    { id: "international", label: "7. International Data Transfers" },
    { id: "user-rights", label: "8. Data Subject Rights (GDPR/CCPA)" },
    { id: "cookies", label: "9. Cookies & Telemetry" },
    { id: "dpo", label: "10. Data Protection Officer Contact" }
  ];

  return (
    <div className="page-legal">
      {/* Dedicated Legal Header Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="legal-badge-tag">🔒 Global Data Protection</span>
          <h1>Privacy Policy</h1>
          <p>
            How NAMX Telecom collects, processes, encrypts, and retains enterprise messaging data, CDR metadata, and PDU payloads in accordance with international data protection frameworks.
          </p>
          <div className="legal-meta-bar">
            <span className="legal-meta-item">📅 Effective Date: October 2026</span>
            <span className="legal-meta-dot"></span>
            <span className="legal-meta-item">🛡️ GDPR, CCPA &amp; Telecom Compliant</span>
            <span className="legal-meta-dot"></span>
            <span className="legal-meta-item">🔐 Zero-Payload Storage Architecture</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="legal-layout-section">
        <div className="legal-container">
          {/* Quick Sticky Table of Contents */}
          <aside className="legal-sidebar">
            <div className="legal-sidebar-title">Privacy Sections</div>
            <ul className="legal-toc-list">
              {tocItems.map((item) => (
                <li key={item.id} className="legal-toc-item">
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="legal-quick-actions">
              <a href="/terms" onClick={(e) => handleNav(e, "/terms")} className="legal-quick-link">
                ⚖️ View Terms &amp; Conditions &rarr;
              </a>
              <a href="/faq" onClick={(e) => handleNav(e, "/faq")} className="legal-quick-link">
                ❓ Security &amp; SLA FAQ &rarr;
              </a>
              <a href="/contact" onClick={(e) => handleNav(e, "/contact")} className="legal-quick-link">
                ✉️ Contact Security NOC &rarr;
              </a>
            </div>
          </aside>

          {/* Legal Article Body */}
          <article className="legal-content-card">
            {/* Section 1 */}
            <section id="overview" className="legal-section">
              <h2>
                <span className="legal-section-number">01</span>
                Overview &amp; Data Controller Information
              </h2>
              <p>
                <strong>NAMX Telecom</strong> operates a global telecommunication switching network, SMS traffic exchange, and developer messaging API suite. We recognize the fundamental importance of information security, data confidentiality, and privacy rights across all borders.
              </p>
              <p>
                Under applicable data protection legislation (including the EU General Data Protection Regulation 2016/679 "GDPR", the UK Data Protection Act, and the California Consumer Privacy Act "CCPA"):
              </p>
              <ul>
                <li><strong>Data Controller:</strong> For client account details, contractual communications, billing ledgers, and technical portal authentication credentials, NAMX Telecom acts as a Data Controller.</li>
                <li><strong>Data Processor:</strong> For the transient message text, destination telephone numbers (MSISDNs), Sender ID strings, and message payloads transmitted through our SMPP v3.4/v5.0 bindings or REST endpoints, NAMX Telecom acts as a Data Processor on behalf of the Customer (who acts as the Data Controller).</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="data-collection" className="legal-section">
              <h2>
                <span className="legal-section-number">02</span>
                Categories of Information We Process
              </h2>
              <p>
                We process strictly the minimum necessary data required to provision wholesale telecommunications services, execute routing switches, settle bilateral invoices, and prevent SS7 signaling fraud:
              </p>

              <div className="compliance-badges-grid">
                <div className="compliance-badge-card">
                  <span className="compliance-badge-name">👤 Account &amp; KYC Data</span>
                  <span className="compliance-badge-desc">
                    Corporate entity name, registered office address, tax/VAT identifiers, authorized billing emails, and authorized operator representative contacts.
                  </span>
                </div>
                <div className="compliance-badge-card">
                  <span className="compliance-badge-name">🌐 Network &amp; Security Data</span>
                  <span className="compliance-badge-desc">
                    Customer-provided static IPv4/IPv6 addresses, CIDR whitelists, TLS handshake certificates, SMPP session logs, and enquire_link timestamps.
                  </span>
                </div>
                <div className="compliance-badge-card">
                  <span className="compliance-badge-name">📊 Call Detail Records (CDR)</span>
                  <span className="compliance-badge-desc">
                    Carrier interconnect routing metadata including message ID, destination country code (MCC/MNC), submission timestamp, delivery status (DELIVRD/UNDELIV), and latency metrics.
                  </span>
                </div>
                <div className="compliance-badge-card">
                  <span className="compliance-badge-name">✉️ Transient PDU Payloads</span>
                  <span className="compliance-badge-desc">
                    Short message text and user data headers (UDH) submitted via submit_sm or REST payload for immediate transmission to terminating MNO networks.
                  </span>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="lawful-basis" className="legal-section">
              <h2>
                <span className="legal-section-number">03</span>
                Lawful Basis &amp; Purposes of Processing
              </h2>
              <p>We process personal and telecommunication data only under lawful, legitimate grounds:</p>
              <ul>
                <li><strong>Performance of Contract (Article 6(1)(b) GDPR):</strong> Routing, switching, delivering, and confirming SMS transactions, WhatsApp Business sessions, and RCS messaging as ordered by our clients.</li>
                <li><strong>Compliance with Legal &amp; Regulatory Obligations (Article 6(1)(c) GDPR):</strong> Telecom licensing compliance, lawful interception mandates where strictly required by authorized judicial warrants, accounting standards, and anti-money laundering (AML) requirements.</li>
                <li><strong>Legitimate Interests (Article 6(1)(f) GDPR):</strong> Network security, SS7 anti-fraud firewalling, preventing Distributed Denial of Service (DDoS) attacks, detecting SIM-box bypass operations, and maintaining 99.99% system availability.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="retention" className="legal-section">
              <h2>
                <span className="legal-section-number">04</span>
                Automated Message Content Purging &amp; Retention Schedule
              </h2>
              <p>
                NAMX Telecom champions privacy-by-design. We do not maintain perpetual archives of consumer text messages or SMS contents:
              </p>

              <div className="legal-callout success">
                <span className="callout-icon">⏱️</span>
                <div className="callout-body">
                  <strong>72-Hour Automated Payload Erasure</strong>
                  <p>
                    All Short Message Service message contents (the text body inside PDU submit_sm payloads) are automatically and irreversibly purged from our active RAM caches and transient routing buffers within <strong>72 hours</strong> of network acknowledgment.
                  </p>
                </div>
              </div>

              <div className="legal-table-wrapper">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Data Category</th>
                      <th>Storage Location</th>
                      <th>Retention Window</th>
                      <th>Purge Mechanism</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>SMS Text Content (Payload)</strong></td>
                      <td>Volatile RAM / Encrypted Transit Cache</td>
                      <td>Maximum 72 hours</td>
                      <td>Automated hard cryptographic overwrite</td>
                    </tr>
                    <tr>
                      <td><strong>Call Detail Records (CDR)</strong></td>
                      <td>Encrypted Audit Storage</td>
                      <td>6 to 12 months (or contractual billing requirement)</td>
                      <td>Scheduled archival roll-off &amp; pseudonymization</td>
                    </tr>
                    <tr>
                      <td><strong>Financial Invoices &amp; KYC</strong></td>
                      <td>Secure Financial Storage</td>
                      <td>5 to 7 years</td>
                      <td>Mandatory international corporate tax retention</td>
                    </tr>
                    <tr>
                      <td><strong>Edge Firewall Connection Logs</strong></td>
                      <td>Protected SOC System Logs</td>
                      <td>30 days</td>
                      <td>Rolling automated FIFO log truncation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 */}
            <section id="security" className="legal-section">
              <h2>
                <span className="legal-section-number">05</span>
                Data Security, Encryption &amp; Infrastructure Safeguards
              </h2>
              <p>
                We implement multi-layered physical, technical, and administrative security measures aligned with ISO/IEC 27001 standards to prevent unauthorized access, alteration, disclosure, or destruction of communications:
              </p>
              <ul>
                <li><strong>Transport Layer Security:</strong> All SMPP binds support TLS 1.3 protocol encapsulation. All REST APIs enforce mandatory HTTPS with modern cipher suites and HSTS preloading.</li>
                <li><strong>IPsec VPN Binds:</strong> For sovereign mobile operators and tier-1 banking institutions, dedicated IPsec VPN tunnels with static IP mutual authentication are provisioned on demand.</li>
                <li><strong>Access Control:</strong> Zero-trust network architecture with mandatory Multi-Factor Authentication (MFA), role-based access control (RBAC), and continuous auditing of all administrative console actions.</li>
                <li><strong>Data Center Tiering:</strong> Hosted in Tier-3+ and Tier-4 carrier-neutral data centers featuring biometric access barriers, 24/7 armed physical security, redundant UPS power, and automated fire suppression systems.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="subprocessors" className="legal-section">
              <h2>
                <span className="legal-section-number">06</span>
                Carrier Interconnections &amp; Authorized Sub-processors
              </h2>
              <p>
                To terminate messaging traffic to worldwide mobile subscribers, NAMX Telecom transmits signaling metadata through direct interconnect agreements with authorized Mobile Network Operators (MNOs), licensed transit carriers, and verified SS7 hubbing partners.
              </p>
              <p>
                All third-party carriers and sub-processors undergo rigorous security due diligence and are bound by strict data processing agreements prohibiting secondary use of customer data for commercial advertising, marketing, or profiling.
              </p>
            </section>

            {/* Section 7 */}
            <section id="international" className="legal-section">
              <h2>
                <span className="legal-section-number">07</span>
                International Data Transfers &amp; Cross-Border Routing
              </h2>
              <p>
                Because telecommunications is fundamentally global, message delivery requires the international transfer of signals to the destination country where the recipient's mobile device is registered.
              </p>
              <p>
                Where personal data originating in the European Economic Area (EEA) or United Kingdom is transferred to third countries lacking an adequacy decision under Article 45 of the GDPR, NAMX Telecom incorporates European Commission Standard Contractual Clauses (SCCs) and UK International Data Transfer Agreements (IDTAs) to ensure equivalent data protection safeguards.
              </p>
            </section>

            {/* Section 8 */}
            <section id="user-rights" className="legal-section">
              <h2>
                <span className="legal-section-number">08</span>
                Your Rights Under Global Privacy Laws (GDPR, CCPA &amp; More)
              </h2>
              <p>
                Depending on your country of residence, you or your authorized representatives hold distinct legal rights regarding personal data:
              </p>
              <ul>
                <li><strong>Right of Access:</strong> Request confirmation of whether we process personal data and obtain a copy of relevant records.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate, outdated, or incomplete corporate and account records.</li>
                <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of personal records where retention is no longer necessary for contractual or legal compliance.</li>
                <li><strong>Right to Restrict or Object to Processing:</strong> Request suspension of certain processing activities where legitimate grounds are disputed.</li>
                <li><strong>Right to Data Portability:</strong> Receive account records in a structured, commonly used, and machine-readable format (JSON/CSV).</li>
                <li><strong>Right to Lodge a Complaint:</strong> Lodge a complaint with your national Data Protection Authority (DPA) or Information Commissioner.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="cookies" className="legal-section">
              <h2>
                <span className="legal-section-number">09</span>
                Cookies, Portal Sessions &amp; Technical Telemetry
              </h2>
              <p>
                Our marketing website and web broadcast portal utilize essential session tokens and strictly functional cookies to ensure secure login authentication, CSRF cross-site request forgery prevention, and portal theme preferences.
              </p>
              <p>
                We do not sell, rent, or lease consumer or customer data to third-party ad networks or data brokers under any circumstances.
              </p>
            </section>

            {/* Section 10 */}
            <section id="dpo" className="legal-section">
              <h2>
                <span className="legal-section-number">10</span>
                Data Protection Officer &amp; Privacy Contact
              </h2>
              <p>
                To exercise any privacy rights, request a copy of our Standard Data Processing Addendum (DPA), or escalate data security questions, please reach out to our dedicated Data Protection team:
              </p>

              <div className="legal-contact-box">
                <div className="legal-contact-text">
                  <h4>NAMX Telecom Data Protection &amp; Privacy Office</h4>
                  <p>Inquiries regarding GDPR compliance, DPA execution, CDR redaction &amp; security audits.</p>
                </div>
                <a href="mailto:admin@namxtelecom.site?subject=Data%20Protection%20%26%20Privacy%20Inquiry" className="legal-contact-btn">
                  🛡️ Contact DPO Team
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

export default PrivacyPage;
