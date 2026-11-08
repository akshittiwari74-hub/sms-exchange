import { useState } from "react";
import otpFaqs from "../data/otpFaqs.json";
import posts from "../data/posts.json";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";

const useCases = [
  { icon: "🔐", title: "Login two-factor authentication", text: "A second factor at sign-in that confirms the user still holds their registered phone." },
  { icon: "📝", title: "Sign-up phone verification", text: "Confirm a new account's number is real and reachable before you rely on it for alerts or recovery." },
  { icon: "🔑", title: "Password reset", text: "Prove account ownership before allowing a password change — one of the most attacked flows, so rate-limit it." },
  { icon: "💳", title: "Payment & transaction confirmation", text: "Confirm card payments, bank transfers and wallet top-ups, often required by banking regulations." },
  { icon: "📦", title: "Delivery & order verification", text: "Codes customers give to couriers or show at pickup to confirm the right person received the order." },
  { icon: "🛡️", title: "High-risk action approval", text: "Approve changes to email, payout details or security settings with a fresh code." },
];

const deliveryPillars = [
  {
    title: "Direct operator routes for OTP",
    text: "OTP traffic is kept on direct mobile operator connections, never on grey or SIM-box routes, so your sender ID is preserved and codes are not delayed in queues.",
  },
  {
    title: "Live number portability lookup",
    text: "Each destination number is checked against the current network (HLR/MNP) before routing, so ported numbers go to the right operator the first time.",
  },
  {
    title: "Automatic failover",
    text: "If a route's delivery rate or speed drops, OTP traffic is moved to a backup route for that operator automatically.",
  },
  {
    title: "SMS pumping protection",
    text: "High-risk number ranges, abnormal bursts and sequential-number patterns are filtered before they reach your bill.",
  },
  {
    title: "Real-time delivery receipts",
    text: "Delivery receipts arrive by SMPP deliver_sm or HTTP webhook, so you know within seconds whether to resend or switch channel.",
  },
  {
    title: "WhatsApp & RCS fallback",
    text: "Undelivered codes can be resent through WhatsApp authentication templates or RCS, with rules set per country.",
  },
];

const metrics = [
  { name: "Delivery latency", def: "Time from API request to handset delivery receipt", target: "Under 5 seconds; direct routes usually 1–3 s" },
  { name: "Delivery rate", def: "Messages with a DELIVRD receipt ÷ messages sent", target: "Track per country and per operator" },
  { name: "Conversion rate", def: "Codes entered by users ÷ codes sent", target: "The truest quality signal; a sudden drop means delivery problems or fraud" },
  { name: "Resend rate", def: "Users who tap 'resend code'", target: "A rise usually means slow or failed delivery" },
  { name: "Cost per verified user", def: "Total OTP spend ÷ successful verifications", target: "Better than cost per SMS for comparing routes" },
];

const channels = [
  { channel: "SMS OTP", reach: "Every mobile phone, no app needed", speed: "Seconds on direct routes", cost: "Per segment, varies by country", note: "Universal default; protect against SMS pumping" },
  { channel: "WhatsApp authentication", reach: "WhatsApp users only", speed: "Seconds, needs data connection", cost: "Per authentication conversation", note: "Good fallback and cheaper in some countries" },
  { channel: "RCS", reach: "Supported Android devices and networks", speed: "Seconds", cost: "Per message", note: "Verified brand sender; falls back to SMS" },
  { channel: "Authenticator app / passkey", reach: "Users who set it up", speed: "Instant, offline", cost: "No per-use cost", note: "Strongest option, but needs user setup" },
];

const countryRules = [
  { country: "🇮🇳 India", path: "/bulk-sms-india", rule: "OTP text must match a registered DLT content template and use a registered header; send the template ID with each message." },
  { country: "🇺🇸 USA", path: "/bulk-sms-usa", rule: "No alphanumeric sender IDs. Register a 2FA campaign on 10DLC, verify a toll-free number, or use a short code." },
  { country: "🇬🇧 United Kingdom", path: "/bulk-sms-uk", rule: "Alphanumeric sender IDs allowed. OTPs are service messages and don't need marketing consent." },
  { country: "🇦🇪 UAE", path: "/bulk-sms-uae", rule: "Use a pre-registered transactional sender ID. OTPs are not limited to the 7:00–21:00 promotional window." },
  { country: "🇲🇾 Malaysia", path: "/bulk-sms-malaysia", rule: "Send on transactional routes with a registered header and avoid links in OTP messages." },
];

const curlExample = `curl -X POST "https://api.namxtelecom.com/v1/sms/send" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+447700900077",
    "sender_id": "MYAPP",
    "type": "otp",
    "text": "849201 is your MyApp verification code. It expires in 5 minutes. Never share this code.\\n\\n@myapp.com #849201",
    "dlr_url": "https://yourdomain.com/webhooks/sms-dlr"
  }'`;

export const OtpSmsPage = ({ onOpenInquiriesModal, navigate }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const go = (e, path) => {
    e.preventDefault();
    if (navigate) navigate(path);
  };

  const guides = ["otp-sms-not-received-delivery-troubleshooting-guide", "preventing-artificial-traffic-inflation-ait-sms", "india-dlt-sms-compliance-registration-guide"]
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <div className="page-wrapper page-services">
      <div className="page-banner">
        <div className="container">
          <p className="stats-eyebrow">🔐 OTP SMS · 2FA Verification · Global Delivery</p>
          <h1>OTP SMS Service &amp; 2FA Verification API</h1>
          <p>
            Deliver one-time passwords in seconds across 195+ countries over direct operator routes, with
            number-portability lookups, automatic failover, SMS pumping protection and WhatsApp or RCS fallback.
            Connect by REST API or SMPP v3.4.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "24px", flexWrap: "wrap" }}>
            <button className="btn btn--primary btn--lg" onClick={onOpenInquiriesModal} style={{ cursor: "pointer" }}>
              Request OTP Test Credits
            </button>
            <a href="/rates" onClick={(e) => go(e, "/rates")} className="btn btn--secondary btn--lg">
              View OTP SMS Rates
            </a>
          </div>
        </div>
      </div>

      <section className="subpage-info-section" aria-labelledby="what-is-otp">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="section-heading">
            <p className="stats-eyebrow">The Basics</p>
            <h2 id="what-is-otp">What Is OTP SMS and Why Delivery Speed Matters</h2>
          </div>
          <p style={{ marginBottom: "16px", lineHeight: 1.7 }}>
            An OTP SMS is a text message carrying a short, single-use code that proves a user controls a phone number.
            It is the most widely used form of two-factor authentication because it works on every mobile phone without
            an app, and it protects sign-ups, logins, password resets and payments.
          </p>
          <p style={{ marginBottom: "16px", lineHeight: 1.7 }}>
            OTP is the most time-sensitive traffic in messaging. A marketing message that arrives a minute late still
            works; an OTP that arrives a minute late usually means an abandoned sign-up or a support ticket. That is why
            OTP delivery depends less on price and more on route quality: direct operator connections, correct routing of
            ported numbers, and fast failover when a route degrades.
          </p>
          <p style={{ lineHeight: 1.7 }}>
            OTP flows are also the main target of SMS pumping fraud, where bots request codes to premium number ranges so
            that someone else collects part of the termination fee. A good OTP setup has to be fast for real users and
            expensive for attackers.
          </p>
        </div>
      </section>

      <section className="subpage-info-section" style={{ background: "rgba(255, 255, 255, 0.02)" }} aria-labelledby="otp-use-cases">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Use Cases</p>
            <h2 id="otp-use-cases">Where OTP SMS Is Used</h2>
          </div>
          <div className="info-grid-3">
            {useCases.map((u) => (
              <div key={u.title} className="info-card">
                <span className="info-icon">{u.icon}</span>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "24px" }}>
            Industry-specific setups for banking, fintech and e-commerce: <a href="/industries" onClick={(e) => go(e, "/industries")}>industry solutions</a>.
          </p>
        </div>
      </section>

      <section className="subpage-info-section" aria-labelledby="otp-delivery">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">How We Deliver OTPs</p>
            <h2 id="otp-delivery">Built for Fast, Reliable OTP Delivery</h2>
          </div>
          <div className="info-grid-3">
            {deliveryPillars.map((p) => (
              <div key={p.title} className="info-card">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="subpage-info-section" style={{ background: "rgba(255, 255, 255, 0.02)" }} aria-labelledby="otp-api">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="section-heading">
            <p className="stats-eyebrow">Developer Integration</p>
            <h2 id="otp-api">Send an OTP SMS With One API Call</h2>
            <p>Set <code>type</code> to <code>otp</code> to route the message on OTP-priority routes. Delivery receipts are posted to your <code>dlr_url</code>.</p>
          </div>
          <pre style={{ overflowX: "auto", padding: "16px", borderRadius: "8px", background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "13px", lineHeight: 1.5 }}>
            <code>{curlExample}</code>
          </pre>
          <p style={{ marginTop: "16px", lineHeight: 1.7 }}>
            High-volume senders can use a dedicated SMPP v3.4 transceiver bind instead. See the{" "}
            <a href="/api" onClick={(e) => go(e, "/api")}>API documentation</a> and the{" "}
            <a href="/insights/how-to-configure-smpp-v34-bind-guide" onClick={(e) => go(e, "/insights/how-to-configure-smpp-v34-bind-guide")}>SMPP bind configuration guide</a>.
          </p>
        </div>
      </section>

      <section className="subpage-info-section" aria-labelledby="otp-best-practice">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="section-heading">
            <p className="stats-eyebrow">Best Practices</p>
            <h2 id="otp-best-practice">How to Write and Configure an OTP SMS</h2>
          </div>
          <h3 style={{ marginBottom: "12px" }}>Message content</h3>
          <ul className="spec-list" style={{ lineHeight: 1.7, paddingLeft: "20px", marginBottom: "24px" }}>
            <li><strong>Put the code first</strong> so it is visible in the notification preview: "849201 is your MyApp code".</li>
            <li><strong>Name your app or brand</strong> so users can tell a real code from a phishing attempt.</li>
            <li><strong>State the expiry</strong> ("expires in 5 minutes") and add "never share this code".</li>
            <li><strong>Keep it to one segment</strong>: under 160 GSM characters, or 70 if the text needs Unicode. Avoid emoji in OTPs — one emoji switches the whole message to Unicode.</li>
            <li><strong>Don't include links</strong>. Links raise spam filtering and look like phishing.</li>
          </ul>
          <h3 style={{ marginBottom: "12px" }}>Code settings</h3>
          <ul className="spec-list" style={{ lineHeight: 1.7, paddingLeft: "20px", marginBottom: "24px" }}>
            <li><strong>6 digits</strong> is the usual balance between security and ease of typing.</li>
            <li><strong>Expire codes after 5–10 minutes</strong> and set the same SMS validity period so late retries stop.</li>
            <li><strong>Limit attempts</strong>: lock the code after 3–5 wrong entries and limit resends per number per hour.</li>
            <li><strong>Generate codes securely</strong> with a cryptographic random generator and store only a hash.</li>
          </ul>
          <h3 style={{ marginBottom: "12px" }}>Auto-fill on phones and browsers</h3>
          <ul className="spec-list" style={{ lineHeight: 1.7, paddingLeft: "20px" }}>
            <li><strong>iOS and Safari:</strong> add <code>autocomplete="one-time-code"</code> to the code input field.</li>
            <li><strong>Web (domain-bound codes):</strong> end the SMS with <code>@yourdomain.com #849201</code> so supporting browsers fill the code only on your site.</li>
            <li><strong>Android apps:</strong> end the SMS with your app's 11-character hash to use the SMS Retriever API, which reads the code with no permission prompt.</li>
          </ul>
        </div>
      </section>

      <section className="subpage-info-section" style={{ background: "rgba(255, 255, 255, 0.02)" }} aria-labelledby="otp-metrics">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Measure What Matters</p>
            <h2 id="otp-metrics">OTP Delivery Metrics to Track</h2>
          </div>
          <div className="dlr-table-wrapper">
            <table className="dlr-table">
              <thead>
                <tr><th>Metric</th><th>Definition</th><th>What to look for</th></tr>
              </thead>
              <tbody>
                {metrics.map((m) => (
                  <tr key={m.name}><td><strong>{m.name}</strong></td><td>{m.def}</td><td>{m.target}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="subpage-info-section" aria-labelledby="otp-countries">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Regulation</p>
            <h2 id="otp-countries">OTP SMS Rules by Country</h2>
            <p>OTPs are transactional messages, but many countries still require a registered sender or template before they are delivered.</p>
          </div>
          <div className="dlr-table-wrapper">
            <table className="dlr-table">
              <thead>
                <tr><th>Country</th><th>What OTP senders need</th></tr>
              </thead>
              <tbody>
                {countryRules.map((r) => (
                  <tr key={r.country}>
                    <td><a href={r.path} onClick={(e) => go(e, r.path)}><strong>{r.country}</strong></a></td>
                    <td>{r.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="subpage-info-section" style={{ background: "rgba(255, 255, 255, 0.02)" }} aria-labelledby="otp-channels">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">Channels</p>
            <h2 id="otp-channels">SMS OTP vs WhatsApp vs RCS vs Authenticator Apps</h2>
          </div>
          <div className="dlr-table-wrapper">
            <table className="dlr-table">
              <thead>
                <tr><th>Channel</th><th>Reach</th><th>Speed</th><th>Cost</th><th>Notes</th></tr>
              </thead>
              <tbody>
                {channels.map((c) => (
                  <tr key={c.channel}>
                    <td><strong>{c.channel}</strong></td><td>{c.reach}</td><td>{c.speed}</td><td>{c.cost}</td><td>{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: "center", marginTop: "24px" }}>
            Set up fallback channels: <a href="/whatsapp-business" onClick={(e) => go(e, "/whatsapp-business")}>WhatsApp Business API</a> ·{" "}
            <a href="/rcs-messaging" onClick={(e) => go(e, "/rcs-messaging")}>RCS Business Messaging</a>
          </p>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="subpage-info-section" aria-labelledby="otp-guides">
          <div className="container">
            <div className="section-heading">
              <p className="stats-eyebrow">Further Reading</p>
              <h2 id="otp-guides">OTP Guides</h2>
            </div>
            <div className="info-grid-3">
              {guides.map((p) => (
                <article key={p.slug} className="info-card">
                  <h3><a href={`/insights/${p.slug}`} onClick={(e) => go(e, `/insights/${p.slug}`)}>{p.title}</a></h3>
                  <p>{p.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="faq">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">OTP SMS FAQ</p>
            <h2>Frequently Asked Questions About OTP SMS</h2>
          </div>
          <div className="faq-list">
            {otpFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-q-text">
                      <span className="faq-badge">OTP</span>
                      <span>{faq.q}</span>
                    </div>
                    <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className="faq-answer" hidden={!isOpen}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct="OTP SMS / 2FA Verification" />
    </div>
  );
};

export default OtpSmsPage;
