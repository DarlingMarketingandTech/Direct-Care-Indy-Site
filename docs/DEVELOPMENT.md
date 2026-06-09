# Development

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Server-first route architecture with client components only where interaction is needed

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Current Pricing Architecture

- Active pricing route: `/membership`
- Redirected legacy route: `/pricing`
- Pricing source of truth: `lib/content/membership-pricing.ts`
- Active pricing UI: `components/membership/MembershipPricingView.tsx`
- Homepage preview: `app/page.tsx`

## Quiz Architecture

- Quiz route: `/quiz`
- Quiz content: `lib/dpc-fit-quiz.ts`
- Quiz components: `components/dpc-fit-quiz/*`
- Homepage should remain quiz-first

## Navigation Notes

- Do not change the main navigation strategy unless explicitly requested
- Do not add brokers to `mainNav`
- `/brokers` may remain a footer or campaign landing page

## Sensitive Areas

- `app/api/**`
- `app/join/**`
- Environment files
- Hint Health integration points

## Content Governance Notes

- Update public membership pricing only through `lib/content/membership-pricing.ts`
- Do not reintroduce calculators, age-band pricing, family-cap pricing, or guaranteed savings copy
- Keep “pricing subject to change” style caveats where pricing is presented
