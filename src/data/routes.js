// Single source of truth for every static page.
// Used by the app (meta tags, breadcrumbs) and scripts/prerender.js (HTML, sitemap).
// Guides under /insights/* are generated from src/data/posts.json.
// Adding a page: add an entry here and a <Route> in App.jsx — the build fails if the Route is missing.

export const SITE = "https://www.namxtelecom.site";

export const pages = [
  {
    "path": "/",
    "label": "Home",
    "title": "NAMX Telecom | Wholesale Bulk SMS, OTP Routes & SMPP Gateway",
    "description": "Direct SS7 MNO bulk SMS interconnects, dedicated SMPP v3.4/v5.0 transceiver binds up to 10,000 TPS, developer REST API across 195+ countries.",
    "keywords": "Wholesale Bulk SMS, SMPP v3.4 Gateway, Direct SS7 Interconnect, A2P SMS Routes, SMS Traffic Exchange"
  },
  {
    "path": "/otp-sms",
    "label": "OTP SMS",
    "title": "OTP SMS Service & 2FA Verification API | Fast Global OTP Delivery | NAMX Telecom",
    "description": "Send OTP and 2FA verification SMS to 195+ countries over direct operator routes. Number-portability lookup, automatic failover, SMS pumping protection, and WhatsApp/RCS fallback via REST API or SMPP.",
    "keywords": "OTP SMS, OTP SMS API, 2FA SMS, SMS verification API, one-time password SMS, OTP SMS provider"
  },
  {
    "path": "/services",
    "label": "SMS & SMPP",
    "title": "Carrier Bulk SMS Gateway, SMPP v3.4 Binds & P2P Hubbing | NAMX Telecom",
    "description": "Carrier-grade messaging suite: dedicated SMPP v3.4/v5.0 binds up to 10,000 TPS, international P2P traffic hubbing, dynamic LCR routing, and REST SMS APIs.",
    "keywords": "Bulk SMS Gateway, SMPP Gateway Provider, SMPP v3.4 Binds, SMPP v5.0 Protocol, International P2P SMS Hubbing, Dynamic SMS Routing, Least Cost Routing LCR"
  },
  {
    "path": "/whatsapp-business",
    "label": "WhatsApp Business",
    "title": "WhatsApp Business API & Official Meta Platform | NAMX Telecom",
    "description": "Official WhatsApp Business Platform & Cloud API. Deliver verified 2FA OTPs, interactive broadcast campaigns, 24/7 AI chatbots, and automated fallback to wholesale SMS.",
    "keywords": "WhatsApp Business API, Meta Cloud API, WhatsApp Gateway, WhatsApp OTP, WhatsApp Verified Green Tick, WhatsApp Messaging Solutions"
  },
  {
    "path": "/rcs-messaging",
    "label": "RCS Messaging",
    "title": "RCS Business Messaging Gateway & Google RBM Interconnect | NAMX Telecom",
    "description": "Upgrade Bulk SMS with verified sender branding, rich media carousels, action chips, and automated SMS fallback. Native rich messaging for Android and iOS 18.",
    "keywords": "RCS Business Messaging, Google RBM, Rich Communication Services, RCS Gateway, Rich SMS, GSMA Universal Profile"
  },
  {
    "path": "/it-services",
    "label": "IT Services",
    "title": "Enterprise IT Services, Telecom Engineering & Cloud Solutions | NAMX Telecom",
    "description": "Full-suite IT services wing: Custom software development, SMPP gateway engineering, cloud DevOps, AI automation, and 24/7 managed Global NOC services.",
    "keywords": "Enterprise IT Services, Custom Software Development, SMPP Gateway Engineering, Cloud DevOps, AI Automation, Telecom NOC Monitoring"
  },
  {
    "path": "/rates",
    "label": "Rates",
    "title": "Wholesale Bulk SMS Rates by Country | EUR Rate Cards | NAMX Telecom",
    "description": "Explore live wholesale Bulk SMS rates and international P2P hubbing pricing for 195+ corridors. Compare Tier-1 Direct SS7 and wholesale pricing in EUR, USDT, or USD.",
    "keywords": "Wholesale Bulk SMS Rates, International SMS Pricing, Euro SMS Rates, Spain SMS Rate, Mexico Wholesale SMS, Direct SS7 SMS Pricing, SMPP Gateway Rates"
  },
  {
    "path": "/coverage",
    "label": "Coverage",
    "title": "Global Bulk SMS Coverage & Direct MNO Route Matrix (195+ Countries) | NAMX Telecom",
    "description": "Global Bulk SMS and international P2P messaging coverage across 195+ countries. Direct SS7 signaling links, LCR SMS routing engine, and zero-hop carrier termination.",
    "keywords": "Global Bulk SMS Coverage, International SMS Routes, Direct SS7 Interconnects, SMS Routing Engine, Zero-Hop Carrier Termination, Wholesale SMS Reach"
  },
  {
    "path": "/bulk-sms-usa",
    "label": "USA",
    "title": "Wholesale Bulk SMS Provider USA | Direct 10DLC & SMPP Gateway | NAMX Telecom",
    "description": "Wholesale Bulk SMS provider & SMPP v3.4 gateway in the USA. Direct AT&T, Verizon, T-Mobile 10DLC termination, TCR brand vetting, fast OTP delivery & custom quotes.",
    "keywords": "Wholesale Bulk SMS USA, 10DLC SMS Gateway, US SMPP Provider, AT&T Direct SMS, Verizon SMS Termination, T-Mobile TCR Vetting",
    "parent": "/coverage"
  },
  {
    "path": "/bulk-sms-uk",
    "label": "United Kingdom",
    "title": "Wholesale Bulk SMS Provider UK & Europe | Direct MNO Interconnects | NAMX Telecom",
    "description": "Wholesale Bulk SMS provider & SMPP gateway in the UK. Direct EE, Vodafone, O2, Three zero-hop SS7 routes, alphanumeric sender IDs, GDPR compliant A2P SMS hubbing.",
    "keywords": "Wholesale Bulk SMS UK, UK SMPP Gateway, EE Direct SMS, Vodafone Wholesale SMS, O2 SMS Gateway, UK Alphanumeric Sender ID",
    "parent": "/coverage"
  },
  {
    "path": "/bulk-sms-uae",
    "label": "UAE",
    "title": "Wholesale Bulk SMS Provider UAE | TDRA Direct Routes & SMPP Gateway | NAMX Telecom",
    "description": "Wholesale Bulk SMS service provider & SMPP gateway in the UAE. Direct e& (Etisalat) and du SS7 interconnects, TDRA sender ID whitelisting, Arabic UCS-2 Unicode & OTP routes.",
    "keywords": "Wholesale Bulk SMS UAE, SMPP Gateway UAE, TDRA SMS Whitelist, Etisalat Bulk SMS, du SMS Gateway, UAE OTP Delivery",
    "parent": "/coverage"
  },
  {
    "path": "/bulk-sms-india",
    "label": "India",
    "title": "Wholesale Bulk SMS Provider India | DLT Compliant SMPP Gateway | NAMX Telecom",
    "description": "Wholesale Bulk SMS provider in India. Direct Jio, Airtel, Vi, BSNL interconnects, TRAI DLT compliance (PE & Template IDs), sub-2s OTP latency & wholesale pricing.",
    "keywords": "Wholesale Bulk SMS India, DLT SMS Gateway, TRAI DLT Compliant SMS, Jio Direct Route, Airtel Bulk SMS, India OTP SMS",
    "parent": "/coverage"
  },
  {
    "path": "/bulk-sms-malaysia",
    "label": "Malaysia",
    "title": "Wholesale Bulk SMS Provider Malaysia | Direct MCMC Routes & SMPP Gateway | NAMX Telecom",
    "description": "Wholesale Bulk SMS provider in Malaysia. Direct CelcomDigi, Maxis, U Mobile SMS gateway, MCMC anti-scam compliance, fast OTP delivery & custom quotes.",
    "keywords": "Wholesale Bulk SMS Malaysia, CelcomDigi SMS Route, Maxis Wholesale SMS, MCMC Compliant SMS, Malaysia SMPP Gateway",
    "parent": "/coverage"
  },
  {
    "path": "/industries",
    "label": "Industries",
    "title": "Enterprise SMS & 2FA Solutions by Industry | NAMX Telecom",
    "description": "Specialized SMS routing for Banking 2FA OTPs, Telecom Aggregator P2P hubbing, E-Commerce, and Healthcare. Priority SS7 queues with sub-2s latency.",
    "keywords": "Banking Bulk SMS, 2FA OTP SMS Routing, Telecom Aggregator P2P, E-Commerce Bulk SMS, Healthcare SMS Gateway, Enterprise Bulk SMS"
  },
  {
    "path": "/api",
    "label": "API & SMPP Docs",
    "title": "REST SMS API Specs & SMPP v3.4/v5.0 Protocol Documentation | NAMX Telecom",
    "description": "Integrate developer REST SMS APIs and SMPP v3.4/v5.0 transceiver binds in 5 minutes. Code samples for cURL, Node.js, Python with real-time DLR webhooks & PDU payloads.",
    "keywords": "REST SMS API, SMPP v3.4 Specs, SMPP v5.0 Protocol, SMPP PDU Payloads, Developer Bulk SMS API, DLR Status Webhooks, SMS Routing API"
  },
  {
    "path": "/insights",
    "label": "Insights",
    "title": "Telecom Insights & Blog: Bulk SMS, SS7 Security & SMPP Guides | NAMX Telecom",
    "description": "Read the latest industry insights, technical guides on SMPP configuration, and trends in global A2P SMS routing from NAMX Telecom experts.",
    "keywords": "Telecom Blog, SMPP Guide, SMS Routing Insights"
  },
  {
    "path": "/glossary",
    "label": "Glossary",
    "title": "Telecom Glossary: SS7, SMPP, PDU & SMS Routing Terminology | NAMX Telecom",
    "description": "A comprehensive dictionary of telecommunications acronyms and terms. Understand SS7 signaling, SMPP v3.4 binds, LCR routing, and A2P messaging.",
    "keywords": "Telecom Glossary, SMS Dictionary, SS7, SMPP, PDU, A2P"
  },
  {
    "path": "/faq",
    "label": "FAQ",
    "title": "Wholesale SMS & SMPP v3.4 Technical FAQ | Protocol Binds & Routing | NAMX Telecom",
    "description": "Technical answers on SMPP v3.4/v5.0 binds, TPS windowing limits, dynamic LCR routing, SS7 anti-fraud firewalling, DLR status codes, and 99.99% SLA uptime.",
    "keywords": "Bulk SMS FAQ, SMPP Bind Specs, SMPP Window Size, SS7 SMS Routing, LCR Routing Engine, Sender ID Whitelisting, DLR Delivery Status Codes"
  },
  {
    "path": "/contact",
    "label": "Contact",
    "title": "Contact Wholesale SMS Desk | Request a Quote & SMPP Test Binds | NAMX Telecom",
    "description": "Connect directly with our 24/7 Global NOC connectivity desk. Request a custom wholesale Bulk SMS quote, SMPP v3.4 test binds, or enterprise API credentials.",
    "keywords": "Contact NAMX Telecom, Wholesale Bulk SMS Quote, SMPP Gateway Onboarding, International P2P Interconnect, Global Telecom NOC, Test SMPP Credentials"
  },
  {
    "path": "/about",
    "label": "About",
    "title": "About NAMX Telecom | Wholesale SMS & OTP Messaging Carrier",
    "description": "Who NAMX Telecom is, what we carry and how we work: OTP and A2P SMS on direct operator routes, SMPP and API connectivity, customer verification, sender registration and contact details.",
    "keywords": "About NAMX Telecom, wholesale SMS provider, OTP SMS carrier, A2P messaging company"
  },
  {
    "path": "/terms",
    "label": "Terms",
    "title": "Terms and Conditions | Carrier Master Services Agreement (MSA) | NAMX Telecom",
    "description": "Enterprise Terms and Conditions, Master Services Agreement (MSA), acceptable messaging policies, SMPP binding SLAs, payment settlement terms, and regulatory compliance guidelines.",
    "keywords": "Terms and Conditions, Telecom MSA, Carrier Service Agreement, SMPP SLA, Bulk SMS Compliance"
  },
  {
    "path": "/privacy",
    "label": "Privacy",
    "title": "Privacy Policy | Carrier Data Protection & Zero-Payload Purge | NAMX Telecom",
    "description": "Privacy Policy and Data Protection standards of NAMX Telecom. Learn how we safeguard carrier metadata, PDU payloads, customer credentials, and adhere to global GDPR frameworks.",
    "keywords": "Privacy Policy, Telecom Data Protection, GDPR Compliance, PDU Payload Purge, Carrier Security"
  }
];

export const pageByPath = Object.fromEntries(pages.map((p) => [p.path, p]));

export const canonicalFor = (path) => SITE + (path === "/" ? "/" : path);
