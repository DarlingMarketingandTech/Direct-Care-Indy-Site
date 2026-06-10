# Codex Backlog — Direct Care Indy

Phased implementation queue for audience-first site buildout.

> **Workflow:** [`CODEX_WORKFLOW.md`](./CODEX_WORKFLOW.md)  
> **Strategy:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md) § Current CTA and audience strategy

Each task should be a focused branch with `npm run build` + `npm run lint` verification before merge.

---

## Current baseline (on `main`)

| Area | Status |
|------|--------|
| Homepage audience routing + quiz demotion | Done — PR #39 |
| `/families` audience page + Family Care Roadmap form | Done — PR #38 |
| `/individuals` | Planned — homepage still routes to `/membership` |
| Shared lead-form architecture | Not started — Families form is one-off |
| `/employers`, `/brokers` | Active but not fully audience-first; no page anchors for toolkit/overview sections |
| `/contact` → Location & Contact | Planned |
| `/team` vs `/providers` | Both exist; `/providers` is canonical |
| Production scheduler / GA4 | Explicitly deferred |

---

## Recommended merge order

| Order | Branch | Suggested PR title | Depends on |
|-------|--------|-------------------|------------|
| — | *(done)* | feat: clean up homepage audience CTAs | — |
| — | *(done)* | feat: add families audience page | — |
| 1 | `codex/resource-lead-forms` | feat: shared audience resource lead forms | — |
| 2 | `codex/individuals` | feat: add individuals audience page | Phase 1 |
| 3 | `codex/employers-refinement` | feat: refine employers audience page | Phase 1 |
| 4 | `codex/brokers-refinement` | feat: refine brokers campaign landing | Phase 1 |
| 5 | `codex/location-contact` | feat: reposition contact as location hub | Phase 2 audience pages stable |
| 6 | `codex/providers-team-consolidation` | chore: consolidate team into providers | — |
| 7 | `codex/quiz-sitewide-audit` | chore: demote quiz CTAs sitewide | — |
| 8 | `codex/demo-scheduler-wiring` | chore: standardize demo scheduler fallbacks | Phases 2–3 |

---

## Cross-cutting guardrails (every phase)

- Pricing from `lib/content/membership-pricing.ts` only — no hardcoded plan prices
- Single clinic: **7911 N. Michigan Rd., Indianapolis, IN 46268** — no multi-location framing
- **Brokers stay out of `mainNav`** (`lib/nav.ts`)
- Quiz is **secondary** — not the primary CTA on homepage or audience pages
- No fake testimonials, ratings, savings guarantees, or “unlimited visits/care”
- No “DPC replaces insurance”, family cap, or exact-price calculators
- No GA4/GTM or production scheduler env setup unless Phase 6 is explicitly opened
- Prohibited phrase scan on changed app files before merge

---

## Phase 0 — Foundation (completed)

Audience-first strategy, homepage routing, and core guardrails.

### Task 0.1: Documentation and agent setup

**Status:** Completed

- [x] PROJECT_MEMORY updated with CTA/location/scheduler/analytics strategy
- [x] AGENTS.md and CLAUDE.md aligned as pointers
- [x] CODEX_WORKFLOW.md and CODEX_BACKLOG.md created
- [x] Cursor rule for agent guardrails
- [x] Audience-first doc sync (`codex/audience-first-doc-sync`)

### Task 0.2: Homepage CTA cleanup and quiz demotion

**Status:** Completed — merged PR #39 (`codex/homepage-cta-cleanup`)

**Branch:** `codex/homepage-cta-cleanup`

- [x] Remove global header quiz CTA
- [x] Lead homepage with audience-specific routing (individuals, families, employers, brokers, new to DPC)
- [x] Demote quiz to secondary “not sure where to start?” placement
- [x] Stop repeating “Is DPC Right for You? Take the 60-second quiz” on audience cards and sticky surfaces
- [x] Hide sticky quiz/savings bar on homepage (`/`)
- [x] Use single-clinic location labels (Michigan Rd) where location CTAs appear
- [x] Families audience card links to `/families`; secondary roadmap link uses `/families#family-care-roadmap`

**Key files:** `app/page.tsx`, `components/Navbar.tsx`, `components/StickySavingsBar.tsx`, `components/dpc-fit-quiz/*`

### Task 0.3: Families audience page

**Status:** Completed — merged PR #38 (`codex/families-page`)

**Branch:** `codex/families-page`

- [x] Build `/families` with audience-first CTAs
- [x] Sick-day scenario, governed pricing preview, local clinic access, provider trust, FAQ
- [x] Family Care Roadmap lead form → `/api/leads`
- [x] Demo scheduler link via `getDpcQuizScheduleLink("family")`
- [x] Quiz secondary only

**Key files:** `app/families/page.tsx`, `components/families/FamilyCareRoadmapForm.tsx`, `app/api/leads/route.ts`, `lib/metadata.ts`

**Follow-up:** Migrate Family Care Roadmap form to shared architecture in Phase 1.

---

## Phase 1 — Lead capture foundation

**Goal:** One reusable pattern for all four audience resources.

### Task 1.1: Audience-specific resource / lead form architecture

**Status:** Next up

**Branch:** `codex/resource-lead-forms`

**Depends on:** Phase 0

**Scope:**

- Create `lib/content/audience-resources.ts` (or similar) with four resource configs per PROJECT_MEMORY
- Create shared component, e.g. `components/audience/AudienceResourceForm.tsx`
  - Config-driven fields (text, select, optional phone)
  - Hidden metadata: `source`, `audience`, `resource`, `sourcePage`
  - Non-PHI guardrails + emergency disclaimer
  - Success/error states with call/text/email fallback
- Extend `app/api/leads/route.ts` with structured email sections per resource type
- Add minimal no-op-safe analytics events (mirror `family_care_roadmap_submitted` pattern)
- Refactor `FamilyCareRoadmapForm` to use shared component or thin wrapper

**Resource configs:**

| Audience | Resource | Fields |
|----------|----------|--------|
| Individuals | Transparent Membership & Add-On Pricing Guide | name, email, phone (opt), age range, insurance status, biggest care frustration, preferred contact |
| Families | Family Care Roadmap | name, email, phone (opt), household size, children 12+, biggest family concern, insurance situation, preferred contact |
| Employers | Employer DPC Overview | name, company, role, email, phone (opt), employee count band, benefits situation, renewal month (opt), workforce concern |
| Brokers | Broker Toolkit | name, firm, role, email, phone (opt), client size band, industries, funding model focus, co-branded materials interest |

**Acceptance criteria:**

- [ ] All four configs defined in one file
- [ ] One shared form component renders any config
- [ ] POST to `/api/leads` works for each resource
- [ ] No symptoms/diagnosis/urgent/medical history fields
- [ ] Build + lint pass; prohibited phrase scan clean

**Key files:** `lib/content/audience-resources.ts`, `components/audience/*`, `app/api/leads/route.ts`, `components/families/FamilyCareRoadmapForm.tsx`

**Do not:** Add GA4/GTM, production scheduler URLs, calculators, or hardcoded pricing.

---

## Phase 2 — Audience page buildout

Complete the audience-first routing model. Phase 2B and 2C can run in parallel after Phase 1 merges.

### Task 2.1: Individuals audience page

**Status:** Planned

**Branch:** `codex/individuals`

**Depends on:** Task 1.1 (shared form)

**Scope:**

- Create `app/individuals/page.tsx` + `individualsMetadata`
- Mirror `/families` structure, tuned for solo adults:
  - Hero: membership + local care team CTAs
  - Everyday-care scenario (HDHP frustration, urgent care detours)
  - Included / not included clarity
  - Pricing preview from `MEMBERSHIP_PLANS`
  - Single-clinic access block
  - Provider trust section
  - Individuals resource form (shared component)
  - FAQ accordion; quiz tertiary only
- Schedule CTA via `getDpcQuizScheduleLink("individual")`
- Update homepage `individualsRoute` from `/membership` → `/individuals`
- Add to sitemap; do not add to main nav unless explicitly decided

**Acceptance criteria:**

