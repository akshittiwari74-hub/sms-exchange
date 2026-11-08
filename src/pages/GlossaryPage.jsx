import TelecomDictionary from "../components/TelecomDictionary";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";
import { PageHeader } from "../components/ui";

export const GlossaryPage = ({ onOpenInquiriesModal }) => {
  return (
    <div className="page-wrapper page-services">
      <PageHeader path="/glossary" eyebrow={<>Telecom Knowledge Base &amp; Protocol Standards</>} title={<>Telecommunications, SMPP &amp; Messaging Glossary</>} intro={<>An authoritative, carrier-grade reference guide defining telecommunications protocols, SS7 signaling, SMPP specifications, routing heuristics, and omnichannel messaging standards.</>} />
      
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
