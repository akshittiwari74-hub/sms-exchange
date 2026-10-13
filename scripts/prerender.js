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
    title: "Global Bulk SMS Rates, International P2P Hubbing & Wholesale Pricing | NAMX Telecom",
    description: "Explore live wholesale Bulk SMS rates and international P2P hubbing pricing for 195+ corridors. Calculate volume routing pricing in EUR, USDT, or USD with zero hidden commitments.",
    keywords: "Bulk SMS Rates, Wholesale Bulk SMS Pricing, International P2P SMS Rates, SMPP Gateway Rates, SMS Routing Rate Estimator, Bulk SMS Singapore Rates, Global SMS Traffic Rates",
    canonical: "https://www.namxtelecom.site/rates",
    schema: {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": "Wholesale Bulk SMS & International P2P Rate Cards",
      "url": "https://www.namxtelecom.site/rates",
      "provider": {
        "@type": "Organization",
        "name": "NAMX Telecom",
        "url": "https://www.namxtelecom.site/"
      }
    }
  },
  {
    path: "/coverage",
    dir: "coverage",
    title: "195+ Country Telecom Reach, Direct SS7 MNO Interconnects & SMS Routing | NAMX Telecom",
    description: "Global Bulk SMS & international P2P messaging coverage across 195+ countries. Direct SS7 signaling links, LCR SMS routing engine, and zero-hop carrier termination.",
    keywords: "Global Bulk SMS Coverage, International P2P SMS Interconnects, Direct MNO SS7 Links, SMS Routing Engine, Zero-Hop SMS Termination, Wholesale SMS Aggregator",
    canonical: "https://www.namxtelecom.site/coverage",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Global Bulk SMS & International P2P Telecommunications Coverage",
      "provider": {
        "@type": "Organization",
        "name": "NAMX Telecom"
      },
      "areaServed": "Worldwide"
    }
  },
  {
    path: "/services",
    dir: "services",
    title: "Carrier SMS Products, SMPP v3.4/v5.0 Binds, International P2P & Bulk SMS Gateway | NAMX Telecom",
    description: "Enterprise messaging infrastructure: high-speed SMPP v3.4/v5.0 binds, International P2P traffic exchange, A2P Bulk SMS gateway, and dynamic least-cost SMS routing.",
    keywords: "Bulk SMS Gateway, SMPP Gateway, SMPP v3.4 Binds, SMPP v5.0 Gateway, International P2P SMS Hubbing, Dynamic SMS Routing, Least Cost Routing LCR",
    canonical: "https://www.namxtelecom.site/services",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Wholesale Bulk SMS, SMPP v3.4/v5.0 Gateway & International P2P Hubbing",
      "provider": {
        "@type": "Organization",
        "name": "NAMX Telecom"
      }
    }
  },
  {
    path: "/industries",
    dir: "industries",
    title: "Industry Bulk SMS Solutions, Banking 2FA OTP & Telecom P2P SMS Routing | NAMX Telecom",
    description: "Tailored Bulk SMS & intelligent SMS routing for Banking 2FA OTPs, Telecom Aggregator P2P hubbing, E-Commerce DLR tracking, and Healthcare compliance.",
    keywords: "Banking Bulk SMS, 2FA OTP SMS Routing, Telecom Aggregator P2P, E-Commerce Bulk SMS, Healthcare SMS Gateway, Enterprise Bulk SMS",
    canonical: "https://www.namxtelecom.site/industries",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Enterprise Bulk SMS & Specialized SMS Routing Solutions",
      "provider": {
        "@type": "Organization",
        "name": "NAMX Telecom"
      }
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
    title: "Technical Telecom FAQ, SMPP Bind Specs, SS7 SMS Routing & Compliance | NAMX Telecom",
    description: "Technical answers on SMPP v3.4 binds, International P2P clearing, SS7 firewalling, dynamic SMS routing rules, DLR status codes, and 99.99% SLA uptime.",
    keywords: "Bulk SMS FAQ, SMPP Bind Specs, International P2P Clearing, SS7 SMS Routing, Sender ID Whitelisting, Telecom DLR Error Codes",
    canonical: "https://www.namxtelecom.site/faq",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Bulk SMS and SMPP protocols are supported by NAMX Telecom?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NAMX Telecom supports native SMPP v3.4 and v5.0 protocols over TLS/VPN for high-volume carrier binds (up to 10,000 TPS), developer-friendly HTTP REST APIs, and an online Web Broadcast Campaign Portal."
          }
        },
        {
          "@type": "Question",
          "name": "How does International P2P Traffic Hubbing and Dynamic SMS Routing work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our International P2P Hubbing engine manages bilateral clearing between mobile operators and global aggregators, utilizing Least Cost Routing (LCR) algorithms, real-time HLR lookup, and SS7 anti-fraud firewalling."
          }
        }
      ]
    }
  },
  {
    path: "/contact",
    dir: "contact",
    title: "Carrier Wholesale Consultation, SMPP Onboarding & Singapore NOC | NAMX Telecom",
    description: "Request custom wholesale Bulk SMS rates, set up live SMPP v3.4 binds, or connect directly with our Singapore 24/7 Global Telecom Network Operations Center (NOC).",
    keywords: "Contact NAMX Telecom, Wholesale Bulk SMS Quote, SMPP Gateway Onboarding, International P2P Interconnect, Singapore Telecom NOC",
    canonical: "https://www.namxtelecom.site/contact",
    schema: {
      "@context": "https://schema.org",
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
