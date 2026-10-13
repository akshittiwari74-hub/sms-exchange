import { useEffect, useRef } from "react";
import "../styles/components/CursorGlow.css";

const CursorGlow = () => {
  const glowRef = useRef(null);
  const frameRef = useRef(null);

  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  useEffect(() => {
    if (isTouchDevice) return;
    const glow = glowRef.current;
    if (!glow) return;

    const move = (e) => {
      if (frameRef.current) return;

      frameRef.current = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        glow.classList.add("visible");
        frameRef.current = null;
      });
    };

    const leave = () => {
      glow.classList.remove("visible");
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  if (isTouchDevice) return null;
  return <div ref={glowRef} className="cursor-glow" />;
};

export default CursorGlow;