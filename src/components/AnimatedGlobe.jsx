import { motion } from "framer-motion";
import "../styles/components/AnimatedGlobe.css";

const AnimatedGlobe = () => {
  const cities = [
    { x: 25, y: 35 },
    { x: 50, y: 30 },
    { x: 60, y: 45 },
    { x: 75, y: 55 },
    { x: 82, y: 40 },
    { x: 35, y: 70 },
    { x: 85, y: 75 },
  ];

  const connections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 0],
    [0, 5],
    [3, 6],
    [5, 2],
  ];

  return (
    <div className="globe-container">
      <motion.svg
        className="globe-svg"
        viewBox="0 0 100 100"
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <defs>
          <radialGradient id="globeGradient">
            <stop offset="0%" stopColor="rgba(6,182,212,.18)" />
            <stop offset="100%" stopColor="rgba(59,130,246,.08)" />
          </radialGradient>

          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#globeGradient)"
        />

        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="rgba(6,182,212,.25)"
          strokeWidth="1"
        />

        {connections.map(([a, b], idx) => (
          <motion.line
            key={idx}
            x1={cities[a].x}
            y1={cities[a].y}
            x2={cities[b].x}
            y2={cities[b].y}
            stroke="url(#lineGradient)"
            strokeWidth="0.7"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              delay: idx * 0.05,
            }}
          />
        ))}

        {cities.map((city, idx) => (
          <g key={idx}>
            {/* Only first three cities pulse */}
            {idx < 3 && (
              <motion.circle
                cx={city.x}
                cy={city.y}
                r="1.4"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.35"
                animate={{
                  r: [1.4, 2.8, 1.4],
                  opacity: [0.7, 0.2, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            <motion.circle
              cx={city.x}
              cy={city.y}
              r="0.9"
              fill="#06b6d4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.05,
              }}
            />
          </g>
        ))}
      </motion.svg>

      <motion.div
        className="globe-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className="label-text">Global Network</span>
        <span className="label-highlight">195+ Countries</span>
      </motion.div>
    </div>
  );
};

export default AnimatedGlobe;