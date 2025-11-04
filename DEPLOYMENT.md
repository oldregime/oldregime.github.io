# Deployment Guide

This portfolio can be deployed on multiple platforms. All configurations are already set up.

## 🚀 Vercel (Currently Deployed ✅)

**Automatic Deployment:**
- Push to `main` branch triggers automatic deployment
- Vercel uses `vercel.json` for SPA routing

**Manual Deployment:**
```bash
npm run build
vercel --prod
```

**Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

## ☁️ Cloudflare Pages

**Settings:**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `.`
- Node version: 20

**Features:**
- Uses `public/_redirects` for SPA routing
- Automatic deployments from GitHub

**Deploy:**
1. Connect your GitHub repo in Cloudflare Pages dashboard
2. Use settings above
3. Deploy!

---

## 🌐 Netlify

**Settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20

**Features:**
- Uses `public/_redirects` for SPA routing
- Automatic deployments from GitHub

**Deploy:**
1. Import project from GitHub in Netlify dashboard
2. Use settings above
3. Deploy!

**Manual Deploy:**
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 📄 GitHub Pages

**Automatic Deployment:**
- GitHub Actions workflow already configured (`.github/workflows/deploy.yml`)
- Deploys automatically on push to `main`

**Enable GitHub Pages:**
1. Go to repository Settings → Pages
2. Source: Select "GitHub Actions"
3. Wait for workflow to complete

**Manual Build for GitHub Pages:**
```bash
npm run build:github
```

**Site URL:** `https://oldregime.github.io/my-own-showcase-00/`

**Note:** GitHub Pages uses a different base path (`/my-own-showcase-00/`). The build script handles this automatically.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Build Outputs

All platforms use the same build output:
- **Output directory:** `dist/`
- **Build command:** `npm run build`
- **Node version:** 20 or later

---

## 🔧 Platform-Specific Files

| File | Used By | Purpose |
|------|---------|---------|
| `vercel.json` | Vercel | SPA routing rewrites |
| `public/_redirects` | Netlify, Cloudflare | SPA routing redirects |
| `.github/workflows/deploy.yml` | GitHub Pages | Auto deployment |
| `vite.config.ts` | All | Build configuration with conditional base path |

---

## 🌍 Live URLs

- **Vercel:** https://my-own-showcase-00.vercel.app
- **Cloudflare Pages:** (Configure after deployment)
- **Netlify:** (Configure after deployment)
- **GitHub Pages:** https://oldregime.github.io/my-own-showcase-00/

---

## ⚠️ Important Notes

1. **Vercel deployment is NOT affected** - It uses `vercel.json` which takes precedence
2. **Base path is dynamic** - GitHub Pages uses `/my-own-showcase-00/`, others use `/`
3. **All routing configs coexist** - Each platform uses its preferred method
4. **No breaking changes** - Existing Vercel deployment continues to work

---

## 🐛 Troubleshooting

### Blank page on deployment:
- Check browser console for errors
- Verify `dist/` folder is being deployed
- Confirm SPA routing is configured (see platform-specific files above)

### 404 on page refresh:
- Ensure `_redirects` or `vercel.json` is in place
- Check platform routing configuration

### Assets not loading:
- Verify base path in `vite.config.ts`
- Check build output in `dist/` folder

---

## 📝 Updating Deployment

After making changes:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

All platforms will auto-deploy (if configured).
