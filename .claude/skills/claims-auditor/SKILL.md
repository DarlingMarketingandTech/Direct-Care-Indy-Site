# Claims Auditor Skill

## Purpose

Audit visible website copy for risky or unapproved claims.

## High-Priority Claim Checks

- Membership pricing and benefits
- Savings claims or guarantees
- Testimonials with numbers or outcomes
- HSA/FSA language
- Insurance-replacement wording
- Lab, bloodwork, vaccine, and pharmacy price examples

## Current Pricing Audit Targets

- `lib/content/membership-pricing.ts`
- `app/page.tsx`
- `components/membership/MembershipPricingView.tsx`
- `app/wraparound/page.tsx`
- employer-facing pages if pricing-adjacent copy changes

## Active Architecture Notes

- `/membership` is the active public pricing route
- `/pricing` is deprecated and redirected
- The homepage uses audience-first routing — quiz is secondary decision support
- Do not look for deleted calculators or deleted pricing-tier components as active surfaces

## Flag These Immediately

- age-band pricing
- family-cap language
- exact household pricing
- guaranteed savings
- fake testimonials
- DPC-as-insurance language
