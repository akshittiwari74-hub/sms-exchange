import { useState, useMemo } from "react";
import "../styles/components/RouteRatesTable.css";

const routesList = [
  // Top Featured Wholesale Corridors (Negotiable on Volume)
  { country: "Spain 🇪🇸", code: "ES", region: "Europe", type: "Tier-1 Direct SS7 MNO", latency: "1.2s", rateEUR: 0.029, tps: "5,000 TPS", status: "Direct Live", topRoute: true },
  { country: "Italy 🇮🇹", code: "IT", region: "Europe", type: "Direct Operator Link", latency: "1.3s", rateEUR: 0.033, tps: "4,000 TPS", status: "Direct Live", topRoute: true },
  { country: "Austria 🇦🇹", code: "AT", region: "Europe", type: "Direct MNO Network", latency: "1.1s", rateEUR: 0.022, tps: "3,500 TPS", status: "Direct Live", topRoute: true },
  { country: "China 🇨🇳", code: "CN", region: "APAC", type: "Premium Direct Gateway", latency: "1.8s", rateEUR: 0.092, tps: "8,000 TPS", status: "Direct Live", topRoute: true },
  { country: "Denmark 🇩🇰", code: "DK", region: "Europe", type: "Direct Nordic Interconnect", latency: "1.2s", rateEUR: 0.042, tps: "3,000 TPS", status: "Direct Live", topRoute: true },
  { country: "Mexico 🇲🇽", code: "MX", region: "Americas", type: "Ultra-High Volume Route", latency: "1.5s", rateEUR: 0.0025, tps: "10,000 TPS", status: "Direct Live", topRoute: true },
  { country: "Slovakia 🇸🇰", code: "SK", region: "Europe", type: "Direct MNO Interconnect", latency: "1.3s", rateEUR: 0.025, tps: "3,000 TPS", status: "Direct Live", topRoute: true },
  { country: "Brazil 🇧🇷", code: "BR", region: "Americas", type: "Anatel Direct Carrier", latency: "1.7s", rateEUR: 0.0085, tps: "8,000 TPS", status: "Direct Live", topRoute: true },

  // Additional Europe Corridors
  { country: "United Kingdom 🇬🇧", code: "GB", region: "Europe", type: "Direct MNO Interconnect", latency: "1.2s", rateEUR: 0.022, tps: "4,000 TPS", status: "Direct Live" },
  { country: "Germany 🇩🇪", code: "DE", region: "Europe", type: "Direct Telecom Network", latency: "1.3s", rateEUR: 0.058, tps: "2,500 TPS", status: "Direct Live" },
  { country: "France 🇫🇷", code: "FR", region: "Europe", type: "MNO Interconnect", latency: "1.3s", rateEUR: 0.045, tps: "3,000 TPS", status: "Direct Live" },
  { country: "Netherlands 🇳🇱", code: "NL", region: "Europe", type: "Direct Telecom Network", latency: "1.2s", rateEUR: 0.048, tps: "3,500 TPS", status: "Direct Live" },
  { country: "Switzerland 🇨🇭", code: "CH", region: "Europe", type: "Direct Premium MNO", latency: "1.1s", rateEUR: 0.062, tps: "2,000 TPS", status: "Direct Live" },
  { country: "Sweden 🇸🇪", code: "SE", region: "Europe", type: "Direct Operator Link", latency: "1.2s", rateEUR: 0.044, tps: "2,500 TPS", status: "Direct Live" },
  { country: "Poland 🇵🇱", code: "PL", region: "Europe", type: "Direct MNO Interconnect", latency: "1.5s", rateEUR: 0.028, tps: "3,000 TPS", status: "Direct Live" },
  { country: "Portugal 🇵🇹", code: "PT", region: "Europe", type: "Direct Carrier Link", latency: "1.4s", rateEUR: 0.036, tps: "2,200 TPS", status: "Direct Live" },
  { country: "Ireland 🇮🇪", code: "IE", region: "Europe", type: "Direct Operator Link", latency: "1.2s", rateEUR: 0.041, tps: "2,800 TPS", status: "Direct Live" },

  // APAC
  { country: "India 🇮🇳", code: "IN", region: "APAC", type: "DLT Approved Direct Route", latency: "1.8s", rateEUR: 0.0032, tps: "10,000 TPS", status: "Direct Live" },
  { country: "Japan 🇯🇵", code: "JP", region: "APAC", type: "Direct Operator Interconnect", latency: "1.3s", rateEUR: 0.054, tps: "3,000 TPS", status: "Direct Live" },
  { country: "South Korea 🇰🇷", code: "KR", region: "APAC", type: "Direct Carrier Link", latency: "1.2s", rateEUR: 0.032, tps: "4,000 TPS", status: "Direct Live" },
  { country: "Australia 🇦🇺", code: "AU", region: "APAC", type: "Direct Mobile Network", latency: "1.6s", rateEUR: 0.035, tps: "2,500 TPS", status: "Direct Live" },
  { country: "Indonesia 🇮🇩", code: "ID", region: "APAC", type: "Direct Operator Link", latency: "1.9s", rateEUR: 0.021, tps: "5,000 TPS", status: "Direct Live" },
  { country: "Malaysia 🇲🇾", code: "MY", region: "APAC", type: "Direct Carrier Link", latency: "1.6s", rateEUR: 0.027, tps: "3,200 TPS", status: "Direct Live" },
  { country: "Thailand 🇹🇭", code: "TH", region: "APAC", type: "Direct MNO Interconnect", latency: "1.7s", rateEUR: 0.023, tps: "3,000 TPS", status: "Direct Live" },
  { country: "Vietnam 🇻🇳", code: "VN", region: "APAC", type: "Direct Operator Link", latency: "2.0s", rateEUR: 0.019, tps: "4,000 TPS", status: "Direct Live" },
  { country: "Philippines 🇵🇭", code: "PH", region: "APAC", type: "Direct Operator Interconnect", latency: "1.8s", rateEUR: 0.025, tps: "3,500 TPS", status: "Direct Live" },
  { country: "Hong Kong 🇭🇰", code: "HK", region: "APAC", type: "Direct Telecom Network", latency: "1.3s", rateEUR: 0.031, tps: "4,000 TPS", status: "Direct Live" },
  { country: "Taiwan 🇹🇼", code: "TW", region: "APAC", type: "Direct MNO Interconnect", latency: "1.4s", rateEUR: 0.029, tps: "3,000 TPS", status: "Direct Live" },

  // Americas & LATAM
  { country: "United States 🇺🇸", code: "US", region: "Americas", type: "10DLC & Toll-Free Direct", latency: "1.1s", rateEUR: 0.0075, tps: "8,000 TPS", status: "Direct Live" },
  { country: "Canada 🇨🇦", code: "CA", region: "Americas", type: "Verified Shortcode / 10DLC", latency: "1.2s", rateEUR: 0.0082, tps: "6,000 TPS", status: "Direct Live" },
  { country: "Argentina 🇦🇷", code: "AR", region: "Americas", type: "Direct MNO Network", latency: "2.0s", rateEUR: 0.022, tps: "2,500 TPS", status: "Direct Live" },
  { country: "Colombia 🇨🇴", code: "CO", region: "Americas", type: "Direct Operator Link", latency: "1.8s", rateEUR: 0.018, tps: "3,000 TPS", status: "Direct Live" },
  { country: "Chile 🇨🇱", code: "CL", region: "Americas", type: "Direct Carrier Link", latency: "1.7s", rateEUR: 0.024, tps: "2,200 TPS", status: "Direct Live" },
  { country: "Peru 🇵🇪", code: "PE", region: "Americas", type: "Direct Operator Interconnect", latency: "1.9s", rateEUR: 0.021, tps: "2,000 TPS", status: "Direct Live" },

  // Middle East
  { country: "United Arab Emirates 🇦🇪", code: "AE", region: "Middle East", type: "TRA Compliant Direct", latency: "1.3s", rateEUR: 0.042, tps: "2,500 TPS", status: "Direct Live" },
  { country: "Saudi Arabia 🇸🇦", code: "SA", region: "Middle East", type: "CITC Sender ID Registered", latency: "1.4s", rateEUR: 0.048, tps: "3,000 TPS", status: "Direct Live" },
  { country: "Qatar 🇶🇦", code: "QA", region: "Middle East", type: "Direct Operator Link", latency: "1.3s", rateEUR: 0.051, tps: "2,000 TPS", status: "Direct Live" },
  { country: "Kuwait 🇰🇼", code: "KW", region: "Middle East", type: "Direct Carrier Link", latency: "1.4s", rateEUR: 0.046, tps: "2,200 TPS", status: "Direct Live" },
  { country: "Bahrain 🇧🇭", code: "BH", region: "Middle East", type: "Direct MNO Interconnect", latency: "1.3s", rateEUR: 0.043, tps: "1,800 TPS", status: "Direct Live" },
  { country: "Oman 🇴🇲", code: "OM", region: "Middle East", type: "Direct Operator Link", latency: "1.5s", rateEUR: 0.047, tps: "2,000 TPS", status: "Direct Live" },
  { country: "Egypt 🇪🇬", code: "EG", region: "Middle East", type: "Direct Carrier Route", latency: "1.8s", rateEUR: 0.017, tps: "4,000 TPS", status: "Direct Live" },

  // Africa & Global
  { country: "South Africa 🇿🇦", code: "ZA", region: "Africa", type: "WASPA Compliant Direct", latency: "1.6s", rateEUR: 0.029, tps: "3,500 TPS", status: "Direct Live" },
  { country: "Nigeria 🇳🇬", code: "NG", region: "Africa", type: "NCC Registered Direct Hop", latency: "2.1s", rateEUR: 0.018, tps: "5,000 TPS", status: "Direct Live" },
  { country: "Kenya 🇰🇪", code: "KE", region: "Africa", type: "Direct MNO Interconnect", latency: "1.7s", rateEUR: 0.022, tps: "3,000 TPS", status: "Direct Live" },
  { country: "Global Direct Corridor 🌐", code: "GLOBAL", region: "All", type: "Worldwide Tier-1 Aggregation", latency: "1.5s", rateEUR: 0.015, tps: "10,000+ TPS", status: "Direct Live" },
];

