import "../styles/components/Coverage.css";

export const Coverage = () => {
  const regions = [
    { 
      flag: "🌏", 
      name: "Asia Pacific", 
      countries: "42+ Countries", 
      mnoLinks: "85+ Direct MNOs",
      avgLatency: "1.6s Avg Latency",
      connectivity: "Direct Zero-Hop Routes" 
    },
    { 
      flag: "🌍", 
      name: "Europe", 
      countries: "48+ Countries", 
      mnoLinks: "65+ Direct MNOs",
      avgLatency: "1.2s Avg Latency",
      connectivity: "Low-PDU Interconnects" 
    },
    { 
      flag: "🕌", 
      name: "Middle East & GCC", 
      countries: "18+ Countries", 
      mnoLinks: "30+ Direct MNOs",
      avgLatency: "1.4s Avg Latency",
      connectivity: "Carrier-Grade Hubbing" 
    },
    { 
      flag: "🌍", 
      name: "Africa", 
      countries: "35+ Countries", 
      mnoLinks: "40+ Direct MNOs",
      avgLatency: "2.2s Avg Latency",
      connectivity: "High Resilience Binds" 
    },
    { 
      flag: "🗽", 
      name: "North America", 
      countries: "10+ Countries", 
      mnoLinks: "25+ Carrier Hubs",
      avgLatency: "1.1s Avg Latency",
      connectivity: "Verified 10DLC & Toll-Free" 
    },
    { 
      flag: "🌎", 
      name: "Latin America", 
      countries: "20+ Countries", 
      mnoLinks: "35+ Direct MNOs",
      avgLatency: "2.0s Avg Latency",
      connectivity: "Multi-Operator Access" 
    },
  ];

  return (
    <section id="coverage" className="coverage">
      <div className="coverage-header">
        <p className="stats-eyebrow">Global Reach</p>
        <h2>195+ Countries Connected via Direct MNO Routes</h2>
        <p>Our telecommunications network spans all major global SMS corridors, delivering sub-second SLA performance for transactional and OTP traffic.</p>
      </div>

      <div className="coverage-grid">
        {regions.map((region) => (
          <div key={region.name} className="region-card">
            <div className="region-top">
              <span className="region-flag">{region.flag}</span>
              <h3>{region.name}</h3>
            </div>
            <ul className="region-stats-list">
              <li>
                <strong>Markets Served</strong>
                <span className="region-stat-val">{region.countries}</span>
              </li>
              <li>
                <strong>Direct Interconnects</strong>
                <span className="region-stat-val">{region.mnoLinks}</span>
              </li>
              <li>
                <strong>Route Benchmark</strong>
                <span className="region-stat-val highlight">{region.avgLatency}</span>
              </li>
              <li>
                <strong>Protocol Standard</strong>
                <span className="region-stat-val">{region.connectivity}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coverage;
