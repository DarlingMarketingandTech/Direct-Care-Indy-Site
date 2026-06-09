# Mobile App Architecture

> **Canonical strategy:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md)
> **Navigation source of truth:** `lib/nav.ts`

Active reference for the mobile-first app shell — bottom bar, overflow menu, PWA layout, and scroll behavior. Updated to match current code (not the legacy mega-menu era).

## Layout shell (`app/layout.tsx`)

```
RootLayout
├── Navbar                    # fixed top — desktop links (global header quiz CTA being removed per strategy)
├── main (#main-content)      # pt-20 pb-20 md:pb-0
├── SharedFooter
├── MobileAppBar              # md:hidden — bottom bar + Menu
├── DpcQuizMobileSticky       # secondary mobile quiz support
├── PWAInstallPrompt
├── StickySavingsBar          # desktop sticky bar — refactor away from quiz-first
└── BackToTop
```

PWA assets: `public/manifest.json`, `public/sw.js`, offline page at `app/offline/page.tsx`.

## Desktop vs mobile (≥768px breakpoint)

| Viewport | Top nav | Bottom bar |
|----------|---------|------------|
| `< md` | Logo + compact actions (`Navbar`) | `MobileAppBar` — 4 shortcuts + Menu |
| `≥ md` | Full `mainNav` links + Patient Login | Hidden |

There is **no mega menu** and **no hamburger in the top navbar**. Mobile overflow uses the bottom bar **Menu** button → `MobileFullMenu`.

## Navigation data (`lib/nav.ts`)

**Desktop / full menu (`mainNav` + Patient Login):**

- Membership Pricing → `/membership`
- For Employers → `/employers`
- What Is DPC? → `/what-is-dpc`
- Our Team → `/providers`
- Contact → `/contact`
- Patient Login → Hint portal (external)

**Bottom bar (`mobileBottomNav`) — four slots + Menu:**

- Membership Pricing → `/membership`
- For Employers → `/employers`
- What Is DPC? → `/what-is-dpc`
- Patient Login → `https://directcareindy.hint.com/login` (external)
- **Menu** → opens `MobileFullMenu` with full `mainNav` + Patient Login

Brokers stay **footer-only** (`footerNav`) — not in bottom bar or `mainNav`. See PROJECT_MEMORY § Navigation.

## `MobileAppBar` behavior

File: `components/MobileAppBar.tsx`

- Fixed bottom, `z-50`, safe-area inset padding
- **Hide on scroll down** past ~100px; **show on scroll up** or near top
- Stays visible while `MobileFullMenu` is open
- Touch targets: `min-h-[60px]` per item (WCAG-friendly)
- Active route: teal indicator + `aria-current="page"`

## PWA (summary)

- Install prompt: `components/PWAInstallPrompt.tsx` (dismissal persisted ~7 days)
- Manifest shortcuts should target `/membership`, not `/pricing`
- Service worker: network-first with cache fallback (`public/sw.js`)

For historical PWA rollout notes, see [`archive/design-reports/PWA_TRANSFORMATION_COMPLETE.md`](./archive/design-reports/PWA_TRANSFORMATION_COMPLETE.md).

## Hint Health portal

- Portal URL: `PATIENT_PORTAL_URL` in `lib/nav.ts`
- Bottom bar and full menu link open portal in a new tab
- Enrollment flow: `/join` (no-touch — see PROJECT_MEMORY)

## Mobile CTA layering

| Component | Viewport | Behavior |
|-----------|----------|----------|
| `MobileAppBar` | `< md` | Fixed bottom nav (4 shortcuts + Menu); hides on scroll down |
| `DpcQuizMobileSticky` | `< md` | Secondary quiz pill above bottom bar — demote per strategy; hidden on `/quiz` and `/contact` |
| `StickySavingsBar` | `≥ md` only | Desktop sticky bar — being refactored away from quiz-first; does not render on mobile |

**Audience-first mobile CTA priority:** bottom bar handles navigation; audience-specific CTAs lead on homepage and audience pages. Quiz sticky is secondary support only — do not stack multiple quiz entry points. Avoid a third fixed quiz CTA on the same viewport.

Touch targets: bottom bar items use `min-h-[60px]`; quiz trigger uses full-width pill with `py-3`.

## When editing mobile UX

1. Update **`lib/nav.ts`** first — bottom bar and full menu read from there
2. Adjust icons/labels in **`MobileAppBar.tsx`** only if needed
3. Lead with **audience-specific CTAs** on homepage and audience pages — do not over-prioritize `DpcQuizTrigger` / `DpcQuizMobileSticky`
4. Use quiz components sparingly as secondary “not sure where to start?” support, not as the dominant CTA everywhere
5. If adding a page-specific sticky CTA, add its path to `DpcQuizMobileSticky` `HIDDEN_PATHS` to prevent stacking
6. Run mobile viewport QA from [`QA-CHECKLIST.md`](./QA-CHECKLIST.md)
