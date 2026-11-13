import { useParams } from "react-router-dom";
import corridors from "../data/corridors.json";
import posts from "virtual:posts-meta";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";
import EmojiIcon from "../components/EmojiIcon";
import { PageHeader, Section, FaqSection } from "../components/ui";

export const LocationPage = ({ onOpenInquiriesModal, forcedLocation, navigate }) => {
  const params = useParams();
  const rawKey = (forcedLocation || params?.location || "").toLowerCase().replace("bulk-sms-", "");

  // Fallback if not directly matched in corridors.json
  const data = corridors[rawKey] || {
    country: rawKey ? rawKey.toUpperCase() : "Global",
    flag: "🌐",
    iso: rawKey.toUpperCase(),
    dialCode: "",
    title: `Global Wholesale Bulk SMS & SMPP Gateway Provider in ${rawKey.toUpperCase()}`,
    subtitle: `Carrier-grade zero-hop SS7 direct interconnects, SMPP v3.4 binds, and high-throughput OTP delivery for ${rawKey.toUpperCase()}.`,
    regulatoryBody: "National Telecommunications Regulatory Authority",
    senderIdType: "Alphanumeric / Short Code compliant with local telecom regulations",
    avgLatency: "1.5 seconds",
    dlrRate: "99.9%",
    supportedProtocols: "SMPP v3.4 / v5.0 (TLS 1.3), REST JSON API",
    defaultEncoding: "GSM 7-bit & UCS-2 Unicode",
    complianceNotes: "Full compliance with national telecommunications anti-spam legislation and consumer protection frameworks.",
    networks: [
      { name: "Tier-1 Direct Carrier Interconnect", mcc: "---", mnc: "--", marketShare: "Primary", routeType: "Direct SS7 MNO Link", tps: "5,000 TPS", latency: "1.4s" },
      { name: "Secondary Redundant Route", mcc: "---", mnc: "--", marketShare: "Secondary", routeType: "Wholesale Carrier Peering", tps: "4,000 TPS", latency: "1.6s" }
    ],
    faqs: [
      {
        q: `How quickly can I provision an SMPP bind for ${rawKey.toUpperCase()}?`,
        a: "Standard SMPP v3.4/v5.0 transceiver binds with IP whitelisting are provisioned within 5 to 15 minutes by our 24/7 Global NOC team."
      }
    ]
  };

  const relatedPosts = (data.relatedGuides || [])
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter(Boolean);

  const handleNav = (e, path) => {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    }
  };

  const corridorLinks = [
    { path: "/bulk-sms-usa", name: "🇺🇸 USA & 10DLC" },
    { path: "/bulk-sms-uk", name: "🇬🇧 United Kingdom" },
    { path: "/bulk-sms-uae", name: "🇦🇪 UAE & Middle East" },
    { path: "/bulk-sms-india", name: "🇮🇳 India & DLT" },
    { path: "/bulk-sms-malaysia", name: "🇲🇾 Malaysia & APAC" },
    { path: "/otp-sms", name: "OTP SMS & 2FA delivery" },
    { path: "/coverage", name: "Global coverage" },
  ].filter((l) => l.path !== `/bulk-sms-${rawKey}`);

  return (
    <div className="page-location">
      <PageHeader
        path={`/bulk-sms-${rawKey}`}
        eyebrow={<>{data.flag} {data.country} · Direct operator routes &amp; SMPP</>}
        title={data.title}
        intro={data.subtitle}
      >
        <button type="button" className="btn btn--primary btn--lg" onClick={onOpenInquiriesModal}>
          Request a {data.country} quote
        </button>
        <a href="/coverage" onClick={(e) => handleNav(e, "/coverage")} className="btn btn--secondary btn--lg">
          View global coverage
        </a>
      </PageHeader>

      <Section id="specs" eyebrow="Regulation & protocol specs" title={`${data.country} telecom interconnect specifications`}>
        <div className="info-grid-3">
          <div className="info-card ui-kv">
            <span className="info-icon"><EmojiIcon char="🏛️" /></span>
            <h3>Regulatory authority</h3>
            <p><strong>Governing body:</strong> {data.regulatoryBody}</p>
            <p>{data.complianceNotes}</p>
          </div>
          <div className="info-card ui-kv">
            <span className="info-icon"><EmojiIcon char="🏷️" /></span>
            <h3>Sender ID regulations</h3>
            <p><strong>Supported format:</strong> {data.senderIdType}</p>
            <p>Supported encodings include standard GSM 03.38 7-bit and UCS-2 16-bit Unicode.</p>
          </div>
          <div className="info-card ui-kv">
            <span className="info-icon"><EmojiIcon char="⚡" /></span>
            <h3>Network benchmarks</h3>
            <p><strong>Average delivery latency:</strong> {data.avgLatency}</p>
            <p><strong>Handset DLR rate:</strong> {data.dlrRate}</p>
            <p><strong>Protocols:</strong> {data.supportedProtocols}</p>
          </div>
        </div>
      </Section>

      {data.guideIntro && (
        <Section id="country-guide" eyebrow={`${data.country} A2P SMS guide`} title={`Sending business SMS to ${data.country}: what you need to know`} alt narrow>
          <div className="prose">
            {data.guideIntro.map((para, i) => <p key={i}>{para}</p>)}
            {data.checklist && (
              <>
                <h3>{data.country} SMS compliance checklist</h3>
                <ol>
                  {data.checklist.map((item, i) => <li key={i}>{item}</li>)}
                </ol>
              </>
            )}
          </div>
          {data.numberTypes && (
            <>
              <h3 className="ui-subhead">Sender types in {data.country} compared</h3>
              <div className="dlr-table-wrapper">
                <table className="dlr-table">
                  <thead>
                    <tr><th>Sender type</th><th>Throughput</th><th>Setup time</th><th>Best for</th></tr>
                  </thead>
                  <tbody>
                    {data.numberTypes.map((t) => (
                      <tr key={t.type}>
                        <td><strong>{t.type}</strong></td><td>{t.throughput}</td><td>{t.setup}</td><td>{t.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </Section>
      )}

      <Section
        id="operators"
        eyebrow="Operator routes"
        title={`${data.country} mobile network operator routes`}
        intro="Direct mobile network operator routes with MCC-MNC mapping, throughput and latency benchmarks."
      >
        <div className="dlr-table-wrapper">
          <table className="dlr-table">
            <thead>
              <tr>
                <th>Mobile operator</th><th>MCC / MNC</th><th>Market share</th><th>Route tier</th>
                <th>Throughput</th><th>Latency</th>
              </tr>
            </thead>
            <tbody>
              {data.networks.map((net) => (
                <tr key={net.name}>
                  <td><strong>{net.name}</strong></td>
                  <td><code>{net.mcc}-{net.mnc}</code></td>
                  <td>{net.marketShare}</td>
                  <td>{net.routeType}</td>
                  <td>{net.tps}</td>
                  <td><span className="text-success">{net.latency}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {relatedPosts.length > 0 && (
        <Section id="related-guides" eyebrow="Further reading" title={`Guides for ${data.country} SMS senders`}>
          <div className="info-grid-3">
            {relatedPosts.map((p) => (
              <article key={p.slug} className="info-card">
                <h3><a href={`/insights/${p.slug}`} onClick={(e) => handleNav(e, `/insights/${p.slug}`)}>{p.title}</a></h3>
                <p>{p.excerpt}</p>
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section id="corridors" eyebrow="More destinations" title="Explore other SMS corridors" alt>
        <div className="ui-chip-row">
          {corridorLinks.map((link) => (
            <a key={link.path} href={link.path} onClick={(e) => handleNav(e, link.path)} className="ui-chip">
              {link.name}
            </a>
          ))}
        </div>
      </Section>

      <FaqSection
        eyebrow="Technical & regulatory guidance"
        title={`Frequently asked questions: ${data.country} SMS routing`}
        items={data.faqs}
        badge={data.country}
      />

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct={`Wholesale SMS Route - ${data.country}`} />
    </div>
  );
};

export default LocationPage;
