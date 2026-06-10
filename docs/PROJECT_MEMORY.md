# Project Memory — DirectCare Indy Site

Short, durable context for coding agents. Read this before making code or content changes.

## Documentation hierarchy

```
README.md  →  PROJECT_MEMORY.md  →  detail docs
                  ▲
            single truth
                  │
    ROUTE-MAP · COMPONENT-MAP · DEVELOPMENT · MOBILE_APP_ARCHITECTURE · nav-map · QA-CHECKLIST
                  │
    CODEX_WORKFLOW · CODEX_BACKLOG  (implementation queue for Codex)
```

| Layer | File | Role |
|-------|------|------|
| Entry | [`README.md`](../README.md) | Project identity and doc index |
| **Canonical** | **This file** | Strategy, guardrails, pricing, navigation |
| Detail | [`DEVELOPMENT.md`](./DEVELOPMENT.md) | Stack and commands |
| Detail | [`ROUTE-MAP.md`](./ROUTE-MAP.md) | Routes and page files |
| Detail | [`COMPONENT-MAP.md`](./COMPONENT-MAP.md) | Components and content sources |
| Detail | [`MOBILE_APP_ARCHITECTURE.md`](./MOBILE_APP_ARCHITECTURE.md) | Mobile shell and bottom bar |
| Detail | [`nav-map.md`](./nav-map.md) | Navigation roles |
| Codex | [`CODEX_WORKFLOW.md`](./CODEX_WORKFLOW.md), [`CODEX_BACKLOG.md`](./CODEX_BACKLOG.md) | Repeatable workflow and next tasks |
| Agents | [`AGENTS.md`](../AGENTS.md), [`CLAUDE.md`](../CLAUDE.md) | Pointers only — no duplicated strategy |
| History | [`archive/`](./archive/) | Past implementation reports — not active guidance |

Do not duplicate this file’s rules in other docs. Other docs point **up** here.

---

## 1. Project identity

- Internal development build for the DirectCare Indy site concept.
- Vercel preview URL is for **internal team testing**.
- **Do not** add test-site banners or “demo” warning UI.
- **Do not** configure the production domain unless explicitly requested.

---

## 2. Core strategy

- Homepage = **audience routing page**, not a giant all-in-one brochure.
- Lead with **audience-specific CTAs** (individuals, families, employers) and local clinic trust.
- The DPC fit quiz is a **secondary** “not sure where to start?” tool — not the primary site CTA.
- **Do not** repeat “Is DPC Right for You? Take the 60-second quiz” across every audience card, sticky bar, and CTA section.
- Remove the **global header quiz CTA** from current strategy (quiz remains at `/quiz` and contextual secondary placements).

---

## 3. Current CTA and audience strategy

### Single clinic location

There is only one physical clinic:

**7911 N. Michigan Rd., Indianapolis, IN 46268**

- **Do not** use “Find a provider near you” or multi-location framing.
- Prefer labels such as:
  - “Visit Our Michigan Rd Clinic”
  - “See Location & Hours”
  - “Meet the Care Team”
  - “Talk With Our Local Care Team”
- Location source of truth: `lib/content/contact.ts`, `lib/constants.ts`

### Audience pages and CTAs

Each audience page should lead with audience-specific CTAs and resources — not the quiz.

| Audience | Route | Primary CTA direction |
|----------|-------|------------------------|
| Individuals | `/individuals` | Membership, local care team, pricing guide download |
| Families | `/families` | Family membership, Family Care Roadmap, schedule/contact |
| Employers | `/employers` | Employer overview download, rollout conversation |
| Brokers | `/brokers` (footer/context only) | Broker toolkit, partnership conversation |

Audience pages are **active** — not in main nav; discoverable via homepage cards, footer, and mobile menu quick links.

### Audience lead resources (gated forms)

Implemented via `lib/content/audience-resources.ts` and `components/audience/AudienceResourceForm.tsx`. Each audience has its own resource CTA and tailored form questions:

**Individuals** — *Transparent Membership & Add-On Pricing Guide*
- Collect: name, email, phone (optional), age range, insurance status, biggest care frustration, preferred contact method

**Families** — *Family Care Roadmap*
- Collect: name, email, phone (optional), household size, children ages 12+, biggest family care concern, preferred contact method

**Employers** — *Employer DPC Overview / Small-Team Healthcare Access Guide*
- Collect: name, company, role, email, phone (optional), employee count band, current benefits situation, renewal month if known, biggest workforce healthcare concern

**Brokers** — *Broker Toolkit / DPC Client Conversation Kit*
- Collect: name, firm, role, email, phone (optional), client size band, primary client industries, funding model focus, whether they want co-branded materials

### Demo scheduler (development)

- **Do not** require production scheduler env vars yet.
- Use demo-safe scheduler fallbacks until real Cal.com (or equivalent) links are configured.
- Pattern: `getDpcQuizScheduleLink()` in `lib/dpc-fit-quiz.ts` — env override when set, otherwise `dpcQuizScheduleFallbacks` (currently `/contact?source=quiz&intent=…`).
- Extend this pattern for audience-page schedule CTAs; keep all demo links safe for development (no broken `/schedule/*` routes).

### Analytics

- **Production GA4/GTM is deferred** — do not require production analytics setup for local dev.
- GTM is **env-gated**: loads only when `NEXT_PUBLIC_GTM_ID` is set (`app/layout.tsx`). Leave empty locally to disable.
- `lib/analytics.ts` is a no-op-safe bridge (`trackEvent` does nothing when `dataLayer` is unavailable).
- Do not add production integration work unless explicitly requested (see `CODEX_BACKLOG.md` Phase 8).

### Navigation notes

- **Brokers stay out of main nav** (`lib/nav.ts`). OK in footer, homepage audience card, and employer contextual links.
- **Provider trust is canonical on `/providers` and `/providers/[slug]`.** `/team` is removed; 301 redirect to `/providers` (`next.config.mjs`). Nav label “Our Team” → `/providers`.
- **Active care team roster** (source: `lib/data/providers.ts`): James D. Pike (Medical Director), Karina White (Lead PA), Chase Keirn (Lead PA). Do not list clinicians who are not on the approved roster (e.g. Maddie Klinger removed pending confirmation). Legacy `/providers/maddie-klinger` → `/providers`.
- **Providers UI:** `components/providers/*` (`ProvidersView`, `ProviderBioView`, `ProviderCard`, `RoundTableModelSection`). Hub CTAs: `/membership` + `/contact` — not quiz-primary. Quiz mobile sticky hidden on `/providers`.
- **`/contact` is Location & Contact** — nav label and page copy are location-first (`lib/nav.ts`, `components/contact/ContactPageContent.tsx`).

---

## 4. Active routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage (audience routing) |
| `/individuals` | Individuals audience page (not main nav) |
| `/families` | Families audience page (not main nav) |
| `/membership` | **Active pricing route** |
| `/what-is-dpc` | DPC education |
| `/employers` | Employer / B2B |
| `/brokers` | Broker campaign landing (not main nav) |
| `/providers` | Provider directory (canonical care team) |
| `/providers/[slug]` | Provider detail |
| `/contact` | Location & Contact — single-clinic hub |
| `/quiz` | Standalone DPC fit quiz (secondary tool) |

**Redirects:** `/pricing` → `/membership`, `/faq` → `/what-is-dpc#faq`, `/team` → `/providers`, `/providers/maddie-klinger` → `/providers` (`next.config.mjs`).

Full inventory: [`ROUTE-MAP.md`](./ROUTE-MAP.md). Next implementation queue: [`CODEX_BACKLOG.md`](./CODEX_BACKLOG.md) Phase 7+.

---

## 5. Navigation strategy

- Main nav: patient/member + employer audiences only.
- **Do not add brokers to `mainNav`** (`lib/nav.ts`).
- `/brokers` = targeted campaign landing for outbound broker outreach.
- Brokers OK in footer and employer-page contextual links.

Current main nav (`lib/nav.ts`): Membership Pricing, For Employers, What Is DPC?, Our Team (`/providers`), Location & Contact.

Mobile bottom bar: Membership Pricing, For Employers, What Is DPC?, Patient Login (external). Full menu adds main nav links plus audience quick links.

---

## 6. Pricing source of truth

**File:** `lib/content/membership-pricing.ts` — membership plans, pricing, benefits, additional-service pricing, pharmacy examples, disclaimers.

Homepage and membership page must import from this file; do not hardcode plan pricing.

| Plan | Price |
|------|-------|
| Individual | $79/month |
| Family | $200/month |
| Senior Adults | $119/month |

**Caveats:** family pricing may vary by household; additional children at discounted rates; pricing subject to change. Use “Call or text DirectCare Indy to confirm current pricing” where needed.

**Active UI:** `components/membership/MembershipPricingView.tsx`

---

## 7. Content guardrails

**Do not use:** old age-band pricing; $69/$89/$109 old plans; $250 family cap; exact monthly price calculators; fake testimonials; hard savings claims; guaranteed ROI/ER reduction; “DPC replaces insurance”; “unlimited care/visits”; generic quiz CTA spam.

**Use instead:** “may be a fit”, “can help”, “designed to support”, “when available”, “pricing subject to change”, “DPC is not insurance and does not replace major medical coverage”.

---

## 8. Quiz system

| Item | Location |
|------|----------|
| Config | `lib/dpc-fit-quiz.ts` |
| Components | `components/dpc-fit-quiz/*` |
| Page | `/quiz` |

- **Secondary tool only** — not the primary homepage or header CTA.
- Rules-based unless AI integration is explicitly requested.
- No medical history or urgent symptoms collection.
- Include medical disclaimer and 911 emergency guidance.
- Use `DpcQuizTrigger` / `DpcQuizCtaBand` sparingly — prefer audience-specific CTAs on audience pages.
- Sitewide demotion: no global header quiz; homepage sticky quiz hidden; `StickySavingsBar` → membership/contact; no `DpcQuizCtaBand` on `/membership`, `/employers`, or `/brokers`; mobile sticky hidden on `/`, `/quiz`, `/contact`, `/membership`, `/what-is-dpc`, `/providers`, `/individuals`, `/families`, `/employers`, `/brokers`.
- **Active quiz placements:** `/quiz` page; homepage tertiary band; one contextual band on `/what-is-dpc`; inline text link on `/individuals` and `/families` heroes only.

---

## 9. Employer / B2B strategy

- Position DPC as practical healthcare access benefit.
- Complement to major medical, not a replacement.
- Qualify employer/broker claims.
- Broker page is campaign-first, not main-nav-first.

---

## 10. Build and lint

- `npm run build` after meaningful code changes; `npm run lint`.
- Report known unrelated lint issues clearly; do not fix unless asked.

---

## 11. Agent workflow

1. Read this file before editing.
2. Inspect active imports before deleting files.
3. Small, focused changes only.
4. Avoid deprecated pricing/calculators.
5. See [`CODEX_WORKFLOW.md`](./CODEX_WORKFLOW.md) for Codex-specific steps and [`CODEX_BACKLOG.md`](./CODEX_BACKLOG.md) for the implementation queue.

Report: files changed, build result, lint result, follow-up issues.

---

## Deprecated — do not reintroduce

Removed files: `MembershipConfigurator`, `PricingCalculator`, `PricingTiers`, `SavingsPersonas`, `Testimonials`/`TestimonialsCarousel`, `TierDisplay`, `ValueBanner`, `LabPharmacySavingsTable`, `TheWraparoundGuide`, `lib/pricing.ts`, `RoundTableOverview` (replaced by `components/providers/RoundTableModelSection.tsx`), `SeniorSavingsCalculator`, `EmployerSavingsCalculator`.

Removed patterns: age-band pricing, family-cap logic, household calculators, active `/pricing` page (redirect only), quiz-first as primary site strategy, global header quiz CTA, “Find a provider near you”, `MEMBER_COUNT` footer social proof, savings calculators on SEO pages, `/team` page (redirect to `/providers`).

---

## No-touch zones

Unless explicitly requested: `app/api/**`, `app/join/**`, env files, Hint Health integration, payment/enrollment integrations, **GA4/GTM production setup**, **production scheduler env vars**, HSA/FSA gates.
