# Deployment Guide - Publishing Without App Store

This guide shows you how to publish your Partner Readiness Scorecard app without going through traditional app stores.

## 🌐 Web Deployment (Easiest)

### Option 1: Netlify (Recommended)
1. Build the app: `npm run deploy:web`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify Drop
4. Your app is live instantly!

### Option 2: Vercel
1. Build: `npm run build:web`
2. Install Vercel CLI: `npm i -g vercel`
3. Deploy: `vercel ./dist`

### Option 3: GitHub Pages
1. Build: `npm run build:web`
2. Push `dist` contents to `gh-pages` branch
3. Enable GitHub Pages in repo settings

## 📱 Mobile Distribution

### Android APK (No Google Play)
1. Install EAS CLI: `npm install -g @expo/eas-cli`
2. Build APK: `eas build --platform android --profile preview`
3. Share APK file directly with users
4. Users enable "Install from unknown sources"

### iOS TestFlight (No App Store)
1. Build: `eas build --platform ios --profile preview`
2. Upload to TestFlight
3. Share with up to 10,000 beta testers

## 🔗 Direct Sharing

### Expo Development Builds
1. Start: `npm run share`
2. Share QR code with users
3. Users scan with Expo Go app

### Preview Local Build
1. Build: `npm run build:web`
2. Preview: `npm run preview`
3. Share local network URL

## 🚀 Quick Deploy Commands

```bash
# Web deployment
npm run deploy:web

# Preview locally
npm run preview

# Share via tunnel
npm run share
```

## ✅ Benefits of Non-App Store Distribution

- ✅ No approval process
- ✅ Instant updates
- ✅ No store fees
- ✅ Full control over distribution
- ✅ Works on any device with browser
- ✅ Easy A/B testing

## 📊 Analytics & Updates

Since you're not using app stores:
- Use web analytics (Google Analytics, etc.)
- Push updates instantly to web version
- Users always get latest version
- No waiting for store approval