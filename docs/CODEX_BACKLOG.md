# Codex Backlog — Direct Care Indy

Ordered implementation queue after the documentation/agent setup pass.

> **Workflow:** [`CODEX_WORKFLOW.md`](./CODEX_WORKFLOW.md)  
> **Strategy:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md) § Current CTA and audience strategy

Each task should be a focused branch with build + lint verification before merge.

---

## Task 1: Homepage CTA cleanup and quiz demotion

Status: Completed on `codex/homepage-cta-cleanup`

**Branch:** `codex/homepage-cta-cleanup`

- Remove global header quiz CTA
- Lead homepage with audience-specific routing (individuals, families, employers)
- Demote quiz to secondary “not sure where to start?” placement
- Stop repeating “Is DPC Right for You? Take the 60-second quiz” on audience cards and sticky surfaces
- Use single-clinic location labels (Michigan Rd) where location CTAs appear
- Families audience card links to `/families`; secondary roadmap link uses `/families#family-care-roadmap`

**Key files:** `app/page.tsx`, `components/Navbar.tsx`, `components/StickySavingsBar.tsx`, `components/dpc-fit-quiz/*`

---

## Task 2: Audience-specific resource / lead form architecture

**Branch:** `codex/resource-lead-forms`

- Design shared gated-resource form pattern (one component + per-audience config)
- Wire form submissions to existing `/api/leads` or extend safely
- Define four resource configs per PROJECT_MEMORY (Individuals, Families, Employers, Brokers)
- Each form collects audience-specific fields documented in PROJECT_MEMORY

**Key files:** new `lib/content/audience-resources.ts` (or similar), form components, `app/api/leads/*`

---

## Task 3: Individuals page

**Branch:** `codex/audience-pages` (or `codex/individuals`)

- Build or improve `/individuals`
- Audience-first CTAs: membership, local care team, resource download
- Integrate Individuals resource form from Task 2
- Demo scheduler link via `getDpcQuizScheduleLink("individual")`

---

## Task 4: Families page

Status: Completed on `codex/families-page`

**Branch:** `codex/families-page`

- Build or improve `/families`
- Family membership focus, family resource CTA
- Integrate Families resource form from Task 2
- Demo scheduler link via `getDpcQuizScheduleLink("family")`

---

## Task 5: Employers page refinement

**Branch:** `codex/audience-pages`

- Improve `/employers` with audience-first CTAs (not quiz-first)
- Employer inquiry flow and resource download
- Contextual broker link in footer section (not main nav)
- Demo scheduler links for employer intents

**Key files:** `app/employers/page.tsx`, `components/employers/*`

---

## Task 6: Brokers page refinement

**Branch:** `codex/audience-pages`

- Improve `/brokers` as campaign landing (footer/outbound only)
- Broker toolkit resource form
- No main nav addition

**Key files:** `app/brokers/page.tsx`

---

## Task 7: Location & Contact page

**Branch:** `codex/location-contact`

- Rename or reposition Contact as **Location & Contact**
- Prominent single-clinic address, hours, map/directions
- Labels: “Visit Our Michigan Rd Clinic”, “See Location & Hours”, “Talk With Our Local Care Team”
- Preserve quiz-intent-aware contact query params where used

**Key files:** `app/contact/page.tsx`, `components/contact/*`, `lib/content/contact.ts`

---

## Task 8: Providers / team consolidation

**Branch:** `codex/audience-pages` or dedicated branch

- Center provider trust on `/providers` and `/providers/[slug]`
- Plan redirect or merge for `/team` (legacy Round Table page)
- Update nav if “Our Team” should point to `/providers` instead of `/team`

**Key files:** `app/team/page.tsx`, `app/providers/**`, `lib/nav.ts`, `next.config.mjs`

---

## Task 9: Demo scheduler wiring

**Branch:** `codex/audience-pages` or dedicated branch

- Ensure all audience and quiz schedule CTAs use `getDpcQuizScheduleLink()`
- Document env keys in `.env.example` as optional/future (not required for dev)
- Keep fallbacks on safe `/contact?source=…&intent=…` paths until production URLs approved

**Key files:** `lib/dpc-fit-quiz.ts`, `.env.example`, audience page CTAs

---

## Task 10: Pre-launch analytics and production scheduler (later)

**Deferred — do not start unless explicitly requested**

- GA4/GTM production configuration
- Live Cal.com (or equivalent) scheduler URLs via env vars
- Tracking taxonomy implementation beyond no-op `trackEvent()`
- HSA/FSA gates if needed at launch

---

## Completed setup pass

- [x] PROJECT_MEMORY updated with CTA/location/scheduler/analytics strategy
- [x] AGENTS.md and CLAUDE.md aligned as pointers
- [x] CODEX_WORKFLOW.md and CODEX_BACKLOG.md created
- [x] Cursor rule for agent guardrails
