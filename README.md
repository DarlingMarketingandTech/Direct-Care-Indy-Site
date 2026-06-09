# Direct Care Indy — Website

Next.js site for **Direct Primary Care (DPC)** in Indianapolis: audience-first member routing, membership pricing, employer and broker landing pages, and Hint Health enrollment.

This is the active DirectCare Indy website buildout — not a generic Next.js starter or a throwaway demo.

## Start here

**Read [`docs/PROJECT_MEMORY.md`](docs/PROJECT_MEMORY.md) first.** It is the single source of truth for strategy, pricing, navigation, content guardrails, and deprecated patterns.

## Quick start

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

Copy `.env.example` to `.env.local` for local secrets. Never commit `.env.local`.

## Documentation map

| Document | Purpose |
|----------|---------|
| [`docs/PROJECT_MEMORY.md`](docs/PROJECT_MEMORY.md) | **Canonical** — strategy, guardrails, pricing source of truth |
| [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) | Stack, commands, sensitive areas |
| [`docs/ROUTE-MAP.md`](docs/ROUTE-MAP.md) | Active routes and page files |
| [`docs/COMPONENT-MAP.md`](docs/COMPONENT-MAP.md) | Active components and content sources |
| [`docs/nav-map.md`](docs/nav-map.md) | Navigation roles and route intent |
| [`docs/MOBILE_APP_ARCHITECTURE.md`](docs/MOBILE_APP_ARCHITECTURE.md) | Mobile shell, bottom bar, PWA layout |
| [`docs/QA-CHECKLIST.md`](docs/QA-CHECKLIST.md) | Post-change validation |
| [`docs/CODEX_WORKFLOW.md`](docs/CODEX_WORKFLOW.md) | Codex-assisted development workflow |
| [`docs/CODEX_BACKLOG.md`](docs/CODEX_BACKLOG.md) | Next planned implementation tasks |
| [`docs/archive/`](docs/archive/) | Historical implementation and deployment reports |

## Agent entry points

- [`AGENTS.md`](AGENTS.md) — Cursor and coding agents
- [`CLAUDE.md`](CLAUDE.md) — Claude Code

Both point to `docs/PROJECT_MEMORY.md`. Do not duplicate strategy in agent files.

## Deploy

Hosted on Vercel. Environment setup: see `RESEND_SETUP.md` and `VERCEL_ENV_SETUP.md` at repo root (move to `docs/setup/` planned).
