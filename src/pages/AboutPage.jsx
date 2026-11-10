import { Link } from "react-router-dom";
import { KeyRound, Cable, MessageCircle, Smartphone, Laptop } from "lucide-react";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";
import { PageHeader, Section } from "../components/ui";

// Only facts that can be checked are stated here. Add company registration
// details, founding year and team names once they can be published.

const products = [
  { Icon: KeyRound, title: "OTP & 2FA SMS", text: "Verification codes on direct operator routes with failover and SMS pumping protection.", to: "/otp-sms" },
  { Icon: Cable, title: "Wholesale SMS & SMPP", text: "A2P termination, SMPP v3.4/v5.0 binds and least-cost routing for carriers and aggregators.", to: "/services" },
  { Icon: MessageCircle, title: "WhatsApp Business", text: "Messaging over the Meta Cloud API with fallback to SMS.", to: "/whatsapp-business" },
  { Icon: Smartphone, title: "RCS Messaging", text: "Branded, verified rich messages with SMS fallback.", to: "/rcs-messaging" },
  { Icon: Laptop, title: "IT & telecom engineering", text: "Gateway builds, cloud infrastructure and network monitoring.", to: "/it-services" },
];

const steps = [
  { title: "Talk to the desk", text: "Tell us your destinations, monthly volume, traffic type (OTP, transactional or marketing) and how you want to connect." },
  { title: "Verification (KYC)", text: "We verify the business and its use case before any route is opened. Traffic that doesn't match the declared use case isn't accepted." },
  { title: "Test bind or API key", text: "Your server IPs are whitelisted and you get test credentials to check delivery, latency and delivery reports on your own numbers." },
  { title: "Sender registration", text: "Where a country requires it (India DLT, UAE TDRA, US 10DLC and others) we help register sender IDs and templates before traffic goes live." },
  { title: "Live traffic and monitoring", text: "Production routes are switched on and monitored. Delivery problems are reported to you with the operator error codes." },
];

export const AboutPage = ({ onOpenInquiriesModal }) => (
  <div className="page-about">
    <PageHeader
      path="/about"
      eyebrow="About us"
      title="About NAMX Telecom"
      intro="NAMX Telecom is a messaging carrier and wholesale SMS provider. We connect businesses, aggregators and other carriers to mobile operators for OTP, transactional and marketing traffic over SMS, WhatsApp and RCS."
    />

    <Section id="what-we-do" eyebrow="What we do" title="A messaging network built for time-critical traffic" narrow>
      <div className="prose">
        <p>
          Most of the traffic we carry is application-to-person (A2P): login codes, payment confirmations, delivery
          updates and alerts. That traffic needs to arrive in seconds, so our work is mostly about route quality: which
          operator connection a message takes, what happens when a route slows down, and how ported numbers are handled.
        </p>
        <p>
          Customers connect over <Link to="/api">SMPP or a REST API</Link>, or send campaigns from a web platform. Rates are
          published per destination on our <Link to="/rates">rates page</Link>, and country rules for sender IDs and
          registration are documented on the <Link to="/coverage">coverage pages</Link>.
        </p>
        <p>
          We also write openly about how SMS delivery works, from <Link to="/insights/what-is-smpp-v34-guide">the SMPP
          protocol</Link> to <Link to="/insights/otp-sms-not-received-delivery-troubleshooting-guide">why OTP messages
          fail to arrive</Link>, so engineers can judge our routes on their merits.
        </p>
      </div>
    </Section>

    <Section id="products" eyebrow="Products" title="What we offer" alt>
      <div className="info-grid-3">
        {products.map(({ Icon, title, text, to }) => (
          <Link key={to} to={to} className="info-card">
            <span className="info-icon"><Icon size={22} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Link>
        ))}
      </div>
    </Section>

    <Section id="who-we-work-with" eyebrow="Customers" title="Who we work with" narrow>
      <div className="prose">
        <ul>
          <li><strong>Product and engineering teams</strong> that need OTP and transactional SMS for their apps.</li>
          <li><strong>SMS aggregators and resellers</strong> buying wholesale termination by destination.</li>
          <li><strong>Carriers</strong> exchanging A2P and P2P traffic through direct interconnects.</li>
          <li><strong>Regulated businesses</strong> such as banks, fintechs, healthcare and e-commerce, covered on our <Link to="/industries">industries page</Link>.</li>
        </ul>
      </div>
    </Section>

    <Section id="how-we-work" eyebrow="Onboarding" title="How we work with new customers" alt narrow>
      <div className="prose">
        <ol>
          {steps.map((s) => (
            <li key={s.title}><strong>{s.title}.</strong> {s.text}</li>
          ))}
        </ol>
      </div>
    </Section>

    <Section id="contact-details" eyebrow="Contact" title="How to reach us" narrow>
      <div className="prose">
        <ul>
          <li>Email: <a href="mailto:admin@namxtelecom.site">admin@namxtelecom.site</a></li>
          <li>Telegram: <a href="https://t.me/namxtelecom" target="_blank" rel="noopener noreferrer">@namxtelecom</a></li>
          <li>WhatsApp: <a href="https://wa.me/919306529891" target="_blank" rel="noopener noreferrer">+91 93065 29891</a></li>
          <li>Or use the <Link to="/contact">contact form</Link> for rate requests and test binds.</li>
        </ul>
      </div>
    </Section>

    <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
  </div>
);

export default AboutPage;
