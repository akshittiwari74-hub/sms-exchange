import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/components/InquiryModal.css";

export const InquiryModal = ({ isOpen, onClose }) => {
  const [inquiries, setInquiries] = useState([]);
  const [copiedId, setCopiedId] = useState(null);

  const loadInquiries = () => {
    try {
      const stored = localStorage.getItem("namx_inquiries");
      if (stored) {
        setInquiries(JSON.parse(stored));
      } else {
        setInquiries([]);
      }
    } catch (e) {
      console.error("Error loading stored inquiries:", e);
      setInquiries([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadInquiries();
    }
  }, [isOpen]);

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all stored inquiries from browser memory?")) {
      localStorage.removeItem("namx_inquiries");
      setInquiries([]);
    }
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inquiries, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `namx_telecom_inquiries_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) return;
    const headers = ["ID", "Timestamp", "Name", "Company", "Email", "Phone", "Country", "Product", "Volume", "Message"];
    const rows = inquiries.map((item) => [
      `"${item.id || ""}"`,
      `"${item.timestamp || ""}"`,
      `"${item.name || ""}"`,
      `"${item.company || ""}"`,
      `"${item.email || ""}"`,
      `"${item.phone || ""}"`,
      `"${item.country || ""}"`,
      `"${item.product || ""}"`,
      `"${item.volume || ""}"`,
      `"${(item.message || "").replace(/"/g, '""')}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", encodeURI(csvContent));
    downloadAnchor.setAttribute("download", `namx_telecom_inquiries_${Date.now()}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopyRecord = (item) => {
    const text = `INQUIRY REF: ${item.id}\nDATE: ${item.timestamp}\nNAME: ${item.name}\nCOMPANY: ${item.company}\nEMAIL: ${item.email}\nPHONE: ${item.phone}\nCOUNTRY: ${item.country}\nPRODUCT: ${item.product}\nVOLUME: ${item.volume}\nMESSAGE: ${item.message}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="inquiry-modal-backdrop" onClick={onClose}>
        <motion.div
          className="inquiry-modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="modal-header">
            <div>
              <h3>Stored Inquiry Records</h3>
              <p className="modal-subtitle">Local Browser Storage Ledger (`namx_inquiries`)</p>
            </div>
            <button type="button" className="close-modal-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          <div className="modal-actions-bar">
            <span className="count-pill">{inquiries.length} Record{inquiries.length === 1 ? "" : "s"} Saved</span>
            {inquiries.length > 0 && (
              <div className="export-btns">
                <button type="button" className="action-btn" onClick={handleExportCSV}>
                  Export CSV
                </button>
                <button type="button" className="action-btn" onClick={handleExportJSON}>
                  Export JSON
                </button>
                <button type="button" className="action-btn danger" onClick={handleClear}>
                  Clear All
                </button>
              </div>
            )}
          </div>

          <div className="modal-body-list">
            {inquiries.length === 0 ? (
              <div className="empty-inquiries">
                <span className="empty-icon">📂</span>
                <h4>No Inquiries Stored Yet</h4>
                <p>Submit the consultation form on the website to see saved records here.</p>
              </div>
            ) : (
              inquiries.map((item, idx) => (
                <div key={item.id || idx} className="stored-inquiry-card">
                  <div className="card-top-bar">
                    <div className="card-id-group">
                      <span className="ref-tag">{item.id}</span>
                      <span className="time-tag">{item.timestamp}</span>
                    </div>
                    <button type="button" className="copy-card-btn" onClick={() => handleCopyRecord(item)}>
                      {copiedId === item.id ? "Copied! ✓" : "Copy Details"}
                    </button>
                  </div>

                  <div className="card-details-grid">
                    <div>
                      <strong>Full Name:</strong> <span>{item.name}</span>
                    </div>
                    <div>
                      <strong>Company:</strong> <span>{item.company}</span>
                    </div>
                    <div>
                      <strong>Business Email:</strong> <a href={`mailto:${item.email}`}>{item.email}</a>
                    </div>
                    <div>
                      <strong>Phone Number:</strong> <span>{item.fullPhone || item.phone}</span>
                    </div>
                    <div>
                      <strong>Country:</strong> <span>{item.country}</span>
                    </div>
                    <div>
                      <strong>Product:</strong> <span>{item.product}</span>
                    </div>
                    <div>
                      <strong>Monthly Volume:</strong> <span>{item.volume}</span>
                    </div>
                  </div>

                  {item.message && (
                    <div className="card-message-box">
                      <strong>Requirements / Message:</strong>
                      <p>{item.message}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-close-bottom" onClick={onClose}>
              Close Inspector
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default InquiryModal;
