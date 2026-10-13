const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const dirs = ['./src', './scripts', './index.html'];
const files = [];

dirs.forEach(d => {
  if (fs.existsSync(d)) {
    if (fs.statSync(d).isDirectory()) {
      walkDir(d, (p) => files.push(p));
    } else {
      files.push(d);
    }
  }
});

files.filter(f => f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.html')).forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // 1. Change panel.namxtelecom.site -> customer.namxtelecom.site
  content = content.replace(/panel\.namxtelecom\.site/g, 'customer.namxtelecom.site');

  // 2. Change namxteleservices -> namxtelecom
  content = content.replace(/namxteleservices/g, 'namxtelecom');

  // 3. Change email
  content = content.replace(/namxtelecom@gmail\.com/g, 'admin@namxtelecom.site');
  
  // Revert for MS Teams (which might have been altered)
  content = content.replace(/Teams:\s*admin@namxtelecom\.site/g, 'Teams: namxtelecom@gmail.com');
  content = content.replace(/Teams: admin@namxtelecom\.site/g, 'Teams: namxtelecom@gmail.com');
  content = content.replace(/teams: admin@namxtelecom\.site/gi, 'teams: namxtelecom@gmail.com');
  
  // Revert for SMTP (Check if there is SMTP configuration, although usually it's process.env or similar)
  // The user said: "not on submit form smtp"
  // Let's assume SMTP login is using namxtelecom@gmail.com, we can revert it if it is assigned to `user` or `pass`
  content = content.replace(/user:\s*['"]admin@namxtelecom\.site['"]/g, 'user: "namxtelecom@gmail.com"');
  content = content.replace(/pass:\s*['"]admin@namxtelecom\.site['"]/g, 'pass: "namxtelecom@gmail.com"');
  
  if (content !== original) {
    fs.writeFileSync(f + '.bak', original);
    fs.writeFileSync(f, content);
    console.log('Updated: ' + f);
  }
});
