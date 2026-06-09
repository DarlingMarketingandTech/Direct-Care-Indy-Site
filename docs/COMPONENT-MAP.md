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
| `DpcQuizCtaBand` | `components/dpc-fit-quiz/*` | Active | Quiz-first CTA bands |

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

## Active Homepage Pricing Composition

`app/page.tsx`

- Homepage remains quiz-first
- Pricing preview is concise and should not duplicate full benefit lists
- Pricing preview must read from `MEMBERSHIP_PLANS`
- Homepage should not render calculators or exact household pricing tools

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
