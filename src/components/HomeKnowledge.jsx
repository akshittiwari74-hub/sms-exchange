import posts from "virtual:posts-meta";
import "../styles/pages/Subpages.css";
import "../styles/components/HomeKnowledge.css";

/*
 * Evergreen, crawlable reference content for the homepage.
 * Everything here is rendered server-side into the static HTML so search
 * engines can index it — keep it factual and avoid client-only toggles.
 */

const deliverySteps = [
  {
    title: "1. Submission (SMPP or HTTP API)",
    text: "Your application or platform (the ESME) submits a submit_sm PDU over a persistent SMPP v3.4 bind, or a JSON request to the REST API. The request carries the sender ID, destination MSISDN in E.164 format, data coding scheme and message body.",
  },
  {
    title: "2. Validation & compliance checks",
    text: "The gateway validates the sender ID against country rules (for example India DLT headers and templates, UAE pre-registered sender IDs, US 10DLC campaign IDs), checks encoding and length, and screens for fraud patterns such as SMS pumping toward high-risk number ranges.",
  },
  {
    title: "3. HLR / MNP lookup",
    text: "A Home Location Register (HLR) or Mobile Number Portability (MNP) query identifies which operator currently serves the number. Without it, messages to ported numbers are routed to the wrong network and either fail or cost more.",
  },
  {
    title: "4. Route selection (LCR)",
    text: "The least-cost routing engine picks a route for the destination MCC-MNC using delivery ratio, latency and cost — not price alone. OTP traffic is weighted toward the fastest direct route; marketing traffic can tolerate a cheaper tier.",
    link: { path: "/otp-sms", label: "How OTP SMS delivery works" },
  },
  {
    title: "5. Operator SMSC & handset delivery",
    text: "The terminating mobile operator's SMSC delivers the message over its radio network. If the handset is off or out of coverage, the SMSC retries until the validity period expires.",
  },
  {
    title: "6. Delivery receipt (DLR)",
    text: "The operator returns a status (DELIVRD, UNDELIV, EXPIRED, REJECTD) which flows back as a deliver_sm PDU over SMPP or an HTTP webhook, so you can reconcile billing and retry failed OTPs on another channel.",
  },
];

const routeTypes = [
  {
    type: "Direct MNO connection",
    senderId: "Preserved",
    dlr: "Real handset DLRs",
    latency: "Lowest (typically 1–3 s)",
    risk: "Compliant",
    bestFor: "OTP, banking alerts, transactional",
  },
  {
    type: "Tier-1 aggregator / hub",
    senderId: "Usually preserved",
    dlr: "Real DLRs via partner",
    latency: "Low (one extra hop)",
    risk: "Compliant if partner is direct",
    bestFor: "Notifications, mixed traffic",
  },
  {
    type: "Grey route (SIM box / P2P)",
    senderId: "Often replaced with a random number",
    dlr: "Frequently faked",
    latency: "Unpredictable, OTPs expire",
    risk: "Violates operator terms; blocked by SMS firewalls",
    bestFor: "Avoid for business traffic",
  },
];

const encodingRows = [
  { enc: "GSM 03.38 7-bit", dcs: "0x00", single: "160", multi: "153", note: "Latin alphabet. €, [, ], {, }, |, ^, ~ and \\ count as 2 characters." },
  { enc: "UCS-2 (Unicode)", dcs: "0x08", single: "70", multi: "67", note: "Required for Arabic, Hindi, Chinese, emoji, or any character outside GSM 7-bit." },
  { enc: "Latin-1 (ISO-8859-1)", dcs: "0x03", single: "140 bytes", multi: "134 bytes", note: "Rarely supported end-to-end; prefer GSM 7-bit or UCS-2." },
];

const priceFactors = [
  { title: "Destination operator fee", text: "Each mobile operator sets its own A2P termination rate. This is the largest part of the price and varies widely by country and network." },
  { title: "Route quality", text: "Direct operator routes cost more than aggregator or grey routes because they deliver real sender IDs, real DLRs and predictable latency." },
  { title: "Monthly volume", text: "Wholesale tiers drop the per-message rate as committed volume grows. Commitments above roughly 1M messages per month are usually priced individually." },
  { title: "Message length & encoding", text: "You pay per segment, not per message. A 200-character Unicode message is 3 segments (67 characters each) and costs 3×." },
  { title: "Traffic type", text: "Some operators charge different rates for OTP, transactional and promotional traffic, or add registration and pass-through fees (for example US 10DLC carrier fees)." },
  { title: "Sender ID registration", text: "Countries that require pre-registered sender IDs may add one-time or monthly registration costs on top of the per-message rate." },
];

