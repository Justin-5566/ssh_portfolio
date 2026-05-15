const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

/**
 * Parse a markdown file with YAML frontmatter
 * @param {string} filePath - Path to the markdown file
 * @returns {Object} - { frontmatter, html, slug, filename }
 */
function parseContent(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    // Generate slug from filename
    const filename = path.basename(filePath, '.md');
    const slug = data.slug || filename;

    // Convert markdown to HTML
    const html = marked(content);

    return {
      frontmatter: data,
      html,
      slug,
      filename,
      filePath,
    };
  } catch (error) {
    console.error(`Error parsing content at ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Parse multiple markdown files
 * @param {string[]} filePaths - Array of file paths
 * @returns {Array} - Array of parsed content objects
 */
function parseMultipleContent(filePaths) {
  return filePaths.map(parseContent).filter((item) => {
    // Filter out draft posts if needed
    return !item.frontmatter.draft;
  });
}

module.exports = {
  parseContent,
  parseMultipleContent,
};
