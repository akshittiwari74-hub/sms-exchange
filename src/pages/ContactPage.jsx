import CTA from "../components/CTA";
import Coverage from "../components/Coverage";
import "../styles/pages/Subpages.css";
import EmojiIcon from "../components/EmojiIcon";
import { PageHeader } from "../components/ui";

export const ContactPage = ({ onOpenInquiriesModal }) => {
  return (
    <div className="page-contact">
      <PageHeader path="/contact" eyebrow={<>Global HQ &amp; Carrier NOC</>} title={<>Enterprise Consultation &amp; Carrier Onboarding</>} intro={<>Connect directly with our 24/7 Global Connectivity Desk to set up custom wholesale rate cards, SMPP v3.4 binds, API tokens, or campaign portal credentials.</>} />

      {/* Direct NOC Contact Cards */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="info-grid-4">
            <div className="info-card contact-detail-card">
              <span className="info-icon"><EmojiIcon char="📱" /></span>
              <h3>WhatsApp Direct</h3>
              <p>Instant quotes, route testing &amp; 2FA onboarding.</p>
              <a
                href="https://wa.me/919306529891?text=Hello%20NAMX%20Telecom%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-btn"
                data-brand="whatsapp"
              >
                +91 93065 29891
              </a>
            </div>

            <div className="info-card contact-detail-card">
              <span className="info-icon"><EmojiIcon char="✈️" /></span>
              <h3>Telegram NOC Desk</h3>
              <p>Instant wholesale route clearing &amp; technical NOC updates.</p>
              <a
                href="https://t.me/namxtelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-btn"
                data-brand="telegram"
              >
                @namxtelecom
              </a>
            </div>

            <div className="info-card contact-detail-card">
              <span className="info-icon"><EmojiIcon char="💼" /></span>
              <h3>Email &amp; MS Teams</h3>
              <p>Direct connectivity desk inquiry &amp; enterprise contracts.</p>
              <a
                href="mailto:admin@namxtelecom.site"
                className="contact-link-btn"
                data-brand="teams"
              >
                admin@namxtelecom.site
              </a>
              <a
                href="mailto:namxtelecom@gmail.com"
                className="contact-link-btn"
                data-brand="teams-alt"
              >
                MS Teams: namxtelecom@gmail.com
              </a>
            </div>

            <div className="info-card contact-detail-card">
              <span className="info-icon"><EmojiIcon char="🏢" /></span>
              <h3>Global Operations Center</h3>
              <p>Network Operations Center (NOC) &amp; Carrier Clearing House.</p>
              <span className="location-badge">International Telecom Hub</span>
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
