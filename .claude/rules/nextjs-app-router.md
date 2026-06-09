# Next.js App Router Conventions

## Route Rules

- App Router route files live in `app/**/page.tsx`
- Use server components by default
- Use client components only where state, effects, or event handlers are needed

## Current Route Notes

- `/membership` is the active public pricing route
- `/pricing` is a deprecated redirect to `/membership`
- `/quiz` is secondary decision support — audience-first routing is the primary funnel
- Do not move or recreate deprecated pricing routes casually

## Shared Content Rules

- Membership pricing content belongs in `lib/content/membership-pricing.ts`
- Quiz content belongs in `lib/dpc-fit-quiz.ts`
- Prefer shared data sources over hardcoded page-local pricing copy

## Navigation Notes

- Keep the homepage audience-first — quiz is secondary support only
- Do not add brokers to main navigation
- `/brokers` is not a primary nav lane

## Verification

- Run `npm run build`
- Run `npm run lint`
- Verify affected routes render correctly after UI changes
