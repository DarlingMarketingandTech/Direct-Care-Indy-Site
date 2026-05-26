# DirectCare Indy Website: Claude Code Instructions

## What This Repo Is

**The active DirectCare Indy main website buildout in progress.** This is a Next.js 16 application with member-facing (B2C) and employer-facing (B2B) routes, pricing calculators, testimonials, and enrollment integration.

Do not call this a demo, prototype, mockup, or replacement site.

## When You Work Here

1. Read the parent OS docs for context: `C:\dev\DirectCare-Indy-Claude-OS\CLAUDE.md`
2. Make code changes **in this repo**.
3. Read `AGENTS.md` for architecture and conventions.
4. Use `.claude/rules/` for decision guidance.
5. Inspect files before editing—don't assume structure.
6. Make small, surgical changes. Avoid refactoring unrelated code.
7. Run `npm run build` and `npm run lint` after implementation.
8. Summarize files changed and checks run.

## No-Touch Zones

- `app/api/**` — API routes (webhooks, calculations, integrations)
- `app/join/page.tsx` — Hint Health enrollment flow
- `.env.local`, `.env.production` — Secrets
- Hint Health integration code
- Payment/enrollment integrations
- Final pricing values (unless explicitly approved)

## Claims Safety

**Pricing, savings, testimonials, HSA/FSA, medical, insurance, pharmacy, lab, and employer ROI claims are approval-gated.**

- Unapproved claims should be gated behind `approved: false` flags or env vars.
- Use the Claims Auditor skill to identify risky language.
- Refer to parent OS: `C:\dev\DirectCare-Indy-Claude-OS\00_command_center\claims-and-approval-register.md`

## Sprint Execution Behavior

1. **Inspect files first.** Understand what exists before proposing changes.
2. **Make small changes.** One feature per commit. Leave unrelated code alone.
3. **Run checks.** Build, lint. Report results.
4. **Summarize changes.** List files edited, exact changes made, checks run.
5. **Do not write docs as Jacob's manual to-do list.** Write execution status instead.
6. **No dates or timeline language.** Use status, priority, blocked/unblocked, approval-gated instead.

## Key Files

| File | Purpose |
|------|---------|
| `AGENTS.md` | Architecture and conventions for all coding agents |
| `.claude/rules/nextjs-app-router.md` | Next.js patterns and cautions |
| `.claude/rules/claims-and-content-safety.md` | Approval-gated claims and safe language |
| `.claude/rules/accessibility-and-ux.md` | WCAG and UX standards |
| `.claude/rules/testing-and-verification.md` | Check procedures |
| `.claude/rules/no-touch-zones.md` | Detailed untouchable areas |
| `docs/DEVELOPMENT.md` | Setup and development commands |
| `docs/QA-CHECKLIST.md` | What to test after changes |
| `docs/CLAIMS-REGISTER.md` | Repo-local pointer to OS claims registry |
| `docs/ROUTE-MAP.md` | Routes, responsible components, risky claim locations |
| `docs/COMPONENT-MAP.md` | Major components and their content sources |

## Build & Test

```bash
npm run dev       # Local dev server
npm run build     # Production build (runs lint, type check, sitemap)
npm run lint      # ESLint check
```

## Package Scripts Available

- `dev`: Next.js dev server (default port 3000)
- `build`: Next.js production build + sitemap generation
- `lint`: ESLint check (no auto-fix by default)
- `start`: Serve production build (requires build first)

## Repo Structure

```
app/               # Next.js App Router routes
├── page.tsx       # Homepage
├── pricing/       # Pricing page
├── membership/    # Membership details
├── how-it-works/  # How DPC works
├── join/          # Enrollment (DO NOT TOUCH)
├── api/           # Webhooks, calculations (DO NOT TOUCH)
└── ...            # Other public routes

components/       # Reusable React components
├── Testimonials.tsx           # Member testimonials (approval-gated)
├── MembershipConfigurator.tsx # Pricing calculator
├── SavingsPersonas.tsx        # Savings examples (qualified)
├── PricingTiers.tsx           # Pricing display
└── ...

lib/              # Utilities, constants, content
├── constants.ts
├── content/       # DPC content data
└── ...

public/           # Static assets (images, fonts, etc.)

.claude/          # Claude Code intelligence layer
├── rules/        # Decision guidance
├── skills/       # Agent capabilities
├── agents/       # Agent personas
└── settings.local.json
```

## Questions?

Refer to:
- **This repo structure & conventions**: `AGENTS.md`
- **Safety & claims**: `.claude/rules/claims-and-content-safety.md`
- **Development setup**: `docs/DEVELOPMENT.md`
- **Parent OS context**: `C:\dev\DirectCare-Indy-Claude-OS\CLAUDE.md`
