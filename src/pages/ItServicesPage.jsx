import { useState } from "react";
import Button from "../components/Button";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";
import "../styles/pages/ServicesWings.css";
import "../styles/components/FAQ.css";

export const ItServicesPage = ({ onOpenInquiriesModal, navigate }) => {
  const [activeStackTab, setActiveStackTab] = useState("fullstack");
  const [openFaq, setOpenFaq] = useState(null);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (navigate) navigate(path);
  };

  const itFaqs = [
    {
      q: "What types of custom enterprise software does NAMX Telecom engineer?",
      a: "NAMX Telecom develops scalable full-stack web platforms, multi-tenant SaaS dashboards, telecom billing & CDR mediation engines, high-throughput customer portals, and real-time transaction processing platforms built with Node.js, Go, Python, and React/Next.js."
    },
    {
      q: "Can you engineer custom SMPP gateways and telecom routing engines?",
      a: "Yes. We specialize in carrier-grade SMPP v3.4 and v5.0 gateway engineering, dynamic Least Cost Routing (LCR) algorithms, SS7/SIGTRAN protocol integrations, SMS firewall security, and automated HLR lookup systems capable of handling tens of thousands of requests per second."
    },
    {
      q: "Do you offer Cloud Architecture, DevOps, and 24/7 SRE NOC management?",
      a: "Yes, our DevOps & Cloud infrastructure team manages mission-critical AWS, Google Cloud, and bare-metal Kubernetes clusters with automated CI/CD pipelines, zero-downtime deployment strategies, DDoS mitigation, and round-the-clock NOC monitoring with 99.99% uptime SLAs."
    },
    {
      q: "Can NAMX build custom AI conversational agents for WhatsApp and RCS?",
      a: "Yes. We build enterprise AI chatbots, NLP support bots, and LLM-powered virtual assistants integrated directly with WhatsApp Business API, RCS Messaging, and your core CRM/ERP database for automated customer support and transaction workflows."
    },
    {
      q: "What engagement models and SLAs are available for IT services?",
      a: "We provide dedicated engineering squads, project-based fixed-deliverable contracts, and staff augmentation models. All production telecom and cloud services are backed by enterprise Service Level Agreements (SLAs) including 15-minute emergency response times and 99.99% infrastructure availability."
    }
  ];

  const itPillars = [
    {
      num: "WING 01",
      title: "Custom Software & Enterprise Web Applications",
      desc: "Full-cycle engineering of scalable web applications, enterprise client portals, real-time analytics dashboards, and multi-tenant SaaS products.",
      chips: ["React / Next.js", "Node.js / Express", "Python / FastAPI", "Go (Golang)", "PostgreSQL", "Tailwind / Modern CSS"]
    },
    {
      num: "WING 02",
      title: "Telecom Software & SMPP Gateway Engineering",
      desc: "Architecting high-throughput SMPP v3.4/v5.0 gateway nodes, real-time CDR billing & mediation engines, dynamic LCR routing algorithms, and SS7 anti-fraud firewalls.",
      chips: ["SMPP v3.4 / v5.0", "Kannel / Jasmin", "Least Cost Routing (LCR)", "CDR Mediation", "SS7 / SIGTRAN", "HLR Lookup Engines"]
    },
    {
      num: "WING 03",
      title: "Cloud Architecture, DevOps & SRE",
      desc: "Enterprise cloud deployments, container orchestration, zero-downtime CI/CD pipelines, automated scaling, and resilient multi-region infrastructure.",
      chips: ["AWS / GCP / DigitalOcean", "Kubernetes (K8s)", "Docker", "Terraform IaC", "GitHub Actions", "HAProxy / Nginx"]
    },
    {
      num: "WING 04",
      title: "AI Automation, LLM Agents & Chatbots",
      desc: "Custom generative AI agents, WhatsApp & RCS automated customer support bots, RAG semantic search systems, and automated CRM workflow integrations.",
      chips: ["OpenAI / Claude LLMs", "WhatsApp AI Bots", "RCS Conversational AI", "Vector DBs (Pinecone/Qdrant)", "LangChain", "Salesforce / HubSpot"]
    },
    {
      num: "WING 05",
      title: "API Engineering & Enterprise Integrations",
      desc: "Designing secure, high-concurrency RESTful and gRPC APIs, payment gateway connectors (Stripe, USDT/Crypto, Bank APIs), and real-time webhook dispatchers.",
      chips: ["RESTful / gRPC / GraphQL", "Stripe & USDT Crypto", "Webhook Dispatchers", "Redis Pub/Sub", "Kafka / RabbitMQ", "OAuth2 / JWT"]
    },
    {
      num: "WING 06",
      title: "Cybersecurity, Audits & 24/7 Managed NOC",
      desc: "Penetration testing, vulnerability mitigation, DDoS defense, infrastructure hardening, and 24/7/365 network operations center monitoring and incident triage.",
      chips: ["Penetration Testing", "OWASP Audits", "DDoS Mitigation", "24/7 NOC Monitoring", "SIEM Alerting", "Prometheus & Grafana"]
    }
  ];

  const techStacks = {
    fullstack: [
      { name: "React 19 / Next.js", role: "Modern frontend web architectures & SSR" },
      { name: "Node.js / TypeScript", role: "High-concurrency backend services" },
      { name: "Python / Django / FastAPI", role: "Data intensive APIs & machine learning" },
      { name: "Go (Golang)", role: "Ultra-low latency microservices & network tools" }
    ],
    telecom: [
      { name: "SMPP v3.4 / v5.0 Protocol", role: "Carrier messaging sessions & transceiver binds" },
      { name: "Kannel & Custom SMPP Daemons", role: "High-speed SMS gateways capable of 20K+ TPS" },
      { name: "CDR Mediation & Rating Engine", role: "Real-time wholesale billing & margin calculators" },
      { name: "Dynamic LCR Routing Core", role: "Price and quality-of-service least cost routing" }
    ],
    cloud: [
      { name: "Kubernetes & Docker", role: "Containerized microservice cluster orchestration" },
      { name: "AWS & Google Cloud", role: "Global enterprise cloud infrastructure" },
      { name: "Terraform & Ansible", role: "Infrastructure-as-Code & automated server provisioning" },
      { name: "Prometheus & Grafana", role: "24/7 telemetry, latency tracking & anomaly alerts" }
    ],
    database: [
      { name: "PostgreSQL & MySQL", role: "ACID compliant relational transaction storage" },
      { name: "Redis & KeyDB", role: "In-memory caching, rate limiting & session stores" },
      { name: "ClickHouse & Elasticsearch", role: "Petabyte-scale CDR log analytics and telemetry" },
      { name: "RabbitMQ & Apache Kafka", role: "Decoupled asynchronous message streaming queues" }
    ]
  };

  const deliverySteps = [
    { step: "01", title: "Discovery & Scoping", desc: "Detailed requirements gathering, system architecture planning, and technical milestone definition." },
    { step: "02", title: "Architectural Design", desc: "Database schemas, API contracts, security blueprints, and high-availability design." },
    { step: "03", title: "Agile Development", desc: "Bi-weekly sprint deliverables, transparent Git commits, and staging environment demos." },
    { step: "04", title: "QA & Load Testing", desc: "Automated regression testing, rigorous security scanning, and high-volume stress tests." },
    { step: "05", title: "Production Deployment", desc: "Zero-downtime deployment, DNS configuration, monitoring hooks, and 24/7 SLA handover." }
  ];

  return (
    <div className="page-it-services">
      {/* Hero Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="wing-hero-badge it">💻 NAMX Enterprise Technology Wing</span>
          <h1>Full-Suite IT Services, Telecom Engineering &amp; Cloud Solutions</h1>
          <p>
            Beyond wholesale messaging: Partner with our seasoned engineering team for custom software development, carrier-grade SMPP gateway engineering, cloud DevOps, AI automation, and 24/7 managed NOC services.
          </p>
          <div className="wing-hero-actions">
            <Button
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              variant="primary"
              size="lg"
            >
              Consult With Our Lead Architect
            </Button>
            <a
              href="/services"
              onClick={(e) => handleNavClick(e, "/services")}
              className="wing-btn-secondary"
            >
              View Telecom Services ➔
            </a>
          </div>
        </div>
      </div>

      {/* 6 Key IT Service Wings */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Enterprise Capabilities</p>
            <h2>6 Core Engineering Wings We Provide</h2>
            <p>From initial prototype to mission-critical telecom-grade platforms handling millions of daily transactions.</p>
          </div>

          <div className="it-pillars-grid">
            {itPillars.map((p) => (
              <div key={p.num} className="it-pillar-card">
                <span className="it-pillar-num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="it-tech-chips">
                  {p.chips.map((chip, idx) => (
                    <li key={idx} className="it-tech-chip">{chip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Matrix */}
      <section className="wing-features-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Technology Arsenal</p>
            <h2>Modern, Battle-Tested Technology Stacks</h2>
            <p>We choose high-performance frameworks and rock-solid tools designed for 99.99% uptime.</p>
          </div>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
            <button
              type="button"
              className={`wing-btn-secondary ${activeStackTab === "fullstack" ? "active" : ""}`}
              style={{
                borderColor: activeStackTab === "fullstack" ? "var(--accent-cyan)" : undefined,
                background: activeStackTab === "fullstack" ? "rgba(6, 182, 212, 0.15)" : undefined
              }}
              onClick={() => setActiveStackTab("fullstack")}
            >
              ⚡ Full-Stack &amp; Web
            </button>
            <button
              type="button"
              className={`wing-btn-secondary ${activeStackTab === "telecom" ? "active" : ""}`}
              style={{
                borderColor: activeStackTab === "telecom" ? "var(--accent-cyan)" : undefined,
                background: activeStackTab === "telecom" ? "rgba(6, 182, 212, 0.15)" : undefined
              }}
              onClick={() => setActiveStackTab("telecom")}
            >
              📡 Telecom &amp; SMPP Gateways
            </button>
            <button
              type="button"
              className={`wing-btn-secondary ${activeStackTab === "cloud" ? "active" : ""}`}
              style={{
                borderColor: activeStackTab === "cloud" ? "var(--accent-cyan)" : undefined,
                background: activeStackTab === "cloud" ? "rgba(6, 182, 212, 0.15)" : undefined
              }}
              onClick={() => setActiveStackTab("cloud")}
            >
              ☁️ Cloud &amp; DevOps
            </button>
            <button
              type="button"
              className={`wing-btn-secondary ${activeStackTab === "database" ? "active" : ""}`}
              style={{
                borderColor: activeStackTab === "database" ? "var(--accent-cyan)" : undefined,
                background: activeStackTab === "database" ? "rgba(6, 182, 212, 0.15)" : undefined
              }}
              onClick={() => setActiveStackTab("database")}
            >
              🗄️ Databases &amp; Queues
            </button>
          </div>

          <div className="info-grid-2">
            {techStacks[activeStackTab].map((item, idx) => (
              <div key={idx} className="info-card">
                <span className="info-icon">⚙️</span>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Lifecycle */}
      <section className="it-process-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Agile Delivery</p>
            <h2>How We Build &amp; Deliver Your Solutions</h2>
            <p>A structured, transparent engineering lifecycle with dedicated sprint reporting and continuous integration.</p>
          </div>

          <div className="process-steps-grid">
            {deliverySteps.map((s) => (
              <div key={s.step} className="process-step-card">
                <div className="process-step-idx">{s.step}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Cross-Link Banner */}
          <div className="cross-wing-banner">
            <div className="cross-banner-content">
              <h4>Need Omnichannel Telecom Messaging Infrastructure?</h4>
              <p>Combine your custom software with our WhatsApp Business API and RCS Messaging Gateways for unified customer engagement.</p>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Button
                href="/whatsapp-business"
                onClick={(e) => handleNavClick(e, "/whatsapp-business")}
                variant="secondary"
                size="md"
              >
                WhatsApp API ➔
              </Button>
              <Button
                href="/rcs-messaging"
                onClick={(e) => handleNavClick(e, "/rcs-messaging")}
                variant="secondary"
                size="md"
              >
                RCS Gateway ➔
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (SEO Optimized) */}
      <section className="faq">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Frequently Asked Questions</p>
            <h2>Enterprise IT &amp; Telecom Engineering FAQs</h2>
            <p className="faq-subtext">Common questions regarding software architecture, custom SMPP gateways, cloud security, and SLA contracts.</p>
          </div>

          <div className="faq-list">
            {itFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-q-text">
                      <span className="faq-badge">IT Services</span>
                      <span>{faq.q}</span>
                    </div>
                    <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct="IT Services & Software Dev" />
    </div>
  );
};

export default ItServicesPage;
