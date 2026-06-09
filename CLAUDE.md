# DirectCare Indy Website: Claude Code Instructions

## What This Repo Is

The active DirectCare Indy website buildout in progress. This is a Next.js 16 application with member-facing and employer-facing routes plus Hint Health enrollment integration.

Do not call this a demo, mockup, or replacement site.

## Current Membership Pricing Architecture

- Active route: `/membership`
- Deprecated route: `/pricing` redirects to `/membership`
- Source of truth: `lib/content/membership-pricing.ts`
- Active pricing UI: `components/membership/MembershipPricingView.tsx`
- Homepage pricing preview lives in `app/page.tsx` and must read from `MEMBERSHIP_PLANS`
- Homepage remains quiz-first

## Quiz Architecture

- Quiz route: `/quiz`
- Quiz content: `lib/dpc-fit-quiz.ts`
- Quiz components: `components/dpc-fit-quiz/*`

## Navigation Guardrails

- Do not change the main navigation strategy unless explicitly requested
- Do not add brokers to the main navigation
- `/brokers` is a targeted campaign or footer destination, not a primary nav lane

## Legacy Pricing Guardrails

Do not reintroduce:

- old calculators
- family-cap pricing
- age-band pricing
- exact household price tools
- fake testimonials
- guaranteed savings claims
- old `/pricing` page assumptions

## No-Touch Zones

- `app/api/**`
- `app/join/**`
- environment files
- Hint Health integration code
- payment and enrollment integrations

## Build & Test

```bash
npm run dev
npm run build
npm run lint
```

## Working Style

1. Inspect files first
2. Make small, surgical changes
3. Use current shared content sources
4. Validate with build and lint
5. Summarize exact files changed and any remaining risks
