# BUGBOT.md - Debugging & Troubleshooting Guide

This document provides comprehensive debugging information for common issues in this codebase.

## Emergency Recovery Commands

If everything is broken, try these in order:

```bash
# 1. Clear all caches and reinstall
rm -rf .next .content-collections node_modules
bun install

# 2. Try building
bun run build

# 3. Try dev server
bun run dev
```

---

## Common Issues & Solutions

### 1. Build Failures

#### Issue: `bun run build` fails with errors

**Symptoms**:

- Build process exits with error code
- TypeScript compilation errors
- Module not found errors

**Solutions**:

1. **Clear Next.js cache**

   ```bash
   rm -rf .next
   bun run build
   ```

2. **Clear content-collections cache**

   ```bash
   rm -rf .content-collections
   bun run build
   ```

3. **Check TypeScript errors**

   ```bash
   bunx tsc --noEmit
   ```

4. **Verify all imports**
   - Check path aliases in `tsconfig.json`
   - Ensure `@/*` maps to `./src/*`
   - Verify all imported files exist

5. **Update dependencies**
   ```bash
   bun update
   bun run build
   ```

---

### 2. content-collections Issues

#### Issue: Blog posts not showing or updating

**Symptoms**:

- New blog posts don't appear
- Changes to posts not reflected
- Build errors related to content-collections

**Solutions**:

1. **Clear content-collections cache**

   ```bash
   rm -rf .content-collections
   bun run dev
   ```

2. **Verify frontmatter**

   ```markdown
   ---
   title: "Post Title" # Required
   date: "YYYY-MM-DD" # Required, must be this format
   category: "engineering" # Required
   ---
   ```

3. **Check schema deprecation**
   - Warning about "schema as function" is known
   - Update to StandardSchema compliant library if needed
   - See: https://content-collections.dev/docs/deprecations/schema-as-function

4. **Verify configuration**
   - Check `content-collections.ts` configuration
   - Ensure posts directory is correct (`./posts`)

---

### 3. Styling Issues

#### Issue: Tailwind classes not applying

**Symptoms**:

- Styles not rendering
- Classes appear in HTML but no styles
- Inconsistent styling behavior

**Solutions**:

1. **Verify Tailwind v4 syntax**
   - This project uses Tailwind v4 (NOT v3)
   - Some v3 classes may have changed
   - Check Tailwind v4 documentation

2. **Check PostCSS configuration**

   ```javascript
   // postcss.config.js should have:
   module.exports = {
     plugins: {
       "@tailwindcss/postcss": {},
     },
   };
   ```

3. **Clear Next.js cache**

   ```bash
   rm -rf .next
   bun run dev
   ```

4. **Check global styles**
   - Verify `/src/styles/globals.css` imports Tailwind
   - Check CSS variables are defined

---

### 4. Dark Mode Issues

#### Issue: Dark mode not working or flickering

**Symptoms**:

- Theme toggle doesn't work
- Flash of wrong theme on page load
- Dark mode styles not applying

**Solutions**:

1. **Check next-themes provider**
   - Verify `ThemeProvider` is in `_app.tsx`
   - Ensure it wraps all components

2. **Verify dark: classes**

   ```tsx
   // Correct usage
   <div className="bg-white dark:bg-gray-900">
   ```

3. **Check theme storage**
   - Clear localStorage: `localStorage.removeItem('theme')`
   - Restart browser

4. **CSS variables**
   - Ensure CSS variables are defined for both themes
   - Check `/src/styles/globals.css`

---

### 5. Type Errors

#### Issue: TypeScript compilation errors

**Symptoms**:

- Build fails with type errors
- IDE shows red squiggles
- `tsc` reports errors

**Solutions**:

1. **Check TypeScript version**

   ```bash
   bun why typescript
   # Should be 5.9.3 or compatible
   ```

2. **Verify path aliases**

   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

3. **Check React types**

   ```bash
   bun why @types/react @types/react-dom
   # Should match React version (19.x)
   ```

4. **Regenerate content-collections types**
   ```bash
   rm -rf .content-collections
   bun run dev
   ```

