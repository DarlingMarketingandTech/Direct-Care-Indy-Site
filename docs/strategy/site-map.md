# Site Map Strategy

> **Canonical source:** [`PROJECT_MEMORY.md`](../PROJECT_MEMORY.md) — route rules and pricing live there.

## Public routes (snapshot)

- `/` — audience-first routing homepage with concise membership preview
- `/individuals` — planned audience page (individuals, membership, resource CTA)
- `/families` — planned audience page (family membership, resource CTA)
- `/membership` — canonical membership pricing and plan detail page
- `/employers` — employer / B2B overview (audience-first CTAs)
- `/brokers` — targeted broker landing page, footer/context only — not main nav
- `/quiz` — secondary DPC fit quiz (decision support, not primary site CTA)
- `/contact` — contact and single-clinic location (7911 N. Michigan Rd.; → Location & Contact planned)
- `/how-it-works` — care model explanation
- `/what-is-dpc` — education and FAQ
- `/about` — clinic story and trust
- `/services` — service overview
- `/wraparound` — backup coverage guidance

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
- `app/page.tsx` uses **audience-first routing** — quiz is secondary support, not the primary CTA
- `app/membership/page.tsx` is the active pricing route
- Single clinic only: 7911 N. Michigan Rd., Indianapolis, IN 46268
- GA4/GTM and production scheduler setup are **deferred** — demo scheduler fallbacks OK during development
- Do not reintroduce legacy `/pricing` page architecture, calculators, or family-cap messaging
