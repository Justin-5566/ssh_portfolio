module.exports = {
  // Input and output paths
  inputDir: './content',
  outputDir: './docs',
  templateDir: './src/templates',

  // Site metadata
  site: {
    title: 'My Portfolio',
    description: 'A personal portfolio and blog built with custom SSG',
    author: 'Your Name',
    url: 'https://yourdomain.com', // Update this
  },

  // Build options
  build: {
    cleanOutputDir: true, // Remove old build files before building
    includeStyle: true,
    minifyHTML: false, // Can be enabled later
  },

  // Content configuration
  content: {
    blogDir: 'blog',
    pagesDir: 'pages',
    exclude: ['demo.md'], // Files to exclude from build
  },

  // GitHub Pages / Cloudflare Pages specific
  deploy: {
    platform: 'github', // or 'cloudflare'
    baseUrl: '/', // Set to '/repo-name/' for GitHub project pages
  },
};
