# Claims and Content Safety

**Path scope:** `app/**/*`, `components/**/*`, `content/**/*`, `*.md`

## Approval-Gated Claims

These claims **must be verified and approved** before displaying. Gate them behind:
- `approved: false` flags (development shows all; production hides unapproved)
- `NEXT_PUBLIC_*` environment variables (default to false; enable only after approval)
- Removal of specific language until approved

### Categories & Examples

| Category | Examples | Gate Pattern |
|----------|----------|--------------|
| **Pricing** | $69–$110/month, $250 family cap | Use approved data; version control |
| **Savings amounts** | "Save $2,400/year", "$4,560/yr" | Add qualifier; mark `approved: false` |
| **Testimonial savings** | "$6,200 this year already" | Add `approved` flag to testimonial object |
| **HSA/FSA eligibility** | "HSA eligible", "2026 HSA Approved" | Gate behind `NEXT_PUBLIC_HSA_APPROVED=true` env var |
| **HSA tax claims** | "Pay tax-free", "HSA deduction" | Remove until legal provides language |
| **Medical treatment** | "Lower A1C", "Prevent ER visits" | Use clinical approval; soften language |
| **Insurance replacement** | "Replaces insurance", "Insurance alternative" | Clarify: DPC is not insurance |
| **Lab pricing** | "$5 lipid panel", "$90 retail rate" | Verify with lab partner; add disclaimer |
| **Pharmacy pricing** | "$3 generic", "$25 retail" | Verify with pharmacy supplier |
| **Employer ROI** | "13-20% cost reduction", "54% ER reduction" | Deferred; awaiting business decision |

## Safe Replacement Language

When facing a risky claim, use these patterns instead:

### Instead of: "Saves $2,400/year"
Use:
- "Estimated savings based on typical usage"
- "May reduce routine care costs"
- "Designed to make healthcare more predictable"

### Instead of: "HSA Approved"
Use:
- "May be eligible for HSA/FSA (subject to plan rules)"
- "Often works with high-deductible health plans"
- "Check eligibility with your plan administrator"

### Instead of: "$5 labs vs. $90 retail"
Use:
- "Wholesale lab rates available"
- "See pricing page for current lab costs"
- "Member rates significantly lower than retail"

### Instead of: "Prevents hospital visits"
Use:
- "Designed to help members access timely primary care"
- "Early intervention opportunity"
- "May reduce need for urgent care"

### Instead of: "DPC replaces insurance"
Use:
- "Complements your insurance for primary care"
- "Works alongside your health insurance"
- "Not a replacement for major medical coverage"

### Insurance Disclaimer (Required)
```
Important: Direct Care Indy membership is not health insurance.
We recommend maintaining insurance coverage for emergencies,
hospitalizations, and specialist care.
```

## Content Source Rules

### B2C Website Content (Primary)
- **Approved live-site content** is source of truth
- **Paul's strategy documents** are guidance, not publishing approval
- **Marketing claims** require marketing/legal review before publishing
- **Testimonials** require customer verification + written approval

### B2B Research & Strategy (Secondary)
- **Competitor analysis** informs strategy, not marketing claims
- **Industry metrics** (13-20% cost savings, 54% ER reduction) need citation and verification
- **Employer ROI data** is deferred until business model decisions made
- **Don't publish unvetted research as fact**

### Paul's B2C Markdown Files (Reference)
- Patient-facing content is educational reference only
- Don't assume all language is pre-approved for this site
- Use as guidance for messaging tone, not as approved copy
- Clinical claims in Paul's docs need clinical team sign-off

## B2C vs. B2B Language Boundary

**B2C (Members):** affordability, access, relationship, convenience, transparency  
**B2B (Employers):** cost containment, retention, productivity, care friction

- Don't mix employer ROI language into member pages
- Don't imply member savings = employer savings
- Keep pathways clearly separated

### ✗ Wrong
```tsx
// B2C page with employer language
<p>
  We reduce employer healthcare costs by 13-20% while improving
  member satisfaction.
</p>
```

### ✓ Right
```tsx
// B2C page
<p>
  Members enjoy affordable, transparent pricing with no hidden costs.
</p>

// B2B page (separate)
<p>
  Employers using DirectCare report improved retention and reduced absenteeism.
</p>
```

## Pattern: Gating Testimonials

```tsx
interface Testimonial {
  id: string;
  name: string;
  quote: string;
  savings?: string;
  approved?: boolean; // ADD THIS
}

const testimonials: Testimonial[] = [
  {
    id: "sarah-hdhp",
    name: "Sarah M.",
    quote: "...",
    savings: "$6,200",
    approved: false, // GATE: needs verification
  },
  // ...
];

export function Testimonials() {
  const displayTestimonials = testimonials.filter(
    t => process.env.NODE_ENV === 'development' || t.approved
  );
  // render displayTestimonials
}
```

## Pattern: Gating with Env Vars

```tsx
// Gate HSA badge
{process.env.NEXT_PUBLIC_HSA_APPROVED === 'true' && (
  <div className="badge">2026 HSA Approved</div>
)}

// Don't set in code; only in .env.local or deployment config
// Default behavior: badge hidden unless explicitly enabled
```

## Pattern: Adding Qualifiers

```tsx
// Before
<p className="text-2xl font-bold">Save $2,400/year</p>

// After
<div>
  <p className="text-2xl font-bold">$2,400/year</p>
  <p className="text-xs text-gray-500">
    Estimated based on typical usage and pricing
  </p>
</div>
```

## Testimonial Content Rules

- **No unverified savings amounts** (gate with `approved: false`)
- **No HSA tax claims** without legal language
- **No medical treatment claims** without clinical approval
- **No guarantees** ("will," "guaranteed," "prevents")
- **Keep human stories**: Customer context is valuable
- **Soften outcomes**: "improved A1C" not "cured diabetes"

```tsx
// ✗ Unapproved
"We used our HSA to pay for it tax-free. Best decision ever."

// ✓ Approved (after legal review)
"Our HDHP premiums were $650/month. DPC is $225/month.
Best healthcare decision we've made."
```

## Pricing & Calculator Rules

- **Hardcoded pricing** needs version control approval
- **Pricing changes** should include disclaimer: "Pricing subject to change"
- **Don't invent pricing** if it's missing; use placeholder or "Contact us"
- **Pricing calculator** must match tiers exactly

## Medical & Insurance Language Rules

- **No medical diagnoses** without clinical team review
- **No treatment claims** without clinical approval
- **No insurance-replacement language** without legal review
- **Always include:** "This is not health insurance"

### ✗ Risky
"DirectCare Indy treats diabetes and COPD"

### ✓ Safe
"We specialize in chronic disease management including
diabetes and COPD coordination with specialists"

## Reference

- **Broader OS claims register:** `C:\dev\DirectCare-Indy-Claude-OS\00_command_center\claims-and-approval-register.md`
- **This repo's register:** `docs/CLAIMS-REGISTER.md`
- **Content approval rules:** `C:\dev\DirectCare-Indy-Claude-OS\.claude\rules\content-approval.md`

## Summary

- **Gate approval-gated claims.** Don't publish unverified numbers.
- **Use qualifiers.** "Estimated," "may," "designed to" soften absolutes.
- **Keep B2C and B2B separate.** Different messaging; different audiences.
- **Verify sources.** Don't publish research as fact without citation.
- **Include disclaimers.** Insurance, pricing, savings all need context.
- **Preserve human stories.** Testimonials are valuable; just gate the metrics.
