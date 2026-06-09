# Sprint Executor Skill

## Purpose

Execute approved website sprint tasks with small, focused changes.

## Execution Pattern

1. Read the relevant rule files
2. Inspect the target files
3. Make one focused change set
4. Run `npm run build`
5. Run `npm run lint`
6. Summarize files changed and validation

## Current Pricing Example

Task: update membership pricing content

- Update `lib/content/membership-pricing.ts`
- Verify `app/page.tsx` still shows a concise preview
- Verify `components/membership/MembershipPricingView.tsx` reflects the same shared data
- Confirm no legacy calculator or family-cap UI is reintroduced
