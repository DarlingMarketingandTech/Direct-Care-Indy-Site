# Agent Instructions — Direct Care Indy

**Before any code or content change, read [`docs/PROJECT_MEMORY.md`](docs/PROJECT_MEMORY.md).**

That file is the single source of truth for strategy, CTA rules, pricing, navigation, and guardrails. Do not duplicate its content here.

## Environment context

- This is an **internal development demo site** for DirectCare Indy — not a throwaway mockup, but also not production-ready.
- **Do not** add test-site banners or “demo” warning UI.
- **GA4/GTM** and **production scheduler** setup are **deferred** — do not implement unless explicitly requested.
- If analytics helper code exists (`lib/analytics.ts`), keep it no-op-safe; no env setup required for local dev.

## Strategic guardrails (summary)

- **One clinic:** 7911 N. Michigan Rd., Indianapolis, IN 46268 — no “Find a provider near you.”
- **Quiz is secondary** — remove global header quiz CTA; do not spam quiz CTAs on every audience card or sticky bar.
- **Brokers stay out of main nav** — footer and contextual links only.
- **Demo scheduler fallbacks** — use `getDpcQuizScheduleLink()` pattern; no production scheduler env vars required yet.
- See PROJECT_MEMORY for audience resource forms, CTA labels, and full rules.

## Build and lint

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

Run `build` and `lint` after meaningful code changes. Report results and any unrelated pre-existing issues.

## Reference docs (detail layers)

| Doc | Use when |
|-----|----------|
| [`docs/PROJECT_MEMORY.md`](docs/PROJECT_MEMORY.md) | **Start here** — strategy and guardrails |
| [`docs/CODEX_WORKFLOW.md`](docs/CODEX_WORKFLOW.md) | Codex repeatable workflow and branch naming |
| [`docs/CODEX_BACKLOG.md`](docs/CODEX_BACKLOG.md) | Next planned implementation tasks |
| [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) | Stack, commands, no-touch zones |
| [`docs/ROUTE-MAP.md`](docs/ROUTE-MAP.md) | Which routes exist and which files render them |
| [`docs/COMPONENT-MAP.md`](docs/COMPONENT-MAP.md) | Active components and shared content sources |
| [`docs/MOBILE_APP_ARCHITECTURE.md`](docs/MOBILE_APP_ARCHITECTURE.md) | Mobile bottom bar, menu, PWA shell |
| [`docs/QA-CHECKLIST.md`](docs/QA-CHECKLIST.md) | Validation after pricing, nav, or content changes |

Historical reports live under [`docs/archive/`](docs/archive/) — context only, not active guidance.

## Workflow

1. Read `docs/PROJECT_MEMORY.md`
2. Check `docs/CODEX_BACKLOG.md` if picking up planned work
3. Inspect target files and imports
4. Propose a small plan for non-trivial changes
5. Make focused, reversible changes
6. Run `npm run build` and `npm run lint`
7. Report files changed, validation results, and follow-up risks
