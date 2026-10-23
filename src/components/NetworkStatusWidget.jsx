import "../styles/components/NetworkStatusWidget.css";

export const NetworkStatusWidget = () => {
  const nodes = [
    { city: "Amsterdam AMS-IX", hub: "Primary SS7 Gateway", ping: "14ms", status: "Operational", uptime: "100%" },
    { city: "Frankfurt Equinix", hub: "EU Interconnect Switch", ping: "28ms", status: "Operational", uptime: "100%" },
    { city: "Dubai DIC Hub", hub: "MENA Regional Gateways", ping: "22ms", status: "Operational", uptime: "100%" },
    { city: "London Equinix LD4", hub: "UK Carrier Exchange", ping: "31ms", status: "Operational", uptime: "99.98%" },
    { city: "New York Equinix NY4", hub: "US Direct MNO Binds", ping: "38ms", status: "Operational", uptime: "100%" },
    { city: "Tokyo Equinix TY3", hub: "APAC High-Speed Node", ping: "18ms", status: "Operational", uptime: "100%" },
  ];

  return (
    <div className="network-status-card">
      <div className="network-status-header">
        <div>
          <span className="live-pulse-badge">
            <span className="pulse-dot"></span> Live Global Network Status
          </span>
          <h2>Real-Time Telecom Signal Latency &amp; Node Status</h2>
          <p>Continuous automated SS7 ping benchmarks across our global data center exchanges.</p>
        </div>
        <div className="global-uptime-pill">
          <span className="uptime-num">99.99%</span>
          <span className="uptime-label">Global Fleet SLA</span>
        </div>
      </div>

      <div className="network-nodes-grid">
        {nodes.map((node) => (
          <div key={node.city} className="node-item">
            <div className="node-top">
              <span className="node-city">{node.city}</span>
              <span className="node-status-badge">
                <span className="green-dot"></span> {node.status}
              </span>
            </div>
            <p className="node-hub">{node.hub}</p>
            <div className="node-metrics">
              <span>⚡ Latency: <strong>{node.ping}</strong></span>
              <span>🔒 Uptime: <strong>{node.uptime}</strong></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkStatusWidget;
