# Build Error Investigation: "generate is not a function"

## Error Summary
```
TypeError: generate is not a function
    at ignore-listed frames
```

## Fixes Applied

### ✅ Completed Fixes
1. **Fixed missing Link import** in `components/OccHealthPrices.tsx`
2. **Converted next.config.ts to next.config.mjs** (resolved TypeScript transpilation)
3. **Added generateStaticParams** to locations page with error handling
4. **Fixed TypeScript errors** in pdf-generator.ts (spread operator issues)
5. **Fixed accordion TypeScript error**
6. **Made PDF generator server-only** to prevent client-side issues
7. **Simplified next-sitemap config** (removed transform function)
8. **Added ESM handling** in next.config.mjs
9. **Added Node.js engines specification** in package.json
10. **Changed jsPDF import** from named to default import

### 🔍 Root Cause Analysis

Based on research, this error typically occurs due to:

1. **ESM Module Minification Issues**: Next.js 16.1.1 with certain ESM modules (like jsPDF) can have minification issues during build
2. **Version Mismatches**: Next.js 16.1.1 is very new and may have compatibility issues
3. **Build-time Analysis**: Next.js may be trying to analyze API routes or dynamic imports during build

### 🎯 Recommended Next Steps

#### Option 1: Try Downgrading Next.js (Most Likely Fix)
```bash
npm install next@15.1.4 --save-exact
npm run build
```

#### Option 2: Check Vercel Build Logs
- Deploy to Vercel and check the detailed build logs
- Look for the specific file/line causing the error
- The error message should be more detailed in Vercel's environment

#### Option 3: Clear All Caches
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

#### Option 4: Temporarily Disable Problematic Features
1. Comment out the PDF generator API route
2. Remove next-sitemap from postbuild
3. Try building to isolate the issue

#### Option 5: Use Vercel's Build Cache Override
When deploying to Vercel:
- Use "Redeploy with Override Build Cache" option
- Or set environment variable: `TURBO_FORCE=true`

### 📋 Current Configuration

- **Next.js**: 16.1.1
- **Node.js**: 20.18.1 (local)
- **TypeScript**: 5.9.3
- **React**: 19.2.3

### 🔧 Configuration Files Updated

1. `next.config.mjs` - Added ESM handling and webpack config
2. `package.json` - Added engines specification
3. `lib/pdf-generator.ts` - Changed to default import, added server-only
4. `app/api/generate-hsa-letter/route.ts` - Added dynamic import and force-dynamic

### ⚠️ Known Issues

- The error persists locally but may work on Vercel (different build environment)
- The error message is very generic and doesn't point to a specific file
- This could be a Next.js 16.1.1 specific issue with ESM modules

### 📝 Notes

The original blocking error (missing Link import) has been fixed. The remaining "generate is not a function" error appears to be a deeper issue with Next.js 16.1.1 and ESM module handling during the build process.

