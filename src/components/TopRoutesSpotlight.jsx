import React, { useState } from "react";
import Button from "./Button";
import "../styles/components/TopRoutesSpotlight.css";

export const TOP_WHOLESALE_ROUTES = [
  {
    country: "Spain",
    flag: "🇪🇸",
    code: "ES",
    rateEUR: 0.029,
    per1kEUR: "€29.00",
    network: "Movistar / Vodafone / Orange",
    type: "Tier-1 Direct SS7 MNO Interconnect",
    latency: "< 1.2s",
    tps: "5,000 TPS",
    features: ["Instant 2FA OTP SLA", "100% Handset DLR Receipts", "Dynamic Sender ID"],
    badge: "High Demand 🔥",
  },
  {
    country: "Italy",
    flag: "🇮🇹",
    code: "IT",
    rateEUR: 0.033,
    per1kEUR: "€33.00",
    network: "TIM / Vodafone / WindTre / Iliad",
    type: "Direct Operator Link",
    latency: "< 1.3s",
    tps: "4,000 TPS",
    features: ["AGCOM Compliant Delivery", "Sub-2s OTP Latency SLA", "Handset DLR Return"],
    badge: "Direct Route",
  },
  {
    country: "Austria",
    flag: "🇦🇹",
    code: "AT",
    rateEUR: 0.022,
    per1kEUR: "€22.00",
    network: "A1 Telekom / Magenta / Drei",
    type: "Direct MNO Network",
    latency: "< 1.1s",
    tps: "3,500 TPS",
    features: ["Zero-Hop Termination", "Bank & 2FA Priority Queue", "Real-Time Webhook DLR"],
    badge: "Direct MNO",
  },
  {
    country: "China",
    flag: "🇨🇳",
    code: "CN",
    rateEUR: 0.092,
    per1kEUR: "€92.00",
    network: "China Mobile / Unicom / Telecom",
    type: "Premium Direct Gateway",
    latency: "< 1.8s",
    tps: "8,000 TPS",
    features: ["MIIT Registered Routes", "Enterprise OTP & Notifications", "High Deliverability SLA"],
    badge: "Enterprise Gateway",
  },
  {
    country: "Denmark",
    flag: "🇩🇰",
    code: "DK",
    rateEUR: 0.042,
    per1kEUR: "€42.00",
    network: "TDC Net / Telenor / Telia / 3",
    type: "Direct Nordic Interconnect",
    latency: "< 1.2s",
    tps: "3,000 TPS",
    features: ["Nordic Direct Peer", "Strict Handset DLR Return", "Ultra-Low Latency"],
    badge: "Direct Nordic",
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    code: "MX",
    rateEUR: 0.0025,
    per1kEUR: "€2.50",
    network: "Telcel / Movistar / AT&T Mexico",
    type: "Ultra-High Volume Route",
    latency: "< 1.5s",
    tps: "10,000 TPS",
    features: ["Ultra-Competitive Wholesale Rate", "Bulk Marketing & 2FA OTP", "Massive Throughput Capacity"],
    badge: "Best Wholesale Rate ⚡",
  },
  {
    country: "Slovakia",
    flag: "🇸🇰",
    code: "SK",
    rateEUR: 0.025,
    per1kEUR: "€25.00",
    network: "Orange / Slovak Telekom / O2",
    type: "Direct MNO Interconnect",
    latency: "< 1.3s",
    tps: "3,000 TPS",
    features: ["Direct Carrier Gateway", "Verified Sender ID Support", "100% Delivery DLR"],
    badge: "Direct MNO",
  },
  {
    country: "Brazil",
    flag: "🇧🇷",
    code: "BR",
    rateEUR: 0.0085,
    per1kEUR: "€8.50",
    network: "Vivo / Claro / TIM Brasil",
    type: "Anatel Certified Direct Carrier",
    latency: "< 1.7s",
    tps: "8,000 TPS",
    features: ["Anatel Regulated Route", "High-Scale Volume Tiering", "Shortcode & Longcode Support"],
    badge: "LATAM Top Volume 🔥",
  },
];