const complianceRows = [
  { country: "🇮🇳 India", path: "/bulk-sms-india", regulator: "TRAI (TCCCPR 2018)", sender: "6-character DLT header", rule: "Entity, header and content template must be registered on an operator DLT platform." },
  { country: "🇺🇸 United States", path: "/bulk-sms-usa", regulator: "FCC, CTIA, The Campaign Registry", sender: "10DLC, toll-free or short code — no alphanumeric", rule: "Brand and campaign registration (10DLC) or toll-free verification is required." },
  { country: "🇬🇧 United Kingdom", path: "/bulk-sms-uk", regulator: "Ofcom, ICO (PECR)", sender: "Alphanumeric up to 11 characters", rule: "Marketing SMS needs prior consent and an opt-out; sender ID must identify the brand." },
  { country: "🇦🇪 UAE", path: "/bulk-sms-uae", regulator: "TDRA", sender: "Pre-registered alphanumeric", rule: "Promotional SMS only 7:00–21:00 local time, with a registered sender ID." },
  { country: "🇲🇾 Malaysia", path: "/bulk-sms-malaysia", regulator: "MCMC", sender: "Registered header", rule: "Commercial broadcasts are prefixed with \"RM0.00\" to show the message is free to receive." },
];

// Must stay word-for-word identical to the FAQPage JSON-LD in index.html
// (Google requires structured data to match visible page content).
const homeFaqs = [
  {
    q: "What platforms and protocols are supported for sending SMS?",
    a: "NAMX Telecom offers an all-in-one Web Broadcast Platform for non-technical users, native SMPP v3.4 and v5.0 over TLS for high-volume carrier binds, as well as developer-friendly HTTP REST APIs with real-time DLR callbacks.",
  },
  {
    q: "How are Sender IDs (Alphanumeric Headers) provisioned and regulated?",
    a: "Sender ID registration varies by destination market. For markets requiring registration (such as India DLT, UAE TDRA, and UK/EU regulations), our compliance team handles pre-registration within 24-48 hours. Dynamic Sender IDs are supported in open corridors.",
  },
  {
    q: "What is your Service Level Agreement (SLA) for OTP and transactional delivery?",
    a: "We guarantee a 99.99% network uptime SLA for dedicated SMPP binds and direct API routes. Time-critical OTP messages achieve a global average delivery latency of under 2.5 seconds with sub-second DLR callbacks.",
  },
  {
    q: "How quickly can a new carrier or enterprise partner be onboarded?",
    a: "After completing standard KYC verification and technical IP whitelisting, web platform and API sandbox access are provisioned immediately. Live production SMPP binds and API tokens are activated within 2 to 4 business hours.",
  },
];

