#!/usr/bin/env node

/**
 * Web deployment script for Partner Readiness Scorecard
 * Builds and prepares the app for web hosting without App Store
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building Partner Readiness Scorecard for Web...');

try {
  // Clean previous build
  if (fs.existsSync('dist')) {
    console.log('🧹 Cleaning previous build...');
    execSync('rm -rf dist', { stdio: 'inherit' });
  }

  // Build for web
  console.log('📦 Building web bundle...');
  execSync('npx expo export --platform web', { stdio: 'inherit' });

  // Create deployment info
  const deployInfo = {
    buildTime: new Date().toISOString(),
    version: require('../package.json').version,
    platform: 'web',
    deploymentType: 'static-hosting'
  };

  fs.writeFileSync(
    path.join('dist', 'deploy-info.json'),
    JSON.stringify(deployInfo, null, 2)
  );

  console.log('✅ Build complete!');
  console.log('📁 Files ready in ./dist folder');
  console.log('🌐 Deploy options:');
  console.log('   • Netlify: Drag ./dist folder to netlify.com/drop');
  console.log('   • Vercel: Run "vercel ./dist"');
  console.log('   • GitHub Pages: Push ./dist to gh-pages branch');
  console.log('   • Any web server: Upload ./dist contents');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}