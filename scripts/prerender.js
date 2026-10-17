import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const templateHtmlPath = path.join(distDir, "index.html");

if (!fs.existsSync(templateHtmlPath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const templateHtml = fs.readFileSync(templateHtmlPath, "utf-8");
import { render } from "../dist/server/entry-server.js";

const routes = [
  {
    path: '/whatsapp-business',
    dir: 'whatsapp-business',
    title: 'WhatsApp Business API & Official Meta Platform | NAMX Telecom',
    description: 'Official WhatsApp Business Platform & Cloud API. Deliver verified 2FA OTPs, interactive broadcast campaigns, 24/7 AI chatbots, and automated fallback to wholesale SMS.',
    keywords: 'WhatsApp Business API, Meta Cloud API, WhatsApp Gateway, WhatsApp OTP, WhatsApp Verified Green Tick, WhatsApp Messaging Solutions',
    canonical: 'https://www.namxtelecom.site/whatsapp-business',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://www.namxtelecom.site/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'WhatsApp Business Platform',
              'item': 'https://www.namxtelecom.site/whatsapp-business'
            }
          ]
        },
        {
          '@type': 'Service',
          'name': 'Enterprise WhatsApp Business Platform & Cloud API Gateway',
          'serviceType': 'WhatsApp Business Platform & API Gateway',
          'description': 'Official WhatsApp Business Platform & Cloud API. Deliver verified 2FA OTPs, interactive broadcast campaigns, 24/7 AI chatbots, and automated fallback to wholesale SMS.',
          'category': 'Omnichannel Messaging & Telecommunications',
          'provider': {
            '@type': 'Organization',
            'name': 'NAMX Telecom',
            'url': 'https://www.namxtelecom.site'
          },
          'areaServed': 'Worldwide',
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'WhatsApp Messaging Solutions',
            'itemListElement': [
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Authentication & 2FA OTP Delivery' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Conversational AI & Customer Care' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Rich Marketing Broadcasts' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Automatic Zero-Delay SMS Fallback' } }
            ]
          }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'How does the official WhatsApp Green Tick verification work?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The Green Tick verified badge is granted by Meta to confirm that an account belongs to an authentic, notable enterprise brand. Our connectivity onboarding team assists with Meta Business Manager verification, official display name submission, and expedited Meta review approval.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What is the message delivery speed for 2FA OTP codes via WhatsApp?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Our WhatsApp Cloud API routes deliver time-sensitive 2-Factor Authentication (OTP) codes in under 2.5 seconds globally with sub-second delivery receipts and read timestamps (blue ticks), ensuring minimal friction during customer logins and financial transactions.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How does automatic failover to Bulk SMS protect message delivery?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'If a recipient does not have an active WhatsApp account or their mobile device is offline, our intelligent cascade engine automatically re-routes the message via our Tier-1 SS7 Bulk SMS gateway within 300ms, guaranteeing 100% notification reach.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Can we connect our existing CRM or AI customer support bot to WhatsApp?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes. We provide native webhooks and REST endpoints that integrate seamlessly with HubSpot, Salesforce, Zoho, Zendesk, or custom AI/LLM conversational agents. You can also build automated menus, list pickers, and interactive button flows.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What throughput (MPS) can the NAMX WhatsApp Cloud API handle?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Our infrastructure supports enterprise-grade throughput scaling from 100 up to 1,000+ messages per second (MPS), backed by direct Meta Cloud server connections and Singapore NOC 99.99% uptime monitoring.'
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: '/rcs-messaging',
    dir: 'rcs-messaging',
    title: 'RCS Business Messaging Gateway & Google RBM Interconnect | NAMX Telecom',
    description: 'Upgrade Bulk SMS with verified sender branding, rich media carousels, action chips, and automated SMS fallback. Native rich messaging for Android and iOS 18.',
    keywords: 'RCS Business Messaging, Google RBM, Rich Communication Services, RCS Gateway, Rich SMS, GSMA Universal Profile',
    canonical: 'https://www.namxtelecom.site/rcs-messaging',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://www.namxtelecom.site/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'RCS Business Messaging',
              'item': 'https://www.namxtelecom.site/rcs-messaging'
            }
          ]
        },
        {
          '@type': 'Service',
          'name': 'RCS Business Messaging Gateway & Google RBM Interconnect',
          'serviceType': 'RCS Business Messaging (Rich Communication Services)',
          'description': 'Upgrade traditional Bulk SMS into rich, verified, interactive experiences. Delivered natively inside Android Google Messages and iOS 18 native messaging with zero app installation required.',
          'category': 'Next-Gen Mobile Telecommunications',
          'provider': {
            '@type': 'Organization',
            'name': 'NAMX Telecom',
            'url': 'https://www.namxtelecom.site'
          },
          'areaServed': 'Worldwide',
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'RCS Messaging Capabilities',
            'itemListElement': [
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Google RBM Verified Sender Verification' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Rich Media Horizontal Carousels & Video' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Native Interactive Suggested Action Chips' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Sub-200ms Zero-Drop SS7 SMS Fallback' } }
            ]
          }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What is RCS Business Messaging and how does it differ from Bulk SMS?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'RCS (Rich Communication Services) is the next-generation upgrade to SMS. It enables verified sender logos, high-resolution media, interactive carousels, and suggested action chips directly inside Android Google Messages and iOS 18 native messaging apps without requiring any third-party app download.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Does RCS Business Messaging work on Apple iPhones with iOS 18?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes. Starting with iOS 18, Apple officially supports GSMA Universal Profile RCS messaging. Your rich branded messages reach both modern Android smartphones and updated Apple iPhones seamlessly.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How does the automatic zero-drop SMS fallback work?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Before message transmission, our gateway performs a real-time capability check. If the recipient device is offline or does not support RCS, the message cascades to our Tier-1 SS7 SMS gateway within 200ms, ensuring 100% message delivery.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What interactive action chips can be included in RCS messages?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'RCS supports native action chips such as: Open URL in browser, Dial phone number, View location on Google Maps, Add event to calendar, and Single-tap quick reply options for instant customer feedback.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Can we connect our existing carrier or CPaaS aggregator platform via SMPP?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes. In addition to high-concurrency JSON REST APIs, NAMX Telecom provides carrier-grade SMPP v3.4 binds with custom TLV payload parameters for aggregators sending high volumes of RCS traffic.'
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: '/it-services',
    dir: 'it-services',
    title: 'Enterprise IT Services, Telecom Engineering & Cloud Solutions | NAMX Telecom',
    description: 'Full-suite IT services wing: Custom software development, SMPP gateway engineering, cloud DevOps, AI automation, and 24/7 managed NOC services from Singapore.',
    keywords: 'Enterprise IT Services, Custom Software Development, SMPP Gateway Engineering, Cloud DevOps, AI Automation, Telecom NOC Monitoring',
    canonical: 'https://www.namxtelecom.site/it-services',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://www.namxtelecom.site/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Enterprise IT & Telecom Engineering',
              'item': 'https://www.namxtelecom.site/it-services'
            }
          ]
        },
        {
          '@type': 'Service',
          'name': 'Enterprise IT Services & Custom Telecom Software Engineering',
          'serviceType': 'Enterprise IT Software & Telecom Engineering Services',
          'description': 'Full-suite enterprise IT software engineering, telecom SMPP gateway development, cloud DevOps, AI automation, and 24/7 managed NOC services from Singapore.',
          'category': 'Enterprise IT & Telecom Software Engineering',
          'provider': {
            '@type': 'Organization',
            'name': 'NAMX Telecom',
            'url': 'https://www.namxtelecom.site'
          },
          'areaServed': 'Worldwide',
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Enterprise IT Engineering Wings',
            'itemListElement': [
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Custom Software & Enterprise Web Applications' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Telecom Software & SMPP Gateway Engineering' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Cloud Architecture, DevOps & SRE' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Enterprise AI & Conversational Automation' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Telecom Cybersecurity & SS7 / SMS Firewalls' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': '24/7 Managed NOC & Telecom Operations' } }
            ]
          }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What types of custom enterprise software does NAMX Telecom engineer?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'NAMX Telecom develops scalable full-stack web platforms, multi-tenant SaaS dashboards, telecom billing & CDR mediation engines, high-throughput customer portals, and real-time transaction processing platforms built with Node.js, Go, Python, and React/Next.js.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Can you engineer custom SMPP gateways and telecom routing engines?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes. We specialize in carrier-grade SMPP v3.4 and v5.0 gateway engineering, dynamic Least Cost Routing (LCR) algorithms, SS7/SIGTRAN protocol integrations, SMS firewall security, and automated HLR lookup systems capable of handling tens of thousands of requests per second.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Do you offer Cloud Architecture, DevOps, and 24/7 SRE NOC management?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes, our DevOps & Cloud infrastructure team manages mission-critical AWS, Google Cloud, and bare-metal Kubernetes clusters with automated CI/CD pipelines, zero-downtime deployment strategies, DDoS mitigation, and round-the-clock NOC monitoring with 99.99% uptime SLAs.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Can NAMX build custom AI conversational agents for WhatsApp and RCS?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes. We build enterprise AI chatbots, NLP support bots, and LLM-powered virtual assistants integrated directly with WhatsApp Business API, RCS Messaging, and your core CRM/ERP database for automated customer support and transaction workflows.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What engagement models and SLAs are available for IT services?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'We provide dedicated engineering squads, project-based fixed-deliverable contracts, and staff augmentation models. All production telecom and cloud services are backed by enterprise Service Level Agreements (SLAs) including 15-minute emergency response times and 99.99% infrastructure availability.'
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: '/glossary',
    dir: 'glossary',
    title: 'Telecom Glossary: SS7, SMPP, PDU & SMS Routing Terminology | NAMX Telecom',
    description: 'A comprehensive dictionary of telecommunications acronyms and terms. Understand SS7 signaling, SMPP v3.4 binds, LCR routing, and A2P messaging.',
    keywords: 'Telecom Glossary, SMS Dictionary, SS7, SMPP, PDU, A2P',
    canonical: 'https://www.namxtelecom.site/glossary',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': []
    }
  },
  {
    path: '/insights',
    dir: 'insights',
    title: 'Telecom Insights & Blog: Bulk SMS, SS7 Security & SMPP Guides | NAMX Telecom',
    description: 'Read the latest industry insights, technical guides on SMPP configuration, and trends in global A2P SMS routing from NAMX Telecom experts.',
    keywords: 'Telecom Blog, SMPP Guide, SMS Routing Insights',
    canonical: 'https://www.namxtelecom.site/insights',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'url': 'https://www.namxtelecom.site/insights'
    }
  },

  {
    path: '/bulk-sms-singapore',
    dir: 'bulk-sms-singapore',
    title: 'Bulk SMS Provider in Singapore | Direct Routes & SMPP Gateway',
    description: 'Send Bulk SMS in Singapore with direct MNO interconnects and zero-hop termination. Connect via REST API or SMPP v3.4.',
    keywords: 'Bulk SMS Singapore, SMS Gateway Singapore, SMPP Singapore',
    canonical: 'https://www.namxtelecom.site/bulk-sms-singapore',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Bulk SMS',
      'areaServed': 'Singapore'
    }
  },
  {
    path: '/bulk-sms-uae',
    dir: 'bulk-sms-uae',
    title: 'Bulk SMS Provider in UAE | Direct Routes & SMPP Gateway',
    description: 'Send Bulk SMS in UAE with direct MNO interconnects and zero-hop termination. Connect via REST API or SMPP v3.4.',
    keywords: 'Bulk SMS UAE, SMS Gateway UAE, SMPP UAE',
    canonical: 'https://www.namxtelecom.site/bulk-sms-uae',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Bulk SMS',
      'areaServed': 'UAE'
    }
  },
  {
    path: '/bulk-sms-uk',
    dir: 'bulk-sms-uk',
    title: 'Bulk SMS Provider in UK | Direct Routes & SMPP Gateway',
    description: 'Send Bulk SMS in UK with direct MNO interconnects and zero-hop termination. Connect via REST API or SMPP v3.4.',
    keywords: 'Bulk SMS UK, SMS Gateway UK, SMPP UK',
    canonical: 'https://www.namxtelecom.site/bulk-sms-uk',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Bulk SMS',
      'areaServed': 'UK'
    }
  },
  {
    path: '/bulk-sms-usa',
    dir: 'bulk-sms-usa',
    title: 'Bulk SMS Provider in USA | Direct Routes & SMPP Gateway',
    description: 'Send Bulk SMS in USA with direct MNO interconnects and zero-hop termination. Connect via REST API or SMPP v3.4.',
    keywords: 'Bulk SMS USA, SMS Gateway USA, SMPP USA',
    canonical: 'https://www.namxtelecom.site/bulk-sms-usa',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Bulk SMS',
      'areaServed': 'USA'
    }
  },
  {
    path: '/bulk-sms-india',
    dir: 'bulk-sms-india',
    title: 'Bulk SMS Provider in India | Direct Routes & SMPP Gateway',
    description: 'Send Bulk SMS in India with direct MNO interconnects and zero-hop termination. Connect via REST API or SMPP v3.4.',
    keywords: 'Bulk SMS India, SMS Gateway India, SMPP India',
    canonical: 'https://www.namxtelecom.site/bulk-sms-india',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Bulk SMS',
      'areaServed': 'India'
    }
  },
  {
    path: '/bulk-sms-malaysia',
    dir: 'bulk-sms-malaysia',
    title: 'Bulk SMS Provider in Malaysia | Direct Routes & SMPP Gateway',
    description: 'Send Bulk SMS in Malaysia with direct MNO interconnects and zero-hop termination. Connect via REST API or SMPP v3.4.',
    keywords: 'Bulk SMS Malaysia, SMS Gateway Malaysia, SMPP Malaysia',
    canonical: 'https://www.namxtelecom.site/bulk-sms-malaysia',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Bulk SMS',
      'areaServed': 'Malaysia'
    }
  },
  {
    path: '/insights/what-is-smpp-v34-guide',
    dir: 'insights/what-is-smpp-v34-guide',
    title: 'What is SMPP v3.4? A Complete Guide for Developers | NAMX Telecom Insights',
    description: 'Dive deep into the Short Message Peer-to-Peer (SMPP) protocol. Learn how SMPP v3.4 binds work, how to handle PDUs, and why it\'s the industry standard for high-volume SMS routing.',
    keywords: 'Technical, Telecom, SMS',
    canonical: 'https://www.namxtelecom.site/insights/what-is-smpp-v34-guide',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'What is SMPP v3.4? A Complete Guide for Developers',
      'publisher': { '@id': 'https://www.namxtelecom.site/#organization' },
      'author': { '@id': 'https://www.namxtelecom.site/#organization' }
    }
  },
  {
    path: '/insights/a2p-vs-p2p-sms-routing',
    dir: 'insights/a2p-vs-p2p-sms-routing',
    title: 'A2P vs P2P SMS Routing: What Telecom Aggregators Need to Know | NAMX Telecom Insights',
    description: 'Understand the critical differences between Application-to-Person (A2P) and Person-to-Person (P2P) SMS traffic, and how intelligent SS7 routing engines differentiate them.',
    keywords: 'Industry, Telecom, SMS',
    canonical: 'https://www.namxtelecom.site/insights/a2p-vs-p2p-sms-routing',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'A2P vs P2P SMS Routing: What Telecom Aggregators Need to Know',
      'publisher': { '@id': 'https://www.namxtelecom.site/#organization' },
      'author': { '@id': 'https://www.namxtelecom.site/#organization' }
    }
  },
  {
    path: "/",
    dir: "",
    title: "NAMX Telecom | Global Wholesale Bulk SMS Provider, SMPP Gateway & International P2P Routing",
    description: "NAMX Telecom is a global wholesale Bulk SMS provider, SMPP v3.4/v5.0 gateway & international P2P traffic exchange.",
    keywords: "Bulk SMS, Global Bulk SMS, Wholesale Bulk SMS, Worldwide Bulk SMS Provider, Direct MNO Interconnect SMS",
    canonical: "https://www.namxtelecom.site/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.namxtelecom.site/#organization",
      "name": "NAMX Telecom",
      "url": "https://www.namxtelecom.site/"
    }
  },
  {
    path: "/rates",
    dir: "rates",
    title: "Wholesale Bulk SMS Rates [2026] | Live Euro Rate Cards & Pricing | NAMX Telecom",
    description: "Explore live wholesale Bulk SMS rates and international P2P hubbing pricing for 195+ corridors. Compare Tier-1 Direct SS7 and wholesale pricing in EUR, USDT, or USD.",
    keywords: "Wholesale Bulk SMS Rates, International SMS Pricing, Euro SMS Rates, Spain SMS Rate, Mexico Wholesale SMS, Direct SS7 SMS Pricing, SMPP Gateway Rates",
    canonical: "https://www.namxtelecom.site/rates",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.namxtelecom.site/" },
            { "@type": "ListItem", "position": 2, "name": "Wholesale Rates", "item": "https://www.namxtelecom.site/rates" }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Wholesale Bulk SMS Top Routes & Euro Rate Cards",
          "url": "https://www.namxtelecom.site/rates",
          "provider": {
            "@type": "Organization",
            "name": "NAMX Telecom",
            "url": "https://www.namxtelecom.site/"
          },
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spain Direct SS7 Route" }, "price": "0.029", "priceCurrency": "EUR" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Italy Direct Operator Route" }, "price": "0.033", "priceCurrency": "EUR" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Austria Direct MNO Route" }, "price": "0.022", "priceCurrency": "EUR" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "China Direct SMS Gateway" }, "price": "0.092", "priceCurrency": "EUR" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Denmark Direct Nordic Route" }, "price": "0.042", "priceCurrency": "EUR" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mexico Wholesale SMS Route" }, "price": "0.0025", "priceCurrency": "EUR" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Slovakia Direct MNO Route" }, "price": "0.025", "priceCurrency": "EUR" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brazil Anatel Direct Route" }, "price": "0.0085", "priceCurrency": "EUR" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are wholesale rates negotiable over volume confirmations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All listed wholesale Euro rates (including Spain €0.029, Italy €0.033, Austria €0.022, Mexico €0.0025, Brazil €0.0085) are negotiable based on monthly volume commitments exceeding 250,000 or 1,000,000 SMS per month."
              }
            },
            {
              "@type": "Question",
              "name": "What are wholesale Bulk SMS rates based on?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rates are determined by monthly volume commitments, destination country corridors, and routing tier (Tier-1 Direct SS7 routes vs Wholesale Aggregator LCR). We offer volume-tiered rate cards starting with zero monthly commitments."
              }
            },
            {
              "@type": "Question",
              "name": "What settlement currencies and payment terms does NAMX Telecom accept?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We accept settlements in EUR, USD, and USDT (Tether cryptocurrency). Flexible weekly and bi-weekly post-paid credit terms are available for approved carriers and volume aggregators."
              }
            },
            {
              "@type": "Question",
              "name": "Can I test SMPP v3.4 binds and delivery speed before committing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide free test credits along with dedicated SMPP v3.4/v5.0 transceiver bind credentials so your engineering team can test latency, DLR delivery receipts, and throughput within 15 minutes."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Direct SS7 and Wholesale LCR routes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tier-1 Direct SS7 routes feature zero-hop MNO interconnects with 100% handset DLR receipts and sub-2-second latency for time-critical 2FA OTP codes. Wholesale LCR routes optimize cost efficiency for high-volume marketing campaigns."
              }
            },
            {
              "@type": "Question",
              "name": "Are there any setup fees or hidden interconnect charges?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. There are zero setup fees, zero monthly port maintenance charges, and no hidden minimum commitments. You only pay for messages successfully processed."
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: "/coverage",
    dir: "coverage",
    title: "Global Bulk SMS Coverage & Direct MNO Route Matrix (195+ Countries) | NAMX Telecom",
    description: "Global Bulk SMS and international P2P messaging coverage across 195+ countries. Direct SS7 signaling links, LCR SMS routing engine, and zero-hop carrier termination.",
    keywords: "Global Bulk SMS Coverage, International SMS Routes, Direct SS7 Interconnects, SMS Routing Engine, Zero-Hop Carrier Termination, Wholesale SMS Reach",
    canonical: "https://www.namxtelecom.site/coverage",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.namxtelecom.site/" },
            { "@type": "ListItem", "position": 2, "name": "Global Coverage", "item": "https://www.namxtelecom.site/coverage" }
          ]
        },
        {
          "@type": "Service",
          "serviceType": "Global Bulk SMS & International P2P Telecommunications Coverage",
          "provider": {
            "@type": "Organization",
            "name": "NAMX Telecom"
          },
          "areaServed": "Worldwide"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Which countries have direct Tier-1 SS7 interconnects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We operate direct MNO interconnects across Singapore, UAE, UK, USA, India, Malaysia, Germany, Saudi Arabia, and over 195+ countries worldwide."
              }
            },
            {
              "@type": "Question",
              "name": "Do you support Alphanumeric and Dynamic Sender IDs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we support Alphanumeric Sender IDs (up to 11 characters) and local two-way shortcodes/long numbers in full compliance with local regulatory frameworks."
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: "/services",
    dir: "services",
    title: "Carrier Bulk SMS Gateway, SMPP v3.4 Binds & P2P Hubbing | NAMX Telecom",
    description: "Carrier-grade messaging suite: dedicated SMPP v3.4/v5.0 binds up to 10,000 TPS, international P2P traffic hubbing, dynamic LCR routing, and REST SMS APIs.",
    keywords: "Bulk SMS Gateway, SMPP Gateway Provider, SMPP v3.4 Binds, SMPP v5.0 Protocol, International P2P SMS Hubbing, Dynamic SMS Routing, Least Cost Routing LCR",
    canonical: "https://www.namxtelecom.site/services",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.namxtelecom.site/" },
            { "@type": "ListItem", "position": 2, "name": "Telecom Services", "item": "https://www.namxtelecom.site/services" }
          ]
        },
        {
          "@type": "Service",
          "serviceType": "Wholesale Bulk SMS, SMPP v3.4/v5.0 Gateway & International P2P Hubbing",
          "provider": {
            "@type": "Organization",
            "name": "NAMX Telecom"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What throughput and TPS can the NAMX SMPP gateway handle?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our carrier-grade SMPP v3.4 and v5.0 gateway supports up to 10,000 Transactions Per Second (TPS) across multi-session transceiver binds over TLS and IPsec VPN."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer WhatsApp Business API and RCS messaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide full omnichannel messaging including official WhatsApp Business Platform (Cloud API) with Green Tick support and Google RCS Business Messaging with zero-drop SMS fallback."
              }
            },
            {
              "@type": "Question",
              "name": "How fast is SMPP bind provisioning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard SMPP binds and developer API tokens are provisioned within 5 to 15 minutes by our 24/7 Singapore NOC team once IP whitelisting is completed."
              }
            },
            {
              "@type": "Question",
              "name": "How does the Least Cost Routing (LCR) engine work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our routing engine recalculates route quality, DLR latency, and price dynamically every 15 milliseconds, guaranteeing optimal cost efficiency and 99.99% message delivery."
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: "/industries",
    dir: "industries",
    title: "Enterprise SMS & 2FA Solutions by Industry | NAMX Telecom",
    description: "Specialized SMS routing for Banking 2FA OTPs, Telecom Aggregator P2P hubbing, E-Commerce, and Healthcare. Priority SS7 queues with sub-2s latency.",
    keywords: "Banking Bulk SMS, 2FA OTP SMS Routing, Telecom Aggregator P2P, E-Commerce Bulk SMS, Healthcare SMS Gateway, Enterprise Bulk SMS",
    canonical: "https://www.namxtelecom.site/industries",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.namxtelecom.site/" },
            { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.namxtelecom.site/industries" }
          ]
        },
        {
          "@type": "Service",
          "serviceType": "Enterprise Bulk SMS & Specialized SMS Routing Solutions",
          "provider": {
            "@type": "Organization",
            "name": "NAMX Telecom"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does NAMX Telecom guarantee banking 2FA OTP delivery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We utilize dedicated Tier-1 SS7 direct signaling links with priority queuing, sub-2-second global latency, and dynamic failover to secondary routes to guarantee zero OTP drop-offs."
              }
            },
            {
              "@type": "Question",
              "name": "Can telecom aggregators exchange bilateral P2P traffic?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer bilateral international P2P swap arrangements with automated Least-Cost Routing (LCR) and transparent CDR reconciliation."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure data privacy for Healthcare and Fintech clients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our infrastructure supports end-to-end TLS encryption, zero data retention (ephemeral message processing), and strict compliance with global privacy regulations."
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: "/api",
    dir: "api",
    title: "REST SMS API Specs & SMPP v3.4/v5.0 Protocol Documentation | NAMX Telecom",
    description: "Integrate developer REST SMS APIs and SMPP v3.4/v5.0 transceiver binds in 5 minutes. Code samples for cURL, Node.js, Python with real-time DLR webhooks & PDU payloads.",
    keywords: "REST SMS API, SMPP v3.4 Specs, SMPP v5.0 Protocol, SMPP PDU Payloads, Developer Bulk SMS API, DLR Status Webhooks, SMS Routing API",
    canonical: "https://www.namxtelecom.site/api",
    schema: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "NAMX Telecom REST SMS API, SMPP v3.4/v5.0 & SMS Routing Specification",
      "url": "https://www.namxtelecom.site/api",
      "author": {
        "@type": "Organization",
        "name": "NAMX Telecom"
      }
    }
  },
  {
    path: "/faq",
    dir: "faq",
    title: "Wholesale SMS & SMPP v3.4 Technical FAQ | Protocol Binds & Routing | NAMX Telecom",
    description: "Technical answers on SMPP v3.4/v5.0 binds, TPS windowing limits, dynamic LCR routing, SS7 anti-fraud firewalling, DLR status codes, and 99.99% SLA uptime.",
    keywords: "Bulk SMS FAQ, SMPP Bind Specs, SMPP Window Size, SS7 SMS Routing, LCR Routing Engine, Sender ID Whitelisting, DLR Delivery Status Codes",
    canonical: "https://www.namxtelecom.site/faq",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.namxtelecom.site/" },
            { "@type": "ListItem", "position": 2, "name": "Technical FAQ", "item": "https://www.namxtelecom.site/faq" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Wholesale Bulk SMS and how does carrier termination work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wholesale Bulk SMS is the enterprise-scale transmission of high-volume text messages directly into mobile network operator (MNO) infrastructure. Messages are transmitted via direct SS7 signaling links or SMPP protocol binds, enabling sub-second delivery for 2FA OTP codes, transactional notifications, and global marketing broadcasts without relying on consumer aggregators."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between A2P SMS and P2P SMS?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A2P (Application-to-Person) SMS refers to automated messages generated by software applications and sent to subscribers (such as bank OTPs, appointment reminders, and order updates). P2P (Person-to-Person) SMS refers to standard mobile messaging sent between two human subscribers over cellular roaming networks. NAMX Telecom operates specialized routing engines for both traffic types."
              }
            },
            {
              "@type": "Question",
              "name": "How does Concatenated SMS (GSM 03.38 vs Unicode UTF-16) character encoding work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A standard single SMS contains up to 160 characters in GSM 7-bit encoding (or 70 characters in Unicode UTF-16 for scripts like Arabic, Chinese, or Cyrillic). When a message exceeds this limit, it is automatically concatenated using a UDH (User Data Header) parameter into multi-part SMS. GSM 7-bit parts allow 153 characters per segment, while Unicode parts allow 67 characters per segment."
              }
            },
            {
              "@type": "Question",
              "name": "What is SMPP (Short Message Peer-to-Peer) and why do carriers prefer it over REST API?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SMPP is an open, industry-standard telecommunications protocol designed for high-concurrency, low-latency SMS transmission directly between SMSCs (Short Message Service Centers) and ESME (External Short Messaging Entity) enterprise servers. Unlike HTTP REST APIs, SMPP maintains persistent TCP/IP socket connections, eliminating HTTP header handshake overhead and achieving throughput rates exceeding 10,000 TPS per bind."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between TRX (Transceiver), TX (Transmitter), and RX (Receiver) binds?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In SMPP session architecture: TX (Transmitter) binds are strictly dedicated to submitting outbound SMS messages (submit_sm). RX (Receiver) binds are dedicated exclusively to receiving inbound messages and delivery reports (deliver_sm). TRX (Transceiver) binds allow bidirectional transmission—submitting messages and receiving delivery receipts on a single persistent TCP connection."
              }
            },
            {
              "@type": "Question",
              "name": "How do SMPP windowing size and TPS (Transactions Per Second) limits operate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SMPP windowing allows an ESME client to transmit multiple submit_sm PDUs asynchronously before waiting for an acknowledgement (submit_sm_resp). A larger window size (e.g. window size 50 or 100) maximizes throughput on high-latency WAN links, enabling continuous full-duplex message streaming up to 10,000+ TPS per session."
              }
            },
            {
              "@type": "Question",
              "name": "Which SMPP PDU commands and mandatory parameter fields are supported?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NAMX Telecom supports all standard SMPP v3.4 and v5.0 PDU primitives including bind_transceiver, bind_transmitter, bind_receiver, submit_sm, deliver_sm, enquire_link (heartbeat ping), unbind, and optional TLV (Tag-Length-Value) parameters for custom routing headers and message payloads."
              }
            },
            {
              "@type": "Question",
              "name": "What is International P2P Traffic Hubbing and Bilateral Clearing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "International P2P Traffic Hubbing is the exchange and settlement of international mobile messaging traffic between mobile network operators (MNOs), MVNOs, and global aggregators. NAMX Telecom manages bilateral clearing agreements, roaming hub interconnects, and itemized CDR (Call Detail Record) financial reconciliation compliant with GSMA AA.19 billing standards."
              }
            },
            {
              "@type": "Question",
              "name": "How does Zero-Hop Roaming Interconnect work for international messaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Zero-hop interconnect means your SMS traffic bypasses intermediary third-party wholesale brokers and is delivered directly to the destination operator's Home Location Register (HLR) / Short Message Service Center (SMSC) via direct SS7 signaling links. This eliminates delivery hops, minimizes latency, and prevents unauthorized message interception."
              }
            },
            {
              "@type": "Question",
              "name": "How are bilateral swap rates negotiated and cleared between mobile operators?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bilateral swap agreements allow two telecom network partners to exchange equal volumes of SMS traffic at offset rates, paying only net balance clearing fees. NAMX Telecom acts as a central clearinghouse platform with automated monthly CDR matching, multi-currency invoicing, and real-time rate card updates."
              }
            },
            {
              "@type": "Question",
              "name": "What is Dynamic Least-Cost Routing (LCR) and how does algorithmic route switching work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dynamic Least-Cost Routing (LCR) is an automated routing engine that continuously evaluates carrier wholesale rates, live delivery rates (ASR/DLR success), and network latency benchmarks in under 15ms per message. If a primary carrier route experiences congestion or failure, the LCR engine instantly reroutes traffic to a secondary direct MNO link."
              }
            },
            {
              "@type": "Question",
              "name": "What is HLR (Home Location Register) Lookup and why is MNP portability check essential?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An HLR Lookup queries the global mobile signaling network to verify a phone number's current active state, IMSI data, roaming country, and ported operator identity (Mobile Number Portability - MNP). Performing HLR lookups prior to dispatch eliminates invalid numbers, prevents routing to disconnected handsets, and optimizes carrier delivery rates."
              }
            },
            {
              "@type": "Question",
              "name": "How does your SS7 Firewall protect against SMS fraud, AIT, and Grey Routes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our core SS7 signaling firewall utilizes deep packet inspection and heuristic machine learning to identify and block Artificial Traffic Inflation (AIT), SIM farm bypass, grey route spoofing, and unauthorized Sender ID manipulation in real time, protecting enterprise clients and mobile operators from revenue leakage."
              }
            },
            {
              "@type": "Question",
              "name": "What are the Sender ID registration requirements for India (DLT), Singapore (SSIR), and UAE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Regulated telecom jurisdictions require Sender ID header pre-registration: DLT (Distributed Ledger Technology) in India mandates business entity and template registration; SSIR (SMS SenderID Registry) in Singapore requires Infocomm registration; TRAE in UAE mandates enterprise authorization letters. NAMX Telecom handles end-to-end whitelist registration within 24-48 hours."
              }
            },
            {
              "@type": "Question",
              "name": "What standard Delivery Report (DLR) error codes are returned?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "DLR receipts return mapped GSM status codes: DELIVRD (handset delivery confirmed), UNDELIV (handset unreachable/powered off), EXPIRED (validity period lapsed before delivery), REJECTD (blocked by operator spam filter or unregistered Sender ID), and UNKNOWN (network route error). Itemized error codes are returned via HTTP webhook or SMPP deliver_sm PDUs."
              }
            },
            {
              "@type": "Question",
              "name": "What SLAs and uptime guarantees does NAMX Telecom provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We guarantee a 99.99% network availability SLA across our dual-redundant core switching nodes in Singapore and Frankfurt, backed by sub-2.5 second delivery latency for OTP transactions and 24/7 technical NOC assistance."
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: "/contact",
    dir: "contact",
    title: "Contact Wholesale SMS Desk | Request Rates & SMPP Test Binds | NAMX Telecom",
    description: "Connect directly with our 24/7 Singapore NOC connectivity desk. Request custom wholesale Bulk SMS rates, SMPP v3.4 test binds, or enterprise API credentials.",
    keywords: "Contact NAMX Telecom, Wholesale Bulk SMS Quote, SMPP Gateway Onboarding, International P2P Interconnect, Singapore Telecom NOC, Test SMPP Credentials",
    canonical: "https://www.namxtelecom.site/contact",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.namxtelecom.site/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.namxtelecom.site/contact" }
          ]
        },
        {
          "@type": "ContactPage",
          "url": "https://www.namxtelecom.site/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "NAMX Telecom",
            "email": "admin@namxtelecom.site",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Singapore"
            }
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How quickly does the NAMX Telecom NOC respond?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Singapore Network Operations Center operates 24/7/365 with an average response time of under 15 minutes via live chat, Telegram (@namxtelecom), WhatsApp (+91 93065 29891), and email."
              }
            },
            {
              "@type": "Question",
              "name": "How can I request live SMPP test credentials?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can message us directly via WhatsApp (+91 93065 29891), Telegram (@namxtelecom), or submit the inquiry form to receive test IP/port/credentials within minutes."
              }
            }
          ]
        }
      ]
    }
  }
];

