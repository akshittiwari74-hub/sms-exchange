import RouteInspector from "../components/RouteInspector";
import RouteRatesTable from "../components/RouteRatesTable";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";

export const RatesPage = ({ onOpenInquiriesModal }) => {
  return (
    <div className="page-rates">
      <div className="page-banner">
        <div className="container">
          <p className="stats-eyebrow">Wholesale Rate Transparency &amp; P2P Clearing</p>
          <h1>Global Wholesale Bulk SMS Rates &amp; International P2P Rate Cards</h1>
          <p>
            Explore live wholesale rate cards for 195+ destination corridors. Inspect Least-Cost Routing (LCR) engine pricing, compare Direct MNO vs Wholesale Aggregator tiers, and calculate volume pricing with zero hidden commitments.
          </p>
        </div>
      </div>

      {/* Informative Guidance Section */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="info-grid-3">
            <div className="info-card">
              <span className="info-icon">💎</span>
              <h3>Tier-1 Direct SS7 Bulk SMS Routes</h3>
              <p>
                Direct SS7 signaling links with Tier-1 mobile network operators (MNOs). Guarantees sub-2-second delivery for time-critical 2FA OTP codes with handset DLR receipts.
              </p>
            </div>
            <div className="info-card">
              <span className="info-icon">🌐</span>
              <h3>International P2P Bilateral Clearing</h3>
              <p>
                Bilateral P2P messaging traffic swap &amp; rate settlement for carrier partners, MVNOs, and aggregators with transparent CDR reconciliation.
              </p>
            </div>
            <div className="info-card">
              <span className="info-icon">⚡</span>
              <h3>SMPP Bind Volume Discounts</h3>
              <p>
                Automatic LCR rate tier upgrades for high-volume SMPP v3.4/v5.0 binds exceeding 500,000 SMS/month. Settle in EUR, USDT, or USD.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RouteInspector />
      <RouteRatesTable />
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
    </div>
  );
};

export default RatesPage;
