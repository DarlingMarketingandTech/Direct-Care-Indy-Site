# Sprint Executor Skill

## Purpose

Execute approved website sprint tasks safely and efficiently. Make surgical changes, verify, and summarize without ceremony.

## When to Use This Skill

- Implementing approved sprint changes (e.g., "add pricing disclaimer to 3 pages")
- Fixing identified issues (testimonials, claims, gates)
- Making small, focused improvements
- Adding safe disclaimers, qualifiers, or approval gates

## When NOT to Use

- Don't use if change is approval-gated and approval isn't documented
- Don't use if working in a no-touch zone without explicit approval
- Don't use for refactoring or major restructuring
- Don't use for new features or new routes (needs planning first)

## Execution Pattern

1. **Read relevant rule files** (claims safety, nextjs conventions, etc.)
2. **Inspect the target files** to understand current state
3. **Make one focused change** per task
4. **Run `npm run build`** to verify
5. **Run `npm run dev` and spot-check** if UI changed
6. **Summarize**: Files changed, exact edits, verification results
7. **Report status, not a manual for Jacob**

## Example Task: "Add pricing disclaimer"

```
Task: Add pricing disclaimer to app/page.tsx

Execution:
1. Inspect app/page.tsx to find pricing section
2. Add disclaimer text after pricing calculator section
3. Verify no TypeScript errors
4. Run: npm run build ✓
5. Test: npm run dev, check homepage appears correct ✓
6. Summarize changes made

Summary:
- File: app/page.tsx
- Change: Added 4-line pricing disclaimer div after MembershipConfigurator
- Verification: Build passed, homepage loads without errors
- Status: Complete, ready for review
```

## Key Behaviors

### Small Surgical Changes
- One feature per task
- Don't refactor unrelated code
- Don't rename variables "while you're at it"
- Don't move files or routes

### Inspect First
- Always read target file before proposing changes
- Understand context and conventions
- Identify where the change belongs
- Look for existing patterns to follow

### Run Checks
- `npm run build` is mandatory (catches TypeScript errors)
- `npm run dev` recommended for UI changes
- Report what you verified
- If build fails, fix and re-run

### Summarize Clearly
```
Files Changed:
- components/Testimonials.tsx (added approved field, added filter logic)
- app/page.tsx (added insurance disclaimer)

Exact Changes:
- Testimonials: Added `approved?: boolean` to interface, added filter
- Page: Added 6-line disclaimer div

Verification:
✓ npm run build passed
✓ Local dev server tested, homepage loads
✓ No console errors

Status: Complete, ready for staging
```

### No Dates or Timelines
- Don't say "1 hour" or "took 30 minutes"
- Don't say "by end of day" or "this week"
- Do say "Complete" or "Blocked by X approval"

## Safe Patterns to Use

```tsx
// ✓ Good: Add approval gate
{process.env.NEXT_PUBLIC_HSA_APPROVED === 'true' && (
  <HsaBadge />
)}

// ✓ Good: Add qualifier
<p className="text-xs text-gray-500">Estimated based on typical usage</p>

// ✓ Good: Add disclaimer
<div className="bg-blue-50 p-4 rounded">
  <p>Important: This is not health insurance.</p>
</div>

// ✓ Good: Gate with approved flag
testimonials.filter(t => process.env.NODE_ENV === 'development' || t.approved)

// ✓ Good: Add safe language
// Before: "Saves $2,400/year"
// After: "Estimated savings: $2,400/year"
```

## Risky Patterns to Avoid

```tsx
// ✗ Don't remove existing gates
// If code has `approved: false`, don't remove the flag

// ✗ Don't publish unverified claims
// Don't change from qualified to absolute language

// ✗ Don't touch no-touch zones
// Don't edit app/api/**, app/join/**, .env files

// ✗ Don't invent new features
// Stick to approved task
```

## If You Hit a Blocker

Document and escalate:

> **Blocked**: Cannot complete testimonial approval gating because
> Finance hasn't verified the savings amounts. Waiting for sign-off.
>
> Next: Contact Finance for verification list, then gate and test.

Or:

> **Blocked**: Need clarification on where pricing disclaimer should go.
> Is it part of the card, below the calculator, or in the hero?
> 
> Next: Waiting for product spec before proceeding.

## Success Criteria

- Task completed as specified
- Build passes with no errors
- No regressions introduced
- Changes are minimal and focused
- Verification documented
- Summary is clear and actionable

## Questions?

- **Where should this go?** Read the rule files and AGENTS.md
- **Is this a no-touch zone?** Check `.claude/rules/no-touch-zones.md`
- **Is this claim safe?** Check `.claude/rules/claims-and-content-safety.md`
- **Build failed. What now?** Fix the issue, re-run, then summarize
