import "../styles/components/Footer.css";

export const Footer = ({ navigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>NAMX Telecom</h3>
          <p>Global wholesale SMS connectivity, carrier-grade SMPP v3.4/v5.0 binds, Meta Cloud WhatsApp API, Google RCS messaging, and enterprise cloud engineering.</p>
          <div className="footer-status-pill" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', fontSize: '13px', color: '#10b981' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            <span>Global NOC Active · 99.99% Uptime SLA</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Messaging &amp; APIs</h4>
          <a href="/services" onClick={(e) => handleLinkClick(e, "/services")}>A2P SMS Gateway &amp; SMPP</a>
          <a href="/whatsapp-business" onClick={(e) => handleLinkClick(e, "/whatsapp-business")}>WhatsApp Business API</a>
          <a href="/rcs-messaging" onClick={(e) => handleLinkClick(e, "/rcs-messaging")}>RCS Business Messaging</a>
          <a href="/it-services" onClick={(e) => handleLinkClick(e, "/it-services")}>Enterprise IT &amp; Cloud DevOps</a>
          <a href="/api" onClick={(e) => handleLinkClick(e, "/api")}>Developer REST &amp; SMPP Specs</a>
          <a href="/glossary" onClick={(e) => handleLinkClick(e, "/glossary")}>Telecom Protocol Glossary</a>
        </div>

        <div className="footer-column">
          <h4>Global SMS Corridors</h4>
          <a href="/bulk-sms-usa" onClick={(e) => handleLinkClick(e, "/bulk-sms-usa")}>Bulk SMS USA &amp; 10DLC</a>
          <a href="/bulk-sms-uk" onClick={(e) => handleLinkClick(e, "/bulk-sms-uk")}>Bulk SMS UK &amp; Europe</a>
          <a href="/bulk-sms-uae" onClick={(e) => handleLinkClick(e, "/bulk-sms-uae")}>Bulk SMS UAE &amp; Middle East</a>
          <a href="/bulk-sms-india" onClick={(e) => handleLinkClick(e, "/bulk-sms-india")}>Bulk SMS India &amp; DLT Routes</a>
          <a href="/bulk-sms-malaysia" onClick={(e) => handleLinkClick(e, "/bulk-sms-malaysia")}>Bulk SMS Malaysia &amp; APAC</a>
          <a href="/coverage" onClick={(e) => handleLinkClick(e, "/coverage")}>195+ Countries Coverage</a>
          <a href="/rates" onClick={(e) => handleLinkClick(e, "/rates")}>Live Wholesale Rate Cards</a>
        </div>

        <div className="footer-column">
          <h4>Technical Telecom Guides</h4>
          <a href="/insights/what-is-smpp-v34-guide" onClick={(e) => handleLinkClick(e, "/insights/what-is-smpp-v34-guide")}>What is SMPP v3.4? Complete Guide</a>
          <a href="/insights/a2p-vs-p2p-sms-routing" onClick={(e) => handleLinkClick(e, "/insights/a2p-vs-p2p-sms-routing")}>A2P vs P2P Routing Explained</a>
          <a href="/industries" onClick={(e) => handleLinkClick(e, "/industries")}>Industry Solutions &amp; Compliance</a>
          <a href="/faq" onClick={(e) => handleLinkClick(e, "/faq")}>Telecom Engineering FAQ</a>
          <a href="/insights" onClick={(e) => handleLinkClick(e, "/insights")}>Telecom Insights &amp; Articles</a>
        </div>

        <div className="footer-column">
          <h4>Support &amp; NOC</h4>
          <a href="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>Enterprise Sales &amp; Custom Binds</a>
          <a href="https://wa.me/919306529891?text=Hello%20NAMX%20Telecom" target="_blank" rel="noopener noreferrer">💬 WhatsApp: +91 93065 29891</a>
          <a href="https://t.me/namxtelecom" target="_blank" rel="noopener noreferrer">✈️ Telegram: @namxtelecom</a>
          <a href="mailto:admin@namxtelecom.site">✉️ admin@namxtelecom.site</a>
          <a href="/terms" onClick={(e) => handleLinkClick(e, "/terms")}>Terms &amp; Conditions</a>
          <a href="/privacy" onClick={(e) => handleLinkClick(e, "/privacy")}>Privacy Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© {currentYear} NAMX Telecom. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="/terms" onClick={(e) => handleLinkClick(e, "/terms")}>Terms &amp; Conditions</a>
          <span className="footer-legal-separator">·</span>
          <a href="/privacy" onClick={(e) => handleLinkClick(e, "/privacy")}>Privacy Policy</a>
        </div>
        <span className="footer-bottom-location">Tier-1 Direct Carrier Interconnects · GSMA Standard Architecture</span>
      </div>
    </footer>
  );
};

export default Footer;
