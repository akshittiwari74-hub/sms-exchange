import { useState } from "react";
import Button from "./Button";
import "../styles/components/CTA.css";

export const CTA = ({ onOpenInquiriesModal, defaultProduct = "Web Messaging Platform" }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    countryCode: "+1",
    phone: "",
    isWhatsapp: true,
    isTelegram: false,
    country: "",
    product: defaultProduct,
    volume: "100K-1M",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Web3Forms key can be set in .env as VITE_WEB3FORMS_KEY or stored locally
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY || (typeof window !== 'undefined' ? localStorage.getItem("web3forms_key") : "") || "";

  const contacts = [
    { label: "WhatsApp Direct", value: "+91 93065 29891", href: "https://wa.me/919306529891?text=Hello%20NAMX%20Telecom%2C%20I%20would%20like%20to%20inquire%20about%20your%20services", external: true },
    { label: "Telegram Desk", value: "@namxtelecom", href: "https://t.me/namxtelecom", external: true },
    { label: "Microsoft Teams", value: "namxtelecom@gmail.com", href: "mailto:namxtelecom@gmail.com" },
    { label: "Sales Email", value: "admin@namxtelecom.site", href: "mailto:admin@namxtelecom.site" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const refId = `#INQ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const timestamp = new Date().toLocaleString();

    const fullPhoneFormatted = `${formData.countryCode} ${formData.phone} [WA: ${formData.isWhatsapp ? "Yes" : "No"} | TG: ${formData.isTelegram ? "Yes" : "No"}]`;

    const record = {
      id: refId,
      timestamp,
      ...formData,
      fullPhone: fullPhoneFormatted,
    };

    // 1. Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem("namx_inquiries") || "[]");
      const updated = [record, ...existing];
      localStorage.setItem("namx_inquiries", JSON.stringify(updated));
    } catch (err) {
      console.error("Failed to save to localStorage:", err);
    }

    // 2. Dispatch to Web3Forms API (if key present or direct dispatch)
    if (web3FormsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Wholesale Consultation [${refId}] - ${formData.company || formData.name}`,
            from_name: "NAMX Telecom Website",
            to_email: "admin@namxtelecom.site",
            Inquiry_ID: refId,
            Full_Name: formData.name,
            Company: formData.company,
            Email: formData.email,
            Phone_Number: fullPhoneFormatted,
            Country_Code: formData.countryCode,
            WhatsApp_Available: formData.isWhatsapp ? "Yes" : "No",
            Telegram_Available: formData.isTelegram ? "Yes" : "No",
            Target_Country: formData.country,
            Product: formData.product,
            Volume: formData.volume,
            Message: formData.message,
          }),
        });
      } catch (err) {
        console.warn("Web3Forms send notice:", err);
      }
    }

    // 2. Direct SMTP Serverless Dispatch (GoDaddy Secureserver: smtpout.secureserver.net:465)
    try {
      fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refId,
          timestamp,
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          countryCode: formData.countryCode,
          isWhatsapp: formData.isWhatsapp,
          isTelegram: formData.isTelegram,
          country: formData.country,
          product: formData.product,
          volume: formData.volume,
          message: formData.message,
        }),
      }).catch((err) => console.warn("Direct SMTP API notice:", err));
    } catch (err) {
      console.warn("Direct SMTP API dispatch error:", err);
    }

    // 3. Dispatch to FormSubmit API (Secondary verified destination: namxtelecom@gmail.com with CC to admin@namxtelecom.site)
    try {
      fetch("https://formsubmit.co/ajax/namxtelecom@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `New Wholesale Consultation [${refId}] - ${formData.company || formData.name}`,
          _cc: "admin@namxtelecom.site",
          _replyto: formData.email,
          _captcha: "false",
          _template: "table",
          Inquiry_Reference: refId,
          Timestamp: timestamp,
          Full_Name: formData.name,
          Company: formData.company,
          Business_Email: formData.email,
          Phone_Number: fullPhoneFormatted,
          WhatsApp_Available: formData.isWhatsapp ? "Yes" : "No",
          Telegram_Available: formData.isTelegram ? "Yes" : "No",
          Target_Country: formData.country,
          Interested_Product: formData.product,
          Monthly_Volume: formData.volume,
          Message: formData.message,
        }),
      }).catch((err) => console.log("FormSubmit primary notice:", err));
    } catch (err) {
      console.warn("FormSubmit primary send notice:", err);
    }

    // Secondary dispatch to admin@namxtelecom.site directly
    try {
      fetch("https://formsubmit.co/ajax/admin@namxtelecom.site", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `New Wholesale Consultation [${refId}] - ${formData.company || formData.name}`,
          _replyto: formData.email,
          _captcha: "false",
          _template: "table",
          Inquiry_Reference: refId,
          Timestamp: timestamp,
          Full_Name: formData.name,
          Company: formData.company,
          Business_Email: formData.email,
          Phone_Number: fullPhoneFormatted,
          WhatsApp_Available: formData.isWhatsapp ? "Yes" : "No",
          Telegram_Available: formData.isTelegram ? "Yes" : "No",
          Target_Country: formData.country,
          Interested_Product: formData.product,
          Monthly_Volume: formData.volume,
          Message: formData.message,
        }),
      }).catch((err) => console.log("FormSubmit admin notice:", err));
    } catch (err) {
      console.warn("FormSubmit admin send notice:", err);
    }

    // 4. Prepare mailto fallback URL
    const mailSubject = encodeURIComponent(`Consultation Inquiry [${refId}] - ${formData.company || formData.name}`);
    const mailBody = encodeURIComponent(
      `INQUIRY REFERENCE: ${refId}\n` +
      `DATE: ${timestamp}\n\n` +
      `FULL NAME: ${formData.name}\n` +
      `COMPANY: ${formData.company}\n` +
      `EMAIL: ${formData.email}\n` +
      `PHONE: ${fullPhoneFormatted}\n` +
      `COUNTRY: ${formData.country}\n` +
      `INTERESTED PRODUCT: ${formData.product}\n` +
      `ESTIMATED MONTHLY VOLUME: ${formData.volume}\n\n` +
      `REQUIREMENTS / MESSAGE:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:admin@namxtelecom.site?cc=namxtelecom@gmail.com&subject=${mailSubject}&body=${mailBody}`;

    record.mailtoUrl = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(record);
    }, 600);
  };

  const handleCopyReceipt = () => {
    if (!submittedData) return;
    const receiptText = `NAMX TELECOM INQUIRY RECEIPT\nReference ID: ${submittedData.id}\nDate: ${submittedData.timestamp}\nName: ${submittedData.name}\nCompany: ${submittedData.company}\nEmail: ${submittedData.email}\nPhone: ${submittedData.fullPhone}\nCountry: ${submittedData.country}\nProduct: ${submittedData.product}\nVolume: ${submittedData.volume}\nMessage: ${submittedData.message}`;
    navigator.clipboard.writeText(receiptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFormData({
      name: "",
      company: "",
      email: "",
      countryCode: "+1",
      phone: "",
      isWhatsapp: true,
      isTelegram: false,
      country: "",
      product: "Web Messaging Platform",
      volume: "100K-1M",
      message: "",
    });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="contact" className="cta">
      <div className="cta-container">
        {/* Left Column: Contact info & Headings */}
        <div className="cta-content">
          <p className="stats-eyebrow">Enterprise Consultation</p>
          <h2>Start Messaging with NAMX Telecom</h2>
          <p>
            Connect directly with our global wholesale connectivity team in Singapore to discuss Web messaging platform access, SMPP v3.4/v5.0 binds, API connectivity, or custom pricing.
          </p>

          <div className="contact-methods-grid">
            {contacts.map((item) => (
              <a
                key={item.label}
                className="contact-method-card"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                <span className="contact-method-label">{item.label}</span>
                <span className="contact-method-value">{item.value}</span>
              </a>
            ))}
          </div>

          <div className="cta-address-box">
            <span className="address-icon">📍</span>
            <div>
              <strong>NAMX Telecom Headquarters</strong>
              <p>Marina Bay Financial Centre · Singapore</p>
              <small className="address-sub">24/7/365 Global Network Operations Center (NOC)</small>
            </div>
          </div>

          <div className="inspect-inquiries-prompt">
            <span>Need to check previously stored inquiry entries?</span>
            <button type="button" className="btn-stored-inquiries" onClick={onOpenInquiriesModal}>
              View Stored Inquiries Ledger 📁
            </button>
          </div>
        </div>

        {/* Right Column: Form or Confirmation Card */}
        <div className="cta-card-wrapper">
          {submittedData ? (
            /* Confirmation & Receipt Card */
            <div className="submission-success-card">
              <div className="success-header">
                <span className="success-icon">✓</span>
                <h3>Consultation Inquiry Received</h3>
                <span className="success-id-badge">{submittedData.id}</span>
              </div>

              <p className="success-text">
                Your consultation request has been <strong>stored in browser memory</strong> and <strong>automatically dispatched to our Connectivity Desk (admin@namxtelecom.site &amp; namxtelecom@gmail.com)</strong>.
              </p>

              <div className="receipt-summary-box">
                <div className="receipt-row">
                  <span>Timestamp:</span> <strong>{submittedData.timestamp}</strong>
                </div>
                <div className="receipt-row">
                  <span>Name &amp; Company:</span> <strong>{submittedData.name} ({submittedData.company})</strong>
                </div>
                <div className="receipt-row">
                  <span>Business Email:</span> <strong>{submittedData.email}</strong>
                </div>
                <div className="receipt-row">
                  <span>Phone Number:</span> <strong>{submittedData.fullPhone}</strong>
                </div>
                <div className="receipt-row">
                  <span>Target Product:</span> <strong>{submittedData.product}</strong>
                </div>
                <div className="receipt-row">
                  <span>Monthly Volume:</span> <strong>{submittedData.volume}</strong>
                </div>
              </div>

              <div className="success-actions">
                <a href={submittedData.mailtoUrl} className="btn-email-dispatch">
                  ✉️ Open in Desktop Email App
                </a>

                <div className="secondary-success-btns">
                  <button type="button" className="btn-secondary-action" onClick={handleCopyReceipt}>
                    {copied ? "Receipt Copied! ✓" : "Copy Receipt"}
                  </button>
                  <button type="button" className="btn-secondary-action" onClick={onOpenInquiriesModal}>
                    View Saved Entries
                  </button>
                </div>

                <button type="button" className="btn-reset-form" onClick={handleResetForm}>
                  Submit Another Consultation Request
                </button>
              </div>
            </div>
          ) : (
            /* Consultation Form */
            <form className="cta-card" onSubmit={handleSubmit}>
              <h3>Request a Wholesale Proposal</h3>
              <p>Fill in your parameters to receive a custom route rate card and technical spec.</p>

              <div className="form-grid">
                <label htmlFor="form-full-name">
                  <span>Full Name *</span>
                  <input
                    id="form-full-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                    aria-label="Full Name"
                  />
                </label>

                <label htmlFor="form-company-name">
                  <span>Company Name *</span>
                  <input
                    id="form-company-name"
                    type="text"
                    name="company"
                    autoComplete="organization"
                    required
                    placeholder="e.g. Apex Telecom Ltd"
                    value={formData.company}
                    onChange={handleChange}
                    aria-label="Company Name"
                  />
                </label>

                <label htmlFor="form-business-email">
                  <span>Business Email *</span>
                  <input
                    id="form-business-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-label="Business Email"
                  />
                </label>

                <label htmlFor="form-target-country">
                  <span>Target Country / Market *</span>
                  <input
                    id="form-target-country"
                    type="text"
                    name="country"
                    autoComplete="country-name"
                    required
                    placeholder="e.g. Global, US, UK, APAC"
                    value={formData.country}
                    onChange={handleChange}
                    aria-label="Target Country or Market"
                  />
                </label>

                {/* Country Code + Phone Group */}
                <div className="full-width">
                  <label htmlFor="form-phone-number">
                    <span>Mobile / Phone Number (Country Code Mandatory) *</span>
                  </label>
                  <div className="phone-input-split-group">
                    <select
                      id="form-country-code"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="country-code-dropdown"
                      aria-label="Mandatory Country Code Selector"
                    >
                      <option value="+1">🇺🇸 +1 (US / Canada)</option>
                      <option value="+44">🇬🇧 +44 (United Kingdom)</option>
                      <option value="+65">🇸🇬 +65 (Singapore)</option>
                      <option value="+91">🇮🇳 +91 (India)</option>
                      <option value="+971">🇦🇪 +971 (UAE)</option>
                      <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
                      <option value="+49">🇩🇪 +49 (Germany)</option>
                      <option value="+33">🇫🇷 +33 (France)</option>
                      <option value="+39">🇮🇹 +39 (Italy)</option>
                      <option value="+34">🇪🇸 +34 (Spain)</option>
                      <option value="+31">🇳🇱 +31 (Netherlands)</option>
                      <option value="+41">🇨🇭 +41 (Switzerland)</option>
                      <option value="+46">🇸🇪 +46 (Sweden)</option>
                      <option value="+48">🇵🇱 +48 (Poland)</option>
                      <option value="+351">🇵🇹 +351 (Portugal)</option>
                      <option value="+43">🇦🇹 +43 (Austria)</option>
                      <option value="+353">🇮🇪 +353 (Ireland)</option>
                      <option value="+81">🇯🇵 +81 (Japan)</option>
                      <option value="+82">🇰🇷 +82 (South Korea)</option>
                      <option value="+61">🇦🇺 +61 (Australia)</option>
                      <option value="+62">🇮🇩 +62 (Indonesia)</option>
                      <option value="+60">🇲🇾 +60 (Malaysia)</option>
                      <option value="+66">🇹🇭 +66 (Thailand)</option>
                      <option value="+84">🇻🇳 +84 (Vietnam)</option>
                      <option value="+63">🇵🇭 +63 (Philippines)</option>
                      <option value="+852">🇭🇰 +852 (Hong Kong)</option>
                      <option value="+886">🇹🇼 +886 (Taiwan)</option>
                      <option value="+52">🇲🇽 +52 (Mexico)</option>
                      <option value="+55">🇧🇷 +55 (Brazil)</option>
                      <option value="+54">🇦🇷 +54 (Argentina)</option>
                      <option value="+57">🇨🇴 +57 (Colombia)</option>
                      <option value="+56">🇨🇱 +56 (Chile)</option>
                      <option value="+974">🇶🇦 +974 (Qatar)</option>
                      <option value="+965">🇰🇼 +965 (Kuwait)</option>
                      <option value="+968">🇴🇲 +968 (Oman)</option>
                      <option value="+20">🇪🇬 +20 (Egypt)</option>
                      <option value="+234">🇳🇬 +234 (Nigeria)</option>
                      <option value="+27">🇿🇦 +27 (South Africa)</option>
                      <option value="+254">🇰🇪 +254 (Kenya)</option>
                      <option value="+233">🇬🇭 +233 (Ghana)</option>
                      <option value="other">🌐 Other Country Code</option>
                    </select>

                    <span className="phone-split-divider">|</span>

                    <input
                      id="form-phone-number"
                      type="tel"
                      name="phone"
                      autoComplete="tel-national"
                      required
                      placeholder="e.g. 7700 900077"
                      value={formData.phone}
                      onChange={handleChange}
                      className="phone-split-input"
                      aria-label="Mobile Phone Number"
                    />
                  </div>

                  {/* Messaging Apps Checkboxes */}
                  <div className="phone-app-checks-row">
                    <span className="app-checks-title">Available on:</span>
                    <label className="checkbox-app-item" htmlFor="form-is-whatsapp">
                      <input
                        id="form-is-whatsapp"
                        type="checkbox"
                        name="isWhatsapp"
                        checked={formData.isWhatsapp}
                        onChange={handleChange}
                        aria-label="Available on WhatsApp"
                      />
                      <span>💬 WhatsApp</span>
                    </label>
                    <label className="checkbox-app-item" htmlFor="form-is-telegram">
                      <input
                        id="form-is-telegram"
                        type="checkbox"
                        name="isTelegram"
                        checked={formData.isTelegram}
                        onChange={handleChange}
                        aria-label="Available on Telegram"
                      />
                      <span>✈️ Telegram</span>
                    </label>
                  </div>
                </div>

                <label htmlFor="form-product-select" className="full-width">
                  <span>Interested Solution</span>
                  <select id="form-product-select" name="product" value={formData.product} onChange={handleChange} aria-label="Interested Telecom Solution">
                    <option value="Web Messaging Platform">Web Messaging Platform (Portal)</option>
                    <option value="WhatsApp Business API">WhatsApp Business Platform &amp; API</option>
                    <option value="RCS Business Messaging">RCS Business Messaging (Google RBM)</option>
                    <option value="IT Services &amp; Software Dev">Enterprise IT &amp; Custom Software Dev</option>
                    <option value="Telecom &amp; SMPP Gateway Dev">Telecom Software &amp; SMPP Gateway Engineering</option>
                    <option value="Cloud &amp; DevOps Services">Cloud, DevOps &amp; Infrastructure</option>
                    <option value="AI &amp; Automation Chatbots">AI Chatbots &amp; LLM Automation</option>
                    <option value="SMPP Connectivity">SMPP v3.4 / v5.0 Binds</option>
                    <option value="SMS REST API">SMS REST API / Webhooks</option>
                    <option value="A2P SMS Gateway">A2P SMS Gateway (OTP/Alerts)</option>
                    <option value="P2P Messaging">P2P Traffic Hubbing</option>
                    <option value="SS7 Shield">SS7 Anti-Fraud Firewall</option>
                  </select>
                </label>

                <label htmlFor="form-volume-select" className="full-width">
                  <span>Monthly Volume / Project Scope</span>
                  <select id="form-volume-select" name="volume" value={formData.volume} onChange={handleChange} aria-label="Monthly Bulk SMS Volume or Project Scope">
                    <option value="< 50K SMS / month">&lt; 50K Messages / month</option>
                    <option value="50K - 100K SMS / month">50K - 100K Messages / month</option>
                    <option value="100K - 1M SMS / month">100K - 1M Messages / month</option>
                    <option value="1M - 5M SMS / month">1M - 5M Messages / month</option>
                    <option value="5M+ SMS / month">5M+ Wholesale Messages / month</option>
                    <option value="IT Project: MVP / Sprint">IT Project: MVP / Initial Sprint</option>
                    <option value="IT Project: Dedicated Squad">IT Project: Dedicated Engineering Squad</option>
                    <option value="IT Project: Enterprise Custom">IT Project: Enterprise Custom Architecture</option>
                  </select>
                </label>
              </div>

              <label htmlFor="form-message-text" className="full-width">
                <span>Message &amp; Route Requirements</span>
                <textarea
                  id="form-message-text"
                  name="message"
                  rows="3"
                  placeholder="Detail your target destinations, preferred throughput (TPS), platform preferences..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-label="Additional Messaging Requirements"
                />
              </label>

              <div className="form-submit-row">
                <Button type="submit" variant="primary" size="lg" external={false} aria-label="Send inquiry">
                  {isSubmitting ? "Dispatching Email..." : "Submit Inquiry & Send Email"}
                </Button>
                <span className="privacy-note">✉️ Direct delivery to admin@namxtelecom.site &amp; namxtelecom@gmail.com</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
