import { useState } from "react";
import "../styles/components/TelecomDictionary.css";

export const TelecomDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dictionary = [
    {
      term: "SS7 (Signaling System No. 7)",
      category: "Core Signaling",
      definition: "The global telecommunication protocol used by PSTN and mobile networks to route calls and SMS messages directly between mobile network operators without IP encapsulation.",
    },
    {
      term: "SIGTRAN (SS7 over IP)",
      category: "Core Signaling",
      definition: "A set of protocols that allows SS7 telephone signaling traffic to be transported over IP networks (SCTP/IP), bridging traditional telecommunication hardware with modern IP networks.",
    },
    {
      term: "SMPP (Short Message Peer-to-Peer)",
      category: "Transport Protocol",
      definition: "An open, industry-standard telecommunications protocol designed to provide a high-throughput data communications interface for passing SMS messages between SMSCs and Enterprise ESME platforms.",
    },
    {
      term: "SMSC (Short Message Service Center)",
      category: "Network Element",
      definition: "The mobile network hardware element responsible for storing, routing, queuing, and delivering text messages between mobile devices and enterprise gateways.",
    },
    {
      term: "ESME (External Short Messaging Entity)",
      category: "Network Element",
      definition: "An external application or gateway server (such as NAMX Telecom) that connects to an SMSC via SMPP to transmit and receive high-volume SMS traffic.",
    },
    {
      term: "LCR (Least Cost Routing)",
      category: "Routing Engine",
      definition: "An automated algorithmic routing system that selects the path of least financial cost for an SMS message while adhering to strict quality-of-service (QoS) delivery standards.",
    },
    {
      term: "PDU (Protocol Data Unit)",
      category: "Data Structure",
      definition: "The binary payload block transmitted in SMPP protocol packets containing header commands, sequence numbers, destination address, and encoded message bytes.",
    },
    {
      term: "UDH (User Data Header)",
      category: "Encoding Spec",
      definition: "Header bytes appended to the payload of an SMS message instructing the receiving handset how to concatenate multi-part text messages or display binary content.",
    },
    {
      term: "GSM 03.38",
      category: "Character Encoding",
      definition: "The standard 7-bit character set used in GSM cellular networks, supporting up to 160 characters per single SMS message segment.",
    },
    {
      term: "MNP (Mobile Number Portability)",
      category: "Routing Lookup",
      definition: "The regulatory feature allowing mobile subscribers to retain their phone number when switching carriers, requiring real-time HLR lookup queries to route SMS accurately.",
    },
    {
      term: "AIT (Artificial Traffic Inflation)",
      category: "Fraud Prevention",
      definition: "Fraudulent generation of artificially inflated SMS traffic or OTP requests aimed at exploiting revenue-share agreements, blocked by SS7 signaling firewalls.",
    },
    {
      term: "DLR (Delivery Report)",
      category: "Analytics & Status",
      definition: "A standardized status receipt sent back by the receiving Mobile Network Operator (MNO) confirming whether an SMS was delivered, rejected, or expired on the subscriber's handset.",
    },
    {
      term: "A2P (Application-to-Person)",
      category: "Messaging Traffic",
      definition: "Automated business messaging sent from an application to a mobile subscriber, commonly used for 2FA OTP codes, order notifications, appointment reminders, and banking alerts.",
    },
    {
      term: "P2P (Person-to-Person)",
      category: "Messaging Traffic",
      definition: "Standard mobile-to-mobile text conversations exchanged directly between two human subscribers over cellular networks.",
    },
    {
      term: "MCC / MNC",
      category: "Network Identification",
      definition: "Mobile Country Code (3 digits) and Mobile Network Code (2 or 3 digits) used together to uniquely identify a wireless carrier operator globally (e.g. 234-10 for O2 UK or 310-410 for AT&T USA).",
    },
    {
      term: "TPS (Transactions Per Second)",
      category: "Performance Metric",
      definition: "The number of discrete SMS message PDU payloads an SMPP bind or REST API endpoint can transmit and process per second.",
    },
    {
      term: "DLT (Distributed Ledger Technology)",
      category: "Regulatory Compliance",
      definition: "Mandatory blockchain-based registration system enforced by telecom regulators (such as TRAI India) requiring registration of Sender IDs, Headers, and Content Templates.",
    },
    {
      term: "HLR Lookup (Home Location Register)",
      category: "Network Query",
      definition: "A real-time database lookup to verify a phone number's current status, active network carrier, roaming state, and portability before sending SMS to prevent wasteful routing.",
    },
  ];

  const filtered = dictionary.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="telecom-dict-card">
      <div className="dict-header">
        <div>
          <span className="dict-badge">📖 Telecom Glossary</span>
          <h2>Interactive Industry Dictionary &amp; Acronyms</h2>
          <p>Search key telecommunications terms, protocols, and regulatory acronyms.</p>
        </div>

        <div className="dict-search-wrapper">
          <input
            type="text"
            placeholder="Search term (e.g. SS7, SMPP, DLR)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="dict-search-input"
          />
        </div>
      </div>

      <div className="dict-grid">
        {filtered.map((item) => (
          <div key={item.term} className="dict-item">
            <div className="dict-item-top">
              <h3>{item.term}</h3>
              <span className="dict-cat-tag">{item.category}</span>
            </div>
            <p>{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TelecomDictionary;
