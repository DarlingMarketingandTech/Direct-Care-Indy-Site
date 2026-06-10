# Codex Backlog — Direct Care Indy

Phased implementation queue for audience-first site buildout.

> **Workflow:** [`CODEX_WORKFLOW.md`](./CODEX_WORKFLOW.md)  
> **Strategy:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md) § Current CTA and audience strategy  
> **Last growth audit:** June 10, 2026 (post–PR #43; read-only; informs Phase 7+ below)

Each task should be a focused branch with `npm run build` + `npm run lint` verification before merge.

---

## Growth audit snapshot (June 10, 2026 — post–PR #43)

| Dimension | Score | Notes |
|-----------|-------|-------|
| Architecture | 9 | Providers module, governed pricing, env-gated GTM |
| Conversion | 8 | Audience routing + resource forms strong; quiz demotion pass 2 in 7.4 |
| SEO | 6 | Preview noindexed (`IS_DEMO`); Medigap claims fixed in 7.5; orphan routes open |
| Content | 7 | Core pages governed; 24/7 / savings language on location SEO routes |
| Documentation | 8 | Strategy docs accurate; this backlog updated post-audit |
| Maintainability | 8 | Deprecated savings calculators removed (7.7); minor doc drift in `MOBILE_APP_ARCHITECTURE.md` |

**Top open risks:** Production indexing blocked until Phase 8, location SEO claims (optional follow-up).

**Verified on `main`:** `npm run build` + `npm run lint` pass; 49 static pages; 3 provider bios.

---

## Current baseline (on `main`)

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
| Doc sync (`PROJECT_MEMORY`, `ROUTE-MAP`, `COMPONENT-MAP`) | Done — PR #42 |
| `/providers` hub + bio polish | Done — PR #43 |
| Medigap blog claims governance | Done — PR #44 |
| Quiz demotion pass 2 (membership, employers, brokers, mobile sticky) | Done — PR #45 |
| `/for-employers` sitemap cleanup (redirect exists) | Done — PR #46 |
| Unused savings calculators removed | Done — PR #47 |
| Production scheduler / GA4 / domain cutover | Explicitly deferred — Phase 8 |

---

## Recommended merge order (next up)

| Order | Branch | Suggested PR title | Depends on |
|-------|--------|-------------------|------------|
| 1 | `codex/pwa-shortcut-alignment` | fix: align PWA schedule shortcut with prospect path | — |
| 2 | `codex/launch-readiness` | chore: production domain and indexing cutover | **Stakeholder gate — Phase 8** |

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
- [x] **4.2 (remainder)** Quiz bands removed; mobile sticky scope extended — Task 7.4

</details>

<details>
<summary>Phase 5 — Demo scheduler (PR #40 + verify)</summary>

- [x] `getDpcQuizScheduleLink()` on membership, employers, brokers
- [ ] Full sitewide audit — see Task 7.8

</details>

---

## Phase 7 — Post-audit growth (active queue)

Prioritized from June 10, 2026 growth audits (initial + post–PR #43). **Start here:** Task 7.5 (compliance), then Task 7.4 (quiz strategy).

### Task 7.1: Merge dark mode / heading contrast fix

**Status:** Done — PR #41 (`fix/text-contrast-dark-mode`)

**Priority:** P0 — blocks trustworthy Vercel QA for OS-dark-mode users

**Scope:**

- `@custom-variant dark` in `app/globals.css` (class-based, matches `next-themes`)
- `.heading-1` / `.heading-2` / `.heading-3` use `text-foreground` not `dark:text-gray-100`

**Acceptance criteria:**

- [x] PR #41 merged to `main`
- [x] On Vercel preview with `<html class="light">`, `h2.heading-2` computes to `#0f172a` when OS prefers dark

**Key files:** `app/globals.css`

**Follow-up (optional):** Navbar / `MobileAppBar` still use light-only hardcoded colors; `ThemeToggle` not mounted — see optional `codex/mobile-nav-polish`.

---

### Task 7.2: Providers hub and bio polish

**Status:** Done — PR #43 (`codex/providers-bio-polish`)

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

**Status:** Done — PR #42 (`codex/doc-sync-post-audit`, 2026-06-10)

**Branch:** `codex/doc-sync-post-audit`

**Priority:** P1 — prevents agents re-implementing completed work

**Scope (completed):**

- [x] `PROJECT_MEMORY.md` — active audience routes, Location & Contact, `/team` redirect, GTM env-gate, quiz demotion status, deprecated patterns
- [x] `ROUTE-MAP.md` — `/individuals` Active, contact/employers/brokers notes updated
- [x] `CODEX_BACKLOG.md` — baseline and Phase 7 queue from growth audit

**Remaining (optional):** Trim `COMPONENT-MAP.md` deprecated component list if agents confuse it with active code.

**Key files:** `docs/PROJECT_MEMORY.md`, `docs/ROUTE-MAP.md`, `docs/CODEX_BACKLOG.md`

---

### Task 7.4: Quiz demotion pass 2

**Status:** Done — PR #45 (`codex/quiz-demote-pass-2`)

**Priority:** P1 — strategy alignment (audit: quiz still competes on membership/B2B)

**Delivered:**

- [x] Removed `DpcQuizCtaBand` from `/membership`, `/employers`, `/brokers`
- [x] Extended `DpcQuizMobileSticky` `HIDDEN_PATHS` to `/individuals`, `/families`, `/employers`, `/brokers`
- [x] Kept quiz on `/quiz`, homepage tertiary band, `/what-is-dpc` contextual band, individuals/families inline links
- [x] Updated `PROJECT_MEMORY.md` §8 and `MOBILE_APP_ARCHITECTURE.md`

**Key files:** `components/membership/MembershipPricingView.tsx`, `components/employers/EmployersView.tsx`, `app/brokers/page.tsx`, `components/dpc-fit-quiz/DpcQuizMobileSticky.tsx`

---

### Task 7.5: Medigap blog claims governance

**Status:** Done — PR #44 (`codex/medigap-claims-governance`)

**Priority:** P0 — compliance / SEO risk (audit critical finding #1)

**Delivered:**

- [x] Qualified H1, meta title, description, OG, and Twitter — removed “Massive Savings” / “maximum savings”
- [x] Removed specific Medigap dollar ranges (`$217`, `15–25%`, `$400–$650`, `$4,560+`)
- [x] Reframed stack box as illustrative categories with broker/tax-advisor guidance
- [x] Senior pricing still from `MEMBERSHIP_PLANS` only
- [x] `HsaStatusTracker` gated behind `NEXT_PUBLIC_HSA_APPROVED`; qualified HSA fallback copy
- [x] CTA aligned to “Talk with our local care team”; `/seniors` link → `/membership#membership-plans`
- [x] Strengthened disclaimer (illustrative examples; individual results vary)

**Deferred (follow-up `codex/local-seo-audit`):** location pages, `lib/content/dpc.ts`, `ninety-ten-model.svg`

**Key files:** `app/blog/indiana-medigap-birthday-rule-2026/**`

---

### Task 7.6: Employer route consolidation

**Status:** Done — PR #46 (`codex/employer-route-consolidation`)

**Priority:** P2 — IA / SEO (audit finding #8)

**Delivered:**

- [x] Canonical B2B path: `/employers`
- [x] Redirect `/for-employers` → `/employers` (`app/for-employers/page.tsx`)
- [x] Removed `/for-employers` from `app/sitemap.ts`
- [x] Documented redirect in `ROUTE-MAP.md` + sitemap exclusion policy
- [x] Grep: no stale internal links in app code

**Key files:** `app/for-employers/page.tsx`, `app/sitemap.ts`, `docs/ROUTE-MAP.md`

---

### Task 7.7: Dead code cleanup — calculators

**Status:** Done — PR #47 (`codex/dead-code-cleanup`)

**Priority:** P3 — maintainability

**Delivered:**

- [x] Removed unused `components/SeniorSavingsCalculator.tsx` (zero imports)
- [x] Removed unused `components/EmployerSavingsCalculator.tsx` (zero imports)
- [x] Updated `PROJECT_MEMORY.md` and `COMPONENT-MAP.md` deprecated lists
- [x] No public page imports deprecated calculators

**Acceptance criteria:**

- [x] No public page imports deprecated calculators
- [x] Build + lint pass

---

### Task 7.8: Demo scheduler wiring verification

**Status:** Done — branch `codex/demo-scheduler-wiring` (PR pending)

**Branch:** `codex/demo-scheduler-wiring`

**Priority:** P3

**Delivered (June 10, 2026 audit):**

- [x] Grep: zero `/schedule/*` routes in app code; legacy paths documented in `lib/dpc-fit-quiz.ts` only
- [x] All high-intent schedule CTAs use `getDpcQuizScheduleLink()` with `/contact?source=quiz&intent=…` fallbacks
- [x] Surfaces verified: `/individuals`, `/families`, `/membership`, `/employers`, `/brokers`, quiz results
- [x] Optional env keys documented in `.env.example`; inventory added to `docs/DEVELOPMENT.md`
- [x] `/employers/virtual-intro` remains demo preview (mailto/phone) — not a broken scheduler route

**Acceptance criteria:**

- [x] All schedule CTAs use fallbacks or env overrides
- [x] Build + lint pass

**Key files:** `lib/dpc-fit-quiz.ts`, `.env.example`, `docs/DEVELOPMENT.md`

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
| Local SEO / orphan routes | `codex/local-seo-audit` | Qualify location copy; IA decision on `/pulmonary`, `/services-included`, `/welcome`; update `ROUTE-MAP.md` |
| Membership page polish | `codex/membership-polish` | After Task 7.4 — align CTAs with audience routes |
| Mobile nav polish | `codex/mobile-nav-polish` | Bottom bar: Our Team or Location discoverability; navbar semantic dark tokens |
| Claims auditor CI | `codex/claims-auditor-ci` | Pre-launch — wire claims auditor into CI |
| Turbopack root warning | `codex/turbopack-root` | Set `turbopack.root` in `next.config.mjs` (multiple lockfiles) |
| Doc hygiene | `codex/mobile-arch-doc-sync` | Align `MOBILE_APP_ARCHITECTURE.md` with `HIDDEN_PATHS` + Location & Contact label |

---

## Phase dependency map (current)

```
Phases 0–5 (done, PR #38–#40)
    │
    ▼
Task 7.1: dark mode contrast ────────────── DONE (PR #41)
Task 7.3: doc-sync-post-audit ───────────── DONE (PR #42)
Task 7.2: providers-bio-polish ──────────── DONE (PR #43)
    │
    ├──► Task 7.5: medigap-claims-governance ── DONE (PR #44)
    ├──► Task 7.4: quiz-demote-pass-2 ─────── DONE (PR #45)
    ├──► Task 7.6: employer-route-consolidation ─ DONE (PR #46)
    ├──► Task 7.7: dead-code-cleanup ─ DONE (PR #47)
    ├──► Task 7.8: demo-scheduler-wiring ─ DONE (PR pending)
    ├──► Task 7.9: pwa-shortcut-alignment  ◄── NEXT (PR pending on branch)
              │
              ▼
        Phase 8: pre-launch (stakeholder gate)
```

---

## 90-day roadmap (post–PR #43 audit)

| Sprint | Weeks | Focus |
|--------|-------|--------|
| **A** | 1–2 | Medigap claims (7.5); quiz demote pass 2 (7.4); finish employer sitemap (7.6) |
| **B** | 3–4 | Local SEO / orphan route IA; qualify location 24/7 and savings copy |
| **C** | 5–8 | Dead code (7.7); PWA shortcuts (7.9); scheduler audit (7.8); optional blog hub |
| **D** | Stakeholder | Phase 8 — domain cutover, indexing, scheduler, GA4, HSA gates |
