# Route Map

Routes in the DirectCare Indy website repo. Maps each route to components and identifies risky claim locations.

## Public B2C Routes

| Route | File | Status | Components | Risky Claims |
|-------|------|--------|-----------|--------------|
| `/` | `app/page.tsx` | Active | MembershipConfigurator, SavingsPersonas, Testimonials, PricingTiers | Pricing, savings, testimonials, HSA |
| `/pricing` | `app/pricing/page.tsx` | Active | PricingCalculator, PricingTiers | Pricing, HSA badge |
| `/membership` | `app/membership/page.tsx` | Active | TierDisplay, LabPharmacySavingsTable, Testimonials | Lab/pharmacy pricing, savings, testimonials |
| `/how-it-works` | `app/how-it-works/page.tsx` | Active | OnboardingTimeline | Low risk (process language) |
| `/faq` | `app/faq/page.tsx` | Active | FAQ content | Varies (check content) |
| `/about` | `app/about/page.tsx` | Active | Inline content | Credentials (safe) |
| `/hdhp-families` | `app/hdhp-families/page.tsx` | Active | Inline content | HDHP messaging (check language) |
| `/uninsured` | `app/uninsured/page.tsx` | Active | Inline content | Affordability messaging (check) |
| `/seniors` | `app/seniors/page.tsx` | Active | Inline content | Senior benefits (check) |
| `/blog/indiana-medigap-birthday-rule-2026` | `app/blog/*/page.tsx` | Active | Markdown-like content | Educational (low risk) |
| `/locations/[neighborhood]` | `app/locations/[neighborhood]/page.tsx` | Active | Dynamic routing | Address/contact (safe) |
| `/providers` | `app/providers/page.tsx` | Active | Provider listing | Credentials (safe) |
| `/providers/[slug]` | `app/providers/[slug]/page.tsx` | Active | Provider details | Credentials (safe) |
| `/wraparound` | `app/wraparound/page.tsx` | Active | Inline content | Catastrophic insurance partnerships |
| `/partnerships` | `app/partnerships/page.tsx` | Active | Inline content | Partner info (check) |

## B2B/Employer Routes

| Route | File | Status | Components | Risky Claims |
|-------|------|--------|-----------|--------------|
| `/employers` | `app/employers/page.tsx` | Active | Inline content | Employer messaging (deferred) |
| `/for-employers` | `app/for-employers/page.tsx` | Active | EmployerDemoForm | Contact form (low risk) |

## DO NOT TOUCH Routes

| Route | File | Reason | Status |
|-------|------|--------|--------|
| `/join` | `app/join/page.tsx` | Hint Health enrollment flow | UNTOUCHABLE |
| `/join/success` | `app/join/success/page.tsx` | Enrollment success page | UNTOUCHABLE |
| `/api/**` | `app/api/*` | API routes, webhooks, integrations | UNTOUCHABLE |
| `/offline` | `app/offline/page.tsx` | Service worker offline page | UNTOUCHABLE |

## Route-to-Component Details

### Homepage (`/`)

**File:** `app/page.tsx`

**Components:**
1. `MembershipConfigurator` — Pricing calculator, member type selection
2. `SavingsPersonas` — Estimated savings ($2,400/yr, $4,560/yr, $4,700/employee)
3. `Testimonials` — Member quotes with savings (approval-gated)
4. `PricingTiers` — Tiered pricing display with HSA badge (env-gated)
5. `SavingsPersonas` — Personas with savings estimates
6. `NinetyTenSwitcher` — Toggle between messaging styles
7. `PortalPreview` — Patient portal demo
8. `TestimonialsCarousel` — Carousel version of testimonials

**Risky Claims:**
- Pricing ($85–$110, $250 family cap)
- Savings estimates (qualified)
- Testimonial savings amounts (gated)
- HSA badge (env-gated)

**Safety Status:** ✓ Mostly gated; pricing disclaimer added

---

### Pricing Page (`/pricing`)

**File:** `app/pricing/page.tsx`

**Components:**
1. `PricingCalculator` — Interactive pricing tool
2. `PricingTiers` — Tier display with HSA badge (env-gated)
3. `ComparisonTable` — DPC vs. insurance comparison
4. `IncludedMatrix` — Services included matrix
5. `MembershipValue` — Value proposition

**Risky Claims:**
- Pricing tiers and rates
- HSA eligibility claims (gated)
- Service comparisons (check language)

**Safety Status:** ✓ Pricing disclaimer added; HSA badge gated

---

### Membership Page (`/membership`)

**File:** `app/membership/page.tsx`

**Components:**
1. `TierDisplay` — Plan selection
2. `LabPharmacySavingsTable` — Lab/pharmacy pricing examples
3. `Testimonials` — Member quotes (approval-gated)
4. `IncludedMatrix` — Service features

**Risky Claims:**
- Lab pricing ($5 lipid panel examples)
- Pharmacy pricing ($3 generic examples)
- Testimonial savings (gated)
- Savings examples in table

**Safety Status:** ⚠️ Lab/pharmacy examples need verification

---

### How It Works Page (`/how-it-works`)

**File:** `app/how-it-works/page.tsx`

**Components:**
1. `OnboardingTimeline` — Step-by-step onboarding
2. `Telehealth feature cards` — Secure messaging, video, phone

**Risky Claims:** Low risk (process language, not outcome claims)

**Safety Status:** ✓ Insurance disclaimer added

---

### FAQ Page (`/faq`)

**File:** `app/faq/page.tsx`

**Components:** Likely FAQ data structure (inline or from lib/)

**Risky Claims:** Varies; check content against claims register

**Safety Status:** Needs audit

---

## Component Dependency Graph

```
app/page.tsx
├── MembershipConfigurator
│   └── Pricing member types
├── SavingsPersonas
│   └── Estimated savings
├── Testimonials
│   └── Savings, customer quotes (gated)
└── PricingTiers
    └── HSA badge (env-gated)

app/pricing/page.tsx
├── PricingCalculator
├── PricingTiers
│   └── HsaBadge (env-gated)
└── ComparisonTable

app/membership/page.tsx
├── TierDisplay
├── LabPharmacySavingsTable
│   └── Lab/pharmacy pricing examples
└── Testimonials (approval-gated)
```

## Summary

- **7 active B2C routes** with user-facing content
- **2 B2B routes** for employer inquiry
- **2 untouchable routes** (enrollment, success)
- **Risky claim locations:** Pricing, savings, testimonials, HSA, lab/pharmacy pricing
- **Safety gates in place:** Testimonials (approved flag), HSA badge (env var), pricing/insurance disclaimers

**For audit details:** See `COMPONENT-MAP.md`
