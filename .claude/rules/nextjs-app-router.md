# Next.js App Router Conventions

**Path scope:** `app/**/*`, `components/**/*`, `lib/**/*`

## Route Structure

- App Router conventions: `app/[route]/page.tsx`
- Layouts: `app/[route]/layout.tsx` (wraps page)
- Dynamic routes: `app/[param]/page.tsx` (matches any value)
- Catch-all: `app/[...slug]/page.tsx` (matches multiple segments)

### Route Metadata

- `generateMetadata()` for page-specific titles/descriptions
- `ResolvedMetadata` type for type safety
- Include Open Graph tags for social sharing

## Server and Client Components

**Default: Server Components**

```tsx
// ✓ Good (Server Component by default)
export default function MyPage() {
  // Can access databases, APIs, secrets
  const data = await fetchData();
  return <div>{data}</div>;
}
```

**Client Components only when needed:**

```tsx
// ✓ Good (Client Component for interaction)
'use client';
import { useState } from 'react';

export function MyForm() {
  const [value, setValue] = useState('');
  return <input onChange={(e) => setValue(e.target.value)} />;
}
```

### Cautions

- `useState`, `useEffect`, event handlers → client component
- Database queries, API key access → server component
- Mixing: Server parent → client child is OK. Client parent → server child is NOT.
- Don't make entire pages client unless there's interactivity throughout.

## Styling

- **Tailwind CSS 4 + PostCSS** (configured in `tailwind.config.ts`)
- **Dark mode support** via `next-themes`
- **Responsive**: mobile-first approach
- **Keep existing patterns**: Don't refactor style structure

### Examples

```tsx
// ✓ Standard Tailwind
<div className="px-4 py-8 bg-card text-foreground rounded-lg">
  <h2 className="text-2xl font-bold mb-4">Title</h2>
</div>

// ✓ Dark mode
<div className="bg-white dark:bg-card">Content</div>

// ✓ Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</div>
```

## Imports & Module Resolution

- **Absolute imports enabled**: `@/` alias points to project root
- **Relative imports OK**: `../components/MyComponent`
- **Path correctness**: Always verify `@/lib/`, `@/components/` exist

```tsx
// ✓ Good
import { Button } from '@/components/ui/button';
import { MEMBER_COUNT } from '@/lib/constants';

// ✓ Also good
import { Testimonials } from '../Testimonials';
```

## Image Optimization

- **Next.js Image component**: `import Image from 'next/image'`
- **Prevent layout shift**: Always provide `width` and `height` (or `fill`)
- **Lazy loading**: Default; use `priority` for above-fold
- **Formats**: WebP preferred; JPEG/PNG fallback

```tsx
// ✓ Good
<Image
  src="/images/clinic.webp"
  alt="DirectCare Indy clinic"
  width={800}
  height={600}
  className="rounded-lg"
/>

// ✓ Fill layout (for hero backgrounds)
<div className="relative h-96">
  <Image
    src="/hero.webp"
    alt="Hero"
    fill
    className="object-cover"
  />
</div>
```

## Links and Navigation

- **Next.js Link component**: `import Link from 'next/link'`
- **Internal routes**: Use `<Link href="/path">Text</Link>`
- **External links**: Use `<a href="https://...">Text</a>` with `target="_blank" rel="noreferrer"`

```tsx
// ✓ Good
<Link href="/pricing" className="btn">View Pricing</Link>

// ✓ External link
<a href="https://example.com" target="_blank" rel="noreferrer">
  External Site
</a>
```

## Do Not Move Routes

Routes have SEO value, enrollment flows, and external links pointing to them. **Don't rename or move routes without explicit approval.**

- `/pricing` is indexed and linked externally
- `/join` is the enrollment entry point (don't move)
- `/how-it-works` is part of onboarding flow

If a route must move:
1. Create a redirect in `next.config.ts`
2. Update all internal links
3. Document in commit message why

## Layout Consistency

- **Root layout** (`app/layout.tsx`): Global styles, fonts, providers (Google Fonts, theme, etc.)
- **Nested layouts**: Local wrapping (nav, sidebar, styling for sections)
- **Don't duplicate providers** across layouts

```tsx
// app/layout.tsx (root)
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

// app/pricing/layout.tsx (section-level)
export default function PricingLayout({ children }) {
  return (
    <div className="bg-muted">
      {children}
    </div>
  );
}
```

## Component Composition

- **Keep components focused**: One responsibility per component
- **Props over drilling**: Pass data as props; don't assume global state
- **TypeScript interfaces**: Define prop shapes explicitly

```tsx
interface PricingTierProps {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export function PricingTier({ name, price, features, popular }: PricingTierProps) {
  return (
    <div className={popular ? 'ring-2' : ''}>
      {/* ... */}
    </div>
  );
}
```

## Performance & Build

- **Avoid dynamic imports** unless code-splitting is needed
- **Lazy load non-critical components** with `React.lazy()` + `Suspense`
- **Build output**: `npm run build` generates `.next/` folder
- **Sitemap**: Automatically generated by `next-sitemap` postbuild script

## Suspense & Streaming

- **Suspense for async operations**: Wrap client components expecting data
- **Streaming responses**: Use in Server Components for better Time to First Byte

```tsx
// ✓ Good (Suspense for async component)
<Suspense fallback={<LoadingSpinner />}>
  <AsyncComponent />
</Suspense>
```

## Summary

- **Default to Server Components.** Use client only for interactivity.
- **Keep existing styling patterns.** Tailwind structure is consistent.
- **Don't move routes.** They have SEO and integration value.
- **Use Image component** for optimization and alt text.
- **Absolute imports** with `@/` alias for clarity.
- **Type-safe props** with TypeScript interfaces.
- **Run build** after major changes to catch issues early.
