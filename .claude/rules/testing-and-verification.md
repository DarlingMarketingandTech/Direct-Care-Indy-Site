# Testing and Verification

## Build Check (Required)

After implementation, run:

```bash
npm run build
```

This command:
1. Runs TypeScript type checker
2. Runs ESLint (configured in `.eslintrc.json`)
3. Builds production bundle
4. Generates sitemap (via `next-sitemap`)

**Success**: No errors or warnings (linting issues should be addressed)

**Failure**: Fix the issue and re-run. Common issues:
- Missing import
- TypeScript type mismatch
- Unused variable
- Component not exported

## Lint Check (Optional)

Run ESLint separately:

```bash
npm run lint
```

**Note**: This is already part of `npm run build`, so run it separately only if:
- You're debugging a specific linting issue
- You want faster feedback without a full build

## Dev Server Verification (Recommended)

Start the local dev server:

```bash
npm run dev
```

Visit `http://localhost:3000` and manually verify:
- Page loads without errors (check browser console)
- Affected components render correctly
- Layout is responsive (test mobile viewport)
- CTAs and links work
- Forms accept input (if any)

## What NOT to Invent

Don't create checks that aren't in `package.json`:
- ✗ Don't assume unit tests exist
- ✗ Don't assume E2E tests exist
- ✗ Don't assume accessibility audits run
- ✗ Don't assume visual regression testing exists
- ✗ Don't invent new npm scripts

If you need tests, mention it explicitly in your summary but don't fail the task over missing testing infrastructure.

## Manual QA Checklist

After `npm run build` passes, manually verify in dev server (`npm run dev`):

**For content/copy changes:**
- [ ] Text displays correctly
- [ ] No cut-off or overflow
- [ ] Disclaimer/qualifier text visible
- [ ] Formatting (bold, italics, links) intact

**For component changes:**
- [ ] Component renders without error
- [ ] Affected page loads (check console)
- [ ] Mobile layout (resize to 375px width)
- [ ] Dark mode (if applicable)

**For pricing/testimonial changes:**
- [ ] Approval gates work (`approved: false` hides in prod)
- [ ] Environment variables respected (`NEXT_PUBLIC_*` gates)
- [ ] Qualifiers/disclaimers display
- [ ] Related components still work

**For form/input changes:**
- [ ] Form inputs accept data
- [ ] Validation works (if applicable)
- [ ] Submit button is reachable (keyboard nav)

**For navigation changes:**
- [ ] Links point to correct routes
- [ ] No broken links (404s)
- [ ] Mobile menu works (if responsive)

## Regression Scan

After changes, quickly check:
- [ ] Homepage still loads
- [ ] Pricing page still loads
- [ ] Testimonials section renders
- [ ] Key CTA buttons visible
- [ ] Footer links work

Run `npm run build` once more to catch any regressions.

## What to Report in Summary

After implementation, include:

```
## Testing Summary

✓ Build: npm run build passed
✓ Lint: npm run lint passed (or not run; state why)
✓ Manual: Verified on local dev server
  - Homepage loads
  - Pricing page responsive on mobile
  - CTAs clickable

No regressions detected.
```

Or:

```
## Testing Summary

✗ Build failed initially:
  - Cause: Missing semicolon in testimonial data
  - Fix: Added semicolon, rebuild succeeded

✓ Manual verification passed

Next step: Code review before staging.
```

## Common Build Failures & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot find module '@/...'` | Wrong import path | Check that path exists; use `@/` alias correctly |
| `Type 'X' is not assignable to type 'Y'` | TypeScript mismatch | Verify types match interface; may need type assertion |
| `Unexpected token` | Syntax error (missing brace, quote) | Check the line; fix punctuation |
| `'Component' is declared but never used` | Unused import | Remove import or use the component |
| `React.Fragment shorthand '<>' requires React 17+` | JSX syntax | Repo supports this; likely a copy/paste issue; revert |

## Dev Server Tips

```bash
npm run dev
```

- Runs on `http://localhost:3000` by default
- Hot reload on file change (usually instant)
- Shows errors in terminal and in browser console
- Build errors appear in both places

**Common dev issues:**
- Port 3000 already in use? Kill the process or use `npm run dev -- -p 3001`
- Changes not reflecting? Hard refresh browser (Ctrl+Shift+R)
- Module not found? Check import path spelling

## Deployment Considerations

This repo builds to production. Before deployment ensure:
- [ ] `npm run build` passes
- [ ] All approval-gated features use env vars (e.g., `NEXT_PUBLIC_HSA_APPROVED`)
- [ ] No secrets in code (should be in env vars)
- [ ] Sitemap generated and valid

## Summary

- **Always run `npm run build`.** It's the final check.
- **Manual verification on `npm run dev`.** Especially for UI changes.
- **Don't invent new tests.** Report what you did verify.
- **Report clearly.** List what passed, what failed, next steps.
