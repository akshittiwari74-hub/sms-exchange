// Notify Bing, Yandex and other IndexNow engines that the site's URLs changed.
// Run after a production deploy:  npm run indexnow
// The key file public/c46bbf80413df588977932cedea8564d.txt must be live on the site first.
import fs from "fs";

const HOST = "www.namxtelecom.site";
const KEY = "c46bbf80413df588977932cedea8564d";
const sitemap = fs.readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf-8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status}`);
if (res.status >= 400) process.exit(1);
