import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import Button from "./Button";
import "../styles/components/Services.css";

export const Services = () => {
  const products = [
    {
      icon: "BULK",
      title: "Wholesale Bulk SMS Gateway",
      tagline: "High-Volume Carrier Termination",
      desc: "Enterprise Bulk SMS gateway engineered for mass messaging campaigns, transactional broadcasts, and global notification delivery with sub-second delivery reports.",
      specs: {
        throughput: "15,000+ TPS Global",
        latency: "< 2.0s Global Delivery",
        protocol: "HTTP REST / Web Portal",
        sla: "99.99% Uptime Commitment"
      },
      features: ["Upload & Cleanse Contact Lists", "Personalization Merge Tags", "Timezone-Aware Campaign Scheduling", "A/B Campaign Performance Testing", "Real-Time DLR Status Webhooks", "Sub-Account Role Permissions"],
    },
    {
      icon: "SMPP",
      title: "Bulk SMS SMPP v3.4 / v5.0 Gateway",
      tagline: "Carrier-Grade Protocol Binds",
      desc: "High-capacity SMPP protocol interconnects for telecom aggregators, MNOs, wholesale SMS brokers, and high-volume enterprise senders requiring dedicated transceiver sessions.",
      specs: {
        throughput: "10,000+ TPS per Session",
        latency: "< 1.5s Direct Hop",
        protocol: "SMPP v3.4 / v5.0 over TLS",
        sla: "24/7 Global NOC Support"
      },
      features: ["Transceiver / Transmitter Binds", "Dedicated Static IP Whitelisting", "Custom DLR Error Code Mapping", "Sub-second Windowed Acknowledgment", "Active Multi-Bind Load Balancing", "Real-Time Throughput Monitoring"],
    },
    {
      icon: "P2P",
      title: "International P2P Traffic Hubbing",
      tagline: "Bilateral Mobile Messaging Exchange",
      desc: "Global peer-to-peer (P2P) SMS hubbing and bilateral settlement for mobile network operators, MVNOs, and international aggregators with zero-hop roaming interconnects.",
      specs: {
        throughput: "Unlimited Bilateral Volume",
        latency: "< 1.2s Operator Hop",
        protocol: "SMPP / SIGTRAN / SS7",
        sla: "Direct MNO Agreement"
      },
      features: ["Bilateral Clearing & Settlement", "Zero-Hop Roaming Hub Connections", "Real-Time HLR Number Portability", "AA.19 Billing Standard Compliant", "SS7 Anti-Fraud & Anti-Spam Shield", "Flexible Credit & Swap Terms"],
    },
    {
      icon: "ROUTE",
      title: "Intelligent SMS Routing Engine",
      tagline: "Dynamic Least-Cost Routing (LCR)",
      desc: "Adaptive SS7 & Diameter dynamic SMS routing engine that automatically optimizes route selection based on real-time delivery rates, latency benchmarks, and carrier pricing.",
      specs: {
        throughput: "50,000+ QPS Route Engine",
        latency: "< 15ms Route Calculation",
        protocol: "Adaptive LCR Algorithmic",
        sla: "Automatic Failover Routing"
      },
      features: ["Dynamic Least-Cost Routing (LCR)", "Quality-of-Service (QoS) Tiering", "Real-Time Route Health Scoring", "Instant Automated Route Failover", "Sender ID Whitelist Protection", "Gray Route Detection & Blocking"],
    },
    {
      icon: "API",
      title: "Developer Bulk SMS REST API",
      tagline: "Programmable Messaging Stack",
      desc: "Developer-first Bulk SMS APIs with comprehensive SDKs, OpenAPI specs, Postman collections, and instant webhook callbacks for automated application integration.",
      specs: {
        throughput: "Auto-Scaling Endpoints",
        latency: "< 150ms API Response",
        protocol: "REST / JSON / OpenAPI",
        sla: "99.99% API Availability"
      },
      features: ["Node.js, Python, PHP & Java SDKs", "Sandbox Testing Environment", "Idempotency Key Verification", "Detailed Request/Response Logs", "Instant Webhook Retries", "Comprehensive API Docs"],
    },
    {
      icon: "A2P",
      title: "A2P Enterprise SMS Gateway",
      tagline: "High-Priority OTP & Mission-Critical Alerts",
      desc: "Direct-to-operator Application-to-Person messaging built specifically for time-critical OTPs, two-factor authentication, banking alerts, and transactional notifications.",
      specs: {
        throughput: "Up to 5,000 TPS Dedicated",
        latency: "< 2.5s Global Avg",
        protocol: "HTTP REST / JSON / SMPP",
        sla: "99.99% Guaranteed SLA"
      },
      features: ["Alpha/Numeric Sender ID", "Real-Time DLR Webhooks", "Concatenated SMS (GSM 03.38)", "Unicode & Multi-language", "Failover Traffic Rerouting", "Anti-Spam Content Filtering"],
    },
  ];

  return (
    <motion.section
      id="products"
      className="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="section-heading">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="stats-eyebrow"
        >
          Enterprise Telecom Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Wholesale Bulk SMS Services &amp; Messaging Gateway
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="services-subtext"
        >
          High-throughput Web Broadcast Portal, carrier-grade SMPP binds, and developer REST APIs engineered for enterprises, aggregators, and global businesses.
        </motion.p>
      </div>

      <div className="services-grid">
        {products.map((item, index) => (
          <GlassCard key={item.title} delay={index * 0.06} className="service-card" isHoverable>
            <div className="service-top-row">
              <div className="service-icon">{item.icon}</div>
              <span className="service-tagline">{item.tagline}</span>
            </div>

            <h3>{item.title}</h3>
            <p className="service-desc">{item.desc}</p>

            <div className="service-specs-grid">
              <div className="spec-box">
                <span className="spec-label">Throughput</span>
                <span className="spec-val">{item.specs.throughput}</span>
              </div>
              <div className="spec-box">
                <span className="spec-label">Avg Latency</span>
                <span className="spec-val">{item.specs.latency}</span>
              </div>
              <div className="spec-box">
                <span className="spec-label">Interface</span>
                <span className="spec-val">{item.specs.protocol}</span>
              </div>
              <div className="spec-box">
                <span className="spec-label">SLA Commitment</span>
                <span className="spec-val">{item.specs.sla}</span>
              </div>
            </div>

            <ul className="service-features-list">
              {item.features.map((feat) => (
                <li key={feat}>
                  <span className="feat-check">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="service-card-action">
              <Button href="#contact" variant="primary" size="md" external={false} aria-label={`Request proposal for ${item.title}`}>
                Request Proposal
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
