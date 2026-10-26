import { useState } from "react";
import Button from "./Button";
import "../styles/components/Navbar.css";

export const Navbar = ({ logo, currentPath = "/", navigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "Rates", path: "/rates", icon: "📊" },
    { label: "Coverage", path: "/coverage", icon: "🌐" },
    { label: "Services", path: "/services", icon: "⚡" },
    { label: "WhatsApp", path: "/whatsapp-business", icon: "💬" },
    { label: "RCS", path: "/rcs-messaging", icon: "📲" },
    { label: "IT Services", path: "/it-services", icon: "💻", badge: "NEW" },
    { label: "Industries", path: "/industries", icon: "🏦" },
    { label: "API & SMPP", path: "/api", icon: "🛠️" },
    { label: "FAQ", path: "/faq", icon: "📖" },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (navigate) {
      navigate(path);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a
          className="navbar-brand"
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          aria-label="NAMX Telecom home"
        >
          <div className="navbar-logo">
            <img src={logo} alt="NAMX Telecom Logo" width="160" height="36" decoding="async" fetchPriority="high" />
          </div>
          <span className="navbar-title">NAMX TELECOM</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="navbar-links-desktop">
          <div className="nav-menu-links">
            {links.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`navbar-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                  {item.badge && <span className="nav-badge-pill">{item.badge}</span>}
                </a>
              );
            })}
          </div>

          <div className="nav-actions-group">
            <Button
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              variant="primary"
              size="md"
              external={false}
              aria-label="Contact NAMX sales"
            >
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? "show" : ""}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-nav-links">
            {links.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`mobile-nav-item ${isActive ? "active" : ""}`}
                >
                  <span className="mobile-nav-icon">{item.icon}</span>
                  <span className="mobile-nav-text">
                    {item.label}
                    {item.badge && <span className="nav-badge-pill">{item.badge}</span>}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mobile-actions-group">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className="mobile-contact-btn"
            >
              ✉️ Contact Enterprise Sales
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
