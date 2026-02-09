import path from 'path';
import fs from 'fs';

const fileExtensions = ['.js', '.jsx', '.tsx'];

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (fileExtensions.includes(path.extname(file))) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function replaceAnchorWithNextLink(content) {
  return content
    .replace(
      /<a\s+([^>]*?)href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/gi,
      (_match, preHrefAttrs, href, postHrefAttrs, innerHTML) => {
        return `<Link href="${href}" ${preHrefAttrs}${postHrefAttrs}>${innerHTML}</Link>`;
      }
    )
    .replace(/\bclass="/g, 'className="');
}

function processFile(filePath) {
  const originalContent = fs.readFileSync(filePath, 'utf8');
  const newContent = replaceAnchorWithNextLink(originalContent);

  if (newContent !== originalContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
  }
}

function main() {
  const targetDir = process.argv[2] || path.resolve(__dirname, '..'); // Default to project root
  const files = getAllFiles(targetDir);

  console.log(`🔍 Processing ${files.length} files...`);
  files.forEach(processFile);
  console.log('🎉 Replacement complete.');
}

main();