import otpFaqs from "../data/otpFaqs.json";
import posts from "virtual:posts-meta";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";
import EmojiIcon from "../components/EmojiIcon";
import { PageHeader, Section, FaqSection } from "../components/ui";

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
  const go = (e, path) => {
    e.preventDefault();
    if (navigate) navigate(path);
  };

  const guides = ["otp-sms-not-received-delivery-troubleshooting-guide", "preventing-artificial-traffic-inflation-ait-sms", "india-dlt-sms-compliance-registration-guide"]
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <div className="page-otp">
      <PageHeader
        path="/otp-sms"
        eyebrow="OTP SMS · 2FA verification · Global delivery"
        title="OTP SMS Service & 2FA Verification API"
        intro="Deliver one-time passwords in seconds across 195+ countries over direct operator routes, with number-portability lookups, automatic failover, SMS pumping protection and WhatsApp or RCS fallback. Connect by REST API or SMPP v3.4."
      >
        <button type="button" className="btn btn--primary btn--lg" onClick={onOpenInquiriesModal}>
          Request OTP test credits
        </button>
        <a href="/insights/otp-sms-not-received-delivery-troubleshooting-guide" onClick={(e) => go(e, "/insights/otp-sms-not-received-delivery-troubleshooting-guide")} className="btn btn--secondary btn--lg">
          OTP delivery guide
        </a>
      </PageHeader>

      <Section id="what-is-otp" eyebrow="The basics" title="What is OTP SMS and why delivery speed matters" narrow>
        <div className="prose">
          <p>
            An OTP SMS is a text message carrying a short, single-use code that proves a user controls a phone number.
            It is the most widely used form of two-factor authentication because it works on every mobile phone without
            an app, and it protects sign-ups, logins, password resets and payments.
          </p>
          <p>
            OTP is the most time-sensitive traffic in messaging. A marketing message that arrives a minute late still
            works; an OTP that arrives a minute late usually means an abandoned sign-up or a support ticket. That is why
            OTP delivery depends less on price and more on route quality: direct operator connections, correct routing of
            ported numbers, and fast failover when a route degrades.
          </p>
          <p>
            OTP flows are also the main target of SMS pumping fraud, where bots request codes to premium number ranges so
            that someone else collects part of the termination fee. A good OTP setup has to be fast for real users and
            expensive for attackers.
          </p>
        </div>
      </Section>

      <Section id="otp-use-cases" eyebrow="Use cases" title="Where OTP SMS is used" alt>
        <div className="info-grid-3">
          {useCases.map((u) => (
            <div key={u.title} className="info-card">
              <span className="info-icon"><EmojiIcon char={u.icon} /></span>
              <h3>{u.title}</h3>
              <p>{u.text}</p>
            </div>
          ))}
        </div>
        <p className="ui-note">
          Industry-specific setups for banking, fintech and e-commerce: <a href="/industries" onClick={(e) => go(e, "/industries")}>industry solutions</a>.
        </p>
      </Section>

      <Section id="otp-delivery" eyebrow="How we deliver OTPs" title="Built for fast, reliable OTP delivery">
        <div className="info-grid-3">
          {deliveryPillars.map((p) => (
            <div key={p.title} className="info-card">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="otp-api"
        eyebrow="Developer integration"
        title="Send an OTP SMS with one API call"
        intro={<>Set <code>type</code> to <code>otp</code> to route the message on OTP-priority routes. Delivery receipts are posted to your <code>dlr_url</code>.</>}
        alt
        narrow
      >
        <pre className="ui-code"><code>{curlExample}</code></pre>
        <p className="ui-note">
          High-volume senders can use a dedicated SMPP v3.4 transceiver bind instead. See the{" "}
          <a href="/api" onClick={(e) => go(e, "/api")}>API documentation</a> and the{" "}
          <a href="/insights/how-to-configure-smpp-v34-bind-guide" onClick={(e) => go(e, "/insights/how-to-configure-smpp-v34-bind-guide")}>SMPP bind configuration guide</a>.
        </p>
      </Section>

      <Section id="otp-best-practice" eyebrow="Best practices" title="How to write and configure an OTP SMS" narrow>
        <div className="prose">
          <h3>Message content</h3>
          <ul>
            <li><strong>Put the code first</strong> so it is visible in the notification preview: "849201 is your MyApp code".</li>
            <li><strong>Name your app or brand</strong> so users can tell a real code from a phishing attempt.</li>
            <li><strong>State the expiry</strong> ("expires in 5 minutes") and add "never share this code".</li>
            <li><strong>Keep it to one segment</strong>: under 160 GSM characters, or 70 if the text needs Unicode. Avoid emoji in OTPs — one emoji switches the whole message to Unicode.</li>
            <li><strong>Don't include links</strong>. Links raise spam filtering and look like phishing.</li>
          </ul>
          <h3>Code settings</h3>
          <ul>
            <li><strong>6 digits</strong> is the usual balance between security and ease of typing.</li>
            <li><strong>Expire codes after 5–10 minutes</strong> and set the same SMS validity period so late retries stop.</li>
            <li><strong>Limit attempts</strong>: lock the code after 3–5 wrong entries and limit resends per number per hour.</li>
            <li><strong>Generate codes securely</strong> with a cryptographic random generator and store only a hash.</li>
          </ul>
          <h3>Auto-fill on phones and browsers</h3>
          <ul>
            <li><strong>iOS and Safari:</strong> add <code>autocomplete="one-time-code"</code> to the code input field.</li>
            <li><strong>Web (domain-bound codes):</strong> end the SMS with <code>@yourdomain.com #849201</code> so supporting browsers fill the code only on your site.</li>
            <li><strong>Android apps:</strong> end the SMS with your app's 11-character hash to use the SMS Retriever API, which reads the code with no permission prompt.</li>
          </ul>
        </div>
      </Section>

      <Section id="otp-metrics" eyebrow="Measure what matters" title="OTP delivery metrics to track" alt>
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
      </Section>

      <Section
        id="otp-countries"
        eyebrow="Regulation"
        title="OTP SMS rules by country"
        intro="OTPs are transactional messages, but many countries still require a registered sender or template before they are delivered."
      >
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
      </Section>

      <Section id="otp-channels" eyebrow="Channels" title="SMS OTP vs WhatsApp vs RCS vs authenticator apps" alt>
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
        <p className="ui-note">
          Set up fallback channels: <a href="/whatsapp-business" onClick={(e) => go(e, "/whatsapp-business")}>WhatsApp Business API</a> ·{" "}
          <a href="/rcs-messaging" onClick={(e) => go(e, "/rcs-messaging")}>RCS Business Messaging</a>
        </p>
      </Section>

      {guides.length > 0 && (
        <Section id="otp-guides" eyebrow="Further reading" title="OTP guides">
          <div className="info-grid-3">
            {guides.map((p) => (
              <article key={p.slug} className="info-card">
                <h3><a href={`/insights/${p.slug}`} onClick={(e) => go(e, `/insights/${p.slug}`)}>{p.title}</a></h3>
                <p>{p.excerpt}</p>
              </article>
            ))}
          </div>
        </Section>
      )}

      <FaqSection eyebrow="OTP SMS FAQ" title="Frequently asked questions about OTP SMS" items={otpFaqs} badge="OTP" />

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct="OTP SMS / 2FA Verification" />
    </div>
  );
};

export default OtpSmsPage;
