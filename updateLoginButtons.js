const fs = require('fs');
const path = require('path');
const folder = path.join(process.cwd(), 'src');

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (
      fullPath.endsWith('.js') ||
      fullPath.endsWith('.jsx') ||
      fullPath.endsWith('.ts') ||
      fullPath.endsWith('.tsx')
    ) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const newContent = content
        .replace(
          /(href|to|window\.location\.href)\s*=\s*['"][^'"]*['"]/g,
          '$1="https://login.heynia.com"'
        )
        .replace(
          /navigate\(\s*['"]\/login['"]\s*\)/g,
          'window.location.href="https://login.heynia.com"'
        );
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Updated: ' + fullPath);
      }
    }
  });
}

walkDir(folder);

