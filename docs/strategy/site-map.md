# Site Map Strategy

> **Canonical source:** [`PROJECT_MEMORY.md`](../PROJECT_MEMORY.md) — route rules and pricing live there.

## Public routes (snapshot)

- `/` — quiz-first homepage with concise membership preview
- `/membership` — canonical membership pricing and plan detail page
- `/quiz` — DPC fit quiz
- `/how-it-works` — care model explanation
- `/what-is-dpc` — education and FAQ
- `/about` — clinic story and trust
- `/services` — service overview
- `/wraparound` — backup coverage guidance
- `/brokers` — targeted broker landing page, not main nav

## Membership Pricing Snapshot

- Individual Membership: $79/month
- Family Membership: $200/month
- Senior Adults: $119/month

## Pricing Caveats

- Family pricing may vary by household details
- Additional children may be added at discounted monthly rates
- Pricing and availability are subject to change
- Call or text DirectCare Indy to confirm current pricing before enrolling

## Architecture Rules

- `lib/content/membership-pricing.ts` is the pricing source of truth
- `app/page.tsx` should stay quiz-first
- `app/membership/page.tsx` is the active pricing route
- Do not reintroduce legacy `/pricing` page architecture, calculators, or family-cap messaging
