const path = require('path');
const fs = require('fs');
const { readContentFiles, writeHTML, cleanDirectory } = require('./lib/fileHandler');
const { parseMultipleContent } = require('./lib/contentParser');
const { renderTemplateFile } = require('./lib/templateEngine');

// Load configuration
let config = {};
try {
  config = require('../ssg.config.js');
} catch (e) {
  console.warn('Warning: ssg.config.js not found, using defaults');
  config = {
    site: {
      title: 'My Portfolio',
      description: 'A personal portfolio and blog',
      author: 'Your Name',
    },
    build: {
      cleanOutputDir: true,
    },
    content: {
      exclude: [],
    },
  };
}

/**
 * Main build function
 */
async function build() {
  console.log('🔨 Building site...\n');

  try {
    const inputDir = config.inputDir || './content';
    const outputDir = config.outputDir || './docs';
    const templateDir = config.templateDir || './src/templates';

    // Clean output directory if configured
    if (config.build?.cleanOutputDir) {
      cleanDirectory(outputDir);
    }

    // Read all markdown files
    console.log(`📂 Reading content from ${inputDir}...`);
    const contentFiles = readContentFiles(inputDir).filter((file) => {
      const filename = path.basename(file);
      return !config.content?.exclude?.includes(filename);
    });

    if (contentFiles.length === 0) {
      console.warn('⚠️  No markdown files found');
      return;
    }

    console.log(`✓ Found ${contentFiles.length} content file(s)\n`);

    // Parse all content
    console.log('📝 Parsing content...');
    const parsedContent = parseMultipleContent(contentFiles);
    console.log(`✓ Parsed ${parsedContent.length} post(s)\n`);

    // Sort posts by date (newest first)
    parsedContent.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date || 0);
      const dateB = new Date(b.frontmatter.date || 0);
      return dateB - dateA;
    });

    // Generate index page
    console.log('🏠 Generating index page...');
    const indexTemplate = path.join(templateDir, 'index.html');
    const indexData = {
      site_title: config.site?.title || 'My Portfolio',
      site_description: config.site?.description || 'Welcome',
      year: new Date().getFullYear(),
      posts: formatPostsForTemplate(parsedContent, outputDir),
    };

    const indexHTML = renderTemplateFile(indexTemplate, indexData);
    const indexOutput = path.join(outputDir, 'index.html');
    writeHTML(indexOutput, indexHTML);

    // Generate individual post pages (if post template exists)
    const postTemplate = path.join(templateDir, 'post.html');
    if (fs.existsSync(postTemplate)) {
      console.log('\n📄 Generating post pages...');
      parsedContent.forEach((post) => {
        const postData = {
          title: post.frontmatter.title || 'Untitled',
          date: formatDate(post.frontmatter.date),
          author: post.frontmatter.author || config.site?.author || 'Unknown',
          category: post.frontmatter.category || '',
          tags: (post.frontmatter.tags || []).join(', '),
          content: post.html,
          site_title: config.site?.title || 'My Portfolio',
          year: new Date().getFullYear(),
        };

        const postHTML = renderTemplateFile(postTemplate, postData);
        const postOutput = path.join(outputDir, 'blog', `${post.slug}.html`);
        writeHTML(postOutput, postHTML);
      });
    }

    console.log('\n✅ Build complete!\n');
    console.log(`📍 Output directory: ${path.resolve(outputDir)}`);
  } catch (error) {
    console.error('\n❌ Build failed:');
    console.error(error.message);
    process.exit(1);
  }
}

/**
 * Format posts for template rendering
 */
function formatPostsForTemplate(posts, outputDir) {
  return posts
    .map((post) => ({
      title: post.frontmatter.title || 'Untitled',
      date: formatDate(post.frontmatter.date),
      author: post.frontmatter.author || 'Unknown',
      category: post.frontmatter.category || '',
      tags: post.frontmatter.tags || [],
      excerpt: post.frontmatter.excerpt || 'No excerpt available',
      url: `/blog/${post.slug}.html`,
    }))
    .join('');
}

/**
 * Format date to readable format
 */
function formatDate(dateString) {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (e) {
    return dateString;
  }
}

// Run build if executed directly
if (require.main === module) {
  build();
}

module.exports = { build };
