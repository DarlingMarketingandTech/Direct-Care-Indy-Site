# QA Checklist

Use this checklist before staging or production deployment.

## Pre-Deployment Checks

### Build & Lint

```bash
npm run build     # ✓ Must pass with no errors
npm run lint      # ✓ Should have no errors
```

### Manual Testing (Local Dev Server)

```bash
npm run dev       # Start dev server
# Visit http://localhost:3000 in browser
```

## Page-by-Page Checklist

### Homepage (`/`)

- [ ] Page loads without console errors
- [ ] Hero section visible with background image
- [ ] "Join Now" CTA button visible and clickable
- [ ] "See My Exact Price" button visible
- [ ] Pricing cards (Individual, Family, Business) display correctly
- [ ] Testimonials section renders without errors
- [ ] Pricing calculator loads and accepts input
- [ ] Insurance disclaimer visible
- [ ] Pricing disclaimer visible
- [ ] Footer fully visible with all links
- [ ] Mobile responsive: No text overflow, buttons are touch-friendly (44px+)
- [ ] Dark mode: Text readable if dark mode toggle present

### Pricing Page (`/pricing`)

- [ ] Page loads without errors
- [ ] Hero with "Simple, Transparent Pricing" visible
- [ ] Pricing calculator functional
- [ ] Pricing tiers card display
- [ ] HSA badge present (if approved) or absent (if not approved)
- [ ] "Select Plan" buttons visible for each tier
- [ ] Comparison table visible
- [ ] Pricing disclaimer visible
- [ ] Family household cap explanation visible
- [ ] Mobile: Cards stack vertically, text readable

### Membership Page (`/membership`)

- [ ] Page loads without errors
- [ ] Hero section visible
- [ ] Insurance disclaimer visible
- [ ] Savings table displays correctly
- [ ] Plan cards show pricing and features
- [ ] "Join Now" button visible for each plan
- [ ] Images load and display
- [ ] Mobile: Cards stack, buttons full-width

### FAQ Page (`/faq`)

- [ ] Questions and answers display
- [ ] Accordion/expand functionality works (if applicable)
- [ ] No broken links to other pages
- [ ] Mobile: Text readable, expandable sections work

### How It Works Page (`/how-it-works`)

- [ ] Page loads without errors
- [ ] Onboarding timeline visible
- [ ] Icons/graphics display correctly
- [ ] Insurance disclaimer visible
- [ ] Process steps clear and sequential
- [ ] CTAs visible and clickable
- [ ] Mobile: Timeline is readable on small screens

### Footer (All Pages)

- [ ] Contact information visible (phone, email, address)
- [ ] All footer links functional (not 404)
- [ ] Social links present (if applicable)
- [ ] Copyright year current
- [ ] Logo/branding visible
- [ ] Mobile: Footer links are touch-friendly

## Content Checks

### Pricing & Disclaimers

- [ ] Pricing numbers match approved rates
- [ ] "Pricing subject to change" disclaimer visible
- [ ] No old pricing values accidentally left in code
- [ ] Family cap ($250) clearly stated

### Claims & Testimonials

- [ ] No unapproved savings amounts displayed
- [ ] Testimonials gated: Only approved ones show in production
- [ ] HSA language gated: Badge hidden unless `NEXT_PUBLIC_HSA_APPROVED=true`
- [ ] Testimonial qualifiers visible ("estimated", "typical usage")
- [ ] No HSA tax language in testimonials
- [ ] No medical guarantees ("will", "prevent", "cure")

### Insurance & Medical Language

- [ ] "Direct Care Indy membership is not health insurance" visible on key pages
- [ ] No claims that DPC replaces insurance
- [ ] Medical language appropriately qualified
- [ ] No unverified health outcome claims

## Accessibility Checks

### Keyboard Navigation

- [ ] Tab through page; all interactive elements reachable
- [ ] Buttons show focus ring when tabbed
- [ ] Links show focus ring when tabbed
- [ ] Form inputs accessible (labels present)

### Images

- [ ] All images have alt text
- [ ] Alt text is descriptive (not "image" or empty for meaningful images)
- [ ] Decorative images have empty alt (`alt=""`)

### Color & Contrast

- [ ] Text has sufficient contrast (WCAG AA: 4.5:1 minimum)
- [ ] Color not the only way to convey information (e.g., use icon + text for status)
- [ ] Dark mode has good contrast

### Mobile & Touch

- [ ] Buttons and links are 44px × 44px minimum (tap-friendly)
- [ ] Text size minimum 16px (no zoom needed)
- [ ] No horizontal scrolling (content fits screen width)
- [ ] Spacing around buttons adequate (not cramped)

## Responsive Design Checks

### Desktop (1024px+)

- [ ] Layout looks professional
- [ ] Images crisp and properly sized
- [ ] No awkward line breaks
- [ ] Whitespace balanced

### Tablet (768px)

- [ ] 2-column layouts work
- [ ] Images responsive
- [ ] Text readable without zoom

### Mobile (375px)

- [ ] 1-column layout or mobile-optimized multi-column
- [ ] All text readable
- [ ] No horizontal scrolling
- [ ] Buttons touch-friendly
- [ ] Navigation accessible (hamburger menu or mobile nav works)

## Performance Checks

### Load Time

- [ ] Page loads in reasonable time (< 3 seconds acceptable)
- [ ] No long delays or frozen UI
- [ ] Images lazy-load where appropriate

### Build Output

- [ ] `npm run build` completes without warnings (or only minor warnings)
- [ ] Sitemap generated: `/sitemap.xml` exists and is valid
- [ ] No unused imports or variables

## Browser Compatibility

### Test in Multiple Browsers (if possible)

- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Link Checks

- [ ] All internal links navigate to correct pages (no 404s)
- [ ] External links open in new tab with `target="_blank" rel="noreferrer"`
- [ ] No hardcoded full URLs that could break (use relative links instead)
- [ ] Footer links all functional
- [ ] CTA buttons link to correct enrollment flow

## Environment Variables

- [ ] No secrets in code (check for hardcoded API keys)
- [ ] `NEXT_PUBLIC_HSA_APPROVED` set correctly (false unless approved)
- [ ] All `NEXT_PUBLIC_*` variables documented in `.env.example`

## Before Deploying

```
Final Verification:
✓ npm run build passed
✓ npm run lint passed
✓ Homepage tested
✓ Pricing page tested
✓ Membership page tested
✓ Mobile responsive tested
✓ CTAs all functional
✓ No console errors
✓ No broken links
✓ Accessibility basics OK
✓ Content accurate (pricing, claims, disclaimers)

Ready for staging? → YES / NO
Ready for production? → YES / NO
```

## If Something Fails

1. **Build error?** Fix the error, re-run `npm run build`
2. **Missing content?** Check if file exists and import is correct
3. **Styling broken?** Check Tailwind CSS class spelling
4. **Mobile broken?** Check responsive breakpoints (`md:`, `lg:`)
5. **Link broken?** Verify route exists, spelling correct
6. **Claim visible but should be hidden?** Check env var or approval flag

## Regression Prevention

After fixing one issue, re-check:
- [ ] Homepage still works
- [ ] Pricing page still works
- [ ] Enrollment flow still works (don't test; just check it exists)
- [ ] Footer links still work
- [ ] No new console errors introduced

## Final Checklist

Before merging to main:

- [ ] All changes tested locally
- [ ] Build passes
- [ ] No regressions
- [ ] Documentation updated (if applicable)
- [ ] Commit message is clear
- [ ] Ready for code review

Done! 🎉
