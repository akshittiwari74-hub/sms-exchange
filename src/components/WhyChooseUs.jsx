import GlassCard from "./GlassCard";
import "../styles/components/WhyChooseUs.css";

export const WhyChooseUs = () => {
  const reasons = [
    { 
      icon: "🌐",
      title: "Direct Tier-1 MNO Connectivity", 
      description: "Bypass intermediary aggregators with zero-hop direct signaling interconnects for lower latency and higher delivery rates." 
    },
    { 
      icon: "⚡",
      title: "Carrier-Grade SMPP v3.4/v5.0", 
      description: "Dedicated high-TPS binds supporting thousands of messages per second with real-time DLR callback acknowledgments." 
    },
    { 
      icon: "🖥️",
      title: "24/7/365 Singapore NOC Monitoring", 
      description: "Our Global Operations Center in Singapore actively monitors traffic routes, latency spikes, and delivery rates around the clock." 
    },
    { 
      icon: "💻",
      title: "All-in-One Web Messaging Platform", 
      description: "Feature-packed cloud portal to launch campaigns, upload contacts, manage sender IDs, schedule broadcasts, and view analytics." 
    },
    { 
      icon: "🔁",
      title: "Multi-Region Redundancy & Failover", 
      description: "Geographically distributed datacenter hubs ensure automatic traffic rerouting if any local MNO link experiences degradation." 
    },
    { 
      icon: "📊",
      title: "Transparent Billing & CDR Logs", 
      description: "Clear wholesale rate cards, itemized Call Detail Records (CDR), and real-time delivery reports with zero hidden fees." 
    },
  ];

  return (
    <section className="why-choose">
      <div className="section-heading">
        <p className="stats-eyebrow">Enterprise Reliability</p>
        <h2>Built on Carrier-Grade Telecom Architecture</h2>
        <p className="why-subtext">Engineered to support mission-critical transactional messaging, OTP delivery, and global traffic exchange.</p>
      </div>

      <div className="why-grid">
        {reasons.map((item) => (
          <GlassCard key={item.title} className="why-card" isHoverable>
            <div className="why-icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
