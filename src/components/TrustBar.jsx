import { Cable, Braces, Radar, ShieldCheck, Lock, FileLock2 } from "lucide-react";
import "../styles/components/TrustBar.css";

// Capabilities only — no third-party certifications are claimed here.
const items = [
  { Icon: Cable, title: "SMPP v3.4 / v5.0", text: "Persistent transceiver binds" },
  { Icon: Braces, title: "REST API", text: "JSON with DLR webhooks" },
  { Icon: Radar, title: "HLR / MNP lookup", text: "Ported numbers routed correctly" },
  { Icon: ShieldCheck, title: "SMS firewall", text: "AIT & pumping filters" },
  { Icon: Lock, title: "TLS encryption", text: "On SMPP binds and API" },
  { Icon: FileLock2, title: "Privacy-first", text: "GDPR-aligned data handling" },
];

export const TrustBar = () => (
  <section className="capability-strip" aria-label="Platform capabilities">
    <ul className="capability-list">
      {items.map(({ Icon, title, text }) => (
        <li key={title} className="capability-item">
          <Icon size={18} strokeWidth={1.75} aria-hidden="true" className="capability-icon" />
          <div>
            <p className="capability-title">{title}</p>
            <p className="capability-text">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default TrustBar;
