# Route Map

> **Strategy, pricing, and guardrails:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md)

Route and file inventory only. Pricing source of truth: `lib/content/membership-pricing.ts`. Deprecated: `/pricing` → `/membership` (`next.config.mjs`).

## Primary Public Routes

| Route | File | Status | Notes |
|-------|------|--------|-------|
| `/` | `app/page.tsx` | Active | Audience-first routing homepage; concise membership preview from `MEMBERSHIP_PLANS`; quiz is secondary |
| `/membership` | `app/membership/page.tsx` | Active | Canonical membership pricing, benefits, additional-service pricing, pharmacy section |
| `/quiz` | `app/quiz/page.tsx` | Active | Secondary DPC fit quiz — decision support, not primary site CTA |
| `/contact` | `app/contact/page.tsx` | Active | Single-clinic contact (7911 N. Michigan Rd.); quiz-intent-aware query params; form → `/api/leads`. Rename to **Location & Contact** planned |
| `/how-it-works` | `app/how-it-works/page.tsx` | Active | Onboarding and care process |
| `/what-is-dpc` | `app/what-is-dpc/page.tsx` | Active | Education and FAQ destination; pricing from `MEMBERSHIP_PLANS` |
| `/about` | `app/about/page.tsx` | Active | Clinic and team story |
| `/services` | `app/services/page.tsx` | Active | Care offering overview |
| `/wraparound` | `app/wraparound/page.tsx` | Active | Membership plus backup-coverage guidance without savings guarantees |
| `/brokers` | `app/brokers/page.tsx` | Active | Campaign landing — footer/context only, not main nav; broker toolkit resource planned |
| `/partnerships` | `app/partnerships/page.tsx` | Active | Partner-facing page |

## Planned Audience Routes

| Route | File | Status | Notes |
|-------|------|--------|-------|
| `/individuals` | `app/individuals/page.tsx` | Planned | Individuals audience page — membership, local care team, gated pricing guide resource |
| `/families` | `app/families/page.tsx` | Planned | Families audience page — family membership, Family Care Roadmap resource |

## Employer and Support Routes

| Route | File | Status | Notes |
|-------|------|--------|-------|
| `/employers` | `app/employers/page.tsx` | Active | Employer-facing overview — audience-first CTAs, inquiry flow, employer resource planned; contextual broker link OK |
| `/for-employers` | `app/for-employers/page.tsx` | Active | Employer inquiry route |
| `/providers` | `app/providers/page.tsx` | Active | Provider listing |
| `/providers/[slug]` | `app/providers/[slug]/page.tsx` | Active | Provider detail |
| `/locations/[neighborhood]` | `app/locations/[neighborhood]/page.tsx` | Active | Local SEO pages |
| `/blog/indiana-medigap-birthday-rule-2026` | `app/blog/indiana-medigap-birthday-rule-2026/page.tsx` | Active | Educational article |

## Redirected Persona / Legacy Routes

| Route | File | Redirects to | Notes |
|-------|------|--------------|-------|
| `/seniors` | `app/seniors/page.tsx` | `/membership#membership-plans` | Legacy persona lane |
| `/uninsured` | `app/uninsured/page.tsx` | `/membership` | Legacy persona lane |
| `/hdhp-families` | `app/hdhp-families/page.tsx` | `/wraparound` | Legacy persona lane |

## Deprecated Redirects (`next.config.mjs`)

| Route | Status | Replacement |
|-------|--------|-------------|
| `/pricing` | Deprecated redirect | `/membership` |
| `/faq` | Deprecated redirect | `/what-is-dpc#faq` |

## Internal / Noindex / No-Touch Routes

| Route | File | Reason |
|-------|------|--------|
| `/join` | `app/join/page.tsx` | Hint Health enrollment integration |
| `/join/success` | `app/join/success/page.tsx` | Enrollment success flow — excluded from sitemap |
| `/offline` | `app/offline/page.tsx` | PWA offline page |
| `/resources/hint-health-demo` | `app/resources/hint-health-demo/page.tsx` | Internal demo resource — excluded from sitemap |
| `/tech-strategy` | `app/tech-strategy/page.tsx` | Internal — excluded from sitemap |
| `/api/**` | `app/api/**` | Webhooks, calculations, integrations, secrets |

## `/team` Consolidation Decision

| Route | File | Status | Notes |
|-------|------|--------|-------|
| `/team` | `app/team/page.tsx` | Active (legacy) | **Not redirected yet** — serves a simplified “Round Table” story page; `/providers` is the canonical provider directory. Keep both until content is merged or `/team` is redirected to `/providers`. Excluded from sitemap. |

## Sitemap Policy

`app/sitemap.ts` includes primary public and SEO routes only. Excludes:

- Redirected persona routes (`/seniors`, `/uninsured`, `/hdhp-families`)
- Deprecated routes (`/pricing`, `/faq`)
- Enrollment (`/join`, `/join/success`)
- Internal/demo (`/team`, `/tech-strategy`, `/resources/hint-health-demo`, `/offline`)

## Pricing Claim Watchlist

See [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md) § Content guardrails and § Pricing source of truth.
