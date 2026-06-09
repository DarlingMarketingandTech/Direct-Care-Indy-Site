# Image "Vibe" Verification Guide

Follow these three design rules when reviewing your downloaded images to achieve the "Wow Factor" for the Mega Menu.

## 1. Color Check ✅

**Favor:**
- Teal accents (#14b8a6, #0d9488)
- Navy blue (#1e3a8a, #1e40af)
- White/light backgrounds
- Subtle gray tones

**Avoid:**
- Bright yellows (#fbbf24, #f59e0b)
- Bright reds (#ef4444, #dc2626)
- Overly saturated colors
- Colors that clash with "Pike Medical" branding

**How to Check:**
1. Open image in image viewer
2. Look for dominant colors
3. Ensure teal/navy/white palette is present
4. If image is too colorful, consider using a filter or finding alternative

## 2. Perspective Check ✅

**For Mega Menu Images:**
- Use images with **shallow depth of field** (blurred backgrounds)
- Keeps focus on text and interactive tools
- Prevents visual clutter in navigation dropdowns

**For Hero Images:**
- Use images with clear focal point
- Subject should be centered or follow rule of thirds
- Background should complement, not compete

**How to Check:**
1. Open image
2. Identify the main subject
3. Check if background is blurred/out of focus
4. Ensure text would be readable if overlaid

## 3. Authenticity Check ✅

**For "Blue Collar" / Trades Images:**
- Should look like **real tradespeople**
- HVAC technicians, landscapers, mechanics
- Indianapolis "Missing Middle" employer market
- Professional but approachable

**For Clinical Images:**
- Modern, clean medical environments
- Professional healthcare settings
- Technology-enabled feel
- Avoid outdated or generic stock photo look

**How to Check:**
1. Does the person look like a real worker?
2. Is the setting authentic?
3. Would this appeal to small business owners?
4. Does it feel genuine, not staged?

## Image-Specific Checks

### `round-table.webp` (Clinical)
- ✅ Shows doctor/team consultation
- ✅ Professional medical setting
- ✅ Teal or blue tones
- ✅ Shallow depth of field

### `trades-90-10.webp` (Marketing)
- ✅ Real tradespeople (HVAC, landscaping, etc.)
- ✅ Professional but authentic
- ✅ Appeals to Indianapolis employers
- ✅ Not overly corporate

### `carmel-hero.webp` (Locations)
- ✅ Upscale suburban neighborhood
- ✅ Clean, modern aesthetic
- ✅ Teal/navy/white color scheme
- ✅ Professional photography

### `mega-menu-overlay.webp` (UI)
- ✅ Abstract blue/teal background
- ✅ Subtle texture
- ✅ Works with glassmorphism effect
- ✅ Doesn't compete with text

## Quick Verification Checklist

For each downloaded image, verify:

- [ ] Color palette matches teal/navy/white scheme
- [ ] No bright yellow or red that clashes
- [ ] Appropriate depth of field for use case
- [ ] Authentic, not generic stock photo feel
- [ ] Professional quality
- [ ] File size optimized (< 500KB for WebP)
- [ ] Resolution appropriate (1200px+ width for hero images)

## If Image Doesn't Match

1. **Try alternative search terms** in the fetch script
2. **Use image editing** to adjust colors (add teal overlay)
3. **Apply blur filter** to background if needed
4. **Find replacement** from different API source

## Tools for Verification

- **Color Picker**: Use browser dev tools or image editor
- **Depth of Field**: Visual inspection
- **File Size**: Check file properties
- **Resolution**: Check image dimensions

## Final Step

After verification, run:
```bash
node scripts/reorganize-images.js
```

This will move images to their strategic locations for Mega Menu integration.

