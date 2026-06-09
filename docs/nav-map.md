# Navigation Map

> **Strategy and guardrails:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md)
> **Source of truth:** `lib/nav.ts`
> **Mobile shell:** [`MOBILE_APP_ARCHITECTURE.md`](./MOBILE_APP_ARCHITECTURE.md)

## Main navigation (`mainNav`)

Quiz-first homepage; main nav stays focused on member and employer discovery.

| Label | Route | Notes |
|-------|-------|-------|
| Membership Pricing | `/membership` | Active pricing route |
| For Employers | `/employers` | B2B |
| What Is DPC? | `/what-is-dpc` | Education + FAQ |
| Our Team | `/providers` | Provider listing |
| Contact | `/contact` | Contact |

Also in header (not `mainNav`): **Patient Login** → Hint portal (external).

**Do not add brokers to `mainNav`.** `/brokers` is footer-only (`footerNav`) or campaign traffic.

## Mobile navigation

Bottom bar (`mobileBottomNav`): Membership Pricing, For Employers, What Is DPC?, Patient Login, plus **Menu** → full `mainNav` + Patient Login. See MOBILE_APP_ARCHITECTURE.

## Other public routes (not in main nav)

| Route | Role |
|-------|------|
| `/` | Quiz-first homepage |
| `/quiz` | Standalone DPC fit quiz |
| `/brokers` | Footer / campaign landing only |
| `/how-it-works`, `/services`, `/about`, `/wraparound` | Active pages — see ROUTE-MAP |

## Legacy routes

- `/pricing` → redirects to `/membership`
- `/faq` → redirects to `/what-is-dpc#faq`
