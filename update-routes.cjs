const fs = require('fs');

let content = fs.readFileSync('scripts/prerender.js', 'utf8');

const additionalRoutes = `
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
`;

// Inject locations programmatically
const locations = ['singapore', 'uae', 'uk', 'usa', 'india', 'malaysia'];
let locationRoutes = '';
locations.forEach(loc => {
  const capLoc = loc.length <= 3 ? loc.toUpperCase() : loc.charAt(0).toUpperCase() + loc.slice(1);
  locationRoutes += `
  {
    path: '/bulk-sms-${loc}',
    dir: 'bulk-sms-${loc}',
    title: 'Bulk SMS Provider in ${capLoc} | Direct Routes & SMPP Gateway',
    description: 'Send Bulk SMS in ${capLoc} with direct MNO interconnects and zero-hop termination. Connect via REST API or SMPP v3.4.',
    keywords: 'Bulk SMS ${capLoc}, SMS Gateway ${capLoc}, SMPP ${capLoc}',
    canonical: 'https://www.namxtelecom.site/bulk-sms-${loc}',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Bulk SMS',
      'areaServed': '${capLoc}'
    }
  },`;
});

// Also inject blog posts
const posts = JSON.parse(fs.readFileSync('src/data/posts.json', 'utf8'));
let blogRoutes = '';
posts.forEach(post => {
  const safeExcerpt = post.excerpt.replace(/'/g, "\\'");
  blogRoutes += `
  {
    path: '/insights/${post.slug}',
    dir: 'insights/${post.slug}',
    title: '${post.title} | NAMX Telecom Insights',
    description: '${safeExcerpt}',
    keywords: '${post.category}, Telecom, SMS',
    canonical: 'https://www.namxtelecom.site/insights/${post.slug}',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': '${post.title}'
    }
  },`;
});

if (!content.includes('/glossary')) {
  content = content.replace(/const routes = \[\s*\{/, 'const routes = [' + additionalRoutes + locationRoutes + blogRoutes + '\n  {');
  fs.writeFileSync('scripts/prerender.js', content);
  console.log('Added new routes to prerender.js');
} else {
  console.log('Routes already added.');
}
