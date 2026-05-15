---
title: Getting Started with Our SSG
date: 2026-05-14
tags:
  - tutorial
  - ssg
  - guide
author: Portfolio Author
excerpt: Learn how to create your first blog post using our custom static site generator.
category: Tutorial
---

# Getting Started with Our SSG

In this post, I'll walk you through the basics of creating content for this site using our custom static site generator.

## File Structure

All blog content lives in the `content/` directory, organized as follows:

```
content/
├── blog/
│   ├── hello-world.md
│   ├── getting-started.md
│   └── ...
├── pages/
│   ├── about.md
│   └── contact.md
└── demo.md
```

## Creating a New Post

To create a new blog post, follow these steps:

### 1. Create a new markdown file

Create a new `.md` file in the `content/blog/` directory:

```bash
content/blog/my-new-post.md
```

### 2. Add frontmatter

Every post begins with YAML frontmatter enclosed in triple dashes:

```yaml
---
title: Your Post Title
date: 2026-05-15
tags:
  - tag1
  - tag2
author: Your Name
excerpt: A brief description of your post
category: Category Name
---
```

### 3. Write your content

Below the frontmatter, write your markdown content:

```markdown
# Main Heading

Your content goes here...
```

## Building the site

To generate the static HTML from your markdown files:

```bash
npm install
npm run build
```

The build process will:
1. Read all markdown files from `content/`
2. Parse frontmatter and convert markdown to HTML
3. Render posts using templates
4. Generate the complete static site in `docs/`

## Available frontmatter fields

- **title** - Post title (required)
- **date** - Publication date in YYYY-MM-DD format
- **tags** - Array of tag strings
- **author** - Author name
- **excerpt** - Short description for listings
- **category** - Content category
- **draft** - Set to true to skip publishing (optional)

Happy blogging!
