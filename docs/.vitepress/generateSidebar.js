// sidebar-generator.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function generateKnowledgeSidebar() {
  const blogDir = path.join(__dirname, '../knowledge');
  return generateSidebarForDirectory(blogDir, '/knowledge');
}

function generateSidebarForDirectory(dirPath, urlPrefix) {
  const items = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  const sortedEntries = entries.sort((a, b) => {
    if (a.name === 'index.md') return -1;
    if (b.name === 'index.md') return 1;
    if (a.isFile() && b.isDirectory()) return -1;
    if (a.isDirectory() && b.isFile()) return 1;
    return a.name.localeCompare(b.name);
  });

  for (const entry of sortedEntries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(path.join(__dirname, '../docs'), fullPath);
    
    if (entry.isDirectory()) {
      const folderName = entry.name;
      const text = formatText(folderName);
      
      const hasIndex = fs.existsSync(path.join(fullPath, 'index.md'));
      
      const sidebarGroup = {
        text,
        collapsed: false,
        items: generateSidebarForDirectory(
          fullPath, 
          `${urlPrefix}/${folderName}`
        )
      };

      if (hasIndex) {
        sidebarGroup.link = `${urlPrefix}/${folderName}/`;
      }

      items.push(sidebarGroup);
    } else if (entry.name.endsWith('.md')) {
      const name = entry.name.replace('.md', '');
      if (name !== 'index') {
        const text = formatText(name);
        items.push({
          text,
          link: `${urlPrefix}/${name}`
        });
      }
    }
  }

  return items;
}

function formatText(name) {
  return name
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default generateKnowledgeSidebar;