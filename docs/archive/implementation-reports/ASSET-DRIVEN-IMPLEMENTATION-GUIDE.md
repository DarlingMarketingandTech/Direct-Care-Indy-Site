# Asset-Driven Design System - Implementation Guide

## Quick Reference

### Using Assets in Components

```typescript
import { SITE_ASSETS } from '@/lib/images';
import Image from 'next/image';

// Example: Background image
<div className="relative">
  <Image
    src={SITE_ASSETS.clinical.roundTable}
    alt="Round Table"
    fill
    className="object-cover opacity-20"
  />
</div>

// Example: Hero image
<Image
  src={SITE_ASSETS.locations.carmel}
  alt="Carmel, Indiana"
  fill
  className="object-cover"
  priority
/>
```

## Component Updates Summary

### ✅ Updated Components

1. **MegaMenu.tsx**
   - Uses `SITE_ASSETS.ui.megaMenu` for glassmorphism background
   - Embedded tools with asset backgrounds

2. **WholesaleLabSearch.tsx**
   - Uses `SITE_ASSETS.ui.texture` for clinical texture
   - Lab-authentic feel

3. **NinetyTenSwitcher.tsx**
   - Uses `SITE_ASSETS.clinical.ninetyTen` with animation
   - Visual model reinforcement

4. **SeniorSavingsCalculator.tsx**
   - Uses `SITE_ASSETS.marketing.seniorWellness` background
   - Lifestyle imagery

5. **OccHealthPrices.tsx**
   - Uses `SITE_ASSETS.marketing.hvac` side visual
   - Blue collar appeal

6. **CompactEmployerCalculator.tsx**
   - Uses `SITE_ASSETS.marketing.employer` in compact mode
   - 90/10 visual model

7. **DynamicHeader.tsx (DynamicCTA)**
   - Uses `SITE_ASSETS.ui.tealGradient` for all CTAs
   - Brand consistency

8. **app/providers/page.tsx**
   - Parallax section with `SITE_ASSETS.clinical.specialist`
   - Specialist authority visualization

## Asset Categories

### Clinical Assets
- `roundTable` - Round Table consultation
- `pulmonary` - Pulmonary clinic
- `ninetyTen` - 90/10 model SVG
- `specialist` - Specialist team

### Marketing Assets
- `employer` - Trades 90/10 benefit
- `hvac` - HVAC technician
- `seniors` - Senior healthcare
- `seniorWellness` - Senior wellness outdoors

### Location Assets
- `carmel` - Carmel hero
- `zionsville` - Zionsville hero
- `fishers` - Fishers hero
- `geist` - Geist hero

### UI Assets
- `megaMenu` - Mega menu overlay
- `texture` - Clinical texture
- `glass` - Glass overlay SVG
- `tealGradient` - Teal gradient

## Best Practices

1. **Always use SITE_ASSETS** - Never hardcode image paths
2. **Use Next.js Image component** - For optimization
3. **Set appropriate opacity** - Background images should be subtle
4. **Use priority for above-fold** - Set `priority` prop for hero images
5. **Maintain aspect ratios** - Use `fill` with `object-cover` for backgrounds

## Testing Checklist

- [ ] All images load correctly
- [ ] No broken image links
- [ ] Parallax section performs well
- [ ] Glassmorphism effects work
- [ ] Asset backgrounds don't interfere with text
- [ ] Images match brand color palette
- [ ] Performance is acceptable

