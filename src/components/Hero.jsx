import Button from "./Button";
import "../styles/components/Hero.css";

const stats = [
  { value: "195+", label: "Countries" },
  { value: "250+", label: "Mobile operators" },
  { value: "v3.4 / v5.0", label: "SMPP binds" },
  { value: "24/7", label: "NOC support" },
];

export const Hero = ({ navigate }) => {
  const handleNav = (e, path) => {
    e.preventDefault();
    if (navigate) navigate(path);
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-kicker">Wholesale SMS · OTP · SMPP gateway</p>

          <h1 id="hero-title">
            Wholesale bulk SMS and OTP delivery on <span className="hero-accent">direct carrier routes</span>
          </h1>

          <p className="hero-subtitle">
            Send A2P traffic to 195+ countries through dedicated SMPP v3.4/v5.0 binds or a REST API —
            with live number-portability lookups, quality-weighted least-cost routing and real handset
            delivery receipts.
          </p>

          <div className="hero-buttons">
            <Button href="/contact" onClick={(e) => handleNav(e, "/contact")} variant="primary" size="lg" external={false}>
              Request a test route
            </Button>
            <Button href="/rates" onClick={(e) => handleNav(e, "/rates")} variant="secondary" size="lg" external={false}>
              View SMS rates
            </Button>
          </div>

          <dl className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-console" aria-label="Example: sending an OTP SMS through the NAMX API">
          <div className="console-bar">
            <span className="console-dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="console-title">POST /v1/sms/send</span>
            <span className="console-tag">Example</span>
          </div>
          <pre className="console-body">
            <code>
              <span className="c-punc">{"{"}</span>{"\n"}
              {"  "}<span className="c-key">"to"</span>: <span className="c-str">"+447700900077"</span>,{"\n"}
              {"  "}<span className="c-key">"sender_id"</span>: <span className="c-str">"MYAPP"</span>,{"\n"}
              {"  "}<span className="c-key">"type"</span>: <span className="c-str">"otp"</span>,{"\n"}
              {"  "}<span className="c-key">"text"</span>: <span className="c-str">"849201 is your MyApp code"</span>,{"\n"}
              {"  "}<span className="c-key">"dlr_url"</span>: <span className="c-str">"https://you.com/dlr"</span>{"\n"}
              <span className="c-punc">{"}"}</span>
            </code>
          </pre>
          <ol className="console-events">
            <li>
              <span className="ev-dot" />
              <span className="ev-name">Number lookup</span>
              <span className="ev-detail">GB · ported network resolved</span>
            </li>
            <li>
              <span className="ev-dot" />
              <span className="ev-name">Routed</span>
              <span className="ev-detail">Direct operator route · OTP priority</span>
            </li>
            <li className="is-final">
              <span className="ev-dot" />
              <span className="ev-name">DELIVRD</span>
              <span className="ev-detail">Handset receipt posted to webhook</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
