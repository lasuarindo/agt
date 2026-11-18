# AuthenticGuards Technology

Marketing site for **AuthenticGuards** — an anti-counterfeit and product authentication platform for Indonesia and the Asia Pacific region.

Built with React, TypeScript, Vite, Tailwind CSS v4, and React Router. The site is fully bilingual (Indonesian / English) and deploys to GitHub Pages.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 (Rolldown) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router v7 (`createBrowserRouter`) |
| i18n | i18next + react-i18next + `i18next-browser-languagedetector` |
| Animation | Motion (`motion/react`) |
| Icons | lucide-react, simple-icons |
| Tests | Vitest + Testing Library (jsdom) |
| Lint | ESLint |
| Deploy | GitHub Actions → GitHub Pages |

## Features

- **Bilingual (ID / EN)** with a custom, accessible language dropdown in the header. The choice is persisted in `localStorage` and kept in sync with `<html lang>`.
- **Lazy-loaded routes** — every page ships as its own chunk.
- **Route-level loading fallback** — a branded `RouteLoading` screen shows while a page chunk loads, including on client-side navigations.
- **SPA fallback for GitHub Pages** — `dist/404.html` boots the app for deep links, so `/about` and refreshes work without hash URLs.
- **i18n data layer** — page copy lives in `src/i18n/locales/{lang}/{page}.json`; data entities (team, clients, awards, investors, supporters, offices, media coverage, timeline) live in `src/i18n/locales/{lang}/data/<entity>.json` and are read through `get<Entity>(t)` helpers.
- **Responsive layout** with a shared header/footer and reusable overview sections.

## Getting started

### Prerequisites

- Node.js **20.19+** or **22.12+** (required by Vite 8). Node 22 LTS is recommended.
- npm.

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite prints the local URL (typically `http://localhost:5173`).

### Build & preview

```bash
npm run build
npm run preview
```

`npm run build` runs `tsc -b`, then `vite build`, then `scripts/spa-fallback.mjs` (which copies `dist/index.html` to `dist/404.html`).

### Test & lint

```bash
npm test     # Vitest
npm run lint # ESLint
```

## Project structure

```text
src/
  components/        Shared UI (Overview* sections, AboutJoinUs, home/, about/)
  data/              Typed data entities + get<Entity>(t) i18n helpers
  i18n/
    index.ts         i18next init + recursive locale glob loader
    locales/
      {id,en}/*.json           Page namespaces (home, about, partners, ...)
      {id,en}/data/*.json      Data namespaces (team, clients, awards, ...)
  layout/            Header, Footer, Layout, RouteLoading
  router/            routes.tsx (createBrowserRouter), pages.tsx (lazy pages)
  view/              Route pages (Home, About, Services, legal/, ...)
  utils/             Image/logo helpers, validators
scripts/
  spa-fallback.mjs   Post-build GitHub Pages SPA fallback
.github/workflows/
  deploy.yml         Build + deploy to GitHub Pages
tests/               Vitest tests and setup
```

## Internationalization

- Default language: `id`; additional language: `en`.
- Page copy: `src/i18n/locales/{lang}/{page}.json`, loaded as a namespace per page.
- Data copy: `src/i18n/locales/{lang}/data/<entity>.json`, accessed as `t('data/<entity>:...')`.
- `src/i18n/index.ts` recursively loads every `locales/**/*.json` via `import.meta.glob(..., { eager: true })`, so new namespaces require no registration.
- Data entities use a `get<Entity>(t)` helper (for example `getTeamData`, `getClientsData`, `getAwardsData`) that merges translations over the Indonesian defaults.
- The language dropdown lives in `src/layout/Header.tsx`. It updates `document.documentElement.lang` and persists via the language detector.

### Adding a new page namespace

1. Create `src/i18n/locales/id/<page>.json` and `src/i18n/locales/en/<page>.json`.
2. Use `useTranslation('<page>')` in the page component.

### Adding a data entity

1. Create `src/i18n/locales/{lang}/data/<entity>.json`.
2. Add a `get<Entity>(t)` helper in `src/data/<entity>.ts`.
3. Render through the helper instead of the raw constant.

## Routing & loading

- Routes are defined in `src/router/routes.tsx` with `createBrowserRouter`.
- Pages are lazy-loaded in `src/router/pages.tsx` via `React.lazy`.
- `src/layout/Layout.tsx` wraps `<Outlet />` in a `Suspense` boundary with `RouteLoading`. The `<main>` is keyed by `location.pathname`, which remounts the boundary on each navigation so the fallback is shown while the next chunk loads.
- `src/main.tsx` keeps a root `Suspense` fallback for the initial load.

## Environment variables

Vite exposes variables prefixed with `VITE_` to client code at **build time**.

| Variable | Purpose |
| --- | --- |
| `VITE_API_LOGO_DEV` | Token used by `logodev()` in `src/utils/image.ts` to build `https://img.logo.dev/<domain>?token=...` URLs. |

Copy `.env.example` to `.env` for local development:

```bash
cp .env.example .env
```

> `VITE_*` values are embedded in the public bundle. Do not put private secrets here.

## Deployment (GitHub Pages)

The workflow `.github/workflows/deploy.yml` runs on pushes to `main` (and manual dispatch):

1. **build** job — `environment: logodev`, Node 22, `npm ci`, `npm run build` with `VITE_API_LOGO_DEV` from the environment.
2. **deploy** job — `environment: github-pages`, publishes `dist` with the official Pages actions.

Required repository settings:

- **Settings → Pages → Source**: *GitHub Actions*.
- **Settings → Pages → Custom domain**: the site's domain (for example `www.authenticguards.com`). DNS must point at GitHub Pages.
- **Settings → Environments → `logodev`**: define `VITE_API_LOGO_DEV`.
- **Settings → Environments → `github-pages`**: created by the Pages deployment flow.

Because the build emits `dist/404.html`, deep links such as `/about` and page refreshes work on GitHub Pages without hash routing.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check, build, and generate the SPA `404.html` fallback |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run the Vitest suite |
| `npm run lint` | Run ESLint |

## License

Private / proprietary. All rights reserved.