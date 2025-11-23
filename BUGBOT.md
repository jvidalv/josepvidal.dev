# BUGBOT.md - Debugging & Troubleshooting Guide

This document provides comprehensive debugging information for common issues in this codebase.

## Emergency Recovery Commands

If everything is broken, try these in order:

```bash
# 1. Clear all caches and reinstall
rm -rf .next .content-collections node_modules yarn.lock
yarn install

# 2. Try building
yarn build

# 3. Try dev server
yarn dev
```

---

## Common Issues & Solutions

### 1. Build Failures

#### Issue: `pnpm build` fails with errors

**Symptoms**:
- Build process exits with error code
- TypeScript compilation errors
- Module not found errors

**Solutions**:

1. **Clear Next.js cache**
   ```bash
   rm -rf .next
   yarn build
   ```

2. **Clear content-collections cache**
   ```bash
   rm -rf .content-collections
   yarn build
   ```

3. **Check TypeScript errors**
   ```bash
   yarn tsc --noEmit
   ```

4. **Verify all imports**
   - Check path aliases in `tsconfig.json`
   - Ensure `@/*` maps to `./src/*`
   - Verify all imported files exist

5. **Update dependencies**
   ```bash
   yarn upgrade
   yarn build
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
   yarn dev
   ```

2. **Verify frontmatter**
   ```markdown
   ---
   title: "Post Title"  # Required
   date: "YYYY-MM-DD"   # Required, must be this format
   category: "engineering"  # Required
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
       '@tailwindcss/postcss': {},
     },
   }
   ```

3. **Clear Next.js cache**
   ```bash
   rm -rf .next
   yarn dev
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
   yarn list typescript
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
   yarn list @types/react @types/react-dom
   # Should match React version (19.x)
   ```

4. **Regenerate content-collections types**
   ```bash
   rm -rf .content-collections
   yarn dev
   ```

---

### 6. Development Server Issues

#### Issue: `yarn dev` fails or crashes

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
   yarn dev
   ```

3. **Check Node.js version**
   ```bash
   node --version
   # Should be compatible with Next.js 15
   ```

4. **Verify yarn version**
   ```bash
   yarn --version
   # Should be 1.x or compatible
   ```

---

### 7. Dependency Issues

#### Issue: Package conflicts or installation errors

**Symptoms**:
- `pnpm install` fails
- Peer dependency warnings
- Module resolution errors

**Solutions**:

1. **Clear yarn cache**
   ```bash
   yarn cache clean
   rm -rf node_modules yarn.lock
   yarn install
   ```

2. **Check for peer dependency issues**
   ```bash
   yarn install --force
   ```

3. **Verify React versions match**
   ```bash
   yarn list react react-dom
   # Both should be 19.2.0
   ```

4. **Check content-collections compatibility**
   - Ensure `@content-collections/next` is compatible with Next.js version
   - Check package documentation

---

### 8. Build Performance Issues

#### Issue: Builds are slow or hang

**Symptoms**:
- `pnpm build` takes very long
- Build process appears frozen
- High memory usage

**Solutions**:

1. **Clear all caches**
   ```bash
   rm -rf .next .content-collections node_modules
   pnpm install
   ```

2. **Check content-collections**
   - Large number of posts can slow build
   - Optimize markdown processing

3. **Check webpack warnings**
   - Warning about serializing big strings is known
   - Consider using Buffer for large data

---

### 9. API Route Issues

#### Issue: OG image generation fails

**Symptoms**:
- `/api/og` returns errors
- OG images not displaying
- Edge runtime errors

**Solutions**:

1. **Check @vercel/og package**
   ```bash
   yarn list @vercel/og
   # Should be 0.8.5
   ```

2. **Verify Edge runtime compatibility**
   - Check for Node.js module usage
   - Edge runtime has limitations

3. **Test API route directly**
   ```bash
   # Visit in browser
   http://localhost:3000/api/og?title=Test
   ```

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

### 3. Edge Runtime Warning
- Node.js module warning in Edge runtime is known
- Related to `url` module usage
- Does not affect functionality

### 4. ESLint Warning
- `aria-description` warning on homepage is known
- Related to accessibility attribute support
- Can be safely ignored or fixed

---

## Environment Setup

### Required Software

- **Node.js**: Compatible with Next.js 15 (v18.17 or higher)
- **yarn**: Version 1.x (Classic)
- **Git**: For version control

### Installation

```bash
# Install yarn globally (if not installed)
npm install -g yarn

# Clone repository
git clone <repo-url>
cd josepvidal.dev

# Install dependencies
yarn install

# Start development
yarn dev
```

---

## Dependency Considerations

### Critical Dependencies

| Package | Version | Notes |
|---------|---------|-------|
| next | 15.3.3 | Pages Router, not App Router |
| react | 19.2.0 | Latest major version |
| react-dom | 19.2.0 | Must match React version |
| typescript | 5.9.3 | Latest stable |
| tailwindcss | 4.1.17 | v4 has breaking changes from v3 |
| @content-collections/core | 0.12.0 | Must be compatible with Next.js |

### Update Precautions

**Before updating Next.js**:
1. Check changelog for breaking changes
2. Verify content-collections compatibility
3. Test build and dev server
4. Check API routes (Edge runtime)

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
   pnpm dev
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

- Regularly run `yarn audit` to check for vulnerabilities
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
- [ ] Run `yarn build` successfully
- [ ] Run `yarn lint` with no errors
- [ ] Test all pages load correctly
- [ ] Verify dark mode toggle works
- [ ] Check responsive design on mobile
- [ ] Test blog post links
- [ ] Verify OG images generate
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
DEBUG=* yarn build

# content-collections debug
CC_DEBUG=true yarn dev
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

| Date | Version | Changes |
|------|---------|---------|
| 2025-11-23 | 1.0.0 | Initial documentation |
| 2025-11-23 | Current | Dependencies updated, documentation generated |

---

## Quick Debugging Commands

```bash
# Full reset
rm -rf .next .content-collections node_modules yarn.lock && yarn install

# Clear caches only
rm -rf .next .content-collections

# Check for issues
yarn build && yarn lint

# Check outdated packages
yarn upgrade-interactive

# Audit security
yarn audit

# Clean install
yarn install --force
```

---

**Last Updated**: 2025-11-23
**Maintainer**: Josep Vidal
**Project**: josepvidal.dev
