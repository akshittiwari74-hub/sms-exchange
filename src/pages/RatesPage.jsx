import { useState } from "react";
import TopRoutesSpotlight from "../components/TopRoutesSpotlight";
import RouteInspector from "../components/RouteInspector";
import RouteRatesTable from "../components/RouteRatesTable";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";

export const RatesPage = ({ onOpenInquiriesModal }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const rateFaqs = [
    {
      q: "What are wholesale Bulk SMS rates based on?",
      a: "Rates are determined by monthly volume commitments, destination country corridors, and routing tier (Tier-1 Direct SS7 routes vs Wholesale Aggregator LCR). We offer volume-tiered rate cards starting with zero monthly commitments."
    },
    {
      q: "What settlement currencies and payment terms does NAMX Telecom accept?",
      a: "We accept settlements in EUR, USD, and USDT (Tether cryptocurrency). Flexible weekly and bi-weekly post-paid credit terms are available for approved carriers and volume aggregators."
    },
    {
      q: "Can I test SMPP v3.4 binds and delivery speed before committing?",
      a: "Yes, we provide free test credits along with dedicated SMPP v3.4/v5.0 transceiver bind credentials so your engineering team can test latency, DLR delivery receipts, and throughput within 15 minutes."
    },
    {
      q: "What is the difference between Direct SS7 and Wholesale LCR routes?",
      a: "Tier-1 Direct SS7 routes feature zero-hop MNO interconnects with 100% handset DLR receipts and sub-2-second latency for time-critical 2FA OTP codes. Wholesale LCR routes optimize cost efficiency for high-volume marketing campaigns."
    },
    {
      q: "Are there any setup fees or hidden interconnect charges?",
      a: "No. There are zero setup fees, zero monthly port maintenance charges, and no hidden minimum commitments. You only pay for messages successfully processed."
    }
  ];

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

      {/* Featured Top Wholesale Routes with Euro Pricing */}
      <TopRoutesSpotlight />

      <RouteInspector />
      <RouteRatesTable />

      {/* Frequently Asked Questions */}
      <section className="faq">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Rate Transparency &amp; Billing</p>
            <h2>Wholesale SMS Rates &amp; Pricing FAQs</h2>
            <p className="faq-subtext">Clear answers on corridor pricing, currencies, SMPP test credentials, and volume tiering.</p>
          </div>

          <div className="faq-list">
            {rateFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-q-text">
                      <span className="faq-badge">Rates &amp; Billing</span>
                      <span>{faq.q}</span>
                    </div>
                    <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct="Wholesale SMS Rates" />
    </div>
  );
};

export default RatesPage;
