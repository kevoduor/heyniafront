const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'src');
const files = [];

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      files.push(fullPath);
    }
  });
}

walkDir(folder);

const loginUrl = 'https://login.heynia.com';

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace href, to, window.location.href
  content = content.replace(/(href|to|window\.location\.href)\s*=\s*['"][^'"]*['"]/g, `$1="${loginUrl}"`);
  
  // Replace navigate("/login") or navigate('/login')
  content = content.replace(/navigate\(\s*['"]\/login['"]\s*\)/g, `window.location.href="${loginUrl}"`);
  
  // Only replace if file actually changed
  fs.writeFileSync(file, content, 'utf8');
});

console.log(`Updated buttons in ${files.length} files.`);
