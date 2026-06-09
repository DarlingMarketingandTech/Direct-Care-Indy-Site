# Image Cleanup & Organization Guide

## Current Status

Based on your terminal output:
- ✅ **16 images successfully fetched** with refined keywords
- ✅ **Strategic files already exist** (round-table.webp, trades-90-10.webp, etc.)
- ⚠️ **Old duplicate files remain** (doctor-consultation.webp, blue-collar-worker.webp, etc.)
- ⚠️ **Zionsville hero missing** (fetch failed)

## Cleanup Steps

### Step 1: Verify New Images Work

Before removing old files, verify the new strategic images:
- `clinical/round-table.webp` - Used in Expertise tab
- `marketing/trades-90-10.webp` - Used in Employers tab
- `locations/carmel-hero.webp` - Used for Carmel page
- `ui/mega-menu-overlay.webp` - Used for navigation background

### Step 2: Remove Duplicate Files

```bash
node scripts/cleanup-duplicate-images.js
```

This will safely remove:
- `clinical/doctor-consultation.webp` (replaced by round-table.webp)
- `marketing/blue-collar-worker.webp` (replaced by trades-90-10.webp)
- `locations/carmel-indiana.webp` (replaced by carmel-hero.webp)
- `ui/healthcare-background.webp` (replaced by mega-menu-overlay.webp)

**Safety:** Script only removes files if their replacements exist.

### Step 3: Fetch Missing Zionsville Image

```bash
node scripts/fetch-missing-zionsville.js
```

This will try alternative search terms to find a Zionsville hero image.

### Step 4: Verify Provider Images

The conversion script failed because JPG files don't exist. Check if WebP versions already exist:

```bash
# Check providers directory
ls public/images/providers/
```

If WebP files exist, you're good! The code already references `.webp` extensions.

## File Organization Summary

### Current Structure (After Cleanup)

```
public/images/
├── clinical/
│   ├── round-table.webp          ✅ Strategic name
│   ├── pulmonary-clinic.webp    ✅ New from refined fetch
│   ├── medical-laboratory.webp  ✅ New from refined fetch
│   └── specialist-team.webp      ✅ New from refined fetch
│
├── locations/
│   ├── carmel-hero.webp         ✅ Strategic name
│   ├── fishers-hero.webp        ✅ Strategic name
│   ├── geist-hero.webp          ✅ Strategic name
│   └── zionsville-hero.webp     ⚠️  Need to fetch
│
├── marketing/
│   ├── trades-90-10.webp        ✅ Strategic name
│   ├── hvac-technician.webp     ✅ New from refined fetch
│   ├── trades-diverse.webp       ✅ New from refined fetch
│   └── senior-wellness.webp     ✅ New from refined fetch
│
└── ui/
    ├── mega-menu-overlay.webp   ✅ Strategic name
    ├── teal-gradient.webp       ✅ New from refined fetch
    └── clinical-texture.webp    ✅ New from refined fetch
```

## Verification Checklist

After cleanup:

- [ ] Old duplicate files removed
- [ ] New strategic files verified
- [ ] Zionsville hero image fetched
- [ ] Provider images in WebP format
- [ ] All images match color/vibe guidelines
- [ ] Test images load on site

## Troubleshooting

**Issue:** Cleanup script won't remove files
- **Solution:** Script only removes if replacement exists. Verify new files are present.

**Issue:** Zionsville fetch still fails
- **Solution:** Manually find a Zionsville image and save as `zionsville-hero.webp`

**Issue:** Provider images missing
- **Solution:** Check if they're already in WebP format. Code expects `.webp` extensions.

## Next Steps

1. Run cleanup script to remove duplicates
2. Fetch missing Zionsville image
3. Verify all strategic images are in place
4. Update component references if needed
5. Test image loading on the site

