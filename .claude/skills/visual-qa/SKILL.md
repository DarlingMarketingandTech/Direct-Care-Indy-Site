# Visual QA Skill

## Purpose

Inspect rendered pages where browser tools are available. Verify layout, responsiveness, CTAs, and visual completeness.

## When to Use

- After UI changes, before staging
- To verify mobile responsiveness
- To check CTA visibility and clickability
- To spot visual regressions
- To verify dark mode (if applicable)

## Pages to Check

| Page | Route | Check |
|------|-------|-------|
| Homepage | `/` | Hero, pricing intro, testimonials, CTAs |
| Pricing | `/pricing` | Pricing tiers, calculator, comparisons |
| Membership | `/membership` | Plans, savings table, CTAs |
| FAQ | `/faq` | Accordion, Q&A layout |
| How It Works | `/how-it-works` | Onboarding timeline, CTAs |
| Mobile menu | `/` (mobile view) | Nav, menu toggle, touch targets |
| Footer | All pages | Links, contact info, social, copyright |

## Checklist by Page

### Homepage Checks

```
Visual:
- [ ] Hero section loads with background image
- [ ] Hero copy centered and readable
- [ ] "Join Now" and "See My Exact Price" buttons visible
- [ ] Patient portal login link visible
- [ ] Feature grid cards visible and spaced
- [ ] Pricing cards show all 3 tiers
- [ ] Testimonials section visible
- [ ] Pricing calculator loads
- [ ] Insurance disclaimer visible (if added)
- [ ] Pricing disclaimer visible (if added)
- [ ] Footer links all visible
- [ ] No console errors in dev tools

Responsive (Mobile):
- [ ] Hero text doesn't overflow
- [ ] Feature cards stack on mobile
- [ ] Pricing cards readable on small screen
- [ ] Buttons are 44px+ height for touch
- [ ] Text size minimum 16px
- [ ] No horizontal scrolling

Dark Mode (if applicable):
- [ ] White text on dark background
- [ ] Good contrast (4.5:1 minimum)
- [ ] Images visible
- [ ] Buttons clearly visible
```

### Pricing Page Checks

```
Visual:
- [ ] Pricing tiers display (Individual, Family, Business)
- [ ] Pricing numbers clear and large
- [ ] "Select Plan" buttons visible for each tier
- [ ] HSA badge visible (if approved) or hidden (if not)
- [ ] Features list under each tier
- [ ] Family household cap explanation visible
- [ ] Pricing disclaimer visible
- [ ] Price calculator loads and accepts input
- [ ] Comparison table visible
- [ ] No layout shift when page loads

Responsive:
- [ ] Pricing cards stack vertically on mobile
- [ ] Calculator width fits screen
- [ ] Buttons are touch-friendly (44px min)
- [ ] Text readable at mobile sizes
```

### Membership Page Checks

```
Visual:
- [ ] Hero section with "Simple, Transparent Membership"
- [ ] Insurance disclaimer visible
- [ ] Savings table displays
- [ ] Plan cards show all pricing options
- [ ] "Join Now" buttons visible
- [ ] Images load properly
- [ ] Plan cards have visual hierarchy (popular tier highlighted)

Responsive:
- [ ] Plan cards stack on mobile
- [ ] Savings table horizontal scroll ok (or responsive)
- [ ] Buttons full-width on mobile
```

### CTA Checks

```
Visibility:
- [ ] "Join Now" button visible and obvious (usually bright color)
- [ ] "See My Exact Price" button visible
- [ ] CTA not hidden behind other elements
- [ ] CTA color contrasts with background

Clickability (Keyboard Nav):
- [ ] Tab through page; CTA receives focus ring
- [ ] CTA clickable with Enter key
- [ ] CTA visually shows focus state
```

### Mobile Navigation Checks

```
- [ ] Hamburger menu visible (if applicable)
- [ ] Menu toggle works (open/close)
- [ ] Menu items readable
- [ ] No text overflow in menu
- [ ] Menu dismisses when item clicked
- [ ] Desktop nav hidden on mobile (check CSS breakpoints)
```

### Footer Checks

```
- [ ] Phone, email, address visible
- [ ] All footer links present
- [ ] Links are clickable (keyboard accessible)
- [ ] Copyright year current
- [ ] Logo/branding visible
- [ ] Contact info formatted correctly
- [ ] No missing links
```

## Verification Process

### 1. Start Dev Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 2. Desktop Verification

```
Browser: Chrome, Firefox, Safari, or Edge
Steps:
1. Load each page in list
2. Check console for errors (F12 → Console tab)
3. Verify layout and content
4. Test dark mode toggle (if available)
5. Click all CTAs (don't submit forms; just verify they're clickable)
6. Verify all links work
```

### 3. Mobile Verification

Method A (Browser DevTools):
```
F12 → Device toolbar (Ctrl+Shift+M)
Preset: iPhone 12 (375px width)
Check all items in mobile checklist
Test touch-friendly button sizes by hovering
```

Method B (Actual device):
```
Note device type (iPhone, Android tablet, etc.)
Visit http://[your-local-ip]:3000 on device
Walk through pages
Tap buttons and links
Verify all text readable without pinch-zoom
```

### 4. Regression Check

After UI changes, quickly verify unrelated sections still work:
- [ ] Homepage still loads
- [ ] Footer links still work
- [ ] Navigation still accessible
- [ ] No new console errors

## Issues to Report

```
Issue: CTA button too small on mobile
Location: Homepage, "Join Now" button
Severity: High
Device: iPhone 12 (375px)
Details: Button is ~30px tall, should be 44px minimum for touch
Fix: Add py-3 or py-4 to button class
```

Or:

```
Issue: Text overflow in hero on mobile
Location: Homepage hero copy
Severity: Medium
Details: Long heading breaks into 3 lines, causing layout shift
Observation: Probably just responsive design at work; check intended layout
```

## What NOT to Check

- Don't run full accessibility audit (that's a separate tool)
- Don't test form submission (beyond verifying it's clickable)
- Don't test payment flow (dangerous; know it exists but skip)
- Don't test authentication (if applicable)

## Output Format

```
# Visual QA Report

## Pages Checked
- [x] Homepage
- [x] Pricing page
- [x] Membership page
- [ ] FAQ (no changes)
- [ ] How It Works (no changes)

## Issues Found

### 🔴 Critical
1. CTA button hidden behind modal (homepage)
2. Text overflow on mobile (hero copy)

### 🟡 Medium
1. Pricing disclaimer not visible (mobile view)
2. Dark mode toggle not tested (no dark mode CSS present)

### 🟢 Cosmetic
1. Footer spacing could be tighter
2. Button hover state smooth but slow

## Verification Environment
- Browser: Chrome 120 on Windows
- Mobile: iPhone 12 (375px via DevTools)
- Responsiveness: Tested 375px, 768px, 1024px breakpoints

## Regression Check
✓ No new console errors
✓ Navigation still works
✓ Links still functional
✓ No visual regressions detected

Status: Ready for staging deployment
```

## Success Criteria

- All critical pages verified
- Mobile responsiveness checked
- CTAs visible and clickable
- No console errors
- Regressions identified (if any)
- Report is clear and actionable

## Questions?

- **Page looks wrong. Is it my browser?** Try a different browser or hard-refresh (Ctrl+Shift+R)
- **Mobile view looks bad. Is it responsive design?** Check the intended layout in desktop view; if it's responsive-by-design, that's OK
- **Can I test payment flow?** No; skip that. It's tested separately.
