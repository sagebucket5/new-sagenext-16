const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Directories to scan
const imagesDir = path.join(__dirname, 'public/assets/images'); // or replace with 'src/assets/images'
const appDir = path.join(__dirname, 'src', 'app');
const componentsDir = path.join(__dirname, 'src', 'components');

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];

// Recursively get all image files
const getAllImageFiles = (dir) => {
  let imageFiles = [];
  const items = fs.readdirSync(dir);
  items.forEach((item) => {
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      imageFiles = imageFiles.concat(getAllImageFiles(itemPath));
    } else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
      imageFiles.push(itemPath);
    }
  });
  return imageFiles;
};

// Recursively check if an image is used in a given directory
const isImageUsed = (imageFile, dir) => {
  const items = fs.readdirSync(dir);
  return items.some((item) => {
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      return isImageUsed(imageFile, itemPath);
    } else if (fs.statSync(itemPath).isFile()) {
      const content = fs.readFileSync(itemPath, 'utf8');
      const imageName = path.basename(imageFile);
      return content.includes(imageName); // crude match: can be improved
    }
    return false;
  });
};

// Find unused images
const findUnusedImages = () => {
  const imageFiles = getAllImageFiles(imagesDir);
  const unusedImages = [];

  imageFiles.forEach((imageFile) => {
    const usedInApp = isImageUsed(imageFile, appDir);
    const usedInComponents = isImageUsed(imageFile, componentsDir);

    if (!usedInApp && !usedInComponents) {
      unusedImages.push(imageFile);
    }
  });

  return unusedImages;
};

// Delete unused images
const deleteUnusedImages = (files) => {
  files.forEach((file) => {
    try {
      fs.unlinkSync(file);
      console.log(`Deleted: ${file}`);
    } catch (err) {
      console.error(`Failed to delete ${file}:`, err);
    }
  });
};

// MAIN
const unusedImages = findUnusedImages();

if (unusedImages.length > 0) {
  console.log('\nUnused image files:');
  unusedImages.forEach((file) => console.log(file));
  console.log(`\nTotal unused images: ${unusedImages.length}`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('\nDo you want to delete these unused image files? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      deleteUnusedImages(unusedImages);
      console.log('Unused images deleted successfully.');
    } else {
      console.log('Deletion aborted.');
    }
    rl.close();
  });
} else {
  console.log('No unused images found.');
}