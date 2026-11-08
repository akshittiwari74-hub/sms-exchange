import Coverage from "../components/Coverage";
import WhyChooseUs from "../components/WhyChooseUs";
import NetworkStatusWidget from "../components/NetworkStatusWidget";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";
import EmojiIcon from "../components/EmojiIcon";
import { PageHeader } from "../components/ui";

export const CoveragePage = ({ onOpenInquiriesModal }) => {
  const regionBreakdown = [
    {
      region: "Asia Pacific (APAC)",
      count: "42+ Countries",
      operators: "Singtel, StarHub, M1, Airtel, Jio, Telkomsel, Optus, Telstra, AIS",
      latency: "< 2.1s Avg Delivery",
      flag: "🌏",
    },
    {
      region: "Europe & UK (EU)",
      count: "48+ Countries",
      operators: "Vodafone, EE, O2 UK, Deutsche Telekom, Orange, Telefonica, TIM",
      latency: "< 1.8s Avg Delivery",
      flag: "🇪🇺",
    },
    {
      region: "Middle East & GCC (MENA)",
      count: "18+ Countries",
      operators: "e& (Etisalat), stc, Ooredoo, Zain, Mobily, du, Omantel",
      latency: "< 2.0s Avg Delivery",
      flag: "🕌",
    },
    {
      region: "North America (NAM)",
      count: "10+ Countries",
      operators: "AT&T, Verizon, T-Mobile, Rogers, Bell, Telus, US Cellular",
      latency: "< 1.5s Avg Delivery",
      flag: "🇺🇸",
    },
    {
      region: "Latin America (LATAM)",
      count: "24+ Countries",
      operators: "Claro, Movistar, TIM Brasil, Telcel, Entel, Personal, Tigo",
      latency: "< 2.8s Avg Delivery",
      flag: "🌎",
    },
    {
      region: "Africa (SSA)",
      count: "35+ Countries",
      operators: "MTN Group, Vodacom, Airtel Africa, Orange Africa, Safaricom",
      latency: "< 3.2s Avg Delivery",
      flag: "🌍",
    },
  ];

  return (
    <div className="page-coverage">
      <PageHeader path="/coverage" eyebrow={<>Direct SS7 MNO Interconnects &amp; P2P Roaming Hubs</>} title={<>Global Wholesale Bulk SMS &amp; International P2P SMS Routing Matrix</>} intro={<>Zero-hop SS7 signaling links, direct operator interconnects, and intelligent LCR SMS routing across 195+ countries and 800+ mobile networks worldwide.</>} />

      {/* Regional Continent Deep Dive */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Continental Network Matrix</p>
            <h2>Global Routing Benchmarks &amp; Operator Reach</h2>
          </div>

          <div className="info-grid-3">
            {regionBreakdown.map((r) => (
              <div key={r.region} className="info-card regional-card">
                <div className="regional-header">
                  <span className="info-icon"><EmojiIcon char={r.flag} /></span>
                  <span className="regional-count">{r.count}</span>
                </div>
                <h3>{r.region}</h3>
                <p><strong>Major Partners:</strong> {r.operators}</p>
                <div className="regional-latency-badge">
                  <span>SLA Latency:</span> {r.latency}
                </div>
              </div>
            ))}
          </div>

          <NetworkStatusWidget />
        </div>
      </section>

      {/* Hub and Spoke SEO Interlinking */}
      <section className="subpage-info-section ui-section--alt">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Local Landing Pages</p>
            <h2>Regional SMPP Gateways &amp; SMS Connectivity</h2>
          </div>
          <div className="ui-chip-row ui-chip-row--center">
            <a href="/bulk-sms-uae" className="btn btn-secondary">🇦🇪 UAE Gateway</a>
            <a href="/bulk-sms-uk" className="btn btn-secondary">🇬🇧 UK Gateway</a>
            <a href="/bulk-sms-usa" className="btn btn-secondary">🇺🇸 USA Gateway</a>
            <a href="/bulk-sms-india" className="btn btn-secondary">🇮🇳 India Gateway</a>
            <a href="/bulk-sms-malaysia" className="btn btn-secondary">🇲🇾 Malaysia Gateway</a>
          </div>
        </div>
      </section>

      <Coverage />
      <WhyChooseUs />
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
    </div>
  );
};

export default CoveragePage;
