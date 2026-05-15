const fs = require('fs');
const path = require('path');

/**
 * Recursively read all markdown files from a directory
 * @param {string} dirPath - Directory path
 * @param {string[]} fileList - Accumulator for file list
 * @returns {string[]} - Array of .md file paths
 */
function readContentFiles(dirPath, fileList = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      readContentFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Write HTML content to a file
 * @param {string} filePath - Output file path
 * @param {string} content - HTML content to write
 */
function writeHTML(filePath, content) {
  try {
    const dir = path.dirname(filePath);

    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ Generated: ${filePath}`);
  } catch (error) {
    console.error(`Error writing HTML to ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Clean output directory
 * @param {string} dirPath - Directory path to clean
 */
function cleanDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`✓ Cleaned: ${dirPath}`);
  }
}

/**
 * Copy directory recursively
 * @param {string} src - Source directory
 * @param {string} dest - Destination directory
 */
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

module.exports = {
  readContentFiles,
  writeHTML,
  cleanDirectory,
  copyDirectory,
};
