# Project Rules

This is a Next.js (Pages Router) + TypeScript website scaffold. It currently
contains no real website content — only placeholder structure.

## Where to make changes

| Change type                    | Exact file/location         |
| ------------------------------ | ---------------------------- |
| Home page content              | `src/pages/index.tsx`       |
| Other pages                    | `src/pages/[page-name].tsx` |
| Header                         | `src/components/Header.tsx` |
| Footer                         | `src/components/Footer.tsx` |
| Main layout / metadata wrapper | `src/layouts/Layout.tsx`    |
| Global CSS                     | `src/styles/global.css`     |
| Site configuration             | `next.config.mjs`           |
| Optimized content images       | `src/assets/images/`        |
| Static/public files            | `public/`                   |

## Image Rules

ALL normal website content images must go inside:

```text
src/assets/images/
```

Never place normal content images inside `public/`.

Content images must:

- Be imported into the component/page.
- Be rendered using the Next.js `<Image />` component from `next/image`.
- Prefer `.webp` format.
- Always include meaningful `alt` text.
- Always have known `width` and `height`, either through imported static
  image metadata or explicit dimensions.
- Use Next.js image optimization wherever appropriate.

`public/` should only be used for files that genuinely need a fixed public
URL, such as:

- favicon
- robots.txt
- sitemap-related static files if required
- verification files
- other explicitly requested static assets

## Editing Scope Rules

When making future changes:

- Edit only the specific page, component, layout, style file, or config
  file required by the request.
- Never crawl through the entire project and "clean up" unrelated files.
- Never refactor unrelated code without being asked.
- Never change unrelated content.
- Never add packages or dependencies unless explicitly requested.
- Never rename or reorganize files unless explicitly requested.
- Preserve existing working code outside the requested change.
- If a request is genuinely ambiguous about which page or component it
  refers to, identify the ambiguity before changing unrelated files.

## npm Commands

```bash
npm install
npm run dev
npm run build
npm run start
npm run preview
```