---

### 6. Development Server Issues

#### Issue: `bun run dev` fails or crashes

**Symptoms**:

- Dev server won't start
- Server crashes during development
- Port already in use

**Solutions**:

1. **Check port availability**

   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Clear caches and restart**

   ```bash
   rm -rf .next .content-collections
   bun run dev
   ```

3. **Check Node.js version**

   ```bash
   node --version
   # Should be 24.x (matches the Docker runtime)
   ```

4. **Verify bun version**
   ```bash
   bun --version
   # Should be 1.4 or newer
   ```

---

### 7. Dependency Issues

#### Issue: Package conflicts or installation errors

**Symptoms**:

- `bun install` fails
- Peer dependency warnings
- Module resolution errors

**Solutions**:

1. **Clear bun cache**

   ```bash
   bun pm cache rm
   rm -rf node_modules
   bun install
   ```

2. **Check for peer dependency issues**

   ```bash
   bun install --force
   ```

3. **Verify React versions match**

   ```bash
   bun why react react-dom
   # Both should resolve to the same 19.x version
   ```

4. **Check content-collections compatibility**
   - Ensure `@content-collections/next` is compatible with Next.js version
   - Check package documentation

---

### 8. Build Performance Issues

#### Issue: Builds are slow or hang

**Symptoms**:

- `bun run build` takes very long
- Build process appears frozen
- High memory usage

**Solutions**:

1. **Clear all caches**

   ```bash
   rm -rf .next .content-collections node_modules
   bun install
   ```

2. **Check content-collections**
   - Large number of posts can slow build
   - Optimize markdown processing

3. **Check webpack warnings**
   - Warning about serializing big strings is known
   - Consider using Buffer for large data

---

### 9. API Route Issues

#### Issue: Admin image upload fails

**Symptoms**:

- `/api/admin/upload` returns 401 or 500

**Solutions**:

1. **Check the env vars** listed in `.env.local.example` (`ADMIN_API_TOKEN` and the `AWS_*` S3 settings)
2. **Send the token** in the `x-admin-token` header and the image MIME type as `Content-Type`

---

### 10. Git Issues

#### Issue: Git conflicts or commit issues

**Solutions**:

1. **Check git status**

   ```bash
   git status
   ```

2. **Verify .gitignore**
   - Ensure `.next`, `node_modules`, `.content-collections` are ignored

3. **Clean working directory**
   ```bash
   git clean -fdx -e node_modules
   ```

---

## Known Limitations

### 1. Pages Router

- This project uses Pages Router (not App Router)
- App Router migration is in TODO
- Don't use App Router patterns

### 2. content-collections Schema Deprecation

- Warning about "schema as function" is known
- Will be addressed in future update
- Does not affect functionality

---

## Environment Setup

### Required Software

- **Node.js**: 24 LTS (matches the Docker runtime)
- **bun**: 1.4+ (package manager and script runner)
- **Git**: For version control

### Installation

```bash
# Install bun (if not installed)
curl -fsSL https://bun.sh/install | bash

# Clone repository
git clone <repo-url>
cd josepvidal.dev

# Install dependencies
bun install

# Start development
bun run dev
```

---

## Dependency Considerations

### Critical Dependencies

| Package                   | Version | Notes                                                              |
| ------------------------- | ------- | ------------------------------------------------------------------ |
| next                      | 16.3.6  | Pages Router, not App Router                                       |
| react                     | 19.3.0  | Latest major version                                               |
| react-dom                 | 19.3.0  | Must match React version                                           |
| typescript                | 7.0.2   | Native (Go) compiler; `baseUrl` is no longer supported in tsconfig |
| tailwindcss               | 4.3.3   | v4 has breaking changes from v3                                    |
| @content-collections/core | 0.15.3  | Must be compatible with Next.js                                    |

### Update Precautions

**Before updating Next.js**:

1. Check changelog for breaking changes
2. Verify content-collections compatibility
3. Test build and dev server
4. Check the admin upload API route

**Before updating React**:

1. Ensure react and react-dom versions match
2. Update @types/react and @types/react-dom
3. Test all components
4. Check for deprecated patterns

