import TelecomDictionary from "../components/TelecomDictionary";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";

export const GlossaryPage = ({ navigate, onOpenInquiriesModal }) => {
  return (
    <div className="page-wrapper page-services">
      <div className="page-banner">
        <div className="container">
          <p className="stats-eyebrow">Telecom Knowledge Base &amp; Protocol Standards</p>
          <h1>Telecommunications, SMPP &amp; Messaging Glossary</h1>
          <p>
            An authoritative, carrier-grade reference guide defining telecommunications protocols, SS7 signaling, SMPP specifications, routing heuristics, and omnichannel messaging standards.
          </p>
        </div>
      </div>
      
      <section className="subpage-info-section">
        <div className="container">
          <TelecomDictionary />
        </div>
      </section>
      
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} defaultProduct="Enterprise Consultation" />
    </div>
  );
};

export default GlossaryPage;
