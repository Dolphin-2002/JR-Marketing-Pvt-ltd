# JR Marketing Pvt Ltd - Deployment Guide

## Quick Deploy to Netlify

### Method 1: Drag & Drop (Easiest)

1. **Build the project:**
   ```
   npm run build
   ```

2. **Go to Netlify:**
   - Visit https://app.netlify.com/drop
   - Drag and drop the `dist` folder
   - Your site will be live in seconds!

### Method 2: Connect GitHub Repository

1. **Push to GitHub:**
   - Create a new repository on GitHub
   - Push your code:
     ```
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin <your-repo-url>
     git push -u origin main
     ```

2. **Deploy on Netlify:**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Method 3: Netlify CLI

1. **Install Netlify CLI:**
   ```
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```
   netlify login
   ```

3. **Deploy:**
   ```
   npm run build
   netlify deploy --prod
   ```

## Environment Setup

No environment variables are needed for this demo. All data is mocked on the frontend.

## Build Command

```
npm run build
```

## Publish Directory

```
dist
```

## Features After Deployment

✅ Fast loading times with Vite optimization
✅ Responsive design works on all devices
✅ SPA routing handled by Netlify redirects
✅ Production-ready build
✅ Automatic HTTPS

## Demo Credentials

After deployment, users can login with:
- **Username:** admin
- **Password:** admin123

## Post-Deployment Checklist

- [ ] Test login functionality
- [ ] Navigate through all pages
- [ ] Test responsive design on mobile
- [ ] Verify all routes work correctly
- [ ] Test alert notifications
- [ ] Check all tables and data display

## Custom Domain (Optional)

To add a custom domain:
1. Go to your site settings on Netlify
2. Click "Domain settings"
3. Click "Add custom domain"
4. Follow the DNS configuration instructions

## Support

For any deployment issues, check:
- Build logs on Netlify
- Browser console for errors
- Network tab for failed requests

Happy deploying! 🚀
