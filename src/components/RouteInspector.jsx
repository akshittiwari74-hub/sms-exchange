import { useState } from "react";
import Button from "./Button";
import "../styles/components/RouteInspector.css";

export const RouteInspector = () => {
  const [quantity, setQuantity] = useState(100000);
  const [rate, setRate] = useState(0.015);
  const [currency, setCurrency] = useState("EUR"); // "EUR" | "USDT" | "USD"

  const totalCost = quantity * rate;
  const costPerThousand = rate * 1000;

  const getSymbol = () => {
    if (currency === "EUR") return "€";
    if (currency === "USDT") return "₮";
    return "$";
  };

  const formatCurrency = (val) => {
    const numStr = val.toLocaleString("en-US", {
      minimumFractionDigits: val < 100 ? 2 : 0,
      maximumFractionDigits: 2,
    });
    if (currency === "EUR") return `€${numStr}`;
    if (currency === "USDT") return `${numStr} USDT`;
    return `$${numStr}`;
  };

  const formatRate = (r) => {
    const sym = getSymbol();
    if (currency === "USDT") return `${r.toFixed(4)} USDT`;
    return `${sym}${r.toFixed(4)}`;
  };

  const presetRates = [
    { label: `High Vol (${formatRate(0.005)})`, value: 0.005 },
    { label: `Standard API (${formatRate(0.012)})`, value: 0.012 },
    { label: `Direct Route (${formatRate(0.025)})`, value: 0.025 },
    { label: `Premium OTP (${formatRate(0.045)})`, value: 0.045 },
  ];

  return (
    <section id="route-inspector" className="route-inspector-section">
      <div className="container">
        <div className="section-heading">
          <p className="stats-eyebrow">Interactive Estimator</p>
          <h2>Custom SMS Quantity &amp; Rate Calculator</h2>
          <p>Slide or enter your target SMS quantity and price per message to calculate real-time cost estimates in EUR, USDT, or USD.</p>
        </div>

        <div className="calculator-standalone-card">
          {/* Currency Switcher Header */}
          <div className="calc-top-toolbar">
            <span className="currency-selector-label">Billing Currency:</span>
            <div className="currency-selector-tabs">
              <button
                type="button"
                className={`currency-tab-btn ${currency === "EUR" ? "active" : ""}`}
                onClick={() => setCurrency("EUR")}
              >
                💶 EUR (€)
              </button>
              <button
                type="button"
                className={`currency-tab-btn ${currency === "USDT" ? "active" : ""}`}
                onClick={() => setCurrency("USDT")}
              >
                ₮ USDT (Crypto)
              </button>
              <button
                type="button"
                className={`currency-tab-btn ${currency === "USD" ? "active" : ""}`}
                onClick={() => setCurrency("USD")}
              >
                💵 USD ($)
              </button>
            </div>
          </div>

          <div className="calc-sliders-grid">
            {/* Control 1: Quantity Slider */}
            <div className="calc-control-group">
              <div className="control-header-row">
                <label className="control-title-text">
                  <span className="control-icon">📦</span> SMS Quantity (Messages)
                </label>
                <div className="input-number-box">
                  <input
                    id="calc-qty-input"
                    type="number"
                    min="1000"
                    max="10000000"
                    step="1000"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1000, Number(e.target.value)))}
                    className="custom-numeric-input"
                    aria-label="Target SMS Quantity in Messages"
                  />
                  <span className="input-unit">SMS</span>
                </div>
              </div>

              <input
                id="calc-qty-range"
                type="range"
                min="1000"
                max="5000000"
                step="5000"
                value={Math.min(quantity, 5000000)}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="volume-range-slider"
                aria-label="Target SMS Quantity Range Slider"
              />

              <div className="range-ticks">
                <button type="button" onClick={() => setQuantity(10000)}>10K</button>
                <button type="button" onClick={() => setQuantity(100000)}>100K</button>
                <button type="button" onClick={() => setQuantity(500000)}>500K</button>
                <button type="button" onClick={() => setQuantity(1000000)}>1M</button>
                <button type="button" onClick={() => setQuantity(5000000)}>5M+</button>
              </div>
            </div>

            {/* Control 2: Rate per SMS Slider */}
            <div className="calc-control-group">
              <div className="control-header-row">
                <label className="control-title-text" htmlFor="calc-rate-input">
                  <span className="control-icon">💰</span> Rate per SMS ({currency})
                </label>
                <div className="input-number-box">
                  <span className="currency-prefix">{getSymbol()}</span>
                  <input
                    id="calc-rate-input"
                    type="number"
                    min="0.001"
                    max="0.100"
                    step="0.001"
                    value={rate}
                    onChange={(e) => setRate(Math.max(0.001, Number(e.target.value)))}
                    className="custom-numeric-input rate-input"
                    aria-label={`Rate per SMS in ${currency}`}
                  />
                </div>
              </div>

              <input
                id="calc-rate-range"
                type="range"
                min="0.002"
                max="0.080"
                step="0.001"
                value={Math.min(rate, 0.080)}
                onChange={(e) => setRate(Number(e.target.value))}
                className="volume-range-slider rate-slider"
                aria-label={`Rate per SMS Range Slider in ${currency}`}
              />

              <div className="preset-rates-row">
                {presetRates.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    className={`preset-rate-chip ${rate === p.value ? "active" : ""}`}
                    onClick={() => setRate(p.value)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="calc-summary-banner">
            <div className="summary-stat-box">
              <span className="stat-sm-label">Total Messages</span>
              <strong className="stat-lg-val">{quantity.toLocaleString()} SMS</strong>
            </div>

            <div className="summary-stat-box">
              <span className="stat-sm-label">Unit Rate ({currency})</span>
              <strong className="stat-lg-val highlight">{formatRate(rate)} / SMS</strong>
              <small className="stat-sub-val">{formatCurrency(costPerThousand)} per 1,000 SMS</small>
            </div>

            <div className="summary-stat-box main-total">
              <span className="stat-sm-label">Estimated Total Investment</span>
              <strong className="stat-total-amount">{formatCurrency(totalCost)}</strong>
              <small className="stat-sub-val">Web Platform, SMPP &amp; API Included</small>
            </div>
          </div>

          <div className="calc-bottom-cta">
            <Button href="#contact" variant="primary" size="lg" external={false}>
              Request Official Proposal for {quantity.toLocaleString()} SMS @ {formatRate(rate)}/SMS ({currency})
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteInspector;
