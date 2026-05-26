# Agent Instructions: DirectCare Indy Website Repo

This file is for Claude Code, Cursor, Codex, and other coding agents working on this Next.js website.

## Repo Identity

- **Type:** Next.js 16 App Router (server-first by default)
- **Scope:** B2C website + B2B employer pages (active buildout)
- **Stage:** Safety improvements and claims compliance underway
- **Parent Context:** `C:\dev\DirectCare-Indy-Claude-OS` (broader OS)

## Route Architecture

### Public B2C Routes
| Route | File | Purpose | Notes |
|-------|------|---------|-------|
| `/` | `app/page.tsx` | Homepage | Hero, pricing intro, testimonials, CTA |
| `/pricing` | `app/pricing/page.tsx` | Pricing details | Tiers, calculator, comparisons |
| `/membership` | `app/membership/page.tsx` | Membership overview | Plans, savings table |
| `/how-it-works` | `app/how-it-works/page.tsx` | Onboarding flow | Telehealth, messaging, process |
| `/faq` | `app/faq/page.tsx` | Frequently asked questions | Common member questions |
| `/about` | `app/about/page.tsx` | About DirectCare | Clinic, team, credentials |
| `/hdhp-families` | `app/hdhp-families/page.tsx` | HDHP-specific messaging | High-deductible family benefit |
| `/uninsured` | `app/uninsured/page.tsx` | Uninsured messaging | Affordability positioning |
| `/seniors` | `app/seniors/page.tsx` | Senior-specific messaging | Medicare coordination |

### B2B/Employer Routes
| Route | File | Purpose | Notes |
|-------|------|---------|-------|
| `/employers` | `app/employers/page.tsx` | Employer benefits | Deferred (awaiting strategy) |
| `/for-employers` | `app/for-employers/page.tsx` | Employer inquiry | Contact form |
| `/partnerships` | `app/partnerships/page.tsx` | Partner opportunities | Brokers, resellers |

### Untouchable Routes
| Route | File | Reason |
|-------|------|--------|
| `/join` | `app/join/page.tsx` | Hint Health enrollment (custom integration) |
| `/api/**` | `app/api/*` | Webhooks, calculations, secrets |

### SEO/Support Routes
| Route | File | Purpose |
|-------|------|---------|
| `/blog/indiana-medigap-birthday-rule-2026` | `app/blog/*/page.tsx` | Educational content |
| `/locations/[neighborhood]` | `app/locations/[neighborhood]/page.tsx` | Local SEO pages |
| `/providers`, `/providers/[slug]` | `app/providers/*` | Team profiles |
| `/wraparound` | `app/wraparound/page.tsx` | Catastrophic insurance partners |

## Component Conventions

### Naming & Structure
- **PascalCase files** for components: `MembershipConfigurator.tsx`, `Testimonials.tsx`
- **kebab-case folders** for route sections: `app/how-it-works/`, `components/home/`
- **Use `"use client"` sparingly.** Server Components by default; client only for interaction (forms, state, hooks)

### Key Components & Their Content Sources

| Component | File | Content Source | Risky Claims |
|-----------|------|-----------------|--------------|
| `Testimonials` | `components/Testimonials.tsx` | Hardcoded array | Savings amounts (approval-gated) |
| `MembershipConfigurator` | `components/MembershipConfigurator.tsx` | Hardcoded rates | Pricing (approval-gated) |
| `SavingsPersonas` | `components/SavingsPersonas.tsx` | Hardcoded scenarios | Estimated savings (qualified) |
| `PricingTiers` | `components/PricingTiers.tsx` | Hardcoded tiers + HsaBadge | HSA claims (gated), pricing |
| `LabPharmacySavingsTable` | `components/LabPharmacySavingsTable.tsx` | Content data | Lab/pharmacy pricing examples |
| `HsaBadge` | `components/HsaBadge.tsx` | Env-controlled | HSA approval (gated env var) |
| `EmployerSavingsCalculator` | `components/EmployerSavingsCalculator.tsx` | Form input | Employer ROI claims (deferred) |

### Styling Patterns
- **Tailwind CSS 4** with postcss
- **Dark mode support** via `next-themes`
- **Responsive**: mobile-first, `md:` breakpoints common
- **Colors**: Primary (teal/secondary), muted, background, foreground
- **Keep existing class patterns.** Don't rename utilities or restructure layouts.

## Content Governance

### Approval-Gated Claims

These must be **verified and approved** before displaying:
- Pricing ($69–$250/month tiers)
- Savings amounts ($2,400/yr, etc.)
- Testimonial savings
- HSA/FSA eligibility and tax claims
- Medical treatment claims (diagnoses, outcomes)
- Insurance replacement positioning
- Lab/pharmacy pricing ($5 lipid panel, etc.)
- Employer ROI and cost savings metrics

**Safe patterns:**
- Gate behind `approved: false` flags or env vars
- Use qualifiers: "estimated," "typical," "may," "designed to"
- Avoid absolutes: "saves," "prevents," "cures"
- Refer to: `C:\dev\DirectCare-Indy-Claude-OS\00_command_center\claims-and-approval-register.md`

### Safe Content
- How-to messaging (onboarding, telehealth features)
- Service descriptions (preventive, acute, chronic, minor procedures)
- Access and convenience messaging
- Relatable member stories (without unverified savings)
- Team credentials and board certifications
- Workflows and processes

### B2C vs. B2B Language
- **B2C**: affordability, access, relationship, convenience, transparent pricing
- **B2B**: cost containment, retention, retention, productivity, care friction
- Keep separate. Don't mix employer ROI claims into member messaging.

## Testing & Verification

### Before Committing
1. **Syntax check**: No TypeScript errors
2. **Import paths**: Relative paths work correctly
3. **Component render**: Affected components display correctly
4. **Mobile preview**: Responsive layout intact

### After Implementation
1. **Build check**: `npm run build` succeeds
2. **Lint check**: `npm run lint` passes (if no auto-fix used)
3. **Manual verification**: Visit affected page(s) in dev (`npm run dev`)
4. **Regression scan**: Check unrelated features aren't broken

### What Not to Invent
- Don't create new CI/test commands beyond package.json scripts
- Don't assume accessibility checks exist
- Don't assume mobile testing is automated
- Manual verification is acceptable

## No-Touch Zones (Detailed)

### API Routes
```
app/api/**/*.ts
- app/api/generate-hsa-letter/
- app/api/hint-webhook/           ← Hint Health enrollment integration
- app/api/leads/                   ← Lead capture
- app/api/market-costs/
- app/api/wellness/calculate/
- app/api/who-health/
```
**Why**: Core integrations, webhook handlers, secrets in headers.

### Enrollment Flow
```
app/join/page.tsx
app/join/success/page.tsx
```
**Why**: Hint Health custom integration. Changes require coordination.

### Secrets & Environment
```
.env.local
.env.production
.env.production.local
```
**Why**: Contains API keys, webhook secrets.

### Payment & Integration Code
- Hint Health SDK initialization
- Spruce Health (telehealth) SDK
- Payment processing if present
- OAuth/session handling

## Implementation Process

1. **Read the relevant rule file** (see `.claude/rules/`)
2. **Inspect the target files.** Don't assume structure.
3. **Make one focused change.** Avoid scope creep.
4. **Run `npm run build`** to verify no regressions.
5. **Verify manually** in dev server if UI changed.
6. **Summarize**: Files changed, exact edits, checks run, next step.
7. **Don't write Jacob a manual.** Write status instead.

## Safe Implementation Examples

### ✓ Good: Gate a claim
```tsx
// Before
<p>Save $2,400/year!</p>

// After
<p>Estimated savings: $2,400/year</p>
<p className="text-xs text-gray-500">Based on typical usage</p>
```

### ✓ Good: Add a disclaimer
```tsx
<div className="bg-blue-50 p-4 rounded">
  <p>Direct Care Indy membership is not health insurance.</p>
</div>
```

### ✓ Good: Add an approval gate
```tsx
{process.env.NEXT_PUBLIC_HSA_APPROVED === 'true' && (
  <HsaBadge />
)}
```

### ✗ Risky: Remove a safety disclaimer
- Don't delete existing gates, disclaimers, or `approved` flags.

### ✗ Risky: Claim unverified outcomes
- "Prevent hospital visits"
- "Cure diabetes"
- "Save $10,000 guaranteed"

### ✗ Risky: Touch enrollment flow
- Don't edit `/join/page.tsx` or API routes
- Don't modify Hint Health redirects

## File Structure Quick Ref

```
CLAUDE.md                        ← This repo's Claude instructions
AGENTS.md                        ← This file (cross-agent instructions)
.claude/
├── rules/                       ← Decision guidance
│   ├── nextjs-app-router.md
│   ├── claims-and-content-safety.md
│   ├── accessibility-and-ux.md
│   ├── testing-and-verification.md
│   └── no-touch-zones.md
├── skills/                      ← Agent capabilities
│   ├── sprint-executor/SKILL.md
│   ├── claims-auditor/SKILL.md
│   ├── visual-qa/SKILL.md
│   ├── route-component-mapper/SKILL.md
│   └── seo-metadata-auditor/SKILL.md
├── agents/                      ← Agent personas (read-only reviewers)
│   ├── code-reviewer.md
│   ├── ux-accessibility-reviewer.md
│   └── claims-compliance-reviewer.md
└── settings.local.json

docs/
├── DEVELOPMENT.md
├── QA-CHECKLIST.md
├── CONTENT-GOVERNANCE.md
├── CLAIMS-REGISTER.md
├── ROUTE-MAP.md
└── COMPONENT-MAP.md
```

## Questions?

- **How do I develop?** → `docs/DEVELOPMENT.md`
- **What should I test?** → `docs/QA-CHECKLIST.md`
- **Is this claim safe?** → `.claude/rules/claims-and-content-safety.md`
- **What can't I touch?** → `.claude/rules/no-touch-zones.md`
- **Next.js patterns?** → `.claude/rules/nextjs-app-router.md`
- **Parent OS context?** → `C:\dev\DirectCare-Indy-Claude-OS\CLAUDE.md`
