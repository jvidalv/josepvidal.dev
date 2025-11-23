# CLAUDE.md - AI Assistant Guidelines

This document provides guidance for AI assistants (like Claude) working on this codebase.

## Project Overview

**josepvidal.dev** is a personal portfolio and blog website for Josep Vidal, a Product Engineer. The site showcases projects, blog posts, and a memento mori page.

- **Live URL**: https://josepvidal.dev
- **Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS v4
- **Package Manager**: yarn
- **Architecture**: Next.js Pages Router (not App Router)
- **Content**: Markdown blog posts via content-collections

## Development Commands

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Run linting
yarn lint

# Format code
yarn format
```

## Project Structure

```
/Users/jvidal/code/josepvidal.dev/
├── src/
│   ├── components/
│   │   ├── atoms/         # Small reusable components (Button, Badge, etc.)
│   │   ├── organisms/     # Complex composed components (Header, Footer, etc.)
│   │   └── ui/           # shadcn/ui components
│   ├── lib/              # Utilities, data, and helper functions
│   ├── pages/            # Next.js pages (Pages Router)
│   │   ├── api/         # API routes (e.g., OG image generation)
│   │   ├── blog/        # Blog pages
│   │   ├── index.tsx    # Homepage
│   │   └── memento-mori.tsx
│   └── styles/          # Global styles
├── posts/               # Markdown blog posts
├── public/              # Static assets
└── fonts/               # Custom fonts (Basier Circle)
```

### Path Aliases

The project uses TypeScript path aliases:
- `@/*` maps to `./src/*`
- Example: `import { cn } from "@/lib/utils"`

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** - All code must be properly typed
- Use explicit types for function parameters and returns
- Avoid `any` types - use `unknown` if type is truly unknown

### Component Architecture

- **Atomic Design Pattern**:
  - **Atoms** (`/src/components/atoms`): Small, reusable components like buttons, badges, links
  - **Organisms** (`/src/components/organisms`): Complex components composed of atoms/molecules
  - **UI** (`/src/components/ui`): shadcn/ui components (generated, don't edit manually)

### Styling

- **Tailwind CSS v4** (NOT v3) - Uses `@tailwindcss/postcss` plugin
- Use utility classes from Tailwind
- Leverage `clsx` and `tailwind-merge` for conditional classes via the `cn()` utility
- shadcn/ui components use "New York" style variant
- Use `@tailwindcss/typography` for prose content

### Icons

- Use **lucide-react** for all icons
- Import only the icons you need: `import { Github, Twitter } from "lucide-react"`

### Linting & Formatting

- ESLint configuration extends `next/core-web-vitals`
- Prettier for code formatting
- Run `yarn lint` before committing

## Content Management

### Blog Posts

Blog posts are stored in `/posts` as Markdown files with frontmatter:

```markdown
---
title: "Post Title"
date: "2025-01-15"
category: "engineering"
---

Post content here...
```

**Important Notes:**
- content-collections automatically compiles markdown to HTML
- Posts are type-safe via generated TypeScript types
- Generated cache stored in `.content-collections/` (git-ignored)

### Adding a New Blog Post

1. Create a new `.md` file in `/posts`
2. Add required frontmatter: `title`, `date`, `category`
3. Write content in Markdown
4. content-collections will auto-generate types and compile to HTML

## Key Technologies & Considerations

### Next.js

- **Version**: 15.3.3
- **Router**: Pages Router (App Router migration in TODO)
- **Rendering**: Static generation (SSG) for blog posts
- **API Routes**: Used for OG image generation

### React

- **Version**: 19.2.0 (latest)
- React 19 features are available
- Uses functional components with hooks

### Tailwind CSS

- **Version**: 4.1.17
- **BREAKING CHANGE**: Tailwind v4 has significant changes from v3
- Uses new PostCSS plugin (`@tailwindcss/postcss`)
- Configuration may differ from v3 projects

### content-collections

- **Version**: 0.12.0
- Handles markdown compilation and type generation
- Configuration in `content-collections.ts`
- Cache in `.content-collections/` should be deleted if issues arise

### Dark Mode

- Managed via `next-themes`
- Theme toggle in header
- Respects system preferences

### Fonts

- Custom font: **Basier Circle** (served from `/fonts`)
- Configured in `_app.tsx`

### OG Images

- Generated dynamically via `@vercel/og`
- API route: `/api/og`
- Uses Vercel's Edge runtime

## Important Notes

### DO

- Use yarn for all package management
- Follow the atomic design pattern for components
- Use TypeScript strict mode
- Leverage existing utilities (e.g., `cn()` for class names)
- Test locally with `yarn dev` and `yarn build`
- Check both light and dark modes

### DON'T

- Don't use npm or pnpm (use yarn only)
- Don't edit shadcn/ui components in `/src/components/ui` directly
- Don't assume App Router patterns (this uses Pages Router)
- Don't use Tailwind v3 syntax (project uses v4)
- Don't commit `.content-collections/` or `.next/` directories

## Common Tasks

### Adding a Component

1. Determine if it's an atom or organism
2. Create in appropriate directory
3. Use TypeScript for props
4. Export from index file if needed

### Updating Dependencies

```bash
# Check for outdated packages
yarn upgrade-interactive

# Update all dependencies
yarn upgrade

# Update specific package
yarn upgrade package-name

# After updates, always test:
yarn build && yarn dev
```

### Debugging Build Issues

```bash
# Clear caches and rebuild
rm -rf .next .content-collections node_modules yarn.lock
yarn install
yarn build
```

## Git Workflow

- **Main Branch**: `main`
- **Current Status**: Clean working tree
- Always test before committing
- Follow conventional commit messages

## TODO Features

The following features are planned but not yet implemented:
- Books section
- Used Tools section
- Paintings section
- Random stats page
- Migration to App Router

## Questions?

If you're unsure about something:
1. Check existing code for patterns
2. Review this document
3. Check Next.js and Tailwind CSS documentation
4. Ask the user for clarification

---

Last Updated: 2025-11-23