routes.forEach((route) => {
  let html = templateHtml;
  const appHtml = render(route.path);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Strip homepage-only schema on subpages to avoid duplicate or irrelevant schema
  if (route.path !== "/") {
    html = html.replace(/<!-- HOMEPAGE_ONLY_SCHEMA_START -->[\s\S]*?<!-- HOMEPAGE_ONLY_SCHEMA_END -->/gi, "");
  } else {
    html = html.replace(/<!-- HOMEPAGE_ONLY_SCHEMA_START -->/gi, "");
    html = html.replace(/<!-- HOMEPAGE_ONLY_SCHEMA_END -->/gi, "");
  }

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/gi, `<title>${route.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/gi, `<meta name="title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/gi, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/gi, `<meta name="twitter:title" content="${route.title}" />`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/gi, `<meta name="description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/gi, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/gi, `<meta name="twitter:description" content="${route.description}" />`);

  // Replace Keywords
  html = html.replace(/<meta name="keywords" content=".*?" \/>/gi, `<meta name="keywords" content="${route.keywords}" />`);

  // Replace Canonical & OpenGraph URL
  html = html.replace(/<link rel="canonical" href=".*?" \/>/gi, `<link rel="canonical" href="${route.canonical}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/gi, `<meta property="og:url" content="${route.canonical}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/gi, `<meta name="twitter:url" content="${route.canonical}" />`);

  // Inject Route-Specific JSON-LD Schema & Hreflang
  const schemaScript = `\n  <script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n  </script>\n  <link rel="alternate" hreflang="x-default" href="${route.canonical}" />\n`;
  html = html.replace("</head>", `${schemaScript}</head>`);

  const routeFolder = path.join(distDir, route.dir);
  if (!fs.existsSync(routeFolder)) {
    fs.mkdirSync(routeFolder, { recursive: true });
  }

  const routeFilePath = path.join(routeFolder, "index.html");
  fs.writeFileSync(routeFilePath, html, "utf-8");
  console.log(`Prerendered SSG HTML: ${routeFilePath}`);
});


const sitemapPath = path.join(distDir, 'sitemap.xml');
const publicSitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
const today = new Date().toISOString().split('T')[0];
routes.forEach(route => {
  sitemap += '  <url>\n';
  sitemap += `    <loc>${route.canonical}</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += '    <changefreq>daily</changefreq>\n';
  sitemap += '    <priority>' + (route.path === '/' ? '1.0' : '0.8') + '</priority>\n';
  sitemap += '  </url>\n';
});
sitemap += '</urlset>';
fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
fs.writeFileSync(publicSitemapPath, sitemap, 'utf-8');
console.log('Sitemaps generated in both dist/ and public/.');

console.log("SSG Pre-rendering and Sitemap generation completed!");
