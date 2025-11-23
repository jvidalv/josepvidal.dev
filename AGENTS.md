# AGENTS.md - AI Agent Workflows

This document provides step-by-step workflows for AI agents performing common tasks on this codebase.

## Workflow 1: Adding a Blog Post

**Goal**: Create a new blog post and ensure it's properly rendered

### Steps

1. **Create the markdown file**
   - Navigate to `/posts` directory
   - Create a new `.md` file with a descriptive slug (e.g., `my-new-post.md`)

2. **Add frontmatter**
   ```markdown
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   category: "engineering" # or other category
   ---
   ```

3. **Write content**
   - Use standard Markdown syntax
   - content-collections will automatically compile to HTML

4. **Verify the post**
   - Run `yarn dev`
   - Visit `http://localhost:3000/blog`
   - Check that your post appears in the list
   - Visit `http://localhost:3000/blog/your-slug`
   - Verify rendering in both light and dark mode

5. **Build test**
   - Run `yarn build` to ensure static generation works
   - Check for any errors in the build output

### Important Notes
- Date format must be `YYYY-MM-DD`
- Title and category are required
- Slug is derived from filename
- content-collections auto-generates TypeScript types

---

## Workflow 2: Creating Components

**Goal**: Add a new reusable component following the atomic design pattern

### Steps

1. **Determine component type**
   - **Atom**: Small, single-purpose component (button, badge, input)
   - **Organism**: Complex component composed of multiple atoms (header, footer, card)
   - **UI**: shadcn/ui component (use CLI to add)

2. **For Atoms**
   ```bash
   # Create in /src/components/atoms/
   ```

   Example structure:
   ```tsx
   import { cn } from "@/lib/utils"

   interface MyComponentProps {
     className?: string
     // other props
   }

   export function MyComponent({ className, ...props }: MyComponentProps) {
     return (
       <div className={cn("base-classes", className)} {...props}>
         {/* component content */}
       </div>
     )
   }
   ```

3. **For Organisms**
   ```bash
   # Create in /src/components/organisms/
   ```

   - Import atoms as needed
   - Compose complex functionality
   - Keep logic contained

4. **For shadcn/ui components**
   ```bash
   # Use the CLI (if available) or manually add to /src/components/ui/
   # DO NOT manually edit existing ui components
   ```

5. **Testing**
   - Import and use in a page
   - Test in both light and dark mode
   - Verify responsive behavior
   - Run `yarn lint` to check for issues

### Best Practices
- Use TypeScript interfaces for props
- Use `cn()` utility for className merging
- Keep components focused and single-purpose
- Export from component file directly

---

## Workflow 3: Adding or Modifying Pages

**Goal**: Create a new page or modify an existing one

### Steps

1. **Create page file**
   ```bash
   # In /src/pages/ create YourPage.tsx
   ```

2. **Basic page structure**
   ```tsx
   import type { NextPage } from "next"
   import Head from "next/head"

   const YourPage: NextPage = () => {
     return (
       <>
         <Head>
           <title>Page Title | Josep Vidal</title>
           <meta name="description" content="Page description" />
         </Head>

         <main>
           {/* Page content */}
         </main>
       </>
     )
   }

   export default YourPage
   ```

3. **For dynamic pages**
   - Use `[param].tsx` filename
   - Implement `getStaticPaths` and `getStaticProps`
   - See `/src/pages/blog/[slug].tsx` for example

4. **Styling**
   - Use Tailwind CSS classes
   - Import and use existing components
   - Follow dark mode patterns from other pages

5. **Testing**
   - Run `yarn dev` and visit page
   - Test in both light and dark mode
   - Run `yarn build` to verify SSG works
   - Check page loads correctly

### Important Considerations
- This project uses Pages Router (not App Router)
- Use `getStaticProps` for data fetching at build time
- Use `getServerSideProps` if you need server-side rendering
- All pages should have proper `<Head>` meta tags

---

## Workflow 4: Styling Guidelines

**Goal**: Apply consistent styling using Tailwind CSS v4

### Steps

1. **Use Tailwind utility classes**
   ```tsx
   <div className="flex items-center gap-4 p-6 bg-background text-foreground">
   ```

2. **Conditional classes with cn()**
   ```tsx
   import { cn } from "@/lib/utils"

   <div className={cn(
     "base-classes",
     condition && "conditional-classes",
     className
   )}>
   ```

3. **Dark mode**
   - Use `dark:` prefix for dark mode styles
   ```tsx
   <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
   ```

4. **Responsive design**
   - Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
   ```tsx
   <div className="flex-col md:flex-row gap-4 md:gap-8">
   ```

5. **Typography**
   - Use `@tailwindcss/typography` for prose
   ```tsx
   <article className="prose dark:prose-invert">
   ```

