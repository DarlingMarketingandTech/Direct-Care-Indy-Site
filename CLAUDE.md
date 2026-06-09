# Claude Code — Direct Care Indy

**Before any code or content change, read [`docs/PROJECT_MEMORY.md`](docs/PROJECT_MEMORY.md).**

That file is the single source of truth. Do not duplicate strategy here.

## Context

- Internal **development demo site** — no test-site banner needed.
- **GA4/GTM** and **production scheduler** setup are deferred.
- **Brokers** stay out of main nav; quiz CTAs should not be overused.
- Full CTA, location, audience, and resource strategy: see PROJECT_MEMORY § Current CTA and audience strategy.

## Build and lint

```bash
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Reference docs

- [`docs/PROJECT_MEMORY.md`](docs/PROJECT_MEMORY.md) — strategy and guardrails
- [`docs/CODEX_WORKFLOW.md`](docs/CODEX_WORKFLOW.md) — workflow for Codex-assisted tasks
- [`docs/CODEX_BACKLOG.md`](docs/CODEX_BACKLOG.md) — next implementation queue
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) — stack, commands, sensitive areas
- [`docs/ROUTE-MAP.md`](docs/ROUTE-MAP.md) — routes
- [`docs/COMPONENT-MAP.md`](docs/COMPONENT-MAP.md) — components
- [`docs/MOBILE_APP_ARCHITECTURE.md`](docs/MOBILE_APP_ARCHITECTURE.md) — mobile UX shell

## Workflow

1. Read `docs/PROJECT_MEMORY.md`
2. Inspect files first; make small, surgical changes
3. Run `npm run build` and `npm run lint`
4. Summarize files changed and remaining risks

Do not call this repo a demo, mockup, or replacement site.
