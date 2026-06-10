# Codex Backlog — Direct Care Indy

Phased implementation queue for audience-first site buildout.

> **Workflow:** [`CODEX_WORKFLOW.md`](./CODEX_WORKFLOW.md)  
> **Strategy:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md) § Current CTA and audience strategy  
> **Last growth audit:** June 10, 2026 (read-only; informs Phase 7+ below)

Each task should be a focused branch with `npm run build` + `npm run lint` verification before merge.

---

## Current baseline (on `main` + open PRs)

| Area | Status |
|------|--------|
| Homepage audience routing + quiz demotion | Done — PR #39 |
| `/families` audience page + Family Care Roadmap form | Done — PR #38 |
| Post-audit implementation (forms, individuals, contact, quiz, team) | Done — PR #40 |
| Shared audience resource forms (`AudienceResourceForm`) | Done — PR #40 |
| `/individuals` audience page | Done — PR #40 |
| `/employers` + `/brokers` audience-first refinement | Done — PR #40 |
| `/contact` → Location & Contact hub | Done — PR #40 |
| `/team` → `/providers` redirect | Done — PR #40 |
| `MEMBER_COUNT` footer + SEO calculators removed | Done — PR #40 |
| Env-gated GTM (`NEXT_PUBLIC_GTM_ID`) | Done — PR #40 |
| Dark mode / heading contrast (`@custom-variant dark`) | Done — PR #41 |
| `/providers` hub + bio polish | **Open — `codex/providers-bio-polish`** |
| Quiz demotion pass 2 (membership, employers, mobile sticky) | Planned — Phase 7.4 |
| Doc sync (`PROJECT_MEMORY`, `ROUTE-MAP`, this file) | Done — Phase 7.3 |
| Production scheduler / GA4 / domain cutover | Explicitly deferred — Phase 8 |

---

## Recommended merge order (next up)

| Order | Branch | Suggested PR title | Depends on |
|-------|--------|-------------------|------------|
| 1 | `codex/providers-bio-polish` | feat: redesign providers hub and provider bios | PR #41 merged |
| 2 | `codex/medigap-claims-governance` | fix: qualify Medigap blog savings claims | — |
| 4 | `codex/quiz-demote-pass-2` | chore: demote quiz on membership and B2B pages | — |
| 5 | `codex/employer-route-consolidation` | chore: redirect /for-employers to /employers | — |
| 6 | `codex/dead-code-cleanup` | chore: remove unused calculator components | — |
| 7 | `codex/pwa-shortcut-alignment` | fix: align PWA schedule shortcut with prospect path | — |
| 8 | `codex/demo-scheduler-wiring` | chore: audit scheduler CTAs (mostly done; verify) | Phases 0–4 |
| 9 | `codex/launch-readiness` | chore: production domain and indexing cutover | **Stakeholder gate — Phase 8** |

---

## Cross-cutting guardrails (every phase)

- Pricing from `lib/content/membership-pricing.ts` only — no hardcoded plan prices
- Single clinic: **7911 N. Michigan Rd., Indianapolis, IN 46268** — no multi-location framing
- **Brokers stay out of `mainNav`** (`lib/nav.ts`)
- Quiz is **secondary** — not the primary CTA on homepage or audience pages
- No fake testimonials, ratings, savings guarantees, or “unlimited visits/care”
- No “DPC replaces insurance”, family cap, or exact-price calculators
- No GA4/GTM or production scheduler env setup unless Phase 8 is explicitly opened
- Prohibited phrase scan on changed app files before merge

---

## Phases 0–5 — Completed (summary)

<details>
<summary>Phase 0 — Foundation (PR #38, #39)</summary>

- [x] Homepage audience-first routing; global header quiz CTA removed
- [x] `/families` audience page + Family Care Roadmap form
- [x] Documentation and agent pointer setup

</details>

<details>
<summary>Phase 1 — Lead capture (PR #40)</summary>

- [x] `lib/content/audience-resources.ts` — four resource configs
- [x] `components/audience/AudienceResourceForm.tsx` — shared form
- [x] `FamilyCareRoadmapForm` refactored to thin wrapper
- [x] `/api/leads` extended for all resource types + analytics events

</details>

<details>
<summary>Phase 2 — Audience pages (PR #40)</summary>

- [x] `/individuals` page + `individualsMetadata`; homepage routes to `/individuals`
- [x] `/employers` — `#employer-overview`, resource form, quiz demoted
- [x] `/brokers` — toolkit first, `#broker-toolkit`, resource form

</details>

<details>
<summary>Phase 3 — Location & Contact (PR #40)</summary>

- [x] Contact page location-first layout
- [x] Nav label **Location & Contact** (`lib/nav.ts`)
- [x] Metadata and copy updates

</details>

<details>
<summary>Phase 4 — Trust and quiz (PR #40 + partial)</summary>

- [x] **4.1** `/team` removed; 301 → `/providers`; `/about` CTA updated
- [x] **4.2 (partial)** Sticky bar → membership/contact; mobile menu audience links; quiz hidden on `/membership`, `/what-is-dpc`
- [ ] **4.2 (remainder)** Quiz bands on `/membership`, `/employers`, `/brokers`; mobile sticky scope — see Phase 7.4

</details>

<details>
<summary>Phase 5 — Demo scheduler (PR #40 + verify)</summary>

- [x] `getDpcQuizScheduleLink()` on membership, employers, brokers
- [ ] Full sitewide audit — see Task 7.8

</details>

---

## Phase 7 — Post-audit growth (active queue)

Prioritized from June 10, 2026 growth audit. **Start here** after PR #41 merges.

### Task 7.1: Merge dark mode / heading contrast fix

**Status:** Ready — PR #41 (`fix/text-contrast-dark-mode`)

**Priority:** P0 — blocks trustworthy Vercel QA for OS-dark-mode users

**Scope:**

- `@custom-variant dark` in `app/globals.css` (class-based, matches `next-themes`)
- `.heading-1` / `.heading-2` / `.heading-3` use `text-foreground` not `dark:text-gray-100`

**Acceptance criteria:**

- [ ] PR #41 merged to `main`
- [ ] On Vercel preview with `<html class="light">`, `h2.heading-2` computes to `#0f172a` when OS prefers dark

**Key files:** `app/globals.css`

---

### Task 7.2: Providers hub and bio polish

**Status:** Done — branch `codex/providers-bio-polish` (PR pending)

**Priority:** P1 — highest trust/conversion gap after audience pages

**Depends on:** Task 7.1 (merged PR #41)

**Delivered:**

- [x] `components/providers/*` — hub (`ProvidersView`), bios (`ProviderBioView`), shared `ProviderCard`, clinical `RoundTableModelSection`, sticky `ProvidersSectionNav`
- [x] Mobile-first layout aligned with membership/individuals design tokens
- [x] Hub + bio CTAs: `/membership` + `/contact` (not quiz-primary)
- [x] `carePhilosophy` + `idealFor` on active provider bios in `lib/data/providers.ts`
- [x] Shared `ProviderCard` on homepage, `/individuals`, `/families`
- [x] Active roster: **james-pike**, **karina-white**, **chase-keirn** only (Maddie Klinger removed; `/providers/maddie-klinger` → `/providers`)
- [x] Retired `RoundTableOverview.tsx`
- [x] Quiz mobile sticky hidden on `/providers`
- [x] Build + lint pass

**Key files:** `components/providers/*`, `app/providers/**`, `lib/data/providers.ts`, `next.config.mjs`

---

### Task 7.3: Documentation sync (post PR #40)

**Status:** Done (2026-06-10)

**Branch:** `codex/doc-sync-post-audit` *(can commit on current branch)*

**Priority:** P1 — prevents agents re-implementing completed work

**Scope (completed):**

- [x] `PROJECT_MEMORY.md` — active audience routes, Location & Contact, `/team` redirect, GTM env-gate, quiz demotion status, deprecated patterns
- [x] `ROUTE-MAP.md` — `/individuals` Active, contact/employers/brokers notes updated
- [x] `CODEX_BACKLOG.md` — baseline and Phase 7 queue from growth audit

**Remaining (optional):** Trim `COMPONENT-MAP.md` deprecated component list if agents confuse it with active code.

**Key files:** `docs/PROJECT_MEMORY.md`, `docs/ROUTE-MAP.md`, `docs/CODEX_BACKLOG.md`

---

### Task 7.4: Quiz demotion pass 2

**Status:** Planned

**Branch:** `codex/quiz-demote-pass-2`

**Priority:** P2 — strategy alignment

**Scope:**

- Remove or downgrade `DpcQuizCtaBand` on `/membership`, `/employers`, `/brokers` where audience/resource CTAs already lead
- Narrow `DpcQuizMobileSticky` `HIDDEN_PATHS` to include `/individuals`, `/families`, `/brokers`
- Keep quiz on `/quiz`, homepage tertiary band, and “New to DPC” card secondary link
- Verify no mobile CTA stacking conflicts with `MobileAppBar`

**Acceptance criteria:**

- [ ] Quiz is clearly secondary on membership and B2B pages
- [ ] No quiz-primary placement on audience resource form sections
- [ ] Build + lint pass

**Key files:** `components/membership/MembershipPricingView.tsx`, `components/employers/EmployersView.tsx`, `app/brokers/page.tsx`, `components/dpc-fit-quiz/DpcQuizMobileSticky.tsx`

---

### Task 7.5: Medigap blog claims governance

**Status:** Planned

**Branch:** `codex/medigap-claims-governance`

**Priority:** P1 — compliance / SEO risk

**Scope:**

- Review `app/blog/indiana-medigap-birthday-rule-2026/page.tsx` and `layout.tsx`
- Qualify or soften: “Massive Savings”, specific Medigap dollar ranges, “15–25%” savings without attribution
- Keep senior plan pricing from `MEMBERSHIP_PLANS` only
- Cross-check `docs/CONTENT-GOVERNANCE.md` and claims register before merge
- `HsaStatusTracker` / OBBBA copy remains approval-gated (`NEXT_PUBLIC_HSA_APPROVED`)

**Acceptance criteria:**

- [ ] No unqualified guaranteed savings in H1, meta title, or lead paragraph
- [ ] Pricing still imported from `membership-pricing.ts`
- [ ] Build + lint pass; prohibited phrase scan clean

**Key files:** `app/blog/indiana-medigap-birthday-rule-2026/**`

---

### Task 7.6: Employer route consolidation

**Status:** Planned

**Branch:** `codex/employer-route-consolidation`

**Priority:** P2 — IA / SEO

**Scope:**

- Canonical B2B path: `/employers`
- Redirect `/for-employers` → `/employers` (or merge content then redirect)
- Update `app/sitemap.ts` and internal links
- Document canonical path in `ROUTE-MAP.md`

**Acceptance criteria:**

- [ ] One employer inquiry destination in nav, sitemap, and CTAs
- [ ] Build + lint pass

**Key files:** `app/for-employers/page.tsx`, `next.config.mjs`, `app/sitemap.ts`

---

### Task 7.7: Dead code cleanup — calculators

**Status:** Planned

**Branch:** `codex/dead-code-cleanup`

**Priority:** P3 — maintainability

**Scope:**

- Remove or archive unused `components/SeniorSavingsCalculator.tsx`, `components/EmployerSavingsCalculator.tsx` after grep confirms zero imports
- Do not re-add calculators to location or blog pages

**Acceptance criteria:**

- [ ] No public page imports deprecated calculators
- [ ] Build + lint pass

---

### Task 7.8: Demo scheduler wiring verification

**Status:** Mostly done — verification pass

**Branch:** `codex/demo-scheduler-wiring`

**Priority:** P3

**Scope:**

- Audit every schedule / “Talk With Our Local Care Team” CTA sitewide
- Confirm `getDpcQuizScheduleLink()` pattern; no broken `/schedule/*`
- Document optional env keys in `.env.example` only — no production requirement

**Acceptance criteria:**

- [ ] All schedule CTAs use fallbacks or env overrides
- [ ] Build + lint pass

**Key files:** `lib/dpc-fit-quiz.ts`, audience pages, `MembershipPricingView.tsx`

---

### Task 7.9: PWA manifest shortcut alignment

**Status:** Planned

**Branch:** `codex/pwa-shortcut-alignment`

**Priority:** P3 — mobile conversion clarity

**Scope:**

- `public/manifest.json` shortcut “Book Appointment” currently → `/join` (member enrollment)
- Repoint prospect scheduling to `/contact` or demo scheduler pattern until production URLs approved
- Keep Patient Portal shortcut → Hint login

**Acceptance criteria:**

- [ ] PWA shortcuts distinguish member vs prospect paths
- [ ] Build + lint pass

**Key files:** `public/manifest.json`

---

## Phase 8 — Pre-launch operations (deferred)

**Do not start unless explicitly requested.**

### Task 8.1: Production domain and indexing cutover

**Branch:** `codex/launch-readiness`

**Priority:** P0 at launch — currently blocks organic SEO on Vercel preview

**Scope:**

- Set `NEXT_PUBLIC_SITE_URL` to production domain
- Verify `IS_DEMO === false` so `app/sitemap.ts` and `app/robots.ts` allow indexing
- Full QA sweep, Lighthouse, accessibility
- Final claims audit against approval register

**Key files:** `lib/site.ts`, Vercel env, `app/robots.ts`, `app/sitemap.ts`

### Task 8.2: Production analytics

**Branch:** `codex/analytics-production`

- GA4/GTM production configuration (`NEXT_PUBLIC_GTM_ID` pattern exists)

### Task 8.3: Production scheduler

**Branch:** `codex/scheduler-production`

- Live Cal.com (or equivalent) URLs via env vars in `getDpcQuizScheduleLink()`

### Task 8.4: HSA/FSA gates

**Branch:** `codex/hsa-fsa-gates`

- HSA/FSA approval-gated flows (`NEXT_PUBLIC_HSA_APPROVED`)

---

## Optional later phases (not scheduled)

| Phase | Branch | When |
|-------|--------|------|
| Content marketing | `codex/blog-hub` | After Task 7.5 — blog index + second senior/employer post |
| Local SEO audit | `codex/local-seo-audit` | Qualify location page copy; internal links from audience pages |
| Membership page polish | `codex/membership-polish` | After Task 7.4 — align CTAs with audience routes |
| Mobile nav polish | `codex/mobile-nav-polish` | Bottom bar: Contact or Individuals discoverability |
| Claims auditor CI | `codex/claims-auditor-ci` | Pre-launch — wire claims auditor into CI |
| Turbopack root warning | `codex/turbopack-root` | Set `turbopack.root` in `next.config.mjs` (multiple lockfiles) |

---

## Phase dependency map (current)

```
Phases 0–5 (done, PR #38–#40)
    │
    ▼
Task 7.1: merge PR #41 (dark mode contrast)
    │
    ├──► Task 7.3: doc-sync-post-audit
    ├──► Task 7.2: providers-bio-polish  ◄── highest feature ROI
    ├──► Task 7.5: medigap-claims-governance
    │
    ├──► Task 7.4: quiz-demote-pass-2
    ├──► Task 7.6: employer-route-consolidation
    ├──► Task 7.7: dead-code-cleanup
    ├──► Task 7.9: pwa-shortcut-alignment
    └──► Task 7.8: demo-scheduler verification
              │
              ▼
        Phase 8: pre-launch (stakeholder gate)
```

---

## 90-day roadmap (audit summary)

| Sprint | Weeks | Focus |
|--------|-------|--------|
| **A** | 1–2 | Merge PR #41; doc sync (7.3); Medigap claims (7.5); quiz demote pass 2 (7.4) |
| **B** | 3–6 | Providers bio polish (7.2); cross-links from audience pages |
| **C** | 7–10 | Employer route consolidation (7.6); dead code (7.7); PWA shortcuts (7.9); blog hub (optional) |
| **D** | Stakeholder | Phase 8 — domain cutover, scheduler, GA4, HSA gates |
