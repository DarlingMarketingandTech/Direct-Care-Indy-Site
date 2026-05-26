# No-Touch Zones

**These areas should never be edited without explicit approval.**

## API Routes

```
app/api/**/*.ts
```

### Specific Routes

| Route | Reason |
|-------|--------|
| `app/api/generate-hsa-letter/` | Generates HSA eligibility letters (sensitive content) |
| `app/api/hint-webhook/` | Hint Health enrollment webhook (critical integration) |
| `app/api/leads/` | Lead capture and storage (business process) |
| `app/api/market-costs/` | Pricing calculations (may use secrets) |
| `app/api/wellness/calculate/` | Health calculations (may require API keys) |
| `app/api/who-health/` | External service integration |

### Why

- Webhook handlers are critical for enrollment flow
- API routes access secrets (API keys, database credentials)
- Changes can break integrations
- Calculations may have business logic dependencies

## Enrollment Flow

```
app/join/page.tsx
app/join/success/page.tsx
```

### Why

- Hint Health integration requires specific URL structure and behavior
- Changes risk breaking member onboarding
- Enrollment tracking depends on exact flow

### What If It Needs Changes?

Contact the project team. Hint Health integration changes require:
1. Coordination with Hint Health support
2. Testing in staging environment
3. Verification that redirect URLs still work

## Environment Files

```
.env.local
.env.production
.env.production.local
```

### Why

These files contain secrets:
- API keys (Hint Health, Spruce Health, third-party services)
- Database credentials
- Webhook signing keys
- Email service credentials

### What If You Need to Add a Variable?

1. Use `NEXT_PUBLIC_*` prefix for public variables only
2. Add documentation to `.env.example`
3. Update `docs/DEVELOPMENT.md` with setup instructions
4. Never check secrets into git

### Public Variables Only

OK to update `.env.example` with public variable documentation:

```env
# Safe to document
NEXT_PUBLIC_HSA_APPROVED=false
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

NOT OK:
```env
# Do not add secrets to .env.example
HINT_HEALTH_API_KEY=...
DATABASE_PASSWORD=...
```

## Hint Health Integration

### Files to Avoid

- Any file importing or using Hint Health SDK
- Enrollment redirect logic
- Member portal initialization
- Session management with Hint Health
- Webhook signature validation

### How to Identify

Look for:
- `hint.com` URLs
- `HINT_HEALTH_*` environment variables
- Hint Health SDK imports
- `/join` route logic

### If You Find Hint Health Code

Leave it alone unless:
1. You have explicit approval from the project team
2. You're fixing a broken integration (not refactoring)
3. You coordinate with the Hint Health account manager

## Payment & Enrollment Integrations

### Do Not Touch

- Payment processor integration (if present)
- Stripe/card processing (if present)
- Member authentication (if tied to enrollment)
- Subscription management
- Billing webhooks

### Why

- Payment code requires PCI compliance
- Changes can break revenue flow
- Requires testing with live payment systems
- Legal implications

## Production Environment Files

```
.env.production
.env.production.local
vercel.json (if using Vercel)
next.config.ts (deployment config)
```

### Why

Production config contains:
- Deployment secrets
- CDN settings
- Cache headers
- Analytics tracking IDs
- Production-only features

### If Deployment Fails

Don't modify production config. Escalate to team lead.

## Final Pricing Values

Don't change these hardcoded values unless explicitly approved:

```tsx
// ✗ Don't edit without approval
const PRICING = {
  individual: { min: 69, max: 110 },
  family: 250,
  familyChild: 45,
};
```

### Why

- Pricing changes business operations
- Requires legal/finance approval
- May trigger customer notifications
- Affects contracts and tax filing

### If Pricing Needs Updating

1. Get approval from product/finance
2. Verify change is documented in commit
3. Update all pricing references (homepage, pricing page, calculator, terms)
4. Include disclaimer: "Subject to change"

## Styling in Specific Locations

Don't restructure:
- Root layout styles (`app/layout.tsx`)
- Global theme variables
- Tailwind config color scheme
- CSS grid/flexbox structure of major sections

### What's Safe

- Adding utility classes to individual components
- Adjusting padding/margin on specific sections
- Changing button colors (if not breaking brand)
- Modifying component-local styles

## Team-Specific Code

If code has a comment like:

```tsx
// TODO: @jacob - check this before changing
// ALERT: This code is maintained by [person]
// DO NOT MODIFY without consulting [person]
```

Don't edit without checking first.

## Summary: What's Always Off-Limits

❌ `app/api/**/*`  
❌ `app/join/*`  
❌ `.env.local`, `.env.production*`  
❌ Hint Health code  
❌ Payment processing  
❌ Final pricing values  
❌ Production environment config  

✓ Everything else (with consideration)

## When You Encounter a No-Touch Zone

If you need to edit a no-touch area:

1. **Stop.** Don't edit it.
2. **Document the need.** Explain what needs changing and why.
3. **Escalate.** Flag for project lead review.
4. **Get approval.** Only proceed with explicit go-ahead.

### Example Escalation

> I need to update the pricing values in MembershipConfigurator because Finance
> approved new rates for 2026. Where should I get the officially approved numbers?
> I'm ready to update once I have written confirmation.

Or:

> I found a bug in the enrollment flow, but it's in app/join/page.tsx. Should I
> fix this or escalate to the Hint Health integration team?

These are good escalations. Use them.
