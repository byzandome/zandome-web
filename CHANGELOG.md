# zandome-web

## 1.4.0

### Minor Changes

- [#10](https://github.com/byzandome/zandome-web/pull/10) [`48244b5`](https://github.com/byzandome/zandome-web/commit/48244b5fc771a121ff9779b6623b9e4e01bf4106) Thanks [@byzandome](https://github.com/byzandome)! - Add Changesets workflow for automated releases and improve security

  ## Features
  - **Changesets integration**: Developers now use `bun run changeset` to document changes before creating PRs
  - **Automated versioning**: Version bumps are handled automatically based on change types (patch/minor/major)
  - **CHANGELOG generation**: Changelog is auto-generated from changesets using GitHub links
  - **Git tags & releases**: Version PRs automatically create `vX.Y.Z` tags and GitHub Releases
  - **Security improvements**: Explicit workflow permissions following least-privilege principle
  - **Better documentation**: Comprehensive guides in `.github/README.md` and `SECURITY.md`

  ## Changes
  - Added `@changesets/cli` and `@changesets/changelog-github` dependencies
  - Created `.changeset/config.json` with Changesets configuration
  - Added `.changeset/README.md` with Spanish usage guide
  - Added `.github/workflows/release.yml` for automated release management
  - Updated `.github/workflows/ci.yml` with:
    - Changeset status check (non-blocking warning)
    - Explicit permissions following least-privilege principle
  - Updated `package.json`:
    - Added `changeset`, `version`, and `release` scripts
    - Updated `packageManager` to bun@1.3.4
    - Removed obsolete `release` configuration block
  - Removed obsolete `.husky/post-checkout` hook
  - Created `SECURITY.md` with comprehensive security policy
  - Updated `README.md` with changesets commands and release section
  - Updated `.github/README.md` with complete new release workflow documentation

  ## Migration

  Existing release process is replaced with Changesets. See `.github/README.md` for the new workflow.
