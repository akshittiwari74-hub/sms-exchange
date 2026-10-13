import React from "react";
import "../styles/components/Stats.css";

export const AnimatedCounter = ({ end = 100, duration = 2, prefix = "", suffix = "", decimals = 0 }) => {
  const [count, setCount] = React.useState(0);

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
  const stats = [
    { label: "Countries", value: 195, suffix: "+" },
    { label: "Partners", value: 250, suffix: "+" },
    { label: "Delivery", value: 99.9, suffix: "%", decimals: 1 },
    { label: "Support", value: 24, suffix: "×7" },
  ];

  return (
    <section id="about" className="stats">
      <div className="stats-intro">
        <p className="stats-eyebrow">Trusted Worldwide</p>
        <h2>Enterprise-grade SMS infrastructure built for performance.</h2>
        <p>
          NAMX Telecom powers global messaging for carriers, aggregators, enterprise teams and CPaaS providers with reliable routing and premium delivery.
        </p>
      </div>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">
              <AnimatedCounter
                end={stat.value}
                duration={2}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
              />
            </div>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
