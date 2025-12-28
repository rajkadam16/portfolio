# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `portfolio`
3. **Do NOT initialize with README** (we already have one)
4. Copy the repository URL

### Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
# Add GitHub remote (replace with your actual repository URL)
git remote add origin https://github.com/rajkadam16/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"Add New Project"**
4. Click **"Import"** next to your portfolio repository
5. Vercel will auto-detect Next.js settings:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment to complete
8. Your portfolio will be live at `https://your-project.vercel.app`

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions
5. SSL certificate is automatically provisioned

---

## Alternative: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to GitHub and select your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click **"Deploy site"**

---

## Environment Variables (if needed)

If you add any API keys or secrets in the future:

1. Create `.env.local` file (already in .gitignore)
2. Add variables:
   ```
   NEXT_PUBLIC_API_KEY=your_key_here
   ```
3. In Vercel/Netlify, add the same variables in dashboard settings

---

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify resume download works
- [ ] Check project links (GitHub, live demos)
- [ ] Test on mobile devices
- [ ] Verify dark/light theme toggle
- [ ] Check all social media links
- [ ] Test contact form
- [ ] Run Lighthouse audit (aim for 90+ score)

---

## Continuous Deployment

Once connected to Vercel/Netlify:
- Every `git push` to main branch automatically deploys
- Preview deployments for pull requests
- Instant rollback if needed

---

## Troubleshooting

**Build fails?**
- Check build logs in Vercel/Netlify dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

**Images not loading?**
- Ensure images are in `public/` folder
- Use absolute paths starting with `/`

**Fonts not loading?**
- Google Fonts are automatically optimized by Next.js
- No additional configuration needed

---

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Netlify Docs: https://docs.netlify.com

---

**Your portfolio is ready to go live! 🚀**
