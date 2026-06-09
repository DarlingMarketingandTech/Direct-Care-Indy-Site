# Agent Instructions — Direct Care Indy

**Before any code or content change, read [`docs/PROJECT_MEMORY.md`](docs/PROJECT_MEMORY.md).**

That file is the single source of truth. Do not duplicate strategy, pricing rules, or navigation guardrails here.

## Reference docs (detail layers)

| Doc | Use when |
|-----|----------|
| [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) | Stack, commands, no-touch zones |
| [`docs/ROUTE-MAP.md`](docs/ROUTE-MAP.md) | Which routes exist and which files render them |
| [`docs/COMPONENT-MAP.md`](docs/COMPONENT-MAP.md) | Active components and shared content sources |
| [`docs/MOBILE_APP_ARCHITECTURE.md`](docs/MOBILE_APP_ARCHITECTURE.md) | Mobile bottom bar, menu, PWA shell |
| [`docs/QA-CHECKLIST.md`](docs/QA-CHECKLIST.md) | Validation after pricing, nav, or content changes |

Historical reports live under [`docs/archive/`](docs/archive/) — context only, not active guidance.

## Workflow

1. Read `docs/PROJECT_MEMORY.md`
2. Inspect target files and imports
3. Make focused, reversible changes
4. Run `npm run build` and `npm run lint`
5. Report files changed, validation results, and any follow-up risks
