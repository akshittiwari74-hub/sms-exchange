import { useMemo } from "react";
import "../styles/components/ParticlesBackground.css";

const ParticlesBackground = ({ count = 30 }) => {
  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  const safeCount = isTouchDevice ? Math.min(count, 12) : count;

  const particles = useMemo(() => {
    return Array.from({ length: safeCount }, (_, i) => ({
      id: i,
      style: {
        "--delay": `${(Math.random() * 5).toFixed(2)}s`,
        "--duration": `${(12 + Math.random() * 12).toFixed(2)}s`,
        "--x": `${(Math.random() * 100).toFixed(2)}%`,
        "--y": `${(Math.random() * 100).toFixed(2)}%`,
        "--size": `${(2 + Math.random() * 4).toFixed(2)}px`,
        "--opacity": (0.08 + Math.random() * 0.22).toFixed(2),
      },
    }));
  }, [safeCount]);

  return (
    <div className="particles-background" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={particle.style}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;