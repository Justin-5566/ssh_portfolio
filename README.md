# SSG Portfolio - Custom Static Site Generator

A lightweight, JavaScript-based static site generator for building fast, secure, and easy-to-maintain portfolio and blog websites.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Site
```bash
npm run build
```

The static site will be generated in the `docs/` folder.

### 3. Preview Locally
```bash
npm run serve
```

Open `http://localhost:8080` in your browser.

---

## 📁 Project Structure

```
SSG Portfolio/
├── content/              # Your markdown content
│   ├── blog/            # Blog posts
│   └── pages/           # Static pages
├── src/
│   ├── lib/             # Core modules
│   │   ├── contentParser.js
│   │   ├── fileHandler.js
│   │   └── templateEngine.js
│   ├── templates/       # HTML templates
│   │   ├── index.html
│   │   └── post.html
│   ├── build.js         # Build orchestrator
│   └── cli.js           # CLI entry point
├── docs/                # Generated static site (OUTPUT)
├── prd.md               # Product requirements
└── DEPLOYMENT.md        # Publishing guide
```

---

## ✍️ Creating Blog Posts

1. Create a new markdown file in `content/blog/`:
```bash
# content/blog/my-post.md
```

2. Add frontmatter and content:
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

3. Build and deploy:
```bash
npm run build
git add .
git commit -m "Add new post"
git push
```

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build the complete site |
| `npm run dev` | Development mode (watch for changes) |
| `npm run test` | Run test suite |
| `npm run lint` | Check code quality |
| `npm run serve` | Serve site locally on port 8080 |

---

## 📚 Documentation

- **[prd.md](prd.md)** - Product requirements and overview
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - GitHub Pages & Cloudflare Pages deployment
- **[TECH.md](TECH.md)** - Technical architecture (coming soon)

---

## 🌐 Deployment

### GitHub Pages
```bash
# Push to GitHub
git push origin main

# Enable in Settings → Pages → Branch: main, Folder: /docs
```

**Site URL:** `https://YOUR_USERNAME.github.io/YOUR_REPO`

### Cloudflare Pages
```bash
# Connect your GitHub repo to Cloudflare
# Build command: npm run build
# Publish directory: docs
```

**Site URL:** `https://YOUR_PROJECT.pages.dev`

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## 🎨 Customization

### Update Site Metadata
Edit `ssg.config.js`:
```javascript
site: {
  title: 'Your Site Title',
  description: 'Your site description',
  author: 'Your Name',
  url: 'https://yourdomain.com',
},
```

### Customize Templates
Edit templates in `src/templates/`:
- `index.html` - Blog listing page
- `post.html` - Individual post page

### Frontmatter Fields

```yaml
---
title: Post Title (required)
date: 2026-05-15 (required)
tags: [tag1, tag2] (optional)
author: Your Name (optional)
excerpt: Brief description (optional)
category: Category (optional)
draft: false (set true to hide)
---
```

---

## 📊 Features

✅ Markdown-based content  
✅ YAML frontmatter support  
✅ Automatic HTML generation  
✅ Responsive templates  
✅ Fast, static output  
✅ GitHub Pages ready  
✅ Cloudflare Pages compatible  
✅ Modular, extensible codebase  

---

## 🔧 Technologies Used

- **Node.js** - JavaScript runtime
- **marked** - Markdown parser
- **gray-matter** - YAML frontmatter extraction
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **Jest** - Testing framework

---

## 📝 Example Frontmatter

```yaml
---
title: Understanding Static Site Generators
date: 2026-05-13
tags:
  - ssg
  - web-development
  - performance
author: Your Name
excerpt: A deep dive into SSGs and why they're great for portfolios
category: Web Development
---
```

---

## 🚀 Next Steps

1. **Customize** `ssg.config.js` with your site details
2. **Edit templates** in `src/templates/` to match your design
3. **Add content** by creating markdown files in `content/blog/`
4. **Build** with `npm run build`
5. **Deploy** to GitHub Pages or Cloudflare Pages

---

## 💡 Tips

- Run `npm run lint` before committing to catch issues
- Use `npm run serve` to test locally before deploying
- Keep markdown files organized in subdirectories
- Use meaningful filenames (they become URLs)
- Include descriptive excerpts for blog listings

---

## 📄 License

MIT License - Feel free to use and modify!

---

**Built with ❤️ using JavaScript**

For questions or issues, check the documentation files or review the source code in `src/`.
