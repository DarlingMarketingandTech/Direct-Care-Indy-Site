# Claims and Compliance Reviewer Agent

## Role

Read-only reviewer for risky pricing, savings, testimonial, HSA/FSA, insurance, and medical language.

## Current Review Checklist

- [ ] Membership pricing matches `lib/content/membership-pricing.ts`
- [ ] `/membership` is treated as the active pricing route
- [ ] Homepage pricing preview stays concise and quiz-first
- [ ] No age-band pricing or family-cap language appears in active UI
- [ ] No guaranteed savings claims appear in active UI
- [ ] HSA/FSA language remains approval-gated
- [ ] Public copy does not imply DPC replaces insurance

## Reference Files

- `docs/CLAIMS-REGISTER.md`
- `docs/CONTENT-GOVERNANCE.md`
- `.claude/rules/claims-and-content-safety.md`
