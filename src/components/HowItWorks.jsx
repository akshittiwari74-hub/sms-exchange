import { motion } from "framer-motion";
import "../styles/components/HowItWorks.css";

export const HowItWorks = () => {
  const steps = [
    { title: "Contact Sales", description: "Share your use case, traffic profile and target regions." },
    { title: "Receive Pricing", description: "Get a tailored quote for routes, volume and technical requirements." },
    { title: "Get Credentials", description: "Provisioning and onboarding with secure access for your team." },
    { title: "Start Sending SMS", description: "Launch campaigns and monitor delivery through our platform." },
  ];

  return (
    <motion.section className="how-it-works" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <div className="section-heading">
        <p className="stats-eyebrow">How It Works</p>
        <h2>A clear path to enterprise-grade messaging.</h2>
      </div>

      <div className="timeline">
        {steps.map((step, index) => (
          <motion.div key={step.title} className="timeline-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }}>
            <div className="timeline-number">0{index + 1}</div>
            <div className="timeline-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorks;
