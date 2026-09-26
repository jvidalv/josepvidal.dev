# CLAUDE.md - AI Assistant Guidelines

This document provides guidance for AI assistants (like Claude) working on this codebase.

## Project Overview

**josepvidal.dev** is a personal portfolio and blog website for Josep Vidal, a Product Engineer. The site showcases projects, blog posts, and a memento mori page.

- **Live URL**: https://josepvidal.dev
- **Tech Stack**: Next.js 16, React 19, TypeScript 7, Tailwind CSS v4
- **Package Manager**: bun
- **Architecture**: Next.js Pages Router (not App Router)
- **Content**: Markdown blog posts via content-collections

## Development Commands

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production (runs lint + format check first via prebuild)
bun run build

# Run linting (oxlint)
bun run lint

# Format code (oxfmt)
bun run format
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
│   │   ├── api/         # API routes (admin image upload to S3)
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

- **oxlint** (`.oxlintrc.json`): the old `eslint-config-next` ruleset (React, hooks/React Compiler, jsx-a11y, import, Next) ported with `@oxlint/migrate`. Every rule is an error, and `options` fails on warnings and stale disable comments (CLI and editors alike)
- **oxfmt** (`.oxfmtrc.json`): oxfmt defaults over the whole repo except `public/`. Don't `--migrate=prettier`, that switches to 80 columns and reformats everything
- Both read `.gitignore` for what to skip, which is why `.dockerignore` must not exclude it
- `prebuild` runs `bun run lint` and `bun run format:check`, so lint or format errors fail the build (and the Railway deploy)
- Run `bun run lint && bun run format` before committing

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

- **Version**: 16 (Turbopack)
- **Router**: Pages Router (App Router migration in TODO)
- **Rendering**: Static generation (SSG) for blog posts
- **API Routes**: Admin image upload (`/api/admin/upload`, S3)

### React

- **Version**: 19.3
- React 19 features are available
- Uses functional components with hooks

### Tailwind CSS

- **Version**: 4.3
- **BREAKING CHANGE**: Tailwind v4 has significant changes from v3
- Uses new PostCSS plugin (`@tailwindcss/postcss`)
- Configuration may differ from v3 projects

### content-collections

- **Version**: 0.15
- Handles markdown compilation and type generation
- Configuration in `content-collections.ts` (collections go under `content`, not the deprecated `collections` key)
- Cache in `.content-collections/` should be deleted if issues arise

### Dark Mode

- Managed via `next-themes`
- Theme toggle in header
- Respects system preferences

### Fonts

- Custom font: **Basier Circle** (served from `/fonts`)
- Configured in `_app.tsx`

### OG Images

- Static OG image at `public/og.png`

### Deployment

- **Hosting**: Railway (config-as-code via `railway.toml`)
- **Build**: Dockerfile with multi-stage build, Next.js standalone output. Bun installs and builds; Node 24 runs `server.js`
- **No Vercel dependencies** — fully portable

## Important Notes

### DO

- Use bun for all package management
- Follow the atomic design pattern for components
- Use TypeScript strict mode
- Leverage existing utilities (e.g., `cn()` for class names)
- Test locally with `bun run dev` and `bun run build` (never `bun build` — that's Bun's bundler, not the script)
- Check both light and dark modes

### DON'T

- Don't use npm, pnpm or yarn (use bun only)
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
bun outdated

# Pick updates interactively
bun update --interactive

# Update everything to latest (rewrites package.json ranges)
# then re-pin @types/node to the Dockerfile's Node major: bun add -d @types/node@^24
bun update --latest

# Update specific package
bun update package-name

# After updates, always test:
bun run build && bun run dev
```

### Debugging Build Issues

```bash
# Clear caches and rebuild
rm -rf .next .content-collections node_modules
bun install
bun run build
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

Last Updated: 2026-09-26
