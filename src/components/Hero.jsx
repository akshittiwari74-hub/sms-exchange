import { motion } from "framer-motion";
import Button from "./Button";
import AnimatedGlobe from "./AnimatedGlobe";
import "../styles/components/Hero.css";

export const Hero = ({ navigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleNav = (e, path) => {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    }
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={false}
          animate="show"
          variants={containerVariants}
        >
          <motion.div className="hero-noc-status" variants={itemVariants}>
            <span className="status-live-pulse" />
            <span className="status-text">Global Operations Center · 99.98% Network Active</span>
          </motion.div>

          <div className="hero-headlines">
            <h1 id="hero-title">
              Global Wholesale Bulk SMS, <br />
              <span className="hero-gradient-text">SMPP Gateway &amp; International P2P Routing</span>
            </h1>
          </div>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Premier global Bulk SMS service provider &amp; international P2P traffic exchange. Dedicated SMPP v3.4/v5.0 binds over TLS, dynamic least-cost SMS routing (LCR), direct SS7 carrier interconnects, and developer REST APIs across 195+ countries.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Button
              href="https://customer.namxtelecom.site"
              variant="primary"
              size="lg"
              external={true}
              target="_blank"
              aria-label="Launch Messaging Platform"
            >
              🚀 Launch Platform
            </Button>

            <Button
              href="/contact"
              onClick={(e) => handleNav(e, "/contact")}
              variant="secondary"
              size="lg"
              external={false}
              aria-label="Contact NAMX Telecom sales"
            >
              Contact Sales
            </Button>

            <Button
              href="/rates"
              onClick={(e) => handleNav(e, "/rates")}
              variant="secondary"
              size="lg"
              external={false}
              aria-label="Inspect Live Rates & Calculator"
            >
              SMS Rate Estimator
            </Button>
          </motion.div>

          <motion.div className="hero-trust" variants={itemVariants}>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>195+ Countries Bulk SMS</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>SMPP v3.4/v5.0 &amp; REST API</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>International P2P Hubbing</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>LCR Dynamic SMS Routing</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-globe"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedGlobe />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
