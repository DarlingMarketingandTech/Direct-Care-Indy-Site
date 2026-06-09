# Build Fixes Summary

Historical note for earlier build stabilization work. Keep this file as reference only, not as the source of current architecture guidance.

## Current Repo Truth

- Build command: `npm run build`
- Lint command: `npm run lint`
- Current Next config file: `next.config.mjs`
- Active pricing route: `/membership`
- Deprecated pricing route: `/pricing` redirects to `/membership`
- Legacy pricing calculator files and `PricingTiers` have been removed from active architecture

## What This File Is For

- Remembering that earlier build issues were resolved
- Pointing future cleanup work back to current repo files instead of old local-machine paths
- Avoiding confusion when older references mention deleted pricing components

## What Not To Assume From Older Notes

- Do not assume `PricingTiers` or other deleted pricing components still exist
- Do not assume old local filesystem paths are valid
- Do not assume older workaround notes override current `package.json` scripts or `next.config.mjs`

## Current Validation Status

- The repository currently builds with `npm run build`
- The repository currently lints with `npm run lint`

For current route, component, and pricing architecture, use:

- `docs/ROUTE-MAP.md`
- `docs/COMPONENT-MAP.md`
- `docs/DEVELOPMENT.md`
- `AGENTS.md`
