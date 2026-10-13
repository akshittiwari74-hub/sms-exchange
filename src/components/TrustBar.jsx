import { motion } from "framer-motion";
import "../styles/components/TrustBar.css";

export const TrustBar = () => {
  const badges = [
    {
      icon: "🛡️",
      title: "ISO/IEC 27001",
      subtitle: "Security Certified",
    },
    {
      icon: "🔒",
      title: "GDPR Compliant",
      subtitle: "Data Privacy Standards",
    },
    {
      icon: "🌐",
      title: "GSMA Standard",
      subtitle: "Carrier Interconnects",
    },
    {
      icon: "⚡",
      title: "SMPP v3.4 / v5.0",
      subtitle: "High TPS Protocol",
    },
    {
      icon: "🧱",
      title: "SS7 Shield",
      subtitle: "Anti-Fraud Firewall",
    },
    {
      icon: "🔐",
      title: "TLS 1.3 Encrypted",
      subtitle: "Zero-Trust Transit",
    },
  ];

  return (
    <div className="trust-bar-wrapper">
      <div className="container">
        <motion.div 
          className="trust-bar-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="trust-bar-header">
            <span className="trust-pulse-dot" />
            <span className="trust-header-text">Enterprise Telecom Security & Protocol Infrastructure</span>
          </div>

          <div className="trust-badges-grid">
            {badges.map((badge, idx) => (
              <div key={idx} className="trust-badge-card">
                <span className="trust-badge-icon">{badge.icon}</span>
                <div className="trust-badge-info">
                  <span className="trust-badge-title">{badge.title}</span>
                  <span className="trust-badge-sub">{badge.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustBar;
