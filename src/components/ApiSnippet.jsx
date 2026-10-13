import { useState } from "react";
import "../styles/components/ApiSnippet.css";

export const ApiSnippet = () => {
  const [activeTab, setActiveTab] = useState("curl");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    curl: `curl -X POST "https://api.namxtelecom.com/v1/sms/send" \\
  -H "Authorization: Bearer namx_live_sk_94810293481" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+447700900077",
    "sender_id": "NAMX-AUTH",
    "type": "otp",
    "text": "Your verification code is 849201. Valid for 5 minutes.",
    "dlr_url": "https://yourdomain.com/webhooks/sms-dlr"
  }'`,

    node: `const axios = require('axios');

async function sendSMS() {
  try {
    const response = await axios.post(
      'https://api.namxtelecom.com/v1/sms/send',
      {
        to: '+447700900077',
        sender_id: 'NAMX-AUTH',
        type: 'otp',
        text: 'Your verification code is 849201. Valid for 5 minutes.',
        dlr_url: 'https://yourdomain.com/webhooks/sms-dlr'
      },
      {
        headers: {
          'Authorization': 'Bearer namx_live_sk_94810293481',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('SMS Sent! Message ID:', response.data.message_id);
  } catch (err) {
    console.error('Delivery Error:', err.response?.data);
  }
}

sendSMS();`,

    python: `import requests

url = "https://api.namxtelecom.com/v1/sms/send"
headers = {
    "Authorization": "Bearer namx_live_sk_94810293481",
    "Content-Type": "application/json"
}
payload = {
    "to": "+447700900077",
    "sender_id": "NAMX-AUTH",
    "type": "otp",
    "text": "Your verification code is 849201. Valid for 5 minutes.",
    "dlr_url": "https://yourdomain.com/webhooks/sms-dlr"
}

response = requests.post(url, json=payload, headers=headers)
print("Status Code:", response.status_code)
print("Response JSON:", response.json())`,

    smpp: `// SMPP v3.4 PDU Bind Transmitter / Transceiver Payload Spec
Header:
  Command_Length : 0x0000003A (58 bytes)
  Command_Id     : 0x00000004 (submit_sm)
  Command_Status : 0x00000000 (ESME_ROK)
  Sequence_Number: 0x00000001

Body:
  service_type          : "CMT" (Cellular Messaging)
  source_addr_ton       : 0x05 (National/Alphanumeric)
  source_addr_npi       : 0x00 (Unknown)
  source_addr           : "NAMX-AUTH"
  dest_addr_ton         : 0x01 (International)
  dest_addr_npi         : 0x01 (ISDN/E.164)
  destination_addr      : "447700900077"
  esm_class             : 0x00 (Default SMSC Mode)
  registered_delivery  : 0x01 (DLR Receipt Requested)
  data_coding           : 0x00 (GSM 7-bit default alphabet)
  sm_length             : 0x36 (54 octets)`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="api-snippet-section">
      <div className="container">
        <div className="api-snippet-grid">
          {/* Left Text */}
          <div className="api-snippet-info">
            <p className="stats-eyebrow">Developer Ready API &amp; SMPP</p>
            <h2>Integrate Global SMS in Under 5 Minutes</h2>
            <p>
              Whether you require high-frequency SMPP binds for wholesale messaging or a straightforward REST API for application OTPs, NAMX Telecom offers comprehensive SDKs and clear documentation.
            </p>

            <div className="api-features-list">
              <div className="api-feat-item">
                <span className="api-feat-icon">⚡</span>
                <div>
                  <h3>Sub-150ms Response</h3>
                  <p>Ultra-low overhead API endpoints with automated load balancing.</p>
                </div>
              </div>

              <div className="api-feat-item">
                <span className="api-feat-icon">🔔</span>
                <div>
                  <h3>Real-Time DLR Webhooks</h3>
                  <p>Instant HTTP POST callbacks for handset receipt confirmations.</p>
                </div>
              </div>

              <div className="api-feat-item">
                <span className="api-feat-icon">🛡️</span>
                <div>
                  <h3>Idempotency &amp; Token Auth</h3>
                  <p>Secure request signing, rate limiting, and sandbox key provisioning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Code Window */}
          <div className="api-code-window">
            <div className="code-header">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              <div className="code-tabs">
                <button
                  type="button"
                  className={`tab-btn ${activeTab === "curl" ? "active" : ""}`}
                  onClick={() => setActiveTab("curl")}
                >
                  cURL
                </button>
                <button
                  type="button"
                  className={`tab-btn ${activeTab === "node" ? "active" : ""}`}
                  onClick={() => setActiveTab("node")}
                >
                  Node.js
                </button>
                <button
                  type="button"
                  className={`tab-btn ${activeTab === "python" ? "active" : ""}`}
                  onClick={() => setActiveTab("python")}
                >
                  Python
                </button>
                <button
                  type="button"
                  className={`tab-btn ${activeTab === "smpp" ? "active" : ""}`}
                  onClick={() => setActiveTab("smpp")}
                >
                  SMPP v3.4
                </button>
              </div>

              <button type="button" className="copy-btn" onClick={handleCopy}>
                {copied ? "Copied! ✓" : "Copy Code"}
              </button>
            </div>

            <pre className="code-body">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSnippet;
