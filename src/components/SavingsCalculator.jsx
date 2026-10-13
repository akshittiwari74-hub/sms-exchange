import { useState } from "react";
import "../styles/components/SavingsCalculator.css";

export const SavingsCalculator = () => {
  const [volume, setVolume] = useState(100000);
  const [region, setRegion] = useState("APAC");
  const [currency, setCurrency] = useState("USD");

  const regionRates = {
    APAC: { namxRate: 0.0085, competitorRate: 0.0160, name: "Asia Pacific" },
    EU: { namxRate: 0.0145, competitorRate: 0.0240, name: "Europe & UK" },
    MENA: { namxRate: 0.0190, competitorRate: 0.0310, name: "Middle East" },
    NAM: { namxRate: 0.0065, competitorRate: 0.0120, name: "North America" },
    LATAM: { namxRate: 0.0210, competitorRate: 0.0360, name: "Latin America" },
  };

  const currencyRates = {
    USD: { symbol: "$", factor: 1 },
    EUR: { symbol: "€", factor: 0.92 },
    USDT: { symbol: "₮", factor: 1 },
  };

  const activeRegion = regionRates[region];
  const activeCurr = currencyRates[currency];

  const namxTotal = volume * activeRegion.namxRate * activeCurr.factor;
  const competitorTotal = volume * activeRegion.competitorRate * activeCurr.factor;
  const monthlySavings = competitorTotal - namxTotal;
  const savingsPercent = Math.round(((competitorTotal - namxTotal) / competitorTotal) * 100);

  return (
    <div className="savings-calculator-card">
      <div className="savings-calc-header">
        <div>
          <span className="calc-badge">⚡ Interactive Savings Estimator</span>
          <h2>Calculate Your Wholesale SMS Savings</h2>
          <p>Adjust your monthly volume and region to estimate cost efficiency with NAMX Telecom.</p>
        </div>

        <div className="currency-selector-group">
          {Object.keys(currencyRates).map((curr) => (
            <button
              key={curr}
              className={`curr-btn ${currency === curr ? "active" : ""}`}
              onClick={() => setCurrency(curr)}
            >
              {curr}
            </button>
          ))}
        </div>
      </div>

      <div className="calc-controls-grid">
        <div className="calc-control-group">
          <label>Select Destination Region:</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className="calc-select">
            {Object.entries(regionRates).map(([key, val]) => (
              <option key={key} value={key}>
                {val.name}
              </option>
            ))}
          </select>
        </div>

        <div className="calc-control-group">
          <div className="slider-label-row">
            <label>Monthly Message Volume:</label>
            <span className="volume-val">{volume.toLocaleString()} SMS</span>
          </div>
          <input
            type="range"
            min="10000"
            max="5000000"
            step="10000"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="volume-slider"
          />
        </div>
      </div>

      <div className="savings-output-grid">
        <div className="output-box namx-box">
          <span className="box-label">NAMX Wholesale Total</span>
          <span className="box-amount">
            {activeCurr.symbol}
            {namxTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="box-rate">
            Rate: {activeCurr.symbol}{(activeRegion.namxRate * activeCurr.factor).toFixed(4)} / SMS
          </span>
        </div>

        <div className="output-box competitor-box">
          <span className="box-label">Standard Aggregator Avg</span>
          <span className="box-amount">
            {activeCurr.symbol}
            {competitorTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="box-rate">
            Rate: {activeCurr.symbol}{(activeRegion.competitorRate * activeCurr.factor).toFixed(4)} / SMS
          </span>
        </div>

        <div className="output-box savings-box">
          <span className="box-label">Estimated Monthly Savings</span>
          <span className="box-amount savings-highlight">
            {activeCurr.symbol}
            {monthlySavings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="box-rate badge-green">Save ~{savingsPercent}% per month</span>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
