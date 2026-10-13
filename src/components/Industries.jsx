import GlassCard from "./GlassCard";
import "../styles/components/Industries.css";

export const Industries = () => {
  const industries = [
    { 
      icon: "🏦", 
      title: "Banking & Financial Services", 
      badge: "PCI-DSS / ISO 27001",
      description: "Ultra-low latency delivery for 2FA OTPs, fraud alerts, card transaction receipts, and wire transfer authorizations." 
    },
    { 
      icon: "📶", 
      title: "Telecom Operators & Aggregators", 
      badge: "SMPP v3.4 / v5.0",
      description: "Wholesale SMS traffic exchange, bilateral hub clearing, zero-hop terminations, and capacity offloading." 
    },
    { 
      icon: "🛒", 
      title: "E-Commerce & Digital Platforms", 
      badge: "Real-time DLR Webhooks",
      description: "Order confirmations, shipment tracking updates, Flash sales notifications, and automated customer recovery messaging." 
    },
    { 
      icon: "🏥", 
      title: "Healthcare & Pharmaceuticals", 
      badge: "HIPAA / GDPR Ready",
      description: "Patient appointment reminders, prescription fulfillment alerts, and emergency care notification dispatches." 
    },
    { 
      icon: "🚚", 
      title: "Logistics & Supply Chain", 
      badge: "Global GPS Interconnect",
      description: "Driver dispatch alerts, package arrival pin codes, customs clearance updates, and automated delivery verification." 
    },
    { 
      icon: "🏛️", 
      title: "Government & Public Services", 
      badge: "High-Volume Priority SLA",
      description: "Civic announcements, emergency alert broadcasts, tax filing reminders, and public health outreach campaigns." 
    },
  ];

  return (
    <section id="industries" className="industries">
      <div className="section-heading">
        <p className="stats-eyebrow">Industry Solutions</p>
        <h2>Engineered for Regulated &amp; High-Volume Sectors</h2>
        <p className="industries-sub">Trusted by financial institutions, global telecom carriers, and digital enterprises requiring guaranteed delivery SLAs.</p>
      </div>

      <div className="industries-grid">
        {industries.map((item) => (
          <GlassCard key={item.title} className="industry-card" isHoverable>
            <div className="industry-top-row">
              <span className="industry-icon">{item.icon}</span>
              <span className="industry-compliance-badge">{item.badge}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Industries;
