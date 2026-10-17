# GitHub Actions Workflows

## Overview

This project uses GitHub Actions for automated CI/CD. Version management is handled by **Changesets**, which provides a structured way to track, changelog, and release changes.

## Workflows

### CI Workflow (`ci.yml`)

Runs on every push and pull request to validate code quality and build.

**Jobs:**
- **Changeset Check**: For PRs to `main`, warns if no changeset is included (non-blocking)
- **Lint and Format**: Checks code formatting with Prettier and linting with ESLint
- **Build**: Builds the Astro application

### Release Workflow (`release.yml`)

Automatically manages version bumping, changelog updates, and git tags.

**Triggers:**
- Push to `main` branch (runs after PRs are merged)

**Automated Steps:**
1. Detects changesets created during development
2. Opens/updates a "Version Packages" PR with:
   - Updated `package.json` version
   - Updated `CHANGELOG.md` with release notes
3. When the "Version Packages" PR is merged:
   - Creates git tag (e.g., `v1.3.1`)
   - Creates GitHub Release with changelog
   - Triggers deploy workflow

### Deploy Workflow (`deploy.yml`)

Builds and deploys to GitHub Pages on every push to `main`.

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Deployment:**
- Static site deployed to https://zandome.dev
- Footer shows version from `package.json`

## Release Process

### Creating a New Release

**1. Create a feature branch and make your changes:**
```bash
git checkout -b feat/my-feature
# make changes, commit, test locally
```

**2. Add a changeset before creating a PR:**
```bash
bun run changeset
```

This interactive command asks you to:
- Select which packages are affected (in this case, just `zandome-web`)
- Choose the type of change:
  - `patch` (1.3.0 → 1.3.1): bugfixes, minor changes
  - `minor` (1.3.0 → 1.4.0): new features
  - `major` (1.3.0 → 2.0.0): breaking changes
- Write a brief description of the change

This creates a file in `.changeset/` that you should commit.

**3. Create a Pull Request:**
- Base: `main`
- Include the `.changeset/*.md` file(s) in your commit

**4. Code review and approval:**
- CI runs automatically
- Address feedback if any
- Get approval

**5. Merge the PR to `main`:**
- Use squash or rebase to maintain linear history

**6. Automation takes over:**
- Release workflow detects changesets
- Opens a "Version Packages" PR automatically
- PR shows:
  - New version in `package.json`
  - Updated `CHANGELOG.md`
  - Release notes from changesets
- Review and merge the "Version Packages" PR

**7. Final automation:**
- Git tag `vX.Y.Z` is created
- GitHub Release is published
- Deploy workflow builds and deploys to GitHub Pages
- Version in site footer updates automatically

## Changeset Management

### View Pending Changes

```bash
bun run changeset status
```

Shows all unreleased changesets and the projected new version.

### Example Changeset Workflow

```bash
# Make your changes
git checkout -b feat/add-projects-page
# ... make changes ...

# Add a changeset
bun run changeset
# Follow the prompts:
# → Select affected packages
# → Choose: patch / minor / major
# → Write description: "Add new projects section"

# Commit everything including the .changeset/ file
git add .
git commit -m "feat: add projects section"

# Push and create PR
git push origin feat/add-projects-page

# Once merged to main:
# → Release workflow creates "Version Packages" PR
# → Merge that PR
# → Git tag and GitHub Release created
# → Deploy to production
```

## Important Notes

### Version Management

- **Source of Truth**: Changesets in `.changeset/` files
- **Automated Bumping**: Never manually update `package.json` version—changesets handles this
- **Semantic Versioning**: Follows MAJOR.MINOR.PATCH (e.g., `1.3.1`)

### Branch Protection

The `main` branch is protected:
- Requires linear history (squash/rebase merges)
- Force pushes and deletions are blocked
- Changes only through PRs

### Troubleshooting

**"Version Packages" PR didn't appear:**
- Ensure your feature PR included `.changeset/*.md` file(s)
- Verify PR was merged (not just closed)
- Check the Release workflow logs in Actions tab

**Changeset check failed in CI:**
- Run `bun run changeset` to create one
- Include the generated `.changeset/*.md` file in your PR

**Version bump didn't happen:**
- Confirm the "Version Packages" PR was merged to `main`
- Check the Release workflow logs

## Links

- [Changesets Documentation](https://github.com/changesets/changesets)
- [Semantic Versioning](https://semver.org/)
- [GitHub Pages Deployment](https://docs.github.com/en/pages)
