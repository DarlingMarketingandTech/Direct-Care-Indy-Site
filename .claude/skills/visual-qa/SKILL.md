# Visual QA Skill

## Purpose

Inspect rendered pages after UI or content changes.

## Priority Pages

| Page | Route | What To Check |
|------|-------|---------------|
| Homepage | `/` | Audience-first routing, audience CTAs, concise pricing preview; quiz secondary |
| Membership | `/membership` | Plan cards, additional-service pricing, disclaimers |
| Quiz | `/quiz` | Flow renders and CTAs work |
| Wraparound | `/wraparound` | No stale savings or old pricing claims |
| Employers | `/employers` | No dependency on legacy membership pricing helpers |

## Pricing Cleanup Checks

- Homepage does not show a calculator
- Homepage does not show old pricing strings
- Membership page reads from `lib/content/membership-pricing.ts`
- `/pricing` is treated as a redirect, not an active content page
- Brokers are not present in main navigation

## Validation Flow

1. Run `npm run dev`
2. Review affected routes on desktop
3. Review affected routes on a narrow mobile viewport
4. Report any stale pricing strings, layout issues, or CTA regressions
