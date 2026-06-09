# Claims and Content Safety

## Approval-Gated Categories

| Category | Examples | Rule |
|----------|----------|------|
| Membership pricing | plan prices, benefits, add-on pricing | Use approved content and shared source files |
| Savings language | “save”, annual reductions, guaranteed results | Qualify, gate, or remove |
| Testimonials | customer quotes with results or pricing | Verify before publication |
| HSA/FSA claims | eligibility or tax language | Keep approval-gated |
| Insurance language | replacement or alternative language | Clarify DPC is not insurance |
| Lab/pharmacy examples | cash-pay comparisons and examples | Keep current-pricing disclaimers visible |

## Current Pricing Safety Notes

- Public pricing source of truth: `lib/content/membership-pricing.ts`
- Active pricing route: `/membership`
- Deprecated pricing route: `/pricing`
- Do not reintroduce age-band pricing, family-cap pricing, or exact-price calculators

## Safe Patterns

- “Pricing and availability are subject to change.”
- “Call or text DirectCare Indy to confirm current pricing.”
- “Direct Care Indy is not health insurance.”
- “May” and “designed to” instead of guarantees
