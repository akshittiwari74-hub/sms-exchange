import { useEffect } from "react";
import TelecomDictionary from "../components/TelecomDictionary";
import CTA from "../components/CTA";

export const GlossaryPage = ({ navigate, onOpenInquiriesModal }) => {
  return (
    <div className="page-wrapper">
      <div className="hero-section" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="hero-content">
          <h1>Telecom Glossary</h1>
          <p>Your definitive guide to SMS routing terminology, protocols, and industry standards.</p>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container">
          <TelecomDictionary />
        </div>
      </section>
      
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
    </div>
  );
};

export default GlossaryPage;
