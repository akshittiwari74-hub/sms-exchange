import { motion } from "framer-motion";
import "../styles/components/LoadingScreen.css";

export const LoadingScreen = ({ isLoading = true }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-container">
        <div className="loading-logo">
          <motion.div
            className="loading-circle"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading Premium Experience
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
