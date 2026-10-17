# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly by emailing **miguel@zandome.dev** instead of using the public issue tracker.

### What to Include

Please provide the following information:

- Description of the vulnerability
- Steps to reproduce the issue (if applicable)
- Potential impact of the vulnerability
- Suggested fix (if you have one)

### Response Timeline

- **Initial response**: Within 48 hours
- **Investigation and fix**: Within 7-14 days (depending on severity)
- **Public disclosure**: Coordinated with you after a fix is released

## Security Practices

This project follows security best practices:

### Code Quality

- ✅ Automated linting with ESLint
- ✅ Code formatting with Prettier
- ✅ GitHub code scanning (CodeQL)
- ✅ Dependency updates and monitoring

### CI/CD Security

- ✅ Explicit workflow permissions (principle of least privilege)
- ✅ Protected `main` branch with required status checks
- ✅ Linear git history (no merge commits)
- ✅ Automated testing on all PRs

### Dependency Management

- ✅ Pinned dependency versions
- ✅ Regular security updates
- ✅ Lock files tracked in version control

### Workflow Permissions

All GitHub Actions workflows follow the principle of least privilege:

- `ci.yml`: Read-only access to repository
- `release.yml`: Write access limited to contents and pull requests
- `deploy.yml`: Specific permissions for GitHub Pages deployment

### Secrets Management

- ✅ GitHub Secrets used for sensitive configuration
- ✅ Never committed to the repository
- ✅ Accessed only when needed in workflows

## Supported Versions

This is a single-package project (portfolio website). Security updates are applied to the `main` branch as soon as they're discovered and verified.

| Version | Status                |
| ------- | --------------------- |
| Latest  | ✅ Actively supported |

## Dependencies

### Production Dependencies

- Astro 5+ - Static site generator
- React 19+ - UI framework
- Tailwind CSS 4+ - Utility-first CSS

### Development Dependencies

- TypeScript - Type safety
- ESLint - Code quality
- Prettier - Code formatting
- Changesets - Release management

All dependencies are regularly updated and monitored for security vulnerabilities.

## Security Checklist

- [ ] Run `bun run lint:ci` before committing
- [ ] Run `bun run format:ci` to verify formatting
- [ ] Run `bun run build` to test the build
- [ ] Never commit secrets or sensitive information
- [ ] Use environment variables for configuration (see `.env.example`)
- [ ] Review GitHub Actions logs for any permission warnings

## Additional Resources

- [GitHub Security Documentation](https://docs.github.com/en/code-security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security](https://nodejs.org/en/docs/guides/security/)

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

**Last Updated**: October 17, 2026

For other inquiries, please open an issue on [GitHub](https://github.com/byzandome/zandome-web).