- [ ] `/individuals` builds statically
- [ ] Homepage Individuals card primary → `/individuals`
- [ ] Pricing from `MEMBERSHIP_PLANS` only; emergency disclaimer present
- [ ] Build + lint pass

**Key files:** `app/individuals/page.tsx`, `app/page.tsx`, `lib/metadata.ts`

---

### Task 2.2: Employers page refinement

**Status:** Planned

**Branch:** `codex/employers-refinement`

**Depends on:** Task 1.1 (employer resource form)

**Scope:**

- Refactor `app/employers/page.tsx` to audience-first layout (not quiz-first)
- Add section anchor: `id="employer-overview"` for overview + resource form
- Integrate shared Employer Overview form
- Primary CTAs: explore options, get overview, talk with team
- Contextual broker link in page footer section (not main nav)
- Demo scheduler via `getDpcQuizScheduleLink("employerCore")` (or `employerSmall` / `employerLarge` by team-size band)
- Audit/remove quiz-primary CTAs on this page
- Reconcile `/employers` vs `/for-employers` — clarify canonical employer inquiry path

**Acceptance criteria:**

- [ ] Homepage Employers card secondary can land on `#employer-overview`
- [ ] No quiz as primary CTA; broker link contextual only
- [ ] Build + lint pass

**Key files:** `app/employers/page.tsx`, `components/employers/*`

---

### Task 2.3: Brokers campaign landing refinement

**Status:** Planned

**Branch:** `codex/brokers-refinement`

**Depends on:** Task 1.1 (broker toolkit form)

**Scope:**

- Refactor `app/brokers/page.tsx` as outbound/campaign landing
- Add `id="broker-toolkit"` section with shared form
- Client-ready language, plan-fit context, local partner positioning
- No main nav addition (footer + homepage card + employer contextual links only)
- Quiz secondary if at all

**Acceptance criteria:**

- [ ] Homepage Brokers card secondary → `/brokers#broker-toolkit`
- [ ] Campaign-first copy; no fake savings/testimonials
- [ ] Build + lint pass

**Key files:** `app/brokers/page.tsx`

---

## Phase 3 — Location & Contact

**Goal:** Make the single-clinic story unmistakable and align nav language with strategy.

### Task 3.1: Location & Contact page

**Status:** Planned

**Branch:** `codex/location-contact`

**Depends on:** Phase 2 audience pages stable (contact intents from forms/pages)

**Scope:**

- Reposition `/contact` as **Location & Contact**
  - Page title, metadata, H1
  - Prominent address: 7911 N. Michigan Rd., Indianapolis, IN 46268
  - Hours, map/directions, parking/access notes if available
  - CTAs: “Visit Our Michigan Rd Clinic”, “Talk With Our Local Care Team”
- Preserve `?source=…&intent=…` query param handling for quiz and audience fallbacks
- Optional nav label change: `Contact` → `Location & Contact` in `lib/nav.ts`
- Audit sitewide for multi-location phrasing

**Acceptance criteria:**

- [ ] No “Find a provider near you” in active UI
- [ ] Contact page reads as single-clinic hub
- [ ] All existing contact intent URLs still work
- [ ] Build + lint pass

**Key files:** `app/contact/page.tsx`, `components/contact/*`, `lib/content/contact.ts`, `lib/nav.ts`

---

## Phase 4 — Trust, nav, and legacy cleanup

### Task 4.1: Providers / team consolidation

**Status:** Done (2026-06-10)

**Branch:** `codex/providers-team-consolidation`

**Scope:**

- Center provider trust on `/providers` and `/providers/[slug]`
- `/team` removed; 301 redirect `/team` and `/team/:path*` → `/providers` in `next.config.mjs`
- Nav “Our Team” → `/providers` (already the case in `lib/nav.ts`)
- `/about` CTA updated to `/providers`

**Deferred (separate branch):** Improve `/providers` hub layout and individual `/providers/[slug]` bios — not in this pass.

**Acceptance criteria:**

- [x] One canonical provider directory path
- [x] No conflicting team stories across `/team` and `/providers`
- [x] Build + lint pass

**Key files:** `app/providers/**`, `lib/nav.ts`, `next.config.mjs`, `app/about/page.tsx`

---

