# Development Guide

## Setup

### Prerequisites

- Node.js 18+ (check with `node --version`)
- npm 9+ (check with `npm --version`)

### Initial Setup

```bash
# Navigate to repo
cd C:\dev\DirectCare-Indy-Claude-OS\03_website_buildout\main-site-repo\Direct-Care-Indy-Site

# Install dependencies
npm install --legacy-peer-deps

# Copy environment template (see .env.example)
# Environment variables for development use defaults
```

## Development Commands

### Start Local Dev Server

```bash
npm run dev
```

- Runs Next.js dev server on `http://localhost:3000`
- Hot reload on file change (instant refresh)
- Shows errors in terminal and browser console

**Troubleshooting:**
- Port 3000 in use? Kill process or use `npm run dev -- -p 3001`
- Changes not reflecting? Hard refresh browser (Ctrl+Shift+R)
- Module not found? Check import path spelling

### Production Build

```bash
npm run build
```

- Runs TypeScript type checker
- Runs ESLint
- Builds production bundle
- Generates sitemap (via `next-sitemap`)
- Catches build errors before deployment

**Always run before committing.**

### Lint Check

```bash
npm run lint
```

- Runs ESLint on all files
- Reports issues (doesn't auto-fix by default)
- Part of `npm run build`, so usually don't need separate run

### Serve Production Build (Local)

```bash
npm run build   # Must run build first
npm start       # Serves .next/ folder locally
```

- Simulates production environment
- Use to test optimizations before deploy
- Still runs on `http://localhost:3000` by default

## Environment Variables

### For Development (No Setup Needed)

Development uses sensible defaults. Most features work out of the box.

### For Public Features (Safe to Set)

```env
NEXT_PUBLIC_HSA_APPROVED=false    # Set to true only after legal approval
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### For Secrets (Do Not Touch)

```
.env.local (git-ignored)
.env.production (git-ignored)
```

These are never committed and contain API keys, webhooks, secrets. Don't edit these unless you know what you're doing.

### If You Need to Add a Public Variable

1. Add to `.env.example` with documentation (not the value)
2. Update this guide with setup instructions
3. Use `NEXT_PUBLIC_` prefix (only public variables)

```env
# ✓ Good example
NEXT_PUBLIC_FEATURE_ENABLED=true

# ✗ Bad example (not secret!)
NEXT_PUBLIC_API_KEY=sk_live_xxxxx
```

## File Structure Quick Ref

```
app/                    # Next.js App Router
├── page.tsx           # Homepage
├── pricing/           # /pricing route
├── membership/        # /membership route
├── how-it-works/      # /how-it-works route
└── api/               # API routes (DO NOT TOUCH)

components/           # Reusable React components
├── Testimonials.tsx
├── MembershipConfigurator.tsx
├── SavingsPersonas.tsx
└── ...

lib/                  # Utilities, constants, data
├── constants.ts
└── content/

public/               # Static assets (images, fonts)

.claude/              # Claude Code intelligence layer
├── rules/
├── skills/
└── agents/

docs/                 # This documentation
```

## Common Development Tasks

### Add a New Page

1. Create folder: `app/new-page/`
2. Create file: `app/new-page/page.tsx`
3. Write component:

```tsx
export default function NewPage() {
  return (
    <main>
      <h1>New Page Title</h1>
      {/* Content */}
    </main>
  );
}
```

4. Route automatically available at `/new-page`

### Add a New Component

1. Create file: `components/MyComponent.tsx`
2. Write component:

```tsx
interface MyComponentProps {
  title: string;
}

export function MyComponent({ title }: MyComponentProps) {
  return <div>{title}</div>;
}
```

3. Import in page:

```tsx
import { MyComponent } from '@/components/MyComponent';

export default function Page() {
  return <MyComponent title="Hello" />;
}
```

### Edit Content Data

Content lives in `lib/content/` or inline in components. Check `.claude/rules/claims-and-content-safety.md` before editing claims.

### Test Before Committing

```bash
npm run build    # Must pass
npm run dev      # Visual check
```

Then visit `http://localhost:3000` and test affected pages.

## Debugging Tips

### Check Console Errors

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for red errors
4. Red errors block page rendering; fix them

### Check Build Errors

1. Run `npm run build`
2. Read error message carefully
3. Go to line number mentioned
4. Fix the issue (usually missing import, typo, type mismatch)
5. Re-run build

### TypeScript Errors

```bash
npm run build     # Shows type errors
```

Common issues:
- Missing type definition → Add interface or type
- Type mismatch → Verify prop matches expected type
- Unused variable → Delete it or use it

### Performance

- Dev server is fast; production build takes longer (normal)
- Next.js bundles smartly; don't worry about import size
- Images optimized automatically via Next.js Image component

## IDE Setup (Optional)

### VS Code Extensions (Recommended)

- ES Lint
- Prettier (optional; repo doesn't require it)
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin

### Settings

Create `.vscode/settings.json` in repo root:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## Questions?

- **How do I run X?** Check this file and `package.json`
- **My build is broken.** Run `npm run build` and read the error message
- **How do I add a page?** See "Common Development Tasks" section
- **Can I edit [file]?** Check `.claude/rules/no-touch-zones.md`
