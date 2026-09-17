# BS Mobile Tyres Bristol

A Next.js website project using TypeScript and the Pages Router.

## Folder Structure

```text
/
├── public/               Static/public files (favicon, robots.txt, etc.)
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── images/       Optimized content images (imported via next/image)
│   │
│   ├── components/       Reusable components (Header, Footer, etc.)
│   │
│   ├── layouts/          Layout wrapper(s), including page metadata
│   │
│   ├── pages/            Next.js pages (Pages Router)
│   │
│   └── styles/           Global CSS
│
├── next.config.mjs
├── package.json
├── tsconfig.json
└── next-env.d.ts
```

- **Pages** are stored in `src/pages/`.
- **Reusable components** are stored in `src/components/`.
- **Layout files** are stored in `src/layouts/`.
- **Optimized content images** are stored in `src/assets/images/`.
- **Static/public files** are stored in `public/`.
- **Global CSS** is stored in `src/styles/global.css`.

See `CLAUDE.md` for project rules on where to make changes.

## Commands

```bash
npm install
npm run dev
npm run build
npm run start
npm run preview
```
