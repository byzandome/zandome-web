# AGENTS.md

Guidance for AI agents working in this repository.

## Project

`zandome-web` is Miguel Mendoza's personal portfolio, live at https://zandome.dev. It is a fully static site (`output: 'static'`) with no backend.

- **Framework:** Astro 7 with React 19 (React Compiler enabled) and Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Language:** TypeScript (strict, `verbatimModuleSyntax`). Path alias `@/*` → `src/*`; `@/package` → `package.json`
- **Package manager:** Bun (pinned in `packageManager` and CI, currently 1.4.3). Never use npm/pnpm/yarn. Lockfile is `bun.lock`
- **Runtime:** Node 24.x (`.nvmrc`, `engines`)
- **UI:** shadcn-style components in `src/components/ui` (`components.json`), class-variance-authority, lucide-react, Space Grotesk and JetBrains Mono fonts
- **Integrations:** sitemap, partytown (Google Analytics via `dataLayer.push`/`gtag` forwarding), astro-icon, `@playform/compress`, `astro-pdf`, vanilla-cookieconsent

## Structure

- `src/pages`: `index`, `cv`, `projects`, `certificates`, `cover-letter`, `404`, and `es/cover-letter` (Spanish)
- `src/layouts`: `Base.astro`, `CV.astro`
- `src/components`: grouped by feature (`certificates`, `cookie-consent`, `cover-letter`, `curriculum`, `projects`, `shared`, `ui`), each with an `index.ts` barrel
- `src/assets/data`: JSON content (`jobs`, `freelance`, `projects`, `certificates`). Edit these to change site content
- `src/i18n`: translations (currently the cover letter). i18n: locales `en` (default, no prefix) and `es`
- `public/`: `CNAME`, `robots.txt`, `favicon.ico`, `certificates/`
- Redirects (in `astro.config.mjs`): `/curriculum` → `/cv` (302), `/cover-letter-es` → `/es/cover-letter` (301)

## Commands

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `bun install`       | Install dependencies                         |
| `bun run start`     | Dev server at `localhost:4321`               |
| `bun run build`     | Production build to `dist/` (also makes PDF) |
| `bun run preview`   | Preview the production build                 |
| `bun run lint`      | ESLint (`lint:ci` fails on warnings)         |
| `bun run format`    | Prettier check (`format:fix:all` to fix)     |
| `bun run typecheck` | `astro check`                                |
| `bun run changeset` | Create a changeset                           |
| `bun audit`         | Check dependency vulnerabilities             |

Before opening a PR, run `lint:ci`, `format:ci`, `typecheck` and `build` (this is what CI runs).

## Environment

Copy `.env.example` to `.env`. Variables: `ANALYTICS_GOOGLE_ID` (Google Analytics ID) and `PHONE_NUMBER`. They are also GitHub secrets. Never commit `.env` or secrets.

## PDF generation (important)

`astro-pdf` renders `/cv` to `cv.pdf` at the end of `astro build` using Puppeteer. Locally, the build fails with "Could not find Chrome" if the matching Chrome is not installed: run `bunx puppeteer browsers install chrome`. This must be repeated after puppeteer upgrades that change the Chrome version. In production (`NODE_ENV=production`, i.e. inside Docker) it uses `CHROMIUM_PATH`/`PUPPETEER_EXECUTABLE_PATH` pointing to Alpine's Chromium.

## Deployment

Hosted on **GitHub Pages** at https://zandome.dev (custom domain via `public/CNAME`).

- `deploy.yml` runs on push to `main` (and manually): builds the Docker `builder` stage (Bun alpine + Chromium, passes `ANALYTICS_GOOGLE_ID` as build arg), copies `/app/dist` out, and publishes it with `actions/deploy-pages`.
- The Dockerfile also has an nginx `production` stage (static serving on port 80 with a healthcheck), but GitHub Pages deploy only uses the `builder` stage.
- The site footer shows the version from `package.json`.

## CI

- `ci.yml` (push to `main`, PRs): changeset check (non-blocking, PRs to `main` only), then lint + format + typecheck, then build.
- `codeql.yml`: CodeQL for `actions` and `javascript-typescript` on push/PR to `main` and weekly.
- `release.yml`: on push to `main`, the Changesets action (using a GitHub App token) opens/updates a "Version Packages" PR titled `release: vX.Y.Z`. Merging it tags the version and creates the GitHub Release, and the deploy runs.
- Jobs skip PRs from the `changeset-release/main` branch.

## Releases / changesets

Every user-facing or dependency change on a PR to `main` needs a changeset in `.changeset/*.md`:

```md
---
'zandome-web': patch
---

Short description.
```

Use `patch` for fixes and dependency updates, `minor` for features. Never edit `CHANGELOG.md` or the `package.json` version by hand; the release workflow does it.

## Commits and branches

- **Always use the `/commit:commit` skill to create commits whenever it is available.** Do not run `git commit` manually.
- Conventional Commits in English, enforced by commitlint + Husky (`commit-msg` hook). Allowed types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert, deps, release.
- Pre-commit runs `lint-staged` (ESLint and Prettier checks on staged files).
- `main` is protected with linear history and required checks: use feature branches and PRs, no merge commits.
- Do not add Claude/Anthropic attribution to commits.

## Pull requests

- Write the title and description in English.
- Base the description on `.github/pull_request_template.md`.
- Do not add "Generated with Claude" or any Claude/Anthropic attribution to the description.
- Always assign the PR to the user: `gh pr create --assignee @me`.
- Target `main`; include a changeset when required (see above).

## Dependencies and security

- Dependency versions are pinned exactly (a few use `^`). Update with `bun update` / `bun run deps:update`, then run the build.
- `package.json` `overrides` pin patched transitive versions (`sharp`, `svgo`, `deepmerge-ts`) because `@playform/compress` pins old ones. Keep them unless the parent package is upgraded. `@emnapi/runtime` is pinned to 1.11.3 because the 2.0 beta pulled in by rolldown breaks `astro check` (`this.bridge.setLastError is not a function`); remove it once that is resolved upstream.
- Known unresolved audit items: `picomatch` (no patched release yet) and `minimatch` (dev tooling only). Recheck with `bun audit`.
- Security reports go to miguel@zandome.dev (see `SECURITY.md`).

## Style

- Prettier and ESLint configs are the source of truth; do not hand-format. Run `bun run format:fix:all` and `bun run lint:fix:all`.
- Prefer Astro components for static content and React only where interactivity is needed.
- Keep new components in their feature folder and export them from its `index.ts`.
