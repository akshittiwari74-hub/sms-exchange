import CTA from "../components/CTA";
import Coverage from "../components/Coverage";
import "../styles/pages/Subpages.css";

export const ContactPage = ({ onOpenInquiriesModal }) => {
  return (
    <div className="page-contact">
      <div className="page-banner">
        <div className="container">
          <p className="stats-eyebrow">Singapore HQ &amp; Global NOC</p>
          <h1>Enterprise Consultation &amp; Carrier Onboarding</h1>
          <p>
            Connect directly with our Connectivity Desk in Singapore to set up custom wholesale rate cards, SMPP v3.4 binds, API tokens, or campaign portal credentials.
          </p>
        </div>
      </div>

      {/* Direct NOC Contact Cards */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="info-grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            <div className="info-card contact-detail-card">
              <span className="info-icon">📱</span>
              <h3>WhatsApp Direct</h3>
              <p>Instant quotes, route testing &amp; 2FA onboarding.</p>
              <a
                href="https://wa.me/919306529891?text=Hello%20NAMX%20Telecom%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-btn"
                style={{ borderColor: "#25D366", color: "#25D366" }}
              >
                +91 93065 29891
              </a>
            </div>

            <div className="info-card contact-detail-card">
              <span className="info-icon">✈️</span>
              <h3>Telegram NOC Desk</h3>
              <p>Instant wholesale route clearing &amp; technical NOC updates.</p>
              <a
                href="https://t.me/namxtelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-btn"
                style={{ borderColor: "#229ED9", color: "#229ED9" }}
              >
                @namxtelecom
              </a>
            </div>

            <div className="info-card contact-detail-card">
              <span className="info-icon">💼</span>
              <h3>MS Teams / Email</h3>
              <p>Direct connectivity desk inquiry &amp; enterprise contracts.</p>
              <a
                href="mailto:namxtelecom@gmail.com"
                className="contact-link-btn"
                style={{ borderColor: "#7B83EB", color: "#7B83EB" }}
              >
                namxtelecom@gmail.com
              </a>
            </div>

            <div className="info-card contact-detail-card">
              <span className="info-icon">🏢</span>
              <h3>Singapore Headquarters</h3>
              <p>Network Operations Center (NOC) &amp; Carrier Clearing House.</p>
              <span className="location-badge">📍 Singapore Telecom Hub</span>
            </div>
          </div>
        </div>
      </section>

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
      <Coverage />
    </div>
  );
};

export default ContactPage;
