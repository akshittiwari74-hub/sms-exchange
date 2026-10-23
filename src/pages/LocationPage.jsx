import { useParams } from "react-router-dom";
import CTA from "../components/CTA";

export const LocationPage = ({ onOpenInquiriesModal, forcedLocation }) => {
  const params = useParams();
  const activeLocation = forcedLocation || params?.location || "";
  
  // Capitalize location for display (e.g. 'uae' -> 'UAE', 'uk' -> 'UK')
  const formatLocation = (loc) => {
    if (!loc) return "";
    if (loc.length <= 3) return loc.toUpperCase();
    return loc.charAt(0).toUpperCase() + loc.slice(1).toLowerCase();
  };
  
  const displayLocation = formatLocation(activeLocation);

  return (
    <div className="page-wrapper">
      <div className="hero-section" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="hero-content">
          <h1>Bulk SMS Provider in {displayLocation}</h1>
          <p>Direct SS7 Interconnects, Zero-Hop Routing, and Enterprise SMPP v3.4 Gateway for {displayLocation}.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={onOpenInquiriesModal}>Get Pricing for {displayLocation}</button>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2>Why Choose NAMX Telecom for {displayLocation}?</h2>
          <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: 'var(--text-secondary, #aaa)' }}>
            We provide tier-1 routing quality for both A2P and P2P traffic destined for {displayLocation}. 
            Our intelligent routing engine bypasses grey routes, ensuring compliance with local telecom 
            regulations and delivering your OTPs and critical alerts in under 3 seconds.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
             <div style={{ background: '#111', padding: '2rem', borderRadius: '12px', flex: 1, minWidth: '250px' }}>
                <h3 style={{ color: '#00f0ff' }}>99.99% Uptime</h3>
                <p style={{ marginTop: '1rem', color: '#aaa' }}>Redundant SMPP binds ensure your messages to {displayLocation} never drop.</p>
             </div>
             <div style={{ background: '#111', padding: '2rem', borderRadius: '12px', flex: 1, minWidth: '250px' }}>
                <h3 style={{ color: '#00f0ff' }}>Dynamic Sender IDs</h3>
                <p style={{ marginTop: '1rem', color: '#aaa' }}>Full support for alphanumeric sender registration where permitted in {displayLocation}.</p>
             </div>
          </div>
        </div>
      </section>
      
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
    </div>
  );
};

export default LocationPage;
