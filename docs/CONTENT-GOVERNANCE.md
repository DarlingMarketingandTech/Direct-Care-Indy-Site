# Content Governance

## Source of Truth

**Approved live-site content** is the primary source. Cross-check with:
1. DirectCare Indy approved facts
2. Clinic leadership approval
3. Legal/finance/clinical sign-off

**Paul's strategy documents** are guidance, not publishing approval. Don't assume language from Paul's docs is pre-approved for this site.

## Approval-Gated Claims

These claims **must be approved and gated** before publishing:

| Claim Category | Examples | Approval Required | Gate Method |
|---|---|---|---|
| **Pricing** | $69–$110 monthly, $250 family cap | Finance | Hardcoded with version control |
| **Savings estimates** | "$2,400/year", "$4,560/yr" | Finance + Marketing | Add `approved: false` flag + qualifier |
| **Testimonials** | Customer quotes with savings | Marketing + Legal | Add `approved: false` flag to testimonial object |
| **HSA/FSA** | "HSA Approved", "Fully HSA-Eligible", "HSA eligible", "FSA eligible", "tax-free", HSA metadata/schema/content copy | Legal | Gate behind `NEXT_PUBLIC_HSA_APPROVED` wherever HSA/FSA public language appears, including `HsaBadge`, or keep approval-gated until reviewed |
| **Medical claims** | "Lower A1C", "Prevent ER visits" | Clinical team | Require clinical approval; soften language |
| **Insurance positioning** | "Replaces insurance", "Insurance alternative" | Legal | Add: "Not a replacement for health insurance" |
| **Lab/pharmacy pricing** | "$5 lipid panel", "$3 generic" | Partnerships team | Verify with lab/pharmacy partner; add disclaimer |
| **Employer ROI** | "13-20% cost reduction", "54% ER reduction" | Executive + Finance | Deferred; awaiting business decisions |

## Safe Replacement Language

When claiming something risky, use these patterns instead:

### Savings Claims

❌ **Too risky:** "Save $2,400/year"  
✓ **Safer:** "Estimated savings: $2,400/year (based on typical usage and pricing)"

### Medical Claims

❌ **Too risky:** "Prevents hospital visits"  
✓ **Safer:** "Designed to help members access timely primary care"

### Insurance Positioning

❌ **Too risky:** "Replaces your insurance"  
✓ **Safer:** "Complements your insurance for primary care"

### HSA Language

❌ **Too risky:** "HSA Approved" (unqualified)  
✓ **Safer:** "May be eligible for HSA/FSA (subject to plan rules)"

Policy: any HSA/FSA public language should be gated behind `NEXT_PUBLIC_HSA_APPROVED` or approved before publication. The component-level `HsaBadge` gate protects the badge itself, and `PricingTiers` gates its HSA badge and pricing-tier HSA pill. It does not automatically protect HSA/FSA copy elsewhere in app pages, components, metadata, schemas, or content data.

### Lab/Pharmacy Pricing

❌ **Too risky:** "Labs cost $5"  
✓ **Safer:** "Wholesale lab rates available; current pricing on /pricing page"

## B2C vs. B2B Messaging

### B2C (Members) — Emphasize:
- Affordability
- Access and convenience
- Relationship with provider
- Transparent pricing
- Simplicity

### B2B (Employers) — Emphasize:
- Cost containment
- Employee retention
- Reduced absenteeism
- Productivity
- Care friction reduction

**Never mix these.** Keep member and employer pages completely separate in messaging.

## Content Governance Rules

### Before Publishing Claims

1. **Identify the claim type.** (Pricing? Medical? Insurance?)
2. **Check the approval register.** (Does it have approval?)
3. **If unapproved:** Gate it (`approved: false`) or soften language
4. **If medical/HSA:** Require clinical/legal sign-off
5. **If testimonial:** Verify with customer + gate with `approved` flag
6. **If specific number:** Cite the source

