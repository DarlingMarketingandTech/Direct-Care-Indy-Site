# Component Map

> **Strategy and guardrails:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md)

Component and content-source inventory for membership pricing, quiz flow, and related public UI.

## Active Pricing Components

| Component | File | Status | Content Source |
|-----------|------|--------|----------------|
| `MembershipPricingView` | `components/membership/MembershipPricingView.tsx` | Active | `lib/content/membership-pricing.ts` |
| Homepage membership preview | `app/page.tsx` | Active | `MEMBERSHIP_PLANS` from `lib/content/membership-pricing.ts` |
| `MembershipSectionNav` | `components/membership/MembershipSectionNav.tsx` | Active | Membership page section anchors |
| `DpcQuizTrigger` | `components/dpc-fit-quiz/*` | Active | Quiz flow helpers |
| `DpcQuizCtaBand` | `components/dpc-fit-quiz/*` | Active | Secondary quiz CTA bands — use sparingly, not as primary homepage/audience CTA |

## Active Pricing Data Sources

`lib/content/membership-pricing.ts` is the single source of truth for:

- Membership plan names
- Audience labels
- Descriptions
- Monthly prices
- Benefit bullets
- CTA labels
- Discounted lab work
- Discounted bloodwork
- Vaccines and injections
- In-clinic pharmacy examples
- Pricing disclaimers

## Active Membership Route Composition

`app/membership/page.tsx`

- Renders `MembershipPricingView`
- Uses `MembershipSectionNav`
- Reads pricing content from `lib/content/membership-pricing.ts`
- Hosts the active public-facing membership pricing experience

## Active Homepage Composition

`app/page.tsx`

- Homepage uses **audience-first routing** — individuals, families, employers — with local clinic trust (7911 N. Michigan Rd.)
- Quiz is a **secondary** “not sure where to start?” tool, not the primary CTA
- Do not repeat quiz CTAs across audience cards, sticky bars, or every section
- Pricing preview is concise and should not duplicate full benefit lists
- Pricing preview must read from `MEMBERSHIP_PLANS`
- Homepage should not render calculators or exact household pricing tools
- Do not use “Find a provider near you” — single clinic location only

## Active Quiz Architecture

| Area | Files |
|------|-------|
| Quiz data | `lib/dpc-fit-quiz.ts` |
| Quiz UI | `components/dpc-fit-quiz/*` |
| Quiz route | `app/quiz/page.tsx` |

## Active Employer Pricing-Adjacent Content

| Component | File | Status | Notes |
|-----------|------|--------|-------|
| `EmployersView` | `components/employers/EmployersView.tsx` | Active | Employer messaging; do not reuse old membership pricing logic |
| Employer content data | `lib/content/employers.ts` | Active | Employer copy and employer rate badge copy |

## Removed Legacy Pricing Stack

The following legacy files are no longer part of active pricing architecture:

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

Do not recreate these patterns in active UI.
