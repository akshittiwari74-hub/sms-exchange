const fs = require('fs');
let content = fs.readFileSync('scripts/prerender.js', 'utf8');

if (!content.includes('import { render }')) {
  content = content.replace(
    /const templateHtml = fs\.readFileSync\(templateHtmlPath, "utf-8"\);/,
    `const templateHtml = fs.readFileSync(templateHtmlPath, "utf-8");\nimport { render } from "../dist/server/entry-server.js";`
  );

  content = content.replace(
    /routes\.forEach\(\(route\) => {/,
    `routes.forEach((route) => {`
  );
  
  content = content.replace(
    /let html = templateHtml;/,
    `let html = templateHtml;
  const appHtml = render(route.path);
  html = html.replace('<div id="root"></div>', \`<div id="root">\${appHtml}</div>\`);`
  );

  fs.writeFileSync('scripts/prerender.js', content);
  console.log("Updated prerender.js to use SSR renderToString!");
} else {
  console.log("Already updated");
}
