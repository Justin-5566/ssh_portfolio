# Deployment Guide: GitHub Pages & Cloudflare Pages

## Overview
This guide explains how to publish your SSG Portfolio to **GitHub Pages** and **Cloudflare Pages** for free static hosting.

---

## Option 1: GitHub Pages Deployment

### Prerequisites
- GitHub account
- Git installed locally
- Repository created on GitHub

### Step-by-Step Deployment

#### 1. Initialize Git Repository (if not already done)
```bash
cd "c:\Users\User\Documents\SSG Portfolio"
git init
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
```

#### 2. Build the Site
```bash
npm install
npm run build
```
This generates static files in the `docs/` folder.

#### 3. Commit and Push to GitHub
```bash
git add .
git commit -m "Initial commit: SSG Portfolio setup"
git push -u origin main
```

#### 4. Configure GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select `main` and `/docs` folder
4. Click **Save**

#### 5. Your Site is Live! 🎉
- GitHub Pages URL: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- Custom domain (optional): Add CNAME file to `docs/` folder

### Automatic Updates
Every time you push changes:
```bash
npm run build
git add .
git commit -m "Update blog posts"
git push
```

GitHub Pages automatically rebuilds your site.

---

## Option 2: Cloudflare Pages Deployment

### Prerequisites
- Cloudflare account (free)
- GitHub repository with your SSG Portfolio
- Git and Node.js installed

### Step-by-Step Deployment

#### 1. Prepare Repository on GitHub
Push your project to GitHub (same as GitHub Pages option above):
```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git add .
git commit -m "Initial commit: SSG Portfolio"
git push -u origin main
```

#### 2. Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Pages** (left sidebar)
3. Click **Create a project** → **Connect to Git**
4. Authorize Cloudflare to access your GitHub account
5. Select your SSG Portfolio repository

#### 3. Configure Build Settings

In the Cloudflare Pages setup:
- **Project name**: `ssg-portfolio` (or your choice)
- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `docs`
- **Node.js version**: 18.x (or latest LTS)

#### 4. Deploy

Click **Save and Deploy**. Cloudflare will:
- Clone your repository
- Run `npm run build`
- Deploy the `docs/` folder

Your site will be live at: `https://YOUR_PROJECT_NAME.pages.dev`

#### 5. Custom Domain (Optional)

To use your own domain:
1. In Cloudflare Pages project settings
2. Go to **Custom Domains**
3. Add your domain
4. Follow DNS setup instructions

### Automatic Deployments

Every push to `main` triggers automatic rebuild:
```bash
npm run build
git add .
git commit -m "Update content"
git push origin main
```

---

## Option 3: Deploy to Both Simultaneously

### Setup Both GitHub Pages and Cloudflare Pages

1. **Push to GitHub** (uses GitHub Pages)
   ```bash
   git push origin main
   ```

2. **Cloudflare automatically syncs** from GitHub
   - Cloudflare detects the push
   - Runs your build command
   - Deploys to Cloudflare Pages

Now your site is live on **both**:
- GitHub: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- Cloudflare: `https://YOUR_PROJECT.pages.dev`

---

## Workflow Summary

### Local Development
```bash
# 1. Create/edit markdown files
# content/blog/new-post.md

# 2. Build locally
npm run build

# 3. Test locally (optional)
npm run serve

# 4. Push to GitHub
git add .
git commit -m "Add new post"
git push
```

### Automatic Publishing
```
Your Push to GitHub
        ↓
GitHub Pages Updates (automatic)
        ↓
Cloudflare Pages Updates (automatic)
        ↓
Site Live on Both Platforms 🎉
```

---

## Environment Variables (if needed)

Create `.env` file for sensitive data (never commit to git):
```
SITE_URL=https://yourdomain.com
API_KEY=your_secret_key
```

Add to `.gitignore` (already done).

---

## Troubleshooting

### GitHub Pages Not Updating
- Verify `docs/` folder is published in Settings
- Check branch is set to `main`
- Ensure `package.json` exists with build script

### Cloudflare Pages Build Failing
- Check build logs in Cloudflare Pages dashboard
- Verify Node.js version compatibility
- Ensure `npm install` can run (check dependencies)

### Deployment Takes Long
- First deployment: 1-2 minutes normal
- Subsequent builds: 30-60 seconds typical
- Check build logs for bottlenecks

---

## Best Practices

✅ **DO:**
- Always run `npm run build` before committing
- Keep markdown files organized in `content/blog/`
- Use meaningful commit messages
- Test locally with `npm run serve`

❌ **DON'T:**
- Commit `node_modules/` folder (use .gitignore)
- Manually edit files in `docs/` (they get overwritten)
- Forget to push after building
- Leave sensitive data in `.env` file

---

## Next Steps

1. Initialize your Git repository
2. Push to GitHub
3. Enable GitHub Pages in settings
4. (Optional) Connect Cloudflare Pages
5. Create your first blog post
6. Run `npm run build`
7. Push changes
8. Your site is live! 🚀

---

## Support

For questions:
- [GitHub Pages Docs](https://pages.github.com/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- Check the `prd.md` for project details
- Review `TECH.md` for technical architecture

---

**Last Updated:** May 15, 2026
