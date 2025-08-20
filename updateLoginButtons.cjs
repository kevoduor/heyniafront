const fs = require('fs');
const path = require('path');
const folder = path.join(process.cwd(), 'src');

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content
        // Replace navigate("/login") with window.location.href
        .replace(/navigate\(\s*['"][^'"]*['"]\s*\)/g, 'window.location.href="https://login.heynia.com"')
        // Replace <Link to="/login"> with absolute URL
        .replace(/<Link\s+to=['"][^'"]*['"]/g, '<Link to="https://login.heynia.com"')
        // Replace href="/login" with absolute URL
        .replace(/href=['"][^'"]*['"]/g, 'href="https://login.heynia.com"');

      if (/Login|Get Started/.test(newContent) && newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Updated: ' + fullPath);
      }
    }
  });
}

walkDir(folder);
