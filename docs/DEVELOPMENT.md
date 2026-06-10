# Development

> **Canonical strategy and guardrails:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md)

## Stack

- Next.js 16 App Router
- React 19, TypeScript
- Tailwind CSS 4
- Server components by default; client components only where interaction is required

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Environment

- Copy `.env.example` → `.env.local` for local secrets
- `.env.local` is gitignored — never commit it
- Vercel env setup: `VERCEL_ENV_SETUP.md`, `RESEND_SETUP.md` (repo root)

### Prospect scheduler CTAs (demo-safe)

High-intent “Talk With Our Local Care Team” and quiz result schedule links use `getDpcQuizScheduleLink()` from `lib/dpc-fit-quiz.ts`. When the matching `NEXT_PUBLIC_SCHEDULE_*` env var is empty, each key falls back to `/contact?source=quiz&intent=…` — there are **no** live `/schedule/*` app routes.

| Surface | Schedule key | File |
|---------|--------------|------|
| `/individuals` | `individual` | `app/individuals/page.tsx` |
| `/families` | `family` | `app/families/page.tsx` |
| `/membership` | `individual` | `components/membership/MembershipPricingView.tsx` |
| `/employers` | `employerCore` | `components/employers/EmployersView.tsx` |
| `/brokers` | `broker` | `app/brokers/page.tsx` |
| Quiz results | per result | `components/dpc-fit-quiz/DpcQuizResultCard.tsx`, `lib/dpc-fit-quiz.ts` |

Generic `/contact` links (homepage, providers, locations, blog) are intentional for location/hours context — not scheduler overrides. Production Cal.com URLs: Phase 8 (`NEXT_PUBLIC_SCHEDULE_*` in `.env.example`).

## Sensitive areas (no-touch without explicit approval)

See [`PROJECT_MEMORY.md` § No-touch zones](./PROJECT_MEMORY.md#no-touch-zones):

- `app/api/**`
- `app/join/**`
- Environment files and Hint Health / payment integrations

## Detail references

| Topic | Doc |
|-------|-----|
| Routes | [`ROUTE-MAP.md`](./ROUTE-MAP.md) |
| Components | [`COMPONENT-MAP.md`](./COMPONENT-MAP.md) |
| Navigation | [`nav-map.md`](./nav-map.md) |
| Mobile shell | [`MOBILE_APP_ARCHITECTURE.md`](./MOBILE_APP_ARCHITECTURE.md) |
| QA after changes | [`QA-CHECKLIST.md`](./QA-CHECKLIST.md) |
| Claims governance | [`CONTENT-GOVERNANCE.md`](./CONTENT-GOVERNANCE.md) |