### Task 4.2: Sitewide CTA and quiz audit

**Status:** Planned

**Branch:** `codex/quiz-sitewide-audit`

**Scope:**

- Audit all pages for quiz-primary CTAs: `what-is-dpc`, `how-it-works`, `wraparound`, `membership`, location pages, legacy redirects
- Replace with audience-appropriate CTAs where needed
- Standardize sticky behavior: homepage no sticky quiz; deeper pages soft helper only
- Clean up page-level `DpcQuizTrigger` usage (prefer “Use the 60-second guide” over default label)
- Normalize line endings / `.gitattributes` if files like `StickySavingsBar.tsx` keep showing whitespace-only diffs

**Acceptance criteria:**

- [ ] Quiz appears as secondary helper, not primary, across public pages
- [ ] No CTA stacking issues on mobile
- [ ] Build + lint pass

**Key files:** `components/dpc-fit-quiz/*`, `components/StickySavingsBar.tsx`, audience and education pages

---

## Phase 5 — Demo scheduler wiring

### Task 5.1: Demo scheduler wiring pass

**Status:** Planned

**Branch:** `codex/demo-scheduler-wiring`

**Depends on:** Phases 2–3 (all audience pages exist)

**Scope:**

- Audit every “Talk With Our Local Care Team” / schedule CTA
- Ensure all use `getDpcQuizScheduleLink(audience)` pattern
- Extend `dpcQuizScheduleFallbacks` for individual, family, employer, broker intents
- Document optional env keys in `.env.example` as **future/optional**
- Keep fallbacks on `/contact?source=…&intent=…` until production URLs approved

**Acceptance criteria:**

- [ ] No broken `/schedule/*` links
- [ ] Consistent audience-intent contact fallbacks
- [ ] Build + lint pass

**Key files:** `lib/dpc-fit-quiz.ts`, `.env.example`, audience page CTAs

**Do not:** Require production Cal.com env vars for local dev.

---

## Phase 6 — Pre-launch operations (deferred)

**Do not start unless explicitly requested.**

### Task 6.1: Production analytics

**Branch:** `codex/analytics-production`

- GA4/GTM production configuration
- Tracking taxonomy implementation beyond no-op `trackEvent()`

### Task 6.2: Production scheduler

**Branch:** `codex/scheduler-production`

- Live Cal.com (or equivalent) scheduler URLs via env vars

### Task 6.3: HSA/FSA gates

**Branch:** `codex/hsa-fsa-gates`

- HSA/FSA approval-gated flows (currently no-touch zone)

### Task 6.4: Launch readiness

**Branch:** `codex/launch-readiness`

- Full QA sweep, Lighthouse, accessibility
- Sitemap/robots, domain canonicalization
- Final claims audit against approval register

---

## Optional later phases (not scheduled)

| Phase | Branch | When |
|-------|--------|------|
| Local SEO audit | `codex/local-seo-audit` | After Phase 3 — ensure `/locations/[neighborhood]` copy does not imply multiple clinics |
| Membership page polish | `codex/membership-polish` | After Phase 2 — align membership CTAs with audience routes |
| Mobile nav polish | `codex/mobile-nav-polish` | After Phase 3 — bottom bar labels, menu copy after contact rename |
| Claims auditor CI | `codex/claims-auditor-ci` | Pre-launch — wire claims auditor into CI |

---

## Phase dependency map

```
Phase 0 (done)
    │
    ▼
Phase 1: resource-lead-forms
    │
    ├──► Phase 2.1: individuals
    ├──► Phase 2.2: employers-refinement  ─┐
    └──► Phase 2.3: brokers-refinement   ─┤ (2.2 + 2.3 can parallel)
                                          │
                                          ▼
                              Phase 3: location-contact
                                          │
                    ┌─────────────────────┴─────────────────────┐
                    ▼                                           ▼
        Phase 4.1: providers-team          Phase 4.2: quiz-sitewide-audit
                    │                                           │
                    └─────────────────────┬─────────────────────┘
                                          ▼
                              Phase 5: demo-scheduler-wiring
                                          │
                                          ▼
                              Phase 6: pre-launch (deferred)
```
