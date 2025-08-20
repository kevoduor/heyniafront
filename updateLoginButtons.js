const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'src'); // source folder
const files = [];

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      files.push(fullPath);
    }
  });
}

walkDir(folder);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/(href|to|window\.location\.href)\s*=\s*["'][^"']*["']/g, `$1="https://login.heynia.com"`);
  fs.writeFileSync(file, content, 'utf8');
});

console.log(`Updated ${files.length} files with new login URL.`);
