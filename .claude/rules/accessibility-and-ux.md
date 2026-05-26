# Accessibility and UX Standards

**Path scope:** `app/**/*`, `components/**/*`

## Semantic HTML

Use semantic tags. Don't use `<div>` for everything.

```tsx
// ✓ Good
<header>
  <nav>
    <Link href="/">Home</Link>
  </nav>
</header>
<main>
  <section>
    <h1>Page Title</h1>
  </section>
</main>
<footer>
  <p>&copy; 2026</p>
</footer>

// ✗ Avoid
<div className="header">
  <div className="nav">
    <a href="/">Home</a>
  </div>
</div>
```

## Buttons vs Links

- **Button**: Performs an action (submit form, toggle state, delete)
- **Link**: Navigates to a URL (internal page, external site)

```tsx
// ✓ Button for action
<button onClick={handleClick} className="btn">
  Submit Form
</button>

// ✓ Link for navigation
<Link href="/pricing" className="btn">
  View Pricing
</Link>

// ✗ Wrong
<a href="#" onClick={handleClick}>Click me</a>
<button onClick={() => navigate('/pricing')}>View Pricing</button>
```

## Form Labels

Every `<input>`, `<select>`, `<textarea>` needs a `<label>`.

```tsx
// ✓ Good
<label htmlFor="email">Email Address</label>
<input id="email" type="email" />

// ✓ Also good (label wraps input)
<label>
  Email Address
  <input type="email" />
</label>

// ✗ Missing label
<input type="email" placeholder="Email" />
```

## Keyboard Navigation

- All interactive elements should be reachable via keyboard (Tab key)
- Links and buttons naturally support this
- For custom components, use `tabIndex={0}` sparingly and document

```tsx
// ✓ Good (button is keyboard accessible)
<button onClick={handleClick}>Action</button>

// ✓ Custom interactive element
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Custom Button
</div>
```

## Alt Text

Every image needs **descriptive alt text**. Alt text should:
- Describe the image's purpose, not say "image of"
- Be concise (under 125 characters)
- Be functional, not decorative (use empty alt `alt=""` for purely decorative images)

```tsx
// ✓ Good
<Image
  src="/clinic.jpg"
  alt="DirectCare Indy clinic interior with exam rooms"
  width={800}
  height={600}
/>

// ✓ Decorative (empty alt)
<Image
  src="/decorative-line.svg"
  alt=""
  width={100}
  height={4}
/>

// ✗ Poor
<Image src="/clinic.jpg" alt="clinic" />
<Image src="/clinic.jpg" alt="image of clinic" />
```

## Color Contrast

- Text should have sufficient contrast against background (WCAG AA minimum: 4.5:1)
- Don't rely on color alone to convey information (e.g., red for error, green for success)

Use complementary text and icons:

```tsx
// ✓ Good
<div className="bg-red-50 border-l-4 border-red-500 text-red-700">
  <strong>Error:</strong> Please fill in all fields.
</div>

// ✓ Color + icon
<div className="flex items-center gap-2 text-green-700">
  <CheckCircle className="w-5 h-5" />
  <span>Successfully saved</span>
</div>
```

## Mobile Readability

- **Touch targets**: Minimum 44px × 44px (buttons, links, inputs)
- **Font size**: Minimum 16px for body text (prevents zoom on iOS)
- **Line height**: 1.5+ for readability
- **Spacing**: Adequate padding around interactive elements

```tsx
// ✓ Good
<button className="px-6 py-3 text-base font-semibold rounded">
  Join Now
</button>

// ✗ Too small
<button className="px-2 py-1 text-sm">Join</button>
```

## Focus Indicators

- Keyboard users need visible focus states
- Don't remove outline without providing alternative

```tsx
// ✓ Good (Tailwind provides defaults)
<button className="focus-visible:outline focus-visible:outline-2">
  Button
</button>

// ✓ Custom focus state
<input
  type="text"
  className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
/>

// ✗ Bad (removes focus)
<button className="focus:outline-none">Button</button>
// ^ Should never do this without a replacement indicator
```

## CTA Clarity

Calls to Action should:
- Use strong action verbs ("Join Now," "Learn More," "Get Started")
- Be visually distinct (color, size, contrast)
- Stand out from surrounding content
- Be placed near relevant content

```tsx
// ✓ Clear CTA
<Link
  href="/join"
  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-bold
             hover:bg-teal-700 transition-colors"
>
  Join Now
</Link>

// ✗ Unclear
<button className="text-gray-600 underline">click here</button>
```

## Mobile Navigation

- **Hamburger menu** for mobile (breakpoint ~768px)
- **Clear menu labels** (avoid icons-only on mobile)
- **Touch-friendly spacing** (44px min tap targets)
- **Avoid overflow** (menu shouldn't extend off screen)

```tsx
// ✓ Mobile-friendly nav
<nav className="hidden md:flex gap-6">
  {/* Desktop nav */}
</nav>
<MobileMenu className="md:hidden" />
```

## Form UX

- **Clear labels and placeholders** (but don't rely on placeholder alone)
- **Error messages** near the field, specific and helpful
- **Success messages** confirm completion
- **Input types** match purpose (email, tel, number, date)

```tsx
// ✓ Good form field
<div>
  <label htmlFor="email" className="block text-sm font-medium">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded"
  />
  {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
</div>
```

## Loading States

- Show indication when content is loading
- Use `<Suspense>` for Server Component async boundaries
- Don't leave user guessing

```tsx
// ✓ Good
<Suspense fallback={<LoadingSpinner />}>
  <AsyncComponent />
</Suspense>

// ✓ Button loading state
<button disabled={isLoading}>
  {isLoading ? 'Saving...' : 'Save'}
</button>
```

## Links to External Sites

- Use `target="_blank" rel="noreferrer"` to open in new tab
- Consider adding visual indicator (icon) that link opens externally

```tsx
// ✓ Good
<a
  href="https://external.com"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-1"
>
  External Resource
  <ExternalLink className="w-4 h-4" />
</a>
```

## Spacing & Layout

- Use consistent spacing scale (8px, 16px, 24px, 32px, etc.)
- Maintain whitespace for readability
- Don't crowd content

```tsx
// ✓ Good spacing
<div className="space-y-6 px-4 py-8">
  <h1>Title</h1>
  <p>Content</p>
</div>
```

## Dark Mode

- Support dark mode where styling is critical
- Use semantic color variables (foreground, background, muted-foreground)
- Test in both light and dark

```tsx
// ✓ Good dark mode
<div className="bg-white dark:bg-card text-gray-900 dark:text-foreground">
  Content
</div>
```

## No-Accessibility Assumptions

- Don't assume users can see (test with screen readers)
- Don't assume users can click (keyboard navigation required)
- Don't assume users can hear (captions for video, text alternatives)
- Don't assume users have fast internet (load efficiently)

## Summary

- **Semantic HTML**: Use correct tags
- **Keyboard accessible**: Tab through everything
- **Alt text**: Describe images
- **Good contrast**: WCAG AA minimum
- **Mobile-friendly**: 44px tap targets, 16px+ text
- **Clear labels**: Every form field labeled
- **Focus indicators**: Show which element has focus
- **Strong CTAs**: Action-oriented, visually distinct
