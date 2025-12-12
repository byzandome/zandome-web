# GitHub Actions Workflows

## Workflows

### CI Workflow (`ci.yml`)
Runs on every push and pull request to validate code quality and build.

**Jobs:**
- **Lint and Format**: Checks code formatting with Prettier and linting with ESLint
- **Build**: Builds the Astro application

### Release Workflow (`release.yml`)
Automatically manages version bumping and tagging when release PRs are merged to main.

**Triggers:**
- PR from `release/*` branch merged to `main`

**Automated Steps:**
1. Extracts version from branch name (e.g., `release/1.2.0` → `1.2.0`)
2. Updates `package.json` version field
3. Commits version change to `main`
4. Creates and pushes git tag (e.g., `v1.2.0`)
5. Triggers the deploy workflow automatically

**Branch Naming Convention:**
- ✅ Valid: `release/1.0.0`, `release/1.2.3`, `release/2.0.0`
- ❌ Invalid: `release/v1.0.0`, `release/1.0`, `releases/1.0.0`

### Deploy Workflow (`deploy.yml`)
Builds and pushes Docker images to the private registry at `registry.zandome.dev`.

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch
- Git tags matching `v*` (automatically triggered by release workflow)

**Image Tags:**
- `{version}` - From package.json (e.g., `1.1.1`)
- `latest` - For all main branch pushes
- `{tag}` - Git tag name (e.g., `v1.1.1`)
- `main-{sha}` - Main branch with short commit SHA

## Required GitHub Secrets

To use the deploy workflow, you need to configure these secrets in your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add the following repository secrets:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `REGISTRY_USERNAME` | Username for registry.zandome.dev | `your-username` |
| `REGISTRY_PASSWORD` | Password or token for registry.zandome.dev | `your-password` |

## Release Process

### Creating a New Release

**1. Create a release branch:**
```bash
git checkout -b release/1.2.0
```

**2. Make your changes, commit, and push:**
```bash
git add .
git commit -m "feat: add new feature"
git push origin release/1.2.0
```

**3. Create a Pull Request:**
- **Base:** `main`
- **Compare:** `release/1.2.0`
- **Title:** "Release v1.2.0"

**4. Merge the PR** (after CI passes and reviews are approved)

**5. Automation kicks in:**
- ✅ Release workflow extracts version `1.2.0` from branch name
- ✅ Updates `package.json` to version `1.2.0`
- ✅ Commits to `main`: `chore: bump version to 1.2.0`
- ✅ Creates git tag `v1.2.0`
- ✅ Deploy workflow automatically triggers
- ✅ Docker images are built and pushed:
  - `registry.zandome.dev/zandome-web:1.2.0`
  - `registry.zandome.dev/zandome-web:v1.2.0`
  - `registry.zandome.dev/zandome-web:latest`
  - `registry.zandome.dev/zandome-web:main-abc1234`

### Direct Push to Main
When you push directly to `main` (not recommended for releases), the deploy workflow will create:
- `registry.zandome.dev/zandome-web:{current-version}` (from package.json)
- `registry.zandome.dev/zandome-web:latest`
- `registry.zandome.dev/zandome-web:main-abc1234` (short commit SHA)

### Other Branches
- Release branches (`release/*`): CI runs, but no deployment until merged to main
- Feature/development branches: Only CI runs, no deployment

## Pulling Images

```bash
# Pull the latest production image
docker pull registry.zandome.dev/zandome-web:latest

# Pull a specific version
docker pull registry.zandome.dev/zandome-web:1.1.1

# Pull a specific commit
docker pull registry.zandome.dev/zandome-web:main-abc1234
```

## Local Testing

To test the Docker build locally:

```bash
# Build the image
docker build -t zandome-web:local .

# Run the container
docker run -p 8080:80 zandome-web:local

# Access at http://localhost:8080
```

## Important Notes

### Version Management
- **Source of Truth**: The release branch name (`release/x.x.x`) is the source of truth for versioning
- **No Manual Version Updates**: Never manually update the version in `package.json` - the release workflow handles this automatically
- **Semantic Versioning**: Always use semantic versioning format: `MAJOR.MINOR.PATCH` (e.g., `1.2.0`)

### Branch Protection
It's recommended to protect the `main` branch:
1. Go to **Settings** → **Branches** → **Branch protection rules**
2. Add rule for `main`:
   - Require pull request reviews before merging
   - Require status checks to pass (CI workflow)
   - Do not allow force pushes
   - Do not allow deletions

### Troubleshooting

**Release workflow didn't run:**
- Verify the PR was merged (not just closed)
- Check the branch name matches `release/x.x.x` format
- Ensure the PR target was the `main` branch

**Invalid version format error:**
- Branch must be named `release/1.2.3` (numbers only, no 'v' prefix)
- Version must have exactly three parts: MAJOR.MINOR.PATCH
- Each part must be a number

**Docker images not created:**
- Check that the deploy workflow was triggered by the git tag
- Verify GitHub secrets `REGISTRY_USERNAME` and `REGISTRY_PASSWORD` are configured
- Check the Actions tab for deployment workflow logs
