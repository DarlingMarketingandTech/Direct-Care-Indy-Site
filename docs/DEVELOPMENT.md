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
