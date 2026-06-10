# Route Map

> **Strategy, pricing, and guardrails:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md)

Route and file inventory only. Pricing source of truth: `lib/content/membership-pricing.ts`. Deprecated: `/pricing` → `/membership` (`next.config.mjs`).

## Primary Public Routes

| Route | File | Status | Notes |
|-------|------|--------|-------|
| `/` | `app/page.tsx` | Active | Audience-first routing homepage; concise membership preview from `MEMBERSHIP_PLANS`; quiz is secondary |
| `/families` | `app/families/page.tsx` | Active | Family audience page — sick-day scenario, governed pricing preview, local clinic access, provider trust, and Family Care Roadmap lead form |
| `/membership` | `app/membership/page.tsx` | Active | Canonical membership pricing, benefits, additional-service pricing, pharmacy section |
| `/quiz` | `app/quiz/page.tsx` | Active | Secondary DPC fit quiz — decision support, not primary site CTA |
| `/contact` | `app/contact/page.tsx` | Active | **Location & Contact** — location-first hub (7911 N. Michigan Rd.); quiz-intent query params; form → `/api/leads` |
| `/how-it-works` | `app/how-it-works/page.tsx` | Active | Onboarding and care process |
| `/what-is-dpc` | `app/what-is-dpc/page.tsx` | Active | Education and FAQ destination; pricing from `MEMBERSHIP_PLANS` |
| `/about` | `app/about/page.tsx` | Active | Clinic and team story |
| `/services` | `app/services/page.tsx` | Active | Care offering overview |
| `/wraparound` | `app/wraparound/page.tsx` | Active | Membership plus backup-coverage guidance without savings guarantees |
| `/brokers` | `app/brokers/page.tsx` | Active | Campaign landing — footer/context only, not main nav; `#broker-toolkit` resource form |
| `/partnerships` | `app/partnerships/page.tsx` | Active | Partner-facing page |

## Audience Routes (not in main nav)

| Route | File | Status | Notes |
|-------|------|--------|-------|
| `/individuals` | `app/individuals/page.tsx` | Active | Individuals audience page — membership, local care team, pricing guide form (`#membership-pricing-guide`) |
| `/families` | `app/families/page.tsx` | Active | See Primary Public Routes — Family Care Roadmap form |

## Employer and Support Routes

| Route | File | Status | Notes |
|-------|------|--------|-------|
| `/employers` | `app/employers/page.tsx` | Active | Employer-facing overview — `#employer-overview` resource form, audience-first CTAs; contextual broker link OK |
| `/for-employers` | `app/for-employers/page.tsx` | Active | Employer inquiry route |
| `/providers` | `app/providers/page.tsx` | Active | Care team hub — renders `components/providers/ProvidersView.tsx` |
| `/providers/james-pike` | `app/providers/[slug]/page.tsx` | Active | Medical Director bio |
| `/providers/karina-white` | `app/providers/[slug]/page.tsx` | Active | Lead PA bio |
| `/providers/chase-keirn` | `app/providers/[slug]/page.tsx` | Active | Lead PA bio |
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
| `/providers/maddie-klinger` | Deprecated redirect | `/providers` (removed from active roster) |

## Internal / Noindex / No-Touch Routes

| Route | File | Reason |
|-------|------|--------|
| `/join` | `app/join/page.tsx` | Hint Health enrollment integration |
| `/join/success` | `app/join/success/page.tsx` | Enrollment success flow — excluded from sitemap |
| `/offline` | `app/offline/page.tsx` | PWA offline page |
| `/resources/hint-health-demo` | `app/resources/hint-health-demo/page.tsx` | Internal demo resource — excluded from sitemap |
| `/tech-strategy` | `app/tech-strategy/page.tsx` | Internal — excluded from sitemap |
| `/api/**` | `app/api/**` | Webhooks, calculations, integrations, secrets |

## `/team` Redirect

| Route | File | Status | Notes |
|-------|------|--------|-------|
| `/team` | — | Redirect | 301 → `/providers` (`next.config.mjs`). Provider directory and bios are canonical. |

## Sitemap Policy

`app/sitemap.ts` includes primary public and SEO routes only. Excludes:

- Redirected persona routes (`/seniors`, `/uninsured`, `/hdhp-families`)
- Deprecated routes (`/pricing`, `/faq`)
- Enrollment (`/join`, `/join/success`)
- Internal/demo (`/tech-strategy`, `/resources/hint-health-demo`, `/offline`)

## Pricing Claim Watchlist

See [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md) § Content guardrails and § Pricing source of truth.
