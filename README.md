# zandome-web

Miguel Mendoza's personal portfolio website, built with Astro and deployed to GitHub Pages at [zandome.dev](https://zandome.dev).

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static output)
- **UI:** React, Tailwind CSS v4
- **Package Manager:** Bun
- **Build:** Docker (multi-stage with Chromium for PDF generation)
- **Deploy:** GitHub Pages

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) >= 1.2

### Setup

```sh
cp .env.example .env
# Fill in the values in .env
bun install
bun run start
```

### Environment Variables

| Variable | Description |
| :--- | :--- |
| `ANALYTICS_GOOGLE_ID` | Google Analytics measurement ID |
| `PHONE_NUMBER` | Contact phone number |

## Commands

| Command | Action |
| :--- | :--- |
| `bun run start` | Start local dev server at `localhost:4321` |
| `bun run build` | Build production site to `./dist/` |
| `bun run preview` | Preview production build locally |
| `bun run lint` | Run ESLint |
| `bun run format` | Check formatting with Prettier |

## Project Structure

```text
/
├── public/
│   └── CNAME           # Custom domain for GitHub Pages
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│       ├── index.astro
│       ├── cv.astro
│       └── 404.astro
├── Dockerfile
└── package.json
```

## CI/CD

| Workflow | Trigger | Description |
| :--- | :--- | :--- |
| `ci.yml` | Push / PR | Lint, format check, and build |
| `deploy.yml` | Push to `main` | Docker build + deploy to GitHub Pages |

The deploy workflow builds the site inside Docker (which handles Chromium for PDF generation), extracts the `dist/` folder, and publishes it to GitHub Pages.

### Required GitHub Secrets

| Secret | Description |
| :--- | :--- |
| `ANALYTICS_GOOGLE_ID` | Google Analytics measurement ID |
| `PHONE_NUMBER` | Contact phone number |