**Before updating Tailwind**:

1. Review v4 migration guide (if coming from v3)
2. Test all styling
3. Check dark mode functionality
4. Verify PostCSS configuration

**Before updating content-collections**:

1. Check compatibility with Next.js version
2. Review changelog for breaking changes
3. Clear `.content-collections` cache after update
4. Test blog post generation

---

## File Watch Issues

### Issue: File changes not triggering rebuild

**Symptoms**:

- Changes not reflected in dev server
- Hot reload not working
- Need to restart server for changes

**Solutions**:

1. **Check file watcher limits (Linux)**

   ```bash
   # Increase file watch limit
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

2. **Restart dev server**

   ```bash
   # Kill server and restart
   bun run dev
   ```

3. **Check @parcel/watcher**
   - content-collections uses @parcel/watcher
   - May need native dependencies

---

## Performance Optimization

### Build Optimization

1. **Minimize bundle size**
   - Tree-shake unused code
   - Use dynamic imports for large components
   - Optimize images with Next.js Image component

2. **Content optimization**
   - Limit blog posts loaded on homepage
   - Use pagination for large post lists
   - Optimize markdown compilation

3. **Cache optimization**
   - Leverage Next.js caching
   - Use ISR (Incremental Static Regeneration) if needed

---

## Security Considerations

### Dependencies

- Regularly run `bun audit` to check for vulnerabilities
- Keep dependencies up to date
- Review security advisories for critical packages

### Environment Variables

- Never commit `.env.local` or secrets
- Use environment variables for sensitive data
- Verify `.gitignore` includes env files

---

## Testing Strategy

### Manual Testing Checklist

Before deploying:

- [ ] Run `bun run build` successfully
- [ ] Run `bun run lint` with no errors
- [ ] Test all pages load correctly
- [ ] Verify dark mode toggle works
- [ ] Check responsive design on mobile
- [ ] Test blog post links
- [ ] Check console for errors
- [ ] Test navigation
- [ ] Verify fonts load correctly

### Automated Testing

Currently, this project does not have automated tests. Consider adding:

- Unit tests with Jest
- Component tests with React Testing Library
- E2E tests with Playwright

---

## Logging & Debugging

### Enable Verbose Logging

```bash
# Next.js verbose build
DEBUG=* bun run build

# content-collections debug
CC_DEBUG=true bun run dev
```

### Browser DevTools

- Check Console for errors
- Use React DevTools for component inspection
- Use Network tab for failed requests
- Use Lighthouse for performance audits

---

## Getting Help

### Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS v4 Docs**: https://tailwindcss.com/docs
- **content-collections Docs**: https://content-collections.dev
- **shadcn/ui Docs**: https://ui.shadcn.com

### Community

- Next.js Discord
- Tailwind CSS Discord
- Stack Overflow

### Project-Specific

- Check `README.md` for project overview
- Review `CLAUDE.md` for AI assistant guidelines
- See `AGENTS.md` for common workflows

---

## Todo List Tracking

### Planned Features (Not Yet Implemented)

The following features are in the TODO but not implemented:

- **Books section**: Planned page for book recommendations
- **Used Tools section**: Showcase of tools and software used
- **Paintings section**: Gallery of paintings or artwork
- **Random stats page**: Page with interesting statistics
- **App Router migration**: Migration from Pages Router to App Router

If encountering errors related to these features, they may not exist yet.

---

## Version History

| Date       | Version | Changes                                       |
| ---------- | ------- | --------------------------------------------- |
| 2025-11-23 | 1.0.0   | Initial documentation                         |
| 2025-11-23 | Current | Dependencies updated, documentation generated |

---

## Quick Debugging Commands

```bash
# Full reset
rm -rf .next .content-collections node_modules && bun install

# Clear caches only
rm -rf .next .content-collections

# Check for issues
bun run build && bun run lint

# Check outdated packages
bun update --interactive

# Audit security
bun audit

# Clean install
bun install --force
```

---

**Last Updated**: 2026-09-26
**Maintainer**: Josep Vidal
**Project**: josepvidal.dev