### Hardcoded Values

Hardcoded numbers (pricing, savings examples) need version control:
- What was the source?
- When was it approved?
- Who approved it?
- When does it need review?

### Changes to Existing Claims

If marketing wants to change a claim:
1. Get written approval from responsible team (Finance, Legal, Clinical, etc.)
2. Update the source (CLAIMS-REGISTER.md)
3. Gate or soften if needed
4. Create a commit with clear message referencing approval
5. Include approval date/who in commit message

## What Not to Publish Without Approval

- ❌ Unverified savings amounts
- ❌ Medical treatment claims without clinical sign-off
- ❌ HSA/tax language without legal review
- ❌ Insurance-replacement messaging without legal
- ❌ Employer ROI without finance/business approval
- ❌ Unverified lab/pharmacy pricing
- ❌ Competitor claims without verification
- ❌ Research findings without citation

## Testimonials

### Before Publishing

1. **Verify the customer.** (Real person? Real experience?)
2. **Verify the savings.** (Can they document it?)
3. **Remove unverified language.** (Especially HSA tax claims)
4. **Get written consent.** (Can use their story?)
5. **Gate the testimonial.** (Mark `approved: false` until verified)

### Safe Testimonial Language

Keep the human story. Soften the metrics.

❌ **Risky:** "We used our HSA to pay for it tax-free. Saved $6,200!"  
✓ **Safer:** "DPC costs $225/month compared to our old insurance premium. Best decision we made."

### Approval Status

Mark each testimonial with approval flag:

```tsx
{
  id: "sarah-hdhp",
  name: "Sarah M.",
  quote: "...",
  savings: "$6,200",
  approved: false,  // ← GATE until verified
}
```

In production, testimonials with `approved: false` don't display.

## Research & Industry Data

### What's Safe

- Educational content (how DPC works)
- Industry trends with proper citation (e.g., "54% of employers are adopting DPC...")
- Thought leadership (opinions on healthcare)

### What's Risky

- Unverified industry metrics in marketing claims
- Competitor comparisons without verification
- ROI projections without data backing

### How to Use Research

- **Strategy guide:** Yes, use for planning
- **Marketing claim:** No, don't publish unless verified and approved
- **Blog post (with citation):** OK, if source is cited

## Approval Tracking

See `CLAIMS-REGISTER.md` (local pointer to broader OS registry).

Key statuses:
- **Approved:** Ready to publish
- **Needs approval:** Gate it; request review
- **Deferred:** Awaiting business decision; don't build yet
- **Requires verification:** Gate it; waiting for verification

## Questions Before Publishing

Ask yourself:

1. **Is this a claim?** (Specific number? Medical? Insurance? Savings?)
2. **Do I have written approval?** (Finance/Legal/Clinical/Marketing sign-off?)
3. **Is it gated or qualified?** (If not, should it be?)
4. **Can I cite the source?** (Where did this number come from?)
5. **Is this B2C or B2B?** (Is the language appropriate for the audience?)
6. **Have I checked the register?** (Is approval documented?)

If you're unsure, ask before publishing.

## Escalation

If you find a claim that seems risky:

1. **Document it.** Where is it? What does it say?
2. **Don't remove it.** Just flag it for review.
3. **Ask for clarification.** "Is this approved? Should it be gated?"
4. **Wait for response** before changing it.

Example escalation:

> **Question:** The testimonials component shows "$6,200 this year already!"  
> but I don't see verification. Should this be gated with `approved: false`?  
> Who should verify these numbers?

## Summary

- **Know the source.** Where did this come from?
- **Know the approval status.** Is this approved or does it need a gate?
- **Use safe language.** Estimate, soften, qualify.
- **Gate unapproved claims.** Don't publish them.
- **Track approvals.** Update CLAIMS-REGISTER.md when approved.
- **Ask if unsure.** Better to ask than to publish something risky.
