import { useState } from "react";
import "../styles/components/FloatingChatWidget.css";

export const FloatingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactChannels = [
    {
      id: "whatsapp",
      title: "WhatsApp",
      val: "+91 93065 29891",
      href: "https://wa.me/919306529891?text=Hello%20NAMX%20Telecom%2C%20I%20would%20like%20to%20inquire%20about%20your%20messaging%20and%20IT%20services",
      color: "#25D366",
      bgHover: "rgba(37, 211, 102, 0.15)",
      borderColor: "rgba(37, 211, 102, 0.4)",
      badge: "Instant",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.78 2.791.78 3.181 0 5.768-2.587 5.768-5.766.001-3.18-2.585-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.748 0-3.393-.454-4.833-1.246l-7.167 1.881 1.896-6.936c-.886-1.498-1.396-3.238-1.396-5.199 0-5.514 4.486-10 10-10s10 4.486 10 10z" />
        </svg>
      )
    },
    {
      id: "telegram",
      title: "Telegram",
      val: "@namxtelecom",
      href: "https://t.me/namxtelecom",
      color: "#229ED9",
      bgHover: "rgba(34, 158, 217, 0.15)",
      borderColor: "rgba(34, 158, 217, 0.4)",
      badge: "24/7 Desk",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.197 1.006.128.832.941z" />
        </svg>
      )
    },
    {
      id: "teams",
      title: "MS Teams",
      val: "namxtelecom@gmail.com",
      href: "mailto:namxtelecom@gmail.com?subject=Inquiry%20via%20MS%20Teams%20-%20NAMX%20Telecom",
      color: "#7B83EB",
      bgHover: "rgba(123, 131, 235, 0.15)",
      borderColor: "rgba(123, 131, 235, 0.4)",
      badge: "Teams",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M19.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm-2 3.5h-1a3.5 3.5 0 0 0-3.5 3.5V17h8v-2.5a3.5 3.5 0 0 0-3.5-3.5zm-8-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-2 4h-2a4.5 4.5 0 0 0-4.5 4.5V19h11v-4.5A4.5 4.5 0 0 0 7.5 10z" />
        </svg>
      )
    },
    {
      id: "email",
      title: "Sales Email",
      val: "admin@namxtelecom.site",
      href: "mailto:admin@namxtelecom.site?subject=Enterprise%20Wholesale%20Inquiry%20-%20NAMX%20Telecom",
      color: "#00f0ff",
      bgHover: "rgba(0, 240, 255, 0.15)",
      borderColor: "rgba(0, 240, 255, 0.4)",
      badge: "Quotes",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="floating-chat-container">
      {/* Compact Quick Connect Popover */}
      {isOpen && (
        <div className="floating-chat-flyout" role="dialog" aria-label="Direct contact channels">
          <div className="flyout-header">
            <div className="flyout-status-indicator">
              <span className="flyout-status-dot"></span>
              <span className="flyout-title">Direct Connect</span>
            </div>
            <button
              type="button"
              className="flyout-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="flyout-channels-list">
            {contactChannels.map((c) => (
              <a
                key={c.id}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flyout-channel-item"
                style={{
                  "--channel-color": c.color,
                  "--channel-bg-hover": c.bgHover,
                  "--channel-border": c.borderColor,
                }}
              >
                <div className="channel-icon-wrap" style={{ color: c.color }}>
                  {c.iconSvg}
                </div>
                <div className="channel-details">
                  <div className="channel-title-row">
                    <span className="channel-title">{c.title}</span>
                    <span className="channel-badge">{c.badge}</span>
                  </div>
                  <span className="channel-val">{c.val}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="flyout-footer">
            <span>⚡ 24/7 Global Connectivity NOC</span>
          </div>
        </div>
      )}

      {/* Compact Floating Trigger Button */}
      <button
        type="button"
        className={`floating-chat-trigger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Open direct contact channels"
        title="Chat Direct"
      >
        <span className="floating-pulse-ring"></span>
        <div className="trigger-icon-inner">
          {isOpen ? (
            <span className="trigger-close-icon">✕</span>
          ) : (
            <div className="trigger-icons-stack">
              <svg className="trigger-wa-icon" viewBox="0 0 24 24" width="22" height="22" fill="#25D366">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.78 2.791.78 3.181 0 5.768-2.587 5.768-5.766.001-3.18-2.585-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.748 0-3.393-.454-4.833-1.246l-7.167 1.881 1.896-6.936c-.886-1.498-1.396-3.238-1.396-5.199 0-5.514 4.486-10 10-10s10 4.486 10 10z" />
              </svg>
              <span className="trigger-online-dot"></span>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default FloatingChatWidget;
