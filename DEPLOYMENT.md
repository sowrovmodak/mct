# Deployment Guide

## Quick Deploy to Vercel

### Method 1: Using Vercel CLI (Recommended for quick testing)

1. **Install Vercel CLI globally:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? (default or custom name)
   - In which directory is your code located? **./** (just press Enter)
   - Want to override the settings? **N**

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via GitHub (Recommended for continuous deployment)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click **"Add New..."** → **"Project"**
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Click **"Deploy"**

3. **Automatic deployments:**
   - Every push to `main` branch will trigger a production deployment
   - Pull requests will get preview deployments

### Method 3: Deploy via Vercel Dashboard (Manual upload)

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Go to [vercel.com/new](https://vercel.com/new)

3. Drag and drop the `dist` folder

## Configuration

The project includes a `vercel.json` file with optimal settings:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- SPA routing configured

## Environment Variables

This static site requires no environment variables. All data is embedded in the application.

## Custom Domain

After deployment:
1. Go to your project settings in Vercel dashboard
2. Navigate to **Domains**
3. Add your custom domain
4. Follow the DNS configuration instructions

## Build Optimization

The production build is optimized with:
- Code splitting
- Tree shaking
- Minification
- CSS optimization via Tailwind

## Troubleshooting

**Build fails on Vercel:**
- Ensure `package.json` has correct dependencies
- Check that Node version is compatible (18+)
- Review build logs in Vercel dashboard

**Routes don't work:**
- The `vercel.json` rewrites configuration handles SPA routing
- All routes redirect to `index.html`

**Styling issues:**
- Clear Vercel cache and redeploy
- Ensure Tailwind config is correct

## Local Testing

Before deploying:
```bash
# Development
npm run dev

# Production build test
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build locally.

## Performance

The built application:
- Total size: ~207 KB (gzipped: ~60 KB)
- CSS size: ~26 KB (gzipped: ~5 KB)
- Optimized for fast loading
- Static deployment = CDN edge caching

## Support

For Vercel deployment issues, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
