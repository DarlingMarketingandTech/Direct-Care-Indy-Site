# Claims Register (Repo-Local Pointer)

**This is a lightweight pointer to the source of truth.**

## Source of Truth

See: `C:\dev\DirectCare-Indy-Claude-OS\00_command_center\claims-and-approval-register.md`

That document is maintained as the single authoritative list of all claims, their approval status, and sources.

## For This Repo

When editing claims in this repo, update the **master register** in the parent OS, not this file.

### Claims Present in This Repo

This repo displays claims in these locations:

| Claim Category | Repo Location | Status | Approval |
|---|---|---|---|
| **Pricing** | `app/page.tsx`, `app/pricing/page.tsx`, components | See master register | Finance |
| **Testimonials** | `components/Testimonials.tsx` | Gated (needs approval) | Marketing + Legal |
| **Savings estimates** | `components/SavingsPersonas.tsx` | Qualified with language | Finance |
| **HSA/FSA** | `components/PricingTiers.tsx`, `components/HsaBadge.tsx`, `components/HsaStatusTracker.tsx`, `app/faq/page.tsx`, `components/SharedFooter.tsx` | Badge/pricing-tier surfaces are env-gated; other HSA/FSA copy remains approval-gated unless separately wrapped, softened, or approved. | Legal |
| **Lab/pharmacy pricing** | `components/LabPharmacySavingsTable.tsx` | Needs verification | Partnerships |
| **Employer ROI** | Not implemented (deferred) | N/A | Awaiting decision |

## Process

1. **Before implementing a claim:** Check the master register
2. **If approved:** Implement without gating
3. **If unapproved:** Gate behind `approved: false` or env var
4. **After gating:** Update the master register status
5. **For verification requests:** Document in master register

## Questions

- **Is this claim approved?** → Check master register
- **How do I gate a claim?** → See `.claude/rules/claims-and-content-safety.md`
- **Should I publish this?** → Check approval status in master register
- **How do I update approval status?** → Update master register in parent OS

## Link to Master Register

`C:\dev\DirectCare-Indy-Claude-OS\00_command_center\claims-and-approval-register.md`

Keep both in sync. When this repo implements a gated claim, mark it in the master register with its gating method and location.

HSA/FSA badge and pricing-tier surfaces are gated behind `NEXT_PUBLIC_HSA_APPROVED`. Other HSA/FSA copy remains approval-gated and should be reviewed before publication.

Example:

```
Claim: "Save $2,400/year"
Status: Gated (approval needed)
Repo location: components/SavingsPersonas.tsx, line 11
Gating: Qualified with "estimated based on typical usage"
Approval needed: Finance verification
```
