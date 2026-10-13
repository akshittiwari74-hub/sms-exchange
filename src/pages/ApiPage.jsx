import ApiSnippet from "../components/ApiSnippet";
import Services from "../components/Services";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";

export const ApiPage = ({ onOpenInquiriesModal }) => {
  const dlrCodes = [
    { code: "DELIVRD", status: "Success", desc: "Message successfully delivered to subscriber handset." },
    { code: "UNDELIV", status: "Failed", desc: "Handset unreachable, powered off, or out of network coverage." },
    { code: "EXPIRED", status: "Failed", desc: "Message validity period expired before handset became available." },
    { code: "REJECTD", status: "Blocked", desc: "Blocked by operator spam filter or unregistered Sender ID." },
  ];

  return (
    <div className="page-api">
      <div className="page-banner">
        <div className="container">
          <p className="stats-eyebrow">Developer &amp; Carrier Portal</p>
          <h1>REST SMS API &amp; SMPP Specifications</h1>
          <p>
            Integrate global SMS delivery in minutes with cURL, Node.js, Python SDKs, or establish high-volume SMPP binds with sub-second DLR webhooks.
          </p>
        </div>
      </div>

      <ApiSnippet />

      {/* DLR Error Code Guide */}
      <section className="subpage-info-section">
        <div className="container">
          <div className="section-heading">
            <p className="stats-eyebrow">DLR Callback Specifications</p>
            <h2>Standard Delivery Report (DLR) Status Codes</h2>
          </div>

          <div className="dlr-table-wrapper">
            <table className="dlr-table">
              <thead>
                <tr>
                  <th>DLR Status Code</th>
                  <th>Delivery State</th>
                  <th>Technical Description</th>
                </tr>
              </thead>
              <tbody>
                {dlrCodes.map((item) => (
                  <tr key={item.code}>
                    <td><span className="dlr-code-badge">{item.code}</span></td>
                    <td><span className={`dlr-state-badge ${item.status.toLowerCase()}`}>{item.status}</span></td>
                    <td>{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Services />
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
    </div>
  );
};

export default ApiPage;
