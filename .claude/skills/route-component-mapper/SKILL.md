# Route and Component Mapper Skill

## Purpose

Map active routes to their rendering components and current content sources.

## Current Pricing Map

- `/` → `app/page.tsx`
  - Audience-first routing homepage
  - Membership preview should read from `MEMBERSHIP_PLANS`
  - Quiz is secondary decision support, not the primary CTA
- `/individuals`, `/families` → planned audience pages (see ROUTE-MAP)
- `/membership` → `app/membership/page.tsx`
  - Active public membership pricing route
  - Renders `components/membership/MembershipPricingView.tsx`
  - Pricing source of truth: `lib/content/membership-pricing.ts`
- `/quiz` → `app/quiz/page.tsx`
  - Secondary quiz — quiz content source: `lib/dpc-fit-quiz.ts`

## Legacy Pricing Components

These are removed legacy components and should not be mapped as active:

- `MembershipConfigurator`
- `PricingCalculator`
- `PricingTiers`
- `SavingsPersonas`
- `TestimonialsCarousel`
- `TierDisplay`
- `ValueBanner`
- `TheWraparoundGuide`
- `LabPharmacySavingsTable`
- `lib/pricing`

## Broker Strategy

- `/brokers` is a targeted landing page
- Keep brokers out of main navigation maps

## Redirect Notes

- `/pricing` should be documented only as a deprecated redirect to `/membership`
