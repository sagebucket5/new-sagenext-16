const fs = require('fs');
const path = require('path');

const directoryPath = './src/styles'; // Change this to your target directory
const lineThreshold = 700;

// Function to get all CSS files in a directory recursively
function getCSSFiles(dir) {
    let cssFiles = [];
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            cssFiles = cssFiles.concat(getCSSFiles(filePath));
        } else if (file.endsWith('.css')) {
            cssFiles.push(filePath);
        }
    });
    
    return cssFiles;
}

// Function to count lines in a file
function countLines(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return fileContent.split('\n').length;
}

// Find and print large CSS files
const cssFiles = getCSSFiles(directoryPath);
console.log(`Scanning ${cssFiles.length} CSS files...`);

cssFiles.forEach(file => {
    const lineCount = countLines(file);
    if (lineCount > lineThreshold) {
        console.log(`Large CSS File: ${file} - ${lineCount} lines`);
    }
});