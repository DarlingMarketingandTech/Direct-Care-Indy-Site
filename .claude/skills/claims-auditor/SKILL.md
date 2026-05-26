# Claims Auditor Skill

## Purpose

Audit visible website copy for risky or unapproved claims. Identify claims that need gates, qualifiers, or removal.

## When to Use This Skill

- After content changes, before deployment
- To find risky language across pages
- To recommend gating/qualification improvements
- To track which claims have approval

## Claim Categories to Audit

| Category | Examples | Risk | Action |
|----------|----------|------|--------|
| **Pricing** | "$69–$110/month", "$250 family cap" | High | Verify against approved pricing sheet |
| **Savings** | "Save $2,400/year", "$4,560/yr" | High | Require `approved` flag + qualifier |
| **Testimonials** | Customer quotes with savings | High | Gate with `approved: false` |
| **HSA/FSA** | "HSA eligible", "Tax-free", "HSA Approved" | High | Gate behind env var + legal language |
| **Medical** | "Lower A1C", "Prevent ER visits", "Treat diabetes" | High | Require clinical approval |
| **Insurance** | "Replaces insurance", "Insurance alternative" | High | Add: "This is not health insurance" |
| **Lab pricing** | "$5 lipid panel", "vs. $90 retail" | High | Verify with lab partner; add disclaimer |
| **Pharmacy** | "$3 generic", "vs. $25 retail" | High | Verify with supplier; add disclaimer |
| **Employer ROI** | "13-20% cost reduction", "54% ER reduction" | High | Deferred; cite source or remove |

## Audit Procedure

### 1. Read the Target

- Homepage (`app/page.tsx`)
- Pricing page (`app/pricing/page.tsx`)
- Testimonials component
- Savings/personas component
- Membership page
- FAQ, how-it-works, other key pages

### 2. Find Risky Language

Look for:
- Specific numbers (savings, pricing, percentages)
- Guarantees ("will," "guarantee," "prevent")
- Medical terms ("cure," "treat," "lower")
- Insurance claims ("replaces," "alternative")
- Tax language ("tax-free," "deduction")

### 3. Check Against Safe Patterns

**Risky patterns:**
- "Save $2,400/year" (absolute claim)
- "Prevents ER visits" (medical outcome)
- "Replaces insurance" (insurance claim)
- "HSA approved" (legal claim)
- "Cures diabetes" (medical claim)

**Safe patterns:**
- "Estimated savings: $2,400/year (based on typical usage)"
- "Designed to help access timely primary care"
- "Complements your insurance"
- "May be eligible for HSA (subject to plan rules)"
- "Chronic disease management including diabetes"

### 4. Produce Recommendations

For each claim found:

```
Claim: "Save $2,400/year"
Status: ✗ Risky (unqualified savings)
Location: components/SavingsPersonas.tsx, line 11
Action: ADD QUALIFIER
Suggestion: 
  "Estimated savings: $2,400/year"
  "Based on typical usage and pricing"
```

Or:

```
Claim: "Fully HSA-Eligible per 2026 Guidelines"
Status: ✗ Risky (HSA legal claim without approval)
Location: components/PricingTiers.tsx, line 107
Action: GATE BEHIND ENV VAR
Suggestion:
  {process.env.NEXT_PUBLIC_HSA_APPROVED === 'true' && (
    <span>Fully HSA-Eligible per 2026 Guidelines</span>
  )}
```

Or:

```
Claim: "Early intervention opportunity"
Status: ✓ Safe (non-guaranteed, action-oriented)
Location: app/how-it-works/page.tsx, line 45
Action: OK as-is
Note: Appropriate medical language; doesn't guarantee outcomes
```

## Output Format

### Full Audit Report

```
# Claims Audit Report: [Page or Component]

## Summary
- Total claims found: X
- Risky claims: Y
- Safe claims: Z
- Approval gates in place: W

## Findings

### 🔴 High Risk (Requires Action)

1. **Pricing claim** (app/page.tsx:159)
   - Text: "Individual pricing: $69–$110/month"
   - Issue: No disclaimer
   - Fix: Add "Subject to change" disclaimer below

2. **Savings claim** (components/SavingsPersonas.tsx:11)
   - Text: "Save $2,400/year"
   - Issue: Absolute claim; no qualifier
   - Fix: Add "(estimated based on typical usage)"

### 🟡 Medium Risk (Should Gate)

1. **HSA claim** (components/PricingTiers.tsx:108)
   - Text: "Fully HSA-Eligible"
   - Issue: Legal claim needs approval and env var gate
   - Fix: Wrap in `{process.env.NEXT_PUBLIC_HSA_APPROVED === 'true' && (...)}`

### 🟢 Safe

1. **Process language** (app/how-it-works/page.tsx:30)
   - Text: "Secure telehealth platform"
   - Status: ✓ Safe
   - Note: Describes feature, no outcome claims

## Recommendations

1. Add pricing disclaimer to homepage
2. Gate HSA badge in PricingTiers
3. Add qualifiers to all savings estimates
4. Add insurance disclaimer to 3 key pages

## Approval Status

- [ ] Finance: Pricing approved
- [ ] Legal: HSA language approved
- [ ] Marketing: Testimonials verified
- [ ] Clinical: Service descriptions approved
```

### Lightweight Checklist

```
CLAIMS AUDIT CHECKLIST

Pricing:
  - [ ] All prices have "subject to change" disclaimer
  - [ ] Pricing matches approved source document
  
Savings:
  - [ ] All savings have qualifier ("estimated", "typical usage")
  - [ ] No absolute savings claims
  - [ ] Testimonial savings gated with `approved` flag

HSA/FSA:
  - [ ] HSA claims gated behind env var
  - [ ] No tax claims without legal language
  
Medical:
  - [ ] No guarantees ("will", "prevent", "cure")
  - [ ] Appropriate qualifiers ("may", "designed to")
  - [ ] Clinical approval documented

Insurance:
  - [ ] No "replaces insurance" language
  - [ ] Insurance disclaimer present on key pages
  - [ ] Clear: DPC is not a replacement

Lab/Pharmacy:
  - [ ] Pricing examples verified with partners
  - [ ] Disclaimer included ("current rates")

Testimonials:
  - [ ] All savings have `approved: false` until verified
  - [ ] HSA tax language removed
  - [ ] Production filter in place
```

## Questions to Ask

When auditing, ask:

- **Is this a specific number?** (If yes, is it approved?)
- **Is this a medical claim?** (If yes, is it qualified?)
- **Is this a guarantee?** (If yes, soften it)
- **Is this an insurance claim?** (If yes, add disclaimer)
- **Is this HSA language?** (If yes, gate it)
- **Is this a testimonial?** (If yes, is it approved?)

## Safe Language Bank

Refer to `.claude/rules/claims-and-content-safety.md` for replacement language.

## After Auditing

1. **Document findings** clearly
2. **Prioritize by risk** (high first)
3. **Provide actionable fixes** (not just criticism)
4. **Track approval status** (who approved what)
5. **Don't remove claims** without approval to do so—recommend gating instead

## Success Criteria

- All risky claims identified
- Specific locations provided (file, line number)
- Clear recommendations for each
- Safe language alternatives suggested
- Approval status documented
- Report is actionable (developer can implement fixes)