export const HomeKnowledge = ({ navigate }) => {
  const go = (e, path) => {
    e.preventDefault();
    if (navigate) navigate(path);
  };

  const latestPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="kb-section" aria-labelledby="how-sms-works">
        <div className="home-wrap">
          <div className="home-section-head">
            <p className="stats-eyebrow">How wholesale SMS works</p>
            <h2 id="how-sms-works">How an A2P SMS travels from your application to a handset</h2>
            <p>
              Wholesale bulk SMS is the business of carrying application-to-person (A2P) messages — OTP codes,
              alerts and notifications — from businesses and CPaaS platforms to mobile operators worldwide.
              Every message passes through the same six stages.
            </p>
          </div>
          <ol className="kb-steps">
            {deliverySteps.map((s, i) => (
              <li key={s.title} className="kb-step">
                <span className="kb-step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title.replace(/^\d+\.\s*/, "")}</h3>
                <p>{s.text}</p>
                {s.link && (
                  <p className="kb-step-link">
                    <a href={s.link.path} onClick={(e) => go(e, s.link.path)}>{s.link.label} →</a>
                  </p>
                )}
              </li>
            ))}
          </ol>
          <p className="kb-footnote">
            Protocol details: <a href="/insights/what-is-smpp-v34-guide" onClick={(e) => go(e, "/insights/what-is-smpp-v34-guide")}>SMPP v3.4 guide</a> ·{" "}
            <a href="/insights/telecom-lcr-least-cost-routing-algorithms-explained" onClick={(e) => go(e, "/insights/telecom-lcr-least-cost-routing-algorithms-explained")}>how least-cost routing works</a> ·{" "}
            <a href="/insights/smpp-error-codes-dlr-troubleshooting-guide" onClick={(e) => go(e, "/insights/smpp-error-codes-dlr-troubleshooting-guide")}>DLR &amp; error code reference</a>
          </p>
        </div>
      </section>

      <section className="kb-section kb-alt" aria-labelledby="route-types">
        <div className="home-wrap">
          <div className="home-section-head">
            <p className="stats-eyebrow">Route quality</p>
            <h2 id="route-types">Direct vs aggregator vs grey SMS routes compared</h2>
            <p>
              Two providers can quote very different prices for the same country because they use different routes.
              This is what the route type changes for your traffic.
            </p>
          </div>
          <div className="dlr-table-wrapper">
            <table className="dlr-table">
              <thead>
                <tr>
                  <th>Route type</th>
                  <th>Sender ID</th>
                  <th>Delivery receipts</th>
                  <th>Latency</th>
                  <th>Compliance</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                {routeTypes.map((r) => (
                  <tr key={r.type}>
                    <td><strong>{r.type}</strong></td>
                    <td>{r.senderId}</td>
                    <td>{r.dlr}</td>
                    <td>{r.latency}</td>
                    <td>{r.risk}</td>
                    <td>{r.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="kb-footnote">
            Read more: <a href="/insights/a2p-vs-p2p-sms-routing" onClick={(e) => go(e, "/insights/a2p-vs-p2p-sms-routing")}>A2P vs P2P routing and how to spot a grey route</a>
          </p>
        </div>
      </section>

      <section className="kb-section" aria-labelledby="sms-length">
        <div className="home-wrap">
          <div className="home-section-head">
            <p className="stats-eyebrow">Encoding &amp; billing</p>
            <h2 id="sms-length">SMS character limits, encoding and segments</h2>
            <p>
              SMS is billed per segment. Messages longer than one segment are split and reassembled on the handset
              using a User Data Header (UDH), which uses 6–7 bytes of each segment — that is why the per-segment limit drops.
            </p>
          </div>
          <div className="dlr-table-wrapper">
            <table className="dlr-table">
              <thead>
                <tr>
                  <th>Encoding</th>
                  <th>data_coding</th>
                  <th>Single</th>
                  <th>Per segment</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {encodingRows.map((r) => (
                  <tr key={r.enc}>
                    <td><strong>{r.enc}</strong></td>
                    <td><code>{r.dcs}</code></td>
                    <td>{r.single}</td>
                    <td>{r.multi}</td>
                    <td>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="kb-section kb-alt" aria-labelledby="sms-pricing">
        <div className="home-wrap kb-split">
          <div className="home-section-head">
            <p className="stats-eyebrow">Pricing explained</p>
            <h2 id="sms-pricing">What determines the price of wholesale SMS?</h2>
            <p> Ask us for a quote for your destinations and volume.
            </p>
          </div>
          <dl className="kb-list">
            {priceFactors.map((f) => (
              <div key={f.title} className="kb-list-row">
                <dt>{f.title}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="kb-section" aria-labelledby="sms-compliance">
        <div className="home-wrap">
          <div className="home-section-head">
            <p className="stats-eyebrow">Regulation</p>
            <h2 id="sms-compliance">A2P SMS compliance rules by country</h2>
            <p>Sender ID and registration rules decide whether your messages are delivered at all. Key markets at a glance:</p>
          </div>
          <div className="dlr-table-wrapper">
            <table className="dlr-table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Regulator</th>
                  <th>Sender ID</th>
                  <th>Key requirement</th>
                </tr>
              </thead>
              <tbody>
                {complianceRows.map((r) => (
                  <tr key={r.country}>
                    <td>
                      <a href={r.path} onClick={(e) => go(e, r.path)}><strong>{r.country}</strong></a>
                    </td>
                    <td>{r.regulator}</td>
                    <td>{r.sender}</td>
                    <td>{r.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="kb-section kb-alt" aria-labelledby="home-faq">
        <div className="home-wrap kb-split">
          <div className="home-section-head">
            <p className="stats-eyebrow">FAQ</p>
            <h2 id="home-faq">Frequently asked questions</h2>
            <p>
              More answers on the <a href="/faq" onClick={(e) => go(e, "/faq")}>full FAQ page</a>.
            </p>
          </div>
          <div className="kb-faq">
            {homeFaqs.map((f) => (
              <div key={f.q} className="kb-faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kb-section" aria-labelledby="latest-guides">
        <div className="home-wrap">
          <div className="home-section-head">
            <p className="stats-eyebrow">Guides</p>
            <h2 id="latest-guides">Engineering and compliance guides</h2>
          </div>
          <ul className="kb-guides">
            {latestPosts.map((p) => (
              <li key={p.slug}>
                <a href={`/insights/${p.slug}`} onClick={(e) => go(e, `/insights/${p.slug}`)} className="kb-guide">
                  <span className="kb-guide-cat">{p.category}</span>
                  <span className="kb-guide-title">{p.title}</span>
                  <span className="kb-guide-arrow" aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomeKnowledge;