export const TopRoutesSpotlight = ({ onOpenInquiriesModal }) => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleNegotiateClick = (route) => {
    if (onOpenInquiriesModal) {
      onOpenInquiriesModal({
        destination: `${route.country} (${route.code})`,
        rate: `€${route.rateEUR.toFixed(4)}`,
        product: "Wholesale SMS Volume Rate Negotiation",
      });
    } else {
      const msg = encodeURIComponent(
        `Hello NAMX Telecom, I want to discuss volume commitments and negotiate pricing for the ${route.country} (${route.code}) route (Listed: €${route.rateEUR.toFixed(4)}).`
      );
      window.open(`https://wa.me/919306529891?text=${msg}`, "_blank");
    }
  };

  const handleWhatsAppDirect = (route) => {
    const msg = encodeURIComponent(
      `Hello NAMX Telecom, I want to lock in volume pricing and test credentials for ${route.country} (${route.code}) at €${route.rateEUR.toFixed(4)}/SMS.`
    );
    window.open(`https://wa.me/919306529891?text=${msg}`, "_blank");
  };

  return (
    <section className="top-routes-section">
      <div className="container">
        {/* Section Heading */}
        <div className="top-routes-header">
          <div className="top-routes-eyebrow">
            <span className="live-pulse-dot" />
            <span>VERIFIED DIRECT WHOLESALE CORRIDORS</span>
          </div>
          <h2>Top Wholesale Routes &amp; Euro Pricing</h2>
          <p className="top-routes-subtext">
            Our highest-demand direct interconnect corridors with guaranteed handset DLR receipts, sub-2.0s latency SLAs, and carrier-grade throughput.
          </p>

          {/* Negotiable Volume Banner */}
          <div className="volume-negotiation-banner">
            <div className="negotiation-badge">
              <span>🤝 VOLUME CONFIRMATIONS</span>
            </div>
            <div className="negotiation-text">
              <strong>All Rates Are Fully Negotiable Over Volume Commitments!</strong>
              <p>
                Processing 250,000+ or 1,000,000+ SMS/month? Speak directly with our 24/7 Singapore routing desk to lock in custom bilateral clearing discounts.
              </p>
            </div>
            <div className="negotiation-cta">
              <a
                href="https://wa.me/919306529891?text=Hello%20NAMX%20Telecom%2C%20I%20have%20high-volume%20SMS%20traffic%20and%20want%20to%20negotiate%20custom%20Euro%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="negotiate-btn-accent"
              >
                💬 Negotiate Volume Rate ➔
              </a>
            </div>
          </div>
        </div>

        {/* 8 Top Route Cards Grid */}
        <div className="top-routes-grid">
          {TOP_WHOLESALE_ROUTES.map((route) => (
            <div key={route.code} className="top-route-card">
              {/* Card Header */}
              <div className="top-route-card-header">
                <div className="country-info">
                  <span className="country-flag">{route.flag}</span>
                  <div>
                    <h3 className="country-name">{route.country}</h3>
                    <span className="country-code-pill">{route.code} Corridor</span>
                  </div>
                </div>
                <span className="route-badge-pill">{route.badge}</span>
              </div>

              {/* Rate Box */}
              <div className="top-route-rate-box">
                <div className="rate-main-row">
                  <span className="rate-currency">€</span>
                  <span className="rate-number">{route.rateEUR.toFixed(4)}</span>
                  <span className="rate-unit">/ SMS</span>
                </div>
                <div className="rate-secondary-row">
                  <span className="rate-per-1k">{route.per1kEUR}</span>
                  <span className="rate-per-1k-label">per 1,000 SMS</span>
                </div>
                <div className="volume-discount-notice">
                  ✨ Negotiable for volume &gt; 250k
                </div>
              </div>

              {/* Route Specs */}
              <div className="top-route-specs">
                <div className="spec-row">
                  <span className="spec-label">Routing Tier:</span>
                  <span className="spec-val highlight">{route.type}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Direct Carriers:</span>
                  <span className="spec-val">{route.network}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Latency SLA:</span>
                  <span className="spec-val">{route.latency}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">TPS Capacity:</span>
                  <span className="spec-val">{route.tps}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="top-route-features">
                {route.features.map((feat, idx) => (
                  <li key={idx}>
                    <span className="feat-check">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="top-route-actions">
                <button
                  type="button"
                  className="btn-negotiate-rate"
                  onClick={() => handleNegotiateClick(route)}
                >
                  🤝 Negotiate Rate
                </button>
                <button
                  type="button"
                  className="btn-test-route"
                  onClick={() => handleWhatsAppDirect(route)}
                  title="Direct WhatsApp route inquiry"
                >
                  ⚡ Test Route
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Volume Commitment Tiers Guidance */}
        <div className="volume-tiers-card">
          <div className="volume-tiers-header">
            <h3>📊 Volume Commitment Discount Matrix</h3>
            <p>Higher volume commits unlock automated Least-Cost Routing (LCR) upgrades and dedicated SS7 carrier sessions.</p>
          </div>
          <div className="volume-tiers-grid">
            <div className="tier-box">
              <span className="tier-range">Starter Tier</span>
              <h4>10k – 250k SMS/mo</h4>
              <p className="tier-desc">Standard Wholesale Rate</p>
              <span className="tier-highlight">Full API / SMPP v3.4 access</span>
            </div>
            <div className="tier-box featured">
              <span className="tier-pill">Most Popular</span>
              <span className="tier-range">Growth Tier</span>
              <h4>250k – 1M SMS/mo</h4>
              <p className="tier-desc">Negotiable 5% – 10% Discount</p>
              <span className="tier-highlight">Priority SS7 Queue &amp; Dedicated Bind</span>
            </div>
            <div className="tier-box">
              <span className="tier-range">Carrier Tier</span>
              <h4>1M+ SMS/mo</h4>
              <p className="tier-desc">Custom Bilateral Clearing</p>
              <span className="tier-highlight">Direct Operator Swap + Custom SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRoutesSpotlight;