const preparedRoutesList = routesList.map((r) => ({
  ...r,
  searchKey: `${r.country} ${r.code} ${r.type}`.toLowerCase(),
}));

export const RouteRatesTable = () => {
  const [currency, setCurrency] = useState("EUR"); // "EUR" | "USDT" | "USD"
  const [activeRegion, setActiveRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_LIMIT = 8;

  // Currency multiplier conversion rates
  const getConvertedRate = (baseEUR) => {
    if (currency === "USD") return baseEUR * 1.08;
    if (currency === "USDT") return baseEUR * 1.08;
    return baseEUR; // EUR
  };

  const getSymbol = () => {
    if (currency === "EUR") return "€";
    if (currency === "USDT") return "₮";
    return "$";
  };

  const formatRate = (rateVal) => {
    const sym = getSymbol();
    const converted = getConvertedRate(rateVal);
    const formattedNum = converted.toFixed(4);
    if (currency === "USDT") return `${formattedNum} USDT`;
    return `${sym}${formattedNum}`;
  };

  const formatPerThousand = (rateVal) => {
    const sym = getSymbol();
    const converted = getConvertedRate(rateVal) * 1000;
    const formattedNum = converted.toFixed(2);
    if (currency === "USDT") return `${formattedNum} USDT`;
    return `${sym}${formattedNum}`;
  };

  const filteredRoutes = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return preparedRoutesList.filter((r) => {
      const matchesRegion = activeRegion === "All" || r.region === activeRegion;
      const matchesQuery = !q || r.searchKey.includes(q);
      return matchesRegion && matchesQuery;
    });
  }, [activeRegion, searchQuery]);

  // Determine displayed items: if searching or filtering region, display all matching. Otherwise obey isExpanded.
  const displayedRoutes = useMemo(() => {
    if (searchQuery !== "" || activeRegion !== "All" || isExpanded) {
      return filteredRoutes;
    }
    return filteredRoutes.slice(0, INITIAL_LIMIT);
  }, [filteredRoutes, searchQuery, activeRegion, isExpanded]);

  return (
    <section id="routes-table" className="routes-table-section">
      <div className="container">
        <div className="section-heading">
          <p className="stats-eyebrow">Wholesale Rate Card</p>
          <h2>Live Route Rates &amp; Delivery SLA Matrix</h2>
          <p>Inspect standard wholesale base rates and latency specifications across 40+ active carrier corridors.</p>
        </div>

        <div className="routes-table-card">
          {/* Controls Bar */}
          <div className="table-controls-bar">
            {/* Search Input */}
            <div className="table-search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search 40+ countries or codes (e.g. UK, SG, France, DE)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="table-search-input"
              />
              {searchQuery && (
                <button type="button" className="clear-search-btn" onClick={() => setSearchQuery("")}>
                  ✕
                </button>
              )}
            </div>

            {/* Region Filter Chips */}
            <div className="region-filter-chips">
              {["All", "Europe", "Americas", "APAC", "Middle East", "Africa"].map((reg) => (
                <button
                  key={reg}
                  type="button"
                  className={`region-chip ${activeRegion === reg ? "active" : ""}`}
                  onClick={() => setActiveRegion(reg)}
                >
                  {reg}
                </button>
              ))}
            </div>

            {/* Currency Selector & CSV Export */}
            <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
              <div className="table-currency-toggle">
                <button
                  type="button"
                  className={`curr-btn ${currency === "EUR" ? "active" : ""}`}
                  onClick={() => setCurrency("EUR")}
                >
                  💶 EUR (€)
                </button>
                <button
                  type="button"
                  className={`curr-btn ${currency === "USDT" ? "active" : ""}`}
                  onClick={() => setCurrency("USDT")}
                >
                  ₮ USDT
                </button>
                <button
                  type="button"
                  className={`curr-btn ${currency === "USD" ? "active" : ""}`}
                  onClick={() => setCurrency("USD")}
                >
                  💵 USD ($)
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  const headers = ["Country", "ISO Code", "Region", "Route Type", "Latency SLA", "Throughput (TPS)", `Base Rate (${currency})`, `Per 1k Rate (${currency})`];
                  const rows = filteredRoutes.map((r) => [
                    `"${r.country.replace(/[^\w\s-]/g, '').trim()}"`,
                    `"${r.code}"`,
                    `"${r.region}"`,
                    `"${r.type}"`,
                    `"${r.latency}"`,
                    `"${r.tps}"`,
                    `"${formatRate(r.rateEUR)}"`,
                    `"${formatPerThousand(r.rateEUR)}"`
                  ]);
                  const csvData = [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
                  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `NAMX_Wholesale_SMS_Rate_Sheet_${currency}_2026.csv`;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
                className="curr-btn"
                style={{
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  color: "#34d399",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
                title="Download full rate card in CSV format"
              >
                📥 Download Rate Sheet (CSV)
              </button>
            </div>
          </div>

          {/* Negotiable Volume Alert Banner */}
          <div style={{
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%)",
            border: "1px solid rgba(16, 185, 129, 0.35)",
            borderRadius: "12px",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            fontSize: "13px",
            color: "#e2e8f0"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "18px" }}>🤝</span>
              <span>
                <strong style={{ color: "#34d399" }}>Volume Confirmations:</strong> All wholesale base rates are negotiable for volumes &gt; 250k / 500k+ SMS/month.
              </span>
            </div>
            <a
              href="https://wa.me/919306529891?text=Hello%20NAMX%20Telecom%2C%20I%20want%20to%20discuss%20volume%20commitments%20and%20negotiate%20wholesale%20rates."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#10b981",
                color: "#060919",
                fontWeight: 700,
                fontSize: "12px",
                padding: "6px 14px",
                borderRadius: "6px",
                textDecoration: "none",
                whiteSpace: "nowrap"
              }}
            >
              Negotiate Rate ➔
            </a>
          </div>

          {/* Table Container */}
          <div className="table-responsive-wrapper">
            <table className="routes-data-table">
              <thead>
                <tr>
                  <th>Destination Route ({filteredRoutes.length} Available)</th>
                  <th>Interconnect Type</th>
                  <th>Latency SLA</th>
                  <th>Base Rate ({currency})</th>
                  <th>Per 1,000 SMS</th>
                  <th>Route Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {displayedRoutes.length > 0 ? (
                  displayedRoutes.map((route, idx) => (
                    <tr key={route.code + idx} className={route.topRoute ? "top-route-row" : ""}>
                      <td>
                        <div className="route-name-cell">
                          <strong>{route.country}</strong>
                          <span className="route-code-tag">{route.code}</span>
                          {route.topRoute && (
                            <span style={{
                              background: "rgba(56, 189, 248, 0.15)",
                              border: "1px solid rgba(56, 189, 248, 0.4)",
                              color: "#38bdf8",
                              fontSize: "10px",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: "4px",
                              marginLeft: "6px"
                            }}>
                              ⭐ Top Route
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="interconnect-type-badge">{route.type}</span>
                      </td>
                      <td>
                        <span className="latency-val">{route.latency}</span>
                      </td>
                      <td>
                        <strong className="rate-primary-val">{formatRate(route.rateEUR)}</strong>
                      </td>
                      <td>
                        <span className="rate-thousand-val">{formatPerThousand(route.rateEUR)}</span>
                      </td>
                      <td>
                        <span className="status-live-tag">🟢 {route.status}</span>
                      </td>
                      <td>
                        <a
                          href={`https://wa.me/919306529891?text=${encodeURIComponent(`Hello NAMX, I am interested in testing or negotiating volume rates for ${route.country} (${route.code}) at ${formatRate(route.rateEUR)}/SMS.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-table-request"
                        >
                          Negotiate
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="no-routes-found">
                      No destination routes matching &quot;{searchQuery}&quot;. <a href="#contact">Contact sales for custom route lookup</a>.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Expand / Collapse Button */}
          {searchQuery === "" && activeRegion === "All" && filteredRoutes.length > INITIAL_LIMIT && (
            <div className="expand-routes-bar">
              <button
                type="button"
                className="btn-expand-routes"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded
                  ? "Show Top Corridors Only ↑"
                  : `View All ${filteredRoutes.length} Destination Corridors ↓`}
              </button>
            </div>
          )}

          {/* Table Footer */}
          <div className="table-footer-note">
            <span>💡 Indicative wholesale rates. Contact sales for custom high-volume route cards and SLAs.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteRatesTable;
