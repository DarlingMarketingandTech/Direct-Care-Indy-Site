# Agent Instructions: DirectCare Indy Website Repo

This file is for coding agents working in the DirectCare Indy website repository.

## Repo Identity

- Next.js 16 App Router site
- B2C website plus employer and partner pages
- Active pricing architecture has been cleaned up

## Current Pricing Architecture

- Active pricing route: `/membership`
- Legacy route: `/pricing` redirects to `/membership`
- Source of truth: `lib/content/membership-pricing.ts`
- Active pricing UI: `components/membership/MembershipPricingView.tsx`
- Homepage preview source: `MEMBERSHIP_PLANS`
- Homepage: `app/page.tsx`
- Homepage strategy: quiz-first

## Quiz Architecture

- Quiz route: `/quiz`
- Quiz data: `lib/dpc-fit-quiz.ts`
- Quiz UI: `components/dpc-fit-quiz/*`
- Prefer `DpcQuizTrigger` and `DpcQuizCtaBand` over legacy pricing CTAs

## Navigation Rules

- Do not change the main navigation strategy unless explicitly requested
- Do not add brokers to `mainNav`
- `/brokers` is a targeted landing page, not a primary public nav lane
- Brokers may remain in footer navigation

## Pricing Content Rules

- Update membership plans, pricing, plan benefits, additional-service pricing, pharmacy examples, and disclaimers in `lib/content/membership-pricing.ts`
- Do not reintroduce:
  - age-band pricing
  - family-cap pricing
  - exact household price calculators
  - fake testimonials
  - guaranteed savings claims
  - old `/pricing` page architecture
- Keep “pricing subject to change” style caveats where pricing is shown

## Removed Legacy Pricing Files

These are no longer part of the active architecture and should not be recreated:

- `components/MembershipConfigurator.tsx`
- `components/PricingCalculator.tsx`
- `components/PricingTiers.tsx`
- `components/SavingsPersonas.tsx`
- `components/Testimonials.tsx`
- `components/TestimonialsCarousel.tsx`
- `components/membership/TierDisplay.tsx`
- `components/ValueBanner.tsx`
- `components/LabPharmacySavingsTable.tsx`
- `components/TheWraparoundGuide.tsx`
- `lib/pricing.ts`

## Active Routes to Protect

- `/`
- `/membership`
- `/quiz`
- `/what-is-dpc`
- `/how-it-works`
- `/services`
- `/about`
- `/wraparound`
- `/brokers`
- `/employers`

## No-Touch Zones

- `app/api/**`
- `app/join/**`
- environment files
- Hint Health integration code
- payment and enrollment integrations

## Workflow Expectations

1. Inspect files before editing
2. Make focused, reversible changes
3. Prefer current shared content/data files over hardcoded page copy
4. Run `npm run build`
5. Run `npm run lint`
6. Summarize files changed, validation results, and any intentionally preserved legacy areas
