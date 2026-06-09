# Codex Workflow — Direct Care Indy

Repeatable process for Codex-assisted development on this repo.

> **Strategy and guardrails:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md)  
> **Next tasks:** [`CODEX_BACKLOG.md`](./CODEX_BACKLOG.md)

---

## How to read the repo

1. **Start with [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md)** — canonical strategy, CTA rules, pricing, navigation, deferred integrations.
2. **Check [`CODEX_BACKLOG.md`](./CODEX_BACKLOG.md)** — pick the next task or confirm scope with the user.
3. **Use detail docs for file-level work:**
   - [`ROUTE-MAP.md`](./ROUTE-MAP.md) — which `app/**/page.tsx` renders which route
   - [`COMPONENT-MAP.md`](./COMPONENT-MAP.md) — active components and content sources
   - [`DEVELOPMENT.md`](./DEVELOPMENT.md) — stack, commands, no-touch zones
   - [`MOBILE_APP_ARCHITECTURE.md`](./MOBILE_APP_ARCHITECTURE.md) — mobile shell and bottom bar
4. **Agent entry points** [`AGENTS.md`](../AGENTS.md) and [`CLAUDE.md`](../CLAUDE.md) are pointers only — do not treat them as duplicated strategy.

---

## Recommended workflow

| Step | Action |
|------|--------|
| 1 | Read `PROJECT_MEMORY.md` (especially § Current CTA and audience strategy) |
| 2 | Inspect affected files, imports, and shared content sources before editing |
| 3 | Propose a **small plan** (3–5 bullets) for non-trivial work |
| 4 | Make **surgical changes** — one task scope, minimal diff |
| 5 | Run `npm run build` |
| 6 | Run `npm run lint` |
| 7 | Report: changed files, build/lint results, unresolved risks |

---

## Branch naming

Use the `codex/` prefix:

| Branch | Typical scope |
|--------|---------------|
| `codex/homepage-cta-cleanup` | Homepage audience CTAs, quiz demotion, header cleanup |
| `codex/audience-pages` | `/individuals`, `/families`, shared audience patterns |
| `codex/location-contact` | Contact → Location & Contact rename/reposition |
| `codex/resource-lead-forms` | Gated audience resource forms and lead capture |

---

## Do not (unless explicitly requested)

- Add **GA4/GTM** production setup or env requirements
- Add **production scheduler** env vars or live Cal.com wiring
- Add **HSA/FSA gates** or payment/enrollment integrations
- Reintroduce **deprecated pricing calculators**, fake savings claims, fake testimonials, or “unlimited visits”
- Add **brokers to main nav**
- Spam **quiz CTAs** across audience cards, sticky bars, and every section
- Use **no multi-location framing** such as “Find a provider near you” — single clinic at 7911 N. Michigan Rd.
- Duplicate full strategy into `AGENTS.md` or `CLAUDE.md`

---

## Demo scheduler pattern

When adding schedule CTAs:

```typescript
import { getDpcQuizScheduleLink } from "@/lib/dpc-fit-quiz";

// Uses env override when set; otherwise safe /contact fallback
const href = getDpcQuizScheduleLink("individual");
```

Extend this pattern for audience pages. Keep demo links on `/contact?source=…&intent=…` until production URLs are approved.

---

## Analytics (future only)

- `lib/analytics.ts` — no-op-safe `trackEvent()` when `dataLayer` is unavailable
- Document tracking taxonomy as planned; do not block development on analytics env setup

---

## Verification checklist (after code changes)

- [ ] `npm run build` passes
- [ ] `npm run lint` passes (or pre-existing issues called out)
- [ ] Pricing still imports from `lib/content/membership-pricing.ts`
- [ ] No hardcoded plan prices on homepage or membership page
- [ ] Brokers not added to `lib/nav.ts` mainNav
- [ ] Quiz not promoted as primary CTA unless task explicitly says so
- [ ] Location copy references single Michigan Rd clinic
