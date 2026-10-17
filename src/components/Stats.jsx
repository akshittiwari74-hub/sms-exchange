import React from "react";
import "../styles/components/Stats.css";

export const AnimatedCounter = ({ end = 100, duration = 2, prefix = "", suffix = "", decimals = 0 }) => {
  const [count, setCount] = React.useState(end);

  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Number(start.toFixed(decimals)));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [decimals, duration, end]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  const capabilities = [
    { value: "Direct", label: "Carrier Interconnects" },
    { value: "SMPP", label: "v3.4 / v5.0 Protocol" },
    { value: "Global", label: "Wholesale Corridors" },
    { value: "Active", label: "NOC & Technical Support" },
  ];

  return (
    <section id="about" className="stats">
      <div className="stats-intro">
        <p className="stats-eyebrow">Enterprise Infrastructure</p>
        <h2>Enterprise-grade SMS infrastructure built for performance.</h2>
        <p>
          NAMX Telecom powers messaging for carriers, aggregators, enterprise teams and CPaaS providers with reliable routing and direct carrier links.
        </p>
      </div>

      <div className="stats-container">
        {capabilities.map((item, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">{item.value}</div>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
