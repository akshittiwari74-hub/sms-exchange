import { useState, useEffect, useRef } from "react";
import {
  ChevronDown, KeyRound, Cable, MessageCircle, Smartphone, Laptop, Globe, BarChart3,
  Code2, BookOpen, Library, HelpCircle, Landmark, Menu, X,
} from "lucide-react";
import "../styles/components/Navbar.css";

// Every link is rendered in the HTML (menus are hidden visually, not removed),
// so search engines can follow the full navigation.
const menus = [
  {
    id: "products",
    label: "Products",
    items: [
      { Icon: KeyRound, label: "OTP SMS", desc: "2FA codes on direct routes", path: "/otp-sms" },
      { Icon: Cable, label: "SMS & SMPP gateway", desc: "Wholesale A2P, binds and LCR", path: "/services" },
      { Icon: MessageCircle, label: "WhatsApp Business", desc: "Meta Cloud API messaging", path: "/whatsapp-business" },
      { Icon: Smartphone, label: "RCS Messaging", desc: "Branded rich messages", path: "/rcs-messaging" },
      { Icon: Laptop, label: "IT Services", desc: "Gateway, cloud and NOC engineering", path: "/it-services" },
    ],
  },
  {
    id: "coverage",
    label: "Coverage",
    items: [
      { Icon: Globe, label: "Global coverage", desc: "195+ countries, 250+ operators", path: "/coverage" },
      { flag: "🇺🇸", label: "USA", desc: "10DLC, toll-free, short codes", path: "/bulk-sms-usa" },
      { flag: "🇬🇧", label: "United Kingdom", desc: "Alphanumeric sender IDs", path: "/bulk-sms-uk" },
      { flag: "🇦🇪", label: "UAE", desc: "TDRA-registered senders", path: "/bulk-sms-uae" },
      { flag: "🇮🇳", label: "India", desc: "DLT-compliant routes", path: "/bulk-sms-india" },
      { flag: "🇲🇾", label: "Malaysia", desc: "MCMC rules and RM0.00", path: "/bulk-sms-malaysia" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    items: [
      { Icon: Code2, label: "API & SMPP docs", desc: "Endpoints, PDUs and code samples", path: "/api" },
      { Icon: BookOpen, label: "Guides", desc: "Engineering & compliance articles", path: "/insights" },
      { Icon: Landmark, label: "Industries", desc: "Banking, e-commerce, healthcare", path: "/industries" },
      { Icon: Library, label: "Glossary", desc: "Telecom & SMPP terminology", path: "/glossary" },
      { Icon: HelpCircle, label: "FAQ", desc: "Routing, billing and onboarding", path: "/faq" },
    ],
  },
];

const directLinks = [{ Icon: BarChart3, label: "Rates", path: "/rates" }];

export const Navbar = ({ logo, currentPath = "/", navigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on outside click / Escape
  useEffect(() => {
    const onDown = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null); };
    const onKey = (e) => { if (e.key === "Escape") { setOpenMenu(null); setMobileOpen(false); } };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileOpen);
  }, [mobileOpen]);

  const go = (e, path) => {
    e.preventDefault();
    setMobileOpen(false);
    setOpenMenu(null);
    if (navigate) navigate(path);
  };

  const menuActive = (menu) => menu.items.some((i) => i.path === currentPath);

  return (
    <nav className={`navbar${scrolled ? " is-scrolled" : ""}`} ref={navRef} aria-label="Main">
      <div className="navbar-container">
        <a className="navbar-brand" href="/" onClick={(e) => go(e, "/")} aria-label="NAMX Telecom home">
          <img src={logo} alt="" width="32" height="32" decoding="async" fetchPriority="high" className="navbar-logo-img" />
          <span className="navbar-title">NAMX Telecom</span>
        </a>

        {/* Desktop */}
        <ul className="nav-desktop">
          {menus.map((menu) => (
            <li
              key={menu.id}
              className={`nav-item has-menu${openMenu === menu.id ? " is-open" : ""}`}
              onMouseEnter={() => setOpenMenu(menu.id)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className={`nav-trigger${menuActive(menu) ? " is-active" : ""}`}
                aria-expanded={openMenu === menu.id}
                aria-controls={`menu-${menu.id}`}
                onClick={() => setOpenMenu(openMenu === menu.id ? null : menu.id)}
              >
                {menu.label} <ChevronDown size={15} aria-hidden="true" className="nav-chevron" />
              </button>
              <div id={`menu-${menu.id}`} className="nav-menu">
                <ul className={`nav-menu-grid${menu.items.length > 5 ? " cols-2" : ""}`}>
                  {menu.items.map((item) => (
                    <li key={item.path}>
                      <a
                        href={item.path}
                        onClick={(e) => go(e, item.path)}
                        className={`nav-menu-link${currentPath === item.path ? " is-active" : ""}`}
                      >
                        <span className="nav-menu-icon" aria-hidden="true">
                          {item.Icon ? <item.Icon size={18} strokeWidth={1.75} /> : item.flag}
                        </span>
                        <span>
                          <span className="nav-menu-label">{item.label}</span>
                          <span className="nav-menu-desc">{item.desc}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          {directLinks.map((l) => (
            <li key={l.path} className="nav-item">
              <a href={l.path} onClick={(e) => go(e, l.path)} className={`nav-trigger${currentPath === l.path ? " is-active" : ""}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href="/contact" onClick={(e) => go(e, "/contact")} className="btn btn--primary btn--md nav-cta-btn">
            Contact sales
          </a>
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div id="mobile-menu" className={`nav-mobile${mobileOpen ? " is-open" : ""}`}>
        <div className="nav-mobile-inner">
          {menus.map((menu) => (
            <div key={menu.id} className="nav-mobile-group">
              <p className="nav-mobile-heading">{menu.label}</p>
              {menu.items.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => go(e, item.path)}
                  className={`nav-mobile-link${currentPath === item.path ? " is-active" : ""}`}
                  tabIndex={mobileOpen ? 0 : -1}
                >
                  <span className="nav-menu-icon" aria-hidden="true">
                    {item.Icon ? <item.Icon size={18} strokeWidth={1.75} /> : item.flag}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          ))}
          <div className="nav-mobile-group">
            {directLinks.map((l) => (
              <a key={l.path} href={l.path} onClick={(e) => go(e, l.path)} className="nav-mobile-link" tabIndex={mobileOpen ? 0 : -1}>
                <span className="nav-menu-icon" aria-hidden="true"><l.Icon size={18} strokeWidth={1.75} /></span>
                {l.label}
              </a>
            ))}
          </div>
          <a href="/contact" onClick={(e) => go(e, "/contact")} className="btn btn--primary btn--lg nav-mobile-cta" tabIndex={mobileOpen ? 0 : -1}>
            Contact sales
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
