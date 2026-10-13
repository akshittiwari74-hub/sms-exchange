import FAQ from "../components/FAQ";
import WhyChooseUs from "../components/WhyChooseUs";
import TelecomDictionary from "../components/TelecomDictionary";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";

export const FaqPage = ({ onOpenInquiriesModal }) => {
  return (
    <div className="page-faq">
      <div className="page-banner">
        <div className="container">
          <p className="stats-eyebrow">Technical Knowledgebase</p>
          <h1>Telecom Compliance &amp; Support Knowledgebase</h1>
          <p>
            Find detailed technical documentation regarding Sender ID regulations, SS7 anti-fraud firewalling, DLR error codes, SLA uptime guarantees, and onboarding procedures.
          </p>
        </div>
      </div>

      <FAQ />

      {/* Compliance Overview */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="info-grid-3">
            <div className="info-card">
              <span className="info-icon">🛡️</span>
              <h3>SS7 Anti-Fraud Firewall</h3>
              <p>
                Our core signaling network inspects all PDU payloads to prevent grey-route spoofing, SIM-farm bypass, and unauthorized Sender ID hijacking.
              </p>
            </div>
            <div className="info-card">
              <span className="info-icon">📝</span>
              <h3>Sender ID Whitelisting</h3>
              <p>
                Full support for Alphanumeric Sender IDs (up to 11 characters) and Numeric Shortcodes across regulatory bodies (DLT India, TRAE UAE, Infocomm Singapore).
              </p>
            </div>
            <div className="info-card">
              <span className="info-icon">⏱️</span>
              <h3>99.99% SLA Uptime</h3>
              <p>
                Backed by dual-redundant data centers in Singapore and Frankfurt with automatic failover across secondary carrier interconnects.
              </p>
            </div>
          </div>

          <TelecomDictionary />
        </div>
      </section>

      <WhyChooseUs />
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
    </div>
  );
};

export default FaqPage;
