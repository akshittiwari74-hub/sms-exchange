import { useEffect, useState } from "react";
import "../styles/components/ScrollProgress.css";

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let cachedDocHeight = 0;

    const updateDocHeight = () => {
      cachedDocHeight = document.documentElement.scrollHeight - window.innerHeight;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const scrolled = cachedDocHeight > 0 ? Math.min(1, Math.max(0, scrollTop / cachedDocHeight)) : 0;
          setScrollProgress(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    updateDocHeight();
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => {
      updateDocHeight();
      handleScroll();
    }, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${scrollProgress})` }}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress * 100)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Page scroll progress"
    />
  );
};

export default ScrollProgress;
