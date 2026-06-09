# Content Governance

> **Canonical strategy:** [`PROJECT_MEMORY.md`](./PROJECT_MEMORY.md)

## Source of Truth

- Approved public membership pricing content lives in `lib/content/membership-pricing.ts`
- Quiz content lives in `lib/dpc-fit-quiz.ts`
- Parent claims register remains the master approval log:
  `C:\dev\DirectCare-Indy-Claude-OS\00_command_center\claims-and-approval-register.md`

## Pricing Rules

- Active public pricing route: `/membership`
- Legacy `/pricing` route is deprecated and redirected
- Homepage pricing preview must stay concise and quiz-first
- Do not reintroduce calculators, family-cap pricing, age-band pricing, or exact household price copy

## Approval-Gated Claim Categories

| Category | Examples | Rule |
|----------|----------|------|
| Membership pricing | plan prices, benefits, add-on pricing | Update only from approved source content |
| Savings claims | annual savings, guaranteed reductions | Qualify or remove unless approved |
| Testimonials | customer quotes with pricing or savings | Verify and gate appropriately |
| HSA/FSA language | eligibility, tax treatment | Keep approval-gated |
| Insurance positioning | replacement or alternative language | Clarify that DPC is not insurance |
| Lab/pharmacy pricing | service examples and comparisons | Keep disclaimers visible and confirm current pricing |

## Safe Messaging Defaults

- Use “pricing and availability are subject to change”
- Use “call or text DirectCare Indy to confirm current pricing”
- Avoid guarantees
- Avoid exact savings promises
- Avoid suggesting Direct Primary Care replaces insurance
