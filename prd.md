# Product Requirements Document (PRD)
## SSG Portfolio - Custom Static Site Generator

---

## Project Overview

**SSG Portfolio** is a custom-built Static Site Generator (SSG) written in JavaScript/Node.js. It converts markdown-based blog posts and content into optimized static HTML, perfect for fast, secure, and easy-to-maintain portfolio and blog websites.

### Vision
Provide a lightweight, developer-friendly alternative to heavyweight SSGs, with full control over the build process and template rendering.

---

## Project Goals

1. **Build a functional Static Site Generator** that can:
   - Parse markdown files with YAML frontmatter
   - Extract metadata (title, date, tags, author, category)
   - Generate clean, semantic HTML

2. **Simplify content creation** through:
   - Simple markdown format with YAML frontmatter
   - Organized content structure (blog posts, pages)
   - Easy-to-follow conventions

3. **Generate a complete static website** with:
   - Blog index/listing pages
   - Individual post pages with proper layouts
   - Navigation and metadata rendering
   - Responsive, clean HTML output

4. **Maintain code quality** through:
   - ESLint configuration for consistent code style
   - Jest testing framework for reliability
   - Modular, reusable components
   - Clear documentation

5. **Enable GitHub hosting** via:
   - Output to `docs/` folder (GitHub Pages compatible)
   - Version control-friendly workflow
   - Easy deployment without build servers

---

## Key Features

### Content Management
- ✅ Markdown-based content storage
- ✅ YAML frontmatter support (title, date, tags, author, excerpt, category)
- ✅ Organized directory structure (blog, pages)
- ✅ Multiple content files in parallel

### Build Process
- ✅ Automatic content discovery and parsing
- ✅ Frontmatter extraction and validation
- ✅ Markdown-to-HTML conversion
- ✅ Template rendering with data injection
- ✅ Static file generation to `docs/` folder

### Templates
- ✅ Blog index/listing template
- ✅ Individual post template
- ✅ Page template
- ✅ Responsive, semantic HTML
- ✅ Easy variable injection (title, date, tags, author, etc.)

### Development Experience
- ✅ Simple NPM script-based workflow
- ✅ `npm run build` - build the entire site
- ✅ `npm run dev` - watch mode (future)
- ✅ `npm run test` - run test suite
- ✅ `npm run lint` - check code quality

---

## File Structure

```
SSG Portfolio/
├── content/                 # Source content (markdown files)
│   ├── blog/               # Blog posts
│   │   ├── hello-world.md
│   │   ├── getting-started.md
│   │   └── static-site-generators-explained.md
│   ├── pages/              # Static pages
│   │   ├── about.md
│   │   └── contact.md
│   └── demo.md             # Demo content
│
├── src/                     # Source code
│   ├── lib/                # Core modules
│   │   ├── contentParser.js      # Parse markdown + frontmatter
│   │   ├── templateEngine.js     # Render templates
│   │   ├── fileHandler.js        # File I/O operations
│   │   └── *.test.js             # Jest tests
│   ├── templates/          # HTML templates
│   │   ├── index.html      # Blog listing template
│   │   ├── post.html       # Individual post template
│   │   ├── page.html       # Static page template
│   │   └── base.html       # Base layout (optional)
│   ├── build.js            # Main build orchestrator
│   └── cli.js              # CLI entry point
│
├── docs/                    # Generated static site (output)
│   ├── index.html
│   ├── blog/
│   │   └── *.html
│   └── pages/
│       └── *.html
│
├── github/                  # GitHub-specific docs
│   └── copilot_instructions.md
│
├── package.json            # Project dependencies and scripts
├── ssg.config.js          # SSG configuration
├── .eslintrc.json         # ESLint rules
├── .prettierrc             # Code formatting
├── .gitignore             # Git exclusions
├── prd.md                 # This document
├── ORD.md                 # Operations/Requirements documentation
└── TECH.md                # Technical architecture documentation
```

---

## User Workflow

### 1. Setting Up
```bash
git clone <repository>
npm install
```

### 2. Creating a Blog Post
Create a new markdown file in `content/blog/`:
```markdown
---
title: My First Post
date: 2026-05-15
tags:
  - blog
  - first
author: Your Name
excerpt: A brief description
category: General
---

# My First Post

Your content here...
```

### 3. Building the Site
```bash
npm run build
```

This generates the complete static site in `docs/`.

### 4. Previewing Locally
Open `docs/index.html` in a browser or use a local server:
```bash
npm run serve  # or your preferred static server
```

### 5. Publishing to GitHub Pages
```bash
git add .
git commit -m "Update blog posts"
git push origin main
```

GitHub Pages automatically serves the `docs/` folder.

---

## Technical Stack

| Component | Technology | Reason |
|-----------|-----------|--------|
| Runtime | Node.js 14+ | Industry standard, excellent ecosystem |
| Markdown Parser | `marked` | Simple, fast, well-maintained |
| Frontmatter Parser | `gray-matter` | Clean YAML extraction |
| Templating | String interpolation (initially) | Simple, no dependencies; upgrade later if needed |
| Testing | Jest | Industry-standard JavaScript testing |
| Linting | ESLint | Code quality and consistency |
| Formatting | Prettier | Automatic code formatting |

---

## Content Format

### Frontmatter Fields

```yaml
---
title: Post Title (required)
date: 2026-05-15 (required, YYYY-MM-DD format)
tags:
  - tag1
  - tag2
author: Your Name (optional)
excerpt: Brief description for listings (optional)
category: Category Name (optional)
draft: false (optional, set true to skip publishing)
---
```

### Markdown Content
Standard markdown with support for:
- Headings (H1-H6)
- Lists (ordered and unordered)
- Code blocks (with syntax highlighting potential)
- Links and images
- Bold, italic, strikethrough
- Tables
- Blockquotes

---

## Build Output

The build process generates:

1. **`docs/index.html`** - Blog listing page with all published posts
2. **`docs/blog/*.html`** - Individual post pages
3. **`docs/pages/*.html`** - Static pages
4. **Metadata files** - Sitemap, RSS feed (future)

Each HTML file includes:
- Semantic HTML5 structure
- Responsive meta tags
- Post metadata (title, date, author, tags)
- Rendered markdown content
- Navigation links
- Footer information

---

## Deployment

### GitHub Pages
The `docs/` folder is GitHub Pages-compatible:

1. Enable GitHub Pages in repository settings
2. Set source to `docs/` folder
3. Site is live at `https://username.github.io/repo-name`

### Alternative Hosts
- Netlify (drag & drop `docs/` folder)
- Vercel (connect repository)
- AWS S3 + CloudFront
- Any static file host

---

## Success Criteria

- [ ] `npm install` runs successfully with no errors
- [ ] `npm run build` generates complete static site
- [ ] All markdown files are parsed correctly
- [ ] Frontmatter is extracted and used in templates
- [ ] Blog index lists all posts with metadata
- [ ] Individual post pages are generated
- [ ] HTML output is valid and semantic
- [ ] Site is mobile-responsive
- [ ] `npm run lint` passes with 0 errors
- [ ] Test suite passes with `npm run test`
- [ ] Site deploys successfully to GitHub Pages

---

## Future Enhancements

### Phase 2
- [ ] Automatic sitemap generation
- [ ] RSS feed generation
- [ ] Search functionality
- [ ] Category/tag index pages
- [ ] Related posts recommendations

### Phase 3
- [ ] Watch mode (`npm run dev`) for development
- [ ] Asset pipeline (CSS/JS minification)
- [ ] Image optimization
- [ ] Code syntax highlighting
- [ ] Static asset copying/processing

### Phase 4
- [ ] Plugin system for extensibility
- [ ] Multiple theme support
- [ ] Incremental builds
- [ ] Pagination support
- [ ] Draft/scheduled post support

---

## Maintenance & Support

### Adding Content
- Create new `.md` files in `content/blog/` or `content/pages/`
- Follow frontmatter format
- Run `npm run build`
- Commit and push changes

### Updating Styles
- Edit templates in `src/templates/`
- Update CSS in template `<style>` blocks
- Rebuild with `npm run build`

### Troubleshooting
- Check `docs/` for generated files
- Review error messages from build process
- Validate frontmatter YAML syntax
- Ensure all markdown files have required fields

---

## Contributing

To contribute to SSG Portfolio:

1. Fork the repository
2. Create a feature branch
3. Make changes and test
4. Submit a pull request

---

## License

This project is open source. See LICENSE file for details.

---

## References

- [Marked Documentation](https://marked.js.org/)
- [Gray Matter Documentation](https://github.com/jonschlinkert/gray-matter)
- [Node.js Documentation](https://nodejs.org/docs/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Markdown Syntax Guide](https://www.markdownguide.org/)

---

**Last Updated:** May 15, 2026
**Project Status:** In Development - Phase 1 (Core Setup)
