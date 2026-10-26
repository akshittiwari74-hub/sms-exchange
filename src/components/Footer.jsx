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
          <p>Global wholesale SMS connectivity, carrier-grade SMPP v3.4/v5.0 binds, Web broadcast portal, and enterprise REST APIs.</p>
        </div>
        <div className="footer-column">
          <h3>Products &amp; Solutions</h3>
          <a href="/services" onClick={(e) => handleLinkClick(e, "/services")}>A2P SMS Gateway &amp; SMPP</a>
          <a href="/whatsapp-business" onClick={(e) => handleLinkClick(e, "/whatsapp-business")}>WhatsApp Business Platform</a>
          <a href="/rcs-messaging" onClick={(e) => handleLinkClick(e, "/rcs-messaging")}>RCS Business Messaging</a>
          <a href="/it-services" onClick={(e) => handleLinkClick(e, "/it-services")}>Enterprise IT Services Wing</a>
          <a href="/api" onClick={(e) => handleLinkClick(e, "/api")}>Developer SMS &amp; API Suite</a>
        </div>
        <div className="footer-column">
          <h3>Company Navigation</h3>
          <a href="/" onClick={(e) => handleLinkClick(e, "/")}>Home</a>
          <a href="/rates" onClick={(e) => handleLinkClick(e, "/rates")}>Rates &amp; Estimator</a>
          <a href="/coverage" onClick={(e) => handleLinkClick(e, "/coverage")}>Global Coverage</a>
          <a href="/industries" onClick={(e) => handleLinkClick(e, "/industries")}>Industry Solutions</a>
          <a href="/faq" onClick={(e) => handleLinkClick(e, "/faq")}>Technical FAQ</a>
          <a href="/insights" onClick={(e) => handleLinkClick(e, "/insights")}>Telecom Insights</a>
          <a href="/glossary" onClick={(e) => handleLinkClick(e, "/glossary")}>Glossary</a>
          <a href="/terms" onClick={(e) => handleLinkClick(e, "/terms")}>Terms &amp; Conditions</a>
          <a href="/privacy" onClick={(e) => handleLinkClick(e, "/privacy")}>Privacy Policy</a>
          <a href="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>Enterprise Contact</a>
        </div>
        <div className="footer-column">
          <h3>Contact &amp; Connect</h3>
          <a href="https://wa.me/919306529891?text=Hello%20NAMX%20Telecom" target="_blank" rel="noopener noreferrer">💬 WhatsApp (+91 93065 29891)</a>
          <a href="https://t.me/namxtelecom" target="_blank" rel="noopener noreferrer">✈️ Telegram (@namxtelecom)</a>
          <a href="mailto:namxtelecom@gmail.com">💼 MS Teams: namxtelecom@gmail.com</a>
          <a href="mailto:admin@namxtelecom.site">✉️ admin@namxtelecom.site</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© {currentYear} NAMX Telecom. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="/terms" onClick={(e) => handleLinkClick(e, "/terms")}>Terms &amp; Conditions</a>
          <span className="footer-legal-separator">·</span>
          <a href="/privacy" onClick={(e) => handleLinkClick(e, "/privacy")}>Privacy Policy</a>
        </div>
        <span className="footer-bottom-location">Global Telecom Network &amp; Operations</span>
      </div>
    </footer>
  );
};

export default Footer;
