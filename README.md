# Partner Readiness Scorecard

A React Native app built with Expo that helps assess partner readiness through an interactive scorecard.

## Publishing Without App Store

Yes! You can publish this app without going through the App Store using several methods:

### 1. Web Deployment (Recommended)
The app is configured for web deployment and can be hosted on any web server:

```bash
# Build for web
npm run build

# Deploy the 'dist' folder to:
# - Netlify
# - Vercel
# - GitHub Pages
# - Your own web server
```

### 2. Expo Development Build
Share directly with users via Expo:

```bash
# Start development server
npm start

# Users can scan QR code with Expo Go app
```

### 3. Direct APK Distribution (Android)
```bash
# Build APK
eas build --platform android --profile preview

# Share APK file directly with users
# Users need to enable "Install from unknown sources"
```

### 4. TestFlight (iOS - No App Store)
```bash
# Build for TestFlight
eas build --platform ios --profile preview

# Distribute via TestFlight without App Store approval
```

### 5. Enterprise Distribution
- iOS: Apple Developer Enterprise Program
- Android: Private distribution channels

## Quick Start

```bash
npm install
npm start
```

## Features
- Interactive partner assessment
- PDF download functionality
- Web-compatible design
- Mobile-responsive interface