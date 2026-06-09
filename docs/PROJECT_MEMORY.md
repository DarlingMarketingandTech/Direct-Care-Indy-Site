# Project Memory — DirectCare Indy Site

Short, durable context for coding agents. Read this before making code or content changes.

---

## 1. Project identity

- Internal development build for the DirectCare Indy site concept.
- Vercel preview URL is for **internal team testing**.
- **Do not** add test-site banners or “demo” warning UI.
- **Do not** configure the production domain unless explicitly requested.

---

## 2. Core strategy

- Site is **quiz-first**; main CTA: **“Is DPC Right for You?”**
- Quiz routes visitors to: individual membership, family membership, senior/Medicare membership, employer options, broker conversation, general DPC education.
- Homepage = **routing page**, not a giant all-in-one brochure.

---

## 3. Active routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage (quiz-first) |
| `/membership` | **Active pricing route** |
| `/what-is-dpc` | DPC education |
| `/employers` | Employer / B2B |
| `/brokers` | Broker campaign landing (not main nav) |
| `/providers` | Team / providers |
| `/contact` | Contact |
| `/quiz` | Standalone DPC fit quiz |

- `/membership` is the active pricing route; `/pricing` is not primary.
- `/pricing` should redirect to `/membership` (`next.config.mjs`).

---

## 4. Navigation strategy

- Main nav: patient/member + employer audiences only.
- **Do not add brokers to `mainNav`** (`lib/nav.ts`).
- `/brokers` = targeted campaign landing for outbound broker outreach.
- Brokers OK in footer and employer-page contextual links.

Current main nav: Membership Pricing, For Employers, What Is DPC?, Our Team, Contact.

---

## 5. Pricing source of truth

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

## 6. Content guardrails

**Do not use:** old age-band pricing; $69/$89/$109 old plans; $250 family cap; exact monthly price calculators; fake testimonials; hard savings claims; guaranteed ROI/ER reduction; “DPC replaces insurance”; “unlimited care/visits”.

**Use instead:** “may be a fit”, “can help”, “designed to support”, “when available”, “pricing subject to change”, “DPC is not insurance and does not replace major medical coverage”.

---

## 7. Quiz system

| Item | Location |
|------|----------|
| Config | `lib/dpc-fit-quiz.ts` |
| Components | `components/dpc-fit-quiz/*` |
| Page | `/quiz` |

- Rules-based unless AI integration is explicitly requested.
- No medical history or urgent symptoms collection.
- Include medical disclaimer and 911 emergency guidance.
- Prefer `DpcQuizTrigger` / `DpcQuizCtaBand` over legacy pricing CTAs.

---

## 8. Employer / B2B strategy

- Position DPC as practical healthcare access benefit.
- Complement to major medical, not a replacement.
- Qualify employer/broker claims.
- Broker page is campaign-first, not main-nav-first.

---

## 9. Build and lint

- `npm run build` after meaningful code changes; `npm run lint`.
- Report known unrelated lint issues clearly; do not fix unless asked.

---

## 10. Agent workflow

1. Read this file before editing.
2. Inspect active imports before deleting files.
3. Small, focused changes only.
4. Avoid deprecated pricing/calculators.

Report: files changed, build result, lint result, follow-up issues.

---

## Deprecated — do not reintroduce

Removed files: `MembershipConfigurator`, `PricingCalculator`, `PricingTiers`, `SavingsPersonas`, `Testimonials`/`TestimonialsCarousel`, `TierDisplay`, `ValueBanner`, `LabPharmacySavingsTable`, `TheWraparoundGuide`, `lib/pricing.ts`.

Removed patterns: age-band pricing, family-cap logic, household calculators, active `/pricing` page (redirect only).

---

## No-touch zones

Unless explicitly requested: `app/api/**`, `app/join/**`, env files, Hint Health integration, payment/enrollment integrations.
