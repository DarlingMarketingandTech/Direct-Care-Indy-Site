# Route Map

Current route map for the DirectCare Indy website. This file reflects the active architecture after the membership pricing cleanup.

## Active Pricing Architecture

- Active membership route: `/membership`
- Active membership page file: `app/membership/page.tsx`
- Active membership pricing UI: `components/membership/MembershipPricingView.tsx`
- Active pricing source of truth: `lib/content/membership-pricing.ts`
- Homepage pricing preview: `app/page.tsx`
- Quiz system: `lib/dpc-fit-quiz.ts`, `components/dpc-fit-quiz/*`, `/quiz`
- Deprecated pricing route: `/pricing` redirects permanently to `/membership` in `next.config.mjs`

## Primary Public Routes

| Route | File | Status | Notes |
|-------|------|--------|-------|
| `/` | `app/page.tsx` | Active | Quiz-first homepage with concise membership preview from `MEMBERSHIP_PLANS` |
| `/membership` | `app/membership/page.tsx` | Active | Canonical membership pricing, benefits, additional-service pricing, pharmacy section |
| `/quiz` | `app/quiz/page.tsx` | Active | DPC fit quiz flow |
| `/how-it-works` | `app/how-it-works/page.tsx` | Active | Onboarding and care process |
| `/what-is-dpc` | `app/what-is-dpc/page.tsx` | Active | Education and FAQ destination |
| `/about` | `app/about/page.tsx` | Active | Clinic and team story |
| `/services` | `app/services/page.tsx` | Active | Care offering overview |
| `/wraparound` | `app/wraparound/page.tsx` | Active | Membership plus backup-coverage guidance without savings guarantees |
| `/brokers` | `app/brokers/page.tsx` | Active | Targeted landing page, not part of main navigation |
| `/partnerships` | `app/partnerships/page.tsx` | Active | Partner-facing page |

## Employer and Support Routes

| Route | File | Status | Notes |
|-------|------|--------|-------|
| `/employers` | `app/employers/page.tsx` | Active | Employer-facing overview and contact flow |
| `/for-employers` | `app/for-employers/page.tsx` | Active | Employer inquiry route |
| `/providers` | `app/providers/page.tsx` | Active | Provider listing |
| `/providers/[slug]` | `app/providers/[slug]/page.tsx` | Active | Provider detail |
| `/locations/[neighborhood]` | `app/locations/[neighborhood]/page.tsx` | Active | Local SEO pages |
| `/blog/indiana-medigap-birthday-rule-2026` | `app/blog/indiana-medigap-birthday-rule-2026/page.tsx` | Active | Educational article |

## Redirected or Deprecated Routes

| Route | Status | Replacement |
|-------|--------|-------------|
| `/pricing` | Deprecated redirect | `/membership` |
| `/faq` | Deprecated redirect | `/what-is-dpc#faq` |

## No-Touch Routes

| Route | File | Reason |
|-------|------|--------|
| `/join` | `app/join/page.tsx` | Hint Health enrollment integration |
| `/join/success` | `app/join/success/page.tsx` | Enrollment success flow |
| `/api/**` | `app/api/**` | Webhooks, calculations, integrations, secrets |

## Pricing Claim Watchlist

- Membership prices, plan benefits, labs, bloodwork, vaccines, and pharmacy examples should be updated in `lib/content/membership-pricing.ts`.
- The homepage should stay quiz-first and should only show a concise preview of `MEMBERSHIP_PLANS`.
- Do not reintroduce calculators, family-cap language, age-band pricing, fake savings claims, or old `/pricing` architecture.
- Brokers remain outside `mainNav`. `/brokers` can remain a footer or campaign destination.
