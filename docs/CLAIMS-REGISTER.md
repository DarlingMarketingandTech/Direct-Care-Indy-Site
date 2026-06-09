# Claims Register (Repo Pointer)

This repo uses the parent OS claims register as the approval source of truth:

`C:\dev\DirectCare-Indy-Claude-OS\00_command_center\claims-and-approval-register.md`

## Current Claim Surfaces In This Repo

| Claim Category | Current Repo Location |
|----------------|-----------------------|
| Membership pricing and benefits | `lib/content/membership-pricing.ts`, `app/page.tsx`, `components/membership/MembershipPricingView.tsx` |
| Additional-service pricing | `lib/content/membership-pricing.ts`, membership page pricing sections |
| HSA/FSA language | `components/HsaBadge.tsx`, `components/HsaStatusTracker.tsx`, approved public copy only |
| Employer ROI language | employer pages and supporting content, if explicitly approved |

## Working Rule

- Update the parent register when approval status changes
- Keep repo implementation aligned with approved copy
- Do not recreate deleted testimonial, savings-persona, or calculator claim surfaces