### Important Notes
- This project uses Tailwind v4 (NOT v3)
- Some v3 syntax may not work
- Use CSS variables defined in theme
- Test both light and dark modes

---

## Workflow 5: Dependency Management

**Goal**: Update dependencies safely and verify functionality

### Steps

1. **Check for updates**
   ```bash
   yarn upgrade-interactive
   ```

2. **Update dependencies**
   ```bash
   # Update all dependencies
   yarn upgrade

   # Or update specific package
   yarn upgrade package-name
   ```

3. **Review changes**
   - Check `yarn.lock` for version changes
   - Look for major version bumps
   - Read changelogs for breaking changes

4. **Test thoroughly**
   ```bash
   # Build test
   yarn build

   # Lint test
   yarn lint

   # Dev server test
   yarn dev
   ```

5. **Check specific functionality**
   - Blog post rendering
   - Dark mode toggle
   - Navigation
   - OG image generation (`/api/og`)
   - content-collections compilation

6. **If issues arise**
   ```bash
   # Clear caches
   rm -rf .next .content-collections node_modules yarn.lock
   yarn install
   yarn build
   ```

### Critical Packages to Watch
- `next` - Check Next.js changelog for breaking changes
- `react` / `react-dom` - Ensure versions match
- `@content-collections/*` - Must be compatible with Next.js version
- `tailwindcss` - v4 has major changes from v3
- `typescript` - May affect type checking

---

## Workflow 6: Testing Checklist

**Goal**: Comprehensive testing before deployment

### Pre-Commit Checklist

- [ ] **Build succeeds**: `yarn build` completes without errors
- [ ] **Linting passes**: `yarn lint` shows no errors
- [ ] **Dev server starts**: `yarn dev` runs without errors
- [ ] **Pages load correctly**:
  - [ ] Homepage (`/`)
  - [ ] Blog listing (`/blog`)
  - [ ] Blog posts (`/blog/[slug]`)
  - [ ] Memento Mori (`/memento-mori`)
- [ ] **Dark mode works**: Toggle between light and dark themes
- [ ] **Navigation works**: All links navigate correctly
- [ ] **Responsive design**: Test on different screen sizes
- [ ] **Content renders**: Blog posts display properly
- [ ] **No console errors**: Check browser console
- [ ] **OG images generate**: Test `/api/og?title=Test`

### Post-Deployment Checklist

- [ ] **Site loads**: Visit live URL
- [ ] **All pages accessible**: Check all routes
- [ ] **Performance**: Check Lighthouse scores
- [ ] **SEO**: Verify meta tags in source
- [ ] **Analytics working**: If applicable

---

## Workflow 7: Debugging Common Issues

**Goal**: Quickly resolve common development issues

### Issue: content-collections not updating

**Solution**:
```bash
rm -rf .content-collections
yarn dev
```

### Issue: Build fails with type errors

**Solution**:
1. Check `tsconfig.json` path aliases
2. Verify all imports are correct
3. Run `yarn build` again with verbose output
4. Check content-collections generated types

### Issue: Styles not applying

**Solution**:
1. Verify Tailwind v4 syntax (not v3)
2. Check PostCSS configuration
3. Clear `.next` cache
4. Restart dev server

### Issue: Dark mode not working

**Solution**:
1. Check `next-themes` provider in `_app.tsx`
2. Verify `dark:` classes are applied
3. Check CSS variables in global styles
4. Test theme toggle component

### Issue: Page not found (404)

**Solution**:
1. Verify file is in `/src/pages` directory
2. Check filename and export structure
3. Ensure default export exists
4. Restart dev server

---

## Quick Reference

### File Locations

| Task | Location |
|------|----------|
| Add blog post | `/posts/*.md` |
| Add component (atom) | `/src/components/atoms/` |
| Add component (organism) | `/src/components/organisms/` |
| Add page | `/src/pages/` |
| Add utility | `/src/lib/` |
| Global styles | `/src/styles/` |

### Commands

| Task | Command |
|------|---------|
| Install dependencies | `yarn install` |
| Start dev server | `yarn dev` |
| Build for production | `yarn build` |
| Run linter | `yarn lint` |
| Check outdated deps | `yarn upgrade-interactive` |
| Update dependencies | `yarn upgrade` |

### Import Patterns

```tsx
// Components
import { Button } from "@/components/atoms/button"
import { Header } from "@/components/organisms/header"

// Utilities
import { cn } from "@/lib/utils"

// Content
import { allPosts } from "content-collections"

// Icons
import { Github, Twitter } from "lucide-react"

// Next.js
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
```

---

**Last Updated**: 2025-11-23
**Project**: josepvidal.dev
**Package Manager**: yarn
