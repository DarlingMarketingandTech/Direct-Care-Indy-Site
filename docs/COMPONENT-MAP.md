# Component Map

Major components in the DirectCare Indy website repo. Maps to content sources, risky claims, and approval gates.

## High-Risk Components (Claims)

| Component | File | Purpose | Content Source | Risky Claims | Gate Method |
|-----------|------|---------|-----------------|--------------|-------------|
| **Testimonials** | `components/Testimonials.tsx` | Member quotes | Hardcoded array | Savings amounts ($6,200, etc.) | `approved: false` flag |
| **MembershipConfigurator** | `components/MembershipConfigurator.tsx` | Pricing calculator | Hardcoded member types + rates | Pricing ($69–$109, $250 cap) | Version control |
| **SavingsPersonas** | `components/SavingsPersonas.tsx` | Savings examples | Hardcoded personas array | Estimated savings ($2,400/yr) | Qualifiers added |
| **PricingTiers** | `components/PricingTiers.tsx` | Tier display | Hardcoded tiers array | Pricing + HSA badge | Env var gate + disclaimer |
| **LabPharmacySavingsTable** | `components/LabPharmacySavingsTable.tsx` | Lab/pharmacy costs | Hardcoded examples | Lab pricing ($5 lipid) | Needs verification |
| **HsaBadge** | `components/HsaBadge.tsx` | HSA eligibility badge | Inline component | "2026 HSA Approved" claim | `NEXT_PUBLIC_HSA_APPROVED` env var |
| **EmployerSavingsCalculator** | `components/EmployerSavingsCalculator.tsx` | Employer ROI tool | Deferred implementation | Employer ROI claims | Deferred (no implementation) |

## Medium-Risk Components (Language)

| Component | File | Purpose | Content Source | Risky Claims | Status |
|-----------|------|---------|-----------------|--------------|--------|
| **IncludedMatrix** | `components/IncludedMatrix.tsx` | Services included | Hardcoded features | Service descriptions | Check content |
| **ComparisonTable** | `components/ComparisonTable.tsx` | DPC vs. insurance | Hardcoded comparison | Medical/insurance language | Check language |
| **MarketCostComparison** | `components/MarketCostComparison.tsx` | Cost comparison | Hardcoded data | Pricing comparisons | Verify data |
| **OnboardingTimeline** | `components/OnboardingTimeline.tsx` | How-it-works steps | Hardcoded steps | Process language (safe) | Low risk |

## Low-Risk Components (Display/UI)

| Component | File | Purpose | Risk Level |
|-----------|------|---------|-----------|
| **SharedFooter** | `components/SharedFooter.tsx` | Footer with contact info | Low |
| **MobileAppBar** | `components/MobileAppBar.tsx` | Mobile navigation | Low |
| **BackToTop** | `components/BackToTop.tsx` | Scroll-to-top button | Low |
| **HintHealthPortal** | `components/HintHealthPortal.tsx` | Portal preview | Low |
| **CatastrophicPartners** | `components/CatastrophicPartners.tsx` | Partner logos | Low |
| **ValueBanner** | `components/ValueBanner.tsx` | Marketing banner | Medium (check copy) |

## Component Details

### Testimonials Component

**File:** `components/Testimonials.tsx`

**Current State:**
- 6 testimonials with savings amounts
- Hardcoded array
- `approved: false` flag on all testimonials (gated ✓)
- Production filters to hide unapproved testimonials ✓

**Content:**
```tsx
{
  id: "sarah-hdhp",
  name: "Sarah M.",
  quote: "...",
  savings: "$6,200",
  approved: false  // ← Gated
}
```

**Gate Status:** ✓ GATED (approval flag + production filter)

**Next Step:** Finance/Marketing verification

---

### MembershipConfigurator Component

**File:** `components/MembershipConfigurator.tsx`

**Current State:**
- Member types: Child, Adult (19-44), Adult (45-64), Senior (65+)
- Pricing: $39, $69, $89, $109
- Family cap: $250
- Hardcoded values

**Risky Claims:**
- Individual pricing ($69–$109)
- Family cap ($250)

**Gate Status:** Version control (approved pricing documented)

**Disclaimer Status:** ✓ ADDED ("Pricing subject to change")

---

### SavingsPersonas Component

**File:** `components/SavingsPersonas.tsx`

**Current State:**
- 3 personas with savings estimates
- HVAC Contractor: $2,400/yr
- High-Deductible Family: $4,560/yr
- Small Business Owner: $4,700/employee
- Qualifiers added ✓

**Qualifiers Added:**
- "estimated based on typical usage and pricing"
- "estimated; actual results vary"

**Gate Status:** ✓ QUALIFIED (language added)

---

### PricingTiers Component

**File:** `components/PricingTiers.tsx`

**Current State:**
- Young Adult ($69), Adult ($89), Senior ($109)
- HSA badge: "Fully HSA-Eligible"
- Hardcoded tiers

**HSA Badge Gate Status:** ✓ GATED (env var check at line 106)

```tsx
{process.env.NEXT_PUBLIC_HSA_APPROVED === 'true' && (
  <span>Fully HSA-Eligible</span>
)}
```

**Disclaimer Status:** ✓ ADDED

---

### LabPharmacySavingsTable Component

**File:** `components/LabPharmacySavingsTable.tsx`

**Current State:**
- Lab pricing examples ("$5 lipid panel")
- Pharmacy pricing examples ("$3 generic")
- Hardcoded comparison

**Risky Claims:**
- Lab/pharmacy pricing (example prices)

**Gate Status:** ⚠️ NEEDS VERIFICATION with lab and pharmacy partners

**Next Step:** Partnerships team verification

---

### HsaBadge Component

**File:** `components/HsaBadge.tsx`

**Current State:**
- Simple component rendering HSA badge
- Used in PricingTiers and elsewhere

**Gate Status:** ✓ WRAPPED IN ENV VAR CHECK (caller does gating)

---

## Component Usage Matrix

| Component | Used In | Gated? | Risk |
|-----------|---------|--------|------|
| Testimonials | Homepage, Membership | ✓ Approval flag | High |
| MembershipConfigurator | Homepage | Disclaimer added | High |
| SavingsPersonas | Homepage | ✓ Qualifiers | High |
| PricingTiers | Pricing, Homepage | ✓ Env var (HSA) | High |
| LabPharmacySavingsTable | Membership | Needs verification | High |
| HsaBadge | PricingTiers | ✓ Env var | High |
| IncludedMatrix | Pricing, Membership | Check copy | Medium |
| ComparisonTable | Pricing | Check language | Medium |

## Data Flow Example: Testimonials

```
app/page.tsx
  └── imports Testimonials component
      └── components/Testimonials.tsx
          ├── hardcoded testimonials array
          ├── filter: NODE_ENV === 'development' || approved
          └── renders: filtered testimonials only

Production:
  - Only testimonials with approved: true display
  
Development:
  - All testimonials display (for review)
```

## Safety Gate Inventory

✓ **In Place:**
- Testimonials: approval flag + production filter
- HSA badge: `NEXT_PUBLIC_HSA_APPROVED` env var
- Pricing disclaimer: added to 4+ locations
- Insurance disclaimer: added to 3+ pages
- Savings qualifiers: added to SavingsPersonas

⚠️ **Needs Attention:**
- LabPharmacySavingsTable: verification required
- ComparisonTable: check medical/insurance language
- IncludedMatrix: verify service descriptions

## Questions?

- **Where are the testimonials gated?** → `components/Testimonials.tsx`, line ~70
- **How is the HSA badge gated?** → `NEXT_PUBLIC_HSA_APPROVED` env var in `PricingTiers.tsx`
- **Where are the pricing disclaimers?** → 4 files: `app/page.tsx`, `app/pricing/page.tsx`, `PricingTiers.tsx`, `MembershipConfigurator.tsx`
- **What's not gated yet?** → Lab/pharmacy pricing examples (needs verification)
