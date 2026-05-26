# Route & Component Mapper Skill

## Purpose

Map routes to components and identify where risky claims live. Understand content flow for audits.

## When to Use

- To locate which component handles a page
- To find where claims are rendered
- To trace component dependencies
- To understand enrollment flow
- To identify all places a claim appears

## Quick Lookup

See `docs/ROUTE-MAP.md` and `docs/COMPONENT-MAP.md` (auto-generated from this repo).

## Manual Mapping Process

### 1. Identify the Route

```
Example: /pricing page shows pricing calculator

Goal: Find which components render on this page
```

### 2. Find the Route File

```
Route: /pricing
File: app/pricing/page.tsx
Action: Read the page component
```

### 3. Trace Components

```tsx
// app/pricing/page.tsx
import PricingCalculator from '@/components/PricingCalculator';
import PricingTiers from '@/components/PricingTiers';

export default function PricingPage() {
  return (
    <div>
      <PricingCalculator />  // ← Component 1
      <PricingTiers />       // ← Component 2
    </div>
  );
}
```

### 4. Record the Mapping

```
Route: /pricing

Components:
1. PricingCalculator (components/PricingCalculator.tsx)
   - Content: Hardcoded member types and pricing rates
   - Claim: Pricing ($69–$110 individual, $250 family)
   - Risk: Medium (pricing needs disclaimer)

2. PricingTiers (components/PricingTiers.tsx)
   - Content: Age-based tier display
   - Claim: Pricing, HSA badge
   - Risk: High (HSA claim needs gating)

Data Sources:
- MEMBER_TYPES array in MembershipConfigurator
- Hardcoded pricing values
```

## Common Routes & Components

| Route | Files | Components | Risky Claims |
|-------|-------|-----------|--------------|
| `/` | app/page.tsx | MembershipConfigurator, SavingsPersonas, Testimonials, PricingTiers | Savings, pricing, testimonials, HSA |
| `/pricing` | app/pricing/page.tsx | PricingTiers, PricingCalculator | Pricing, HSA |
| `/membership` | app/membership/page.tsx | TierDisplay, LabPharmacySavingsTable | Lab/pharmacy pricing, savings |
| `/how-it-works` | app/how-it-works/page.tsx | OnboardingTimeline | Process claims (low risk) |
| `/faq` | app/faq/page.tsx | FAQ content (inline or data) | Various claims (check content) |

## Component Dependency Graph

```
app/page.tsx (Homepage)
├── MembershipConfigurator
│   └── Pricing, family cap
├── SavingsPersonas
│   └── Estimated savings ($2,400/yr, etc.)
├── Testimonials
│   └── Savings amounts, customer quotes
└── PricingTiers
    └── Tiers, HSA badge

app/pricing/page.tsx (Pricing Page)
├── PricingCalculator
├── PricingTiers
│   └── HsaBadge (gated by env var)
└── ComparisonTable
```

## Finding Specific Claims

### Task: "Where are all the savings amounts?"

```
Search Strategy:
1. grep for "$" in components/ directory
2. Search for "saving", "save", "estimated"
3. Check: Testimonials, SavingsPersonas, LabPharmacySavingsTable

Locations Found:
- components/Testimonials.tsx: Individual quotes with savings
- components/SavingsPersonas.tsx: Personas with "$2,400/yr" etc.
- components/LabPharmacySavingsTable.tsx: Lab costs comparison
- app/pricing/page.tsx: Pricing examples
```

### Task: "Where is HSA language?"

```
Search Strategy:
1. grep for "HSA", "tax", "eligible"
2. Check components/ and app/

Locations Found:
- components/HsaBadge.tsx: "2026 HSA Approved" (gated ✓)
- components/PricingTiers.tsx: "Fully HSA-Eligible" badge
- components/Testimonials.tsx: "HSA tax claim" in Maria G. (removed ✓)
```

## Mapping Output Format

```
# Route-Component Mapping: /pricing

## Page Structure

app/pricing/page.tsx (default export)
  └── Hero section (inline content)
  └── PricingCalculator component
  └── PricingTiers component
      ├── HsaBadge (gated by NEXT_PUBLIC_HSA_APPROVED)
      └── Household cap section
  └── ComparisonTable component

## Content Sources

### Pricing Data
- Location: components/PricingTiers.tsx, lines 18–65
- Data: Hardcoded tiers array
- Tiers: Young Adult ($69), Adult ($89), Senior ($109)
- Risk: Medium (needs "subject to change" disclaimer)

### HSA Claims
- Location: components/PricingTiers.tsx, line 106
- Text: "Fully HSA-Eligible per 2026 Guidelines"
- Gating: ✓ Behind env var (NEXT_PUBLIC_HSA_APPROVED)
- Status: Safe (gated)

### Savings Examples
- Location: components/PricingTiers.tsx (embedded)
- Risk: Low (not displayed on pricing page; mostly tier details)

## Claim Inventory on This Route

✓ Gated: HSA badge
⚠️ Needs fix: Pricing disclaimer missing
✓ OK: Service features (no medical claims)
```

## Reverse Lookup: "Where is this component used?"

Example: "Where is the Testimonials component rendered?"

```
Answer: Used in:
1. app/page.tsx (homepage)
   - Renders 6 testimonials at ~line 280
   - Gated with approval flag ✓

2. app/membership/page.tsx (potential)
   - Check if Testimonials is imported
   
Search: grep -r "Testimonials" app/ components/
Results show all locations
```

## Creating the Maps

These should be auto-maintained:

**docs/ROUTE-MAP.md**: List all routes, their components, and risky claims  
**docs/COMPONENT-MAP.md**: List all major components, dependencies, and content

See those files for current state.

## Success Criteria

- All routes identified (from `app/*/page.tsx`)
- Components for each route traced
- Content sources documented
- Risky claims located and marked
- Maps are readable and actionable
