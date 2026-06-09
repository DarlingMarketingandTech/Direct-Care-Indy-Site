# No-Touch Zones

These areas should not be edited without explicit approval.

## Always Off-Limits

- `app/api/**`
- `app/join/**`
- `.env.local`
- `.env.production*`
- Hint Health integration code
- payment and enrollment integrations

## Pricing Change Boundary

- Approved public membership pricing now lives in `lib/content/membership-pricing.ts`
- Update pricing there when pricing work is explicitly approved
- Do not revive deleted pricing calculators, family-cap logic, or legacy `/pricing` route code

## Route Boundary

- `/pricing` is deprecated and redirects to `/membership`
- Do not create a new active `/pricing` page without explicit approval

## Escalate Instead Of Editing

- enrollment flow changes
- API route changes
- secret or environment changes
- payment-related changes
