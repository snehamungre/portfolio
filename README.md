# Sneha Mungre — Portfolio

Personal portfolio site built with React 19, TypeScript, Vite, Tailwind CSS 4, and React Router.

**Live site:** [https://snehamungre.github.io/portfolio/](https://snehamungre.github.io/portfolio/)

## Pages

- **Home** — Hero, tool set, featured projects
- **About** — Bio, interests, skills
- **Projects** — GitHub project cards
- **Education** — Education timeline

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/) (note the `/portfolio/` base path).

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The site deploys automatically via GitHub Actions when changes are pushed to `main`.

### One-time setup in your repo settings

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and publishes the `dist` folder

Because this repo is named `portfolio` (not `username.github.io`), the site is served at `/portfolio/` — configured via `base` in `vite.config.ts` and `basename` in React Router.

## Project structure

```
src/
  components/   # UI components by feature
  data/         # Typed content (projects, education, site copy)
  pages/        # Route-level page components
  types/        # Shared TypeScript interfaces
```
