# QA Checklist

> **Strategy and guardrails:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md)

Use this checklist after content, route, pricing, or navigation updates.

## Core Validation

1. Run `npm run build`
2. Run `npm run lint`
3. Start local dev with `npm run dev` if visual verification is needed

## Homepage

- Quiz-first hero still loads correctly
- Primary CTA still routes into the quiz flow
- Pricing preview renders from `MEMBERSHIP_PLANS`
- Homepage does not show a calculator
- Homepage does not show family-cap, age-band, or exact-price language
- Brokers are not added to the main navigation

## Membership Page

- `/membership` loads without errors
- Plan cards reflect current pricing from `lib/content/membership-pricing.ts`
- Additional-service pricing renders for labs, bloodwork, vaccines, and pharmacy
- Pricing disclaimers are visible
- Tables or cards remain readable on mobile
- No stale pricing strings or calculator UI appear

## Redirects

- `/pricing` redirects to `/membership`
- `/faq` redirects to `/what-is-dpc#faq`

## Wraparound and Employer Pages

- `/wraparound` does not show guaranteed savings, old plan pricing, or old wraparound pricing examples
- `/employers` does not import or depend on legacy membership pricing helpers

## Regression Watchlist

- No active route imports deleted pricing calculators or testimonial/savings components
- No public page reintroduces fake testimonials or guaranteed savings claims
- Main navigation strategy remains unchanged
- Footer links still work
