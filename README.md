# Monorepo

A personal NX monorepo built with TypeScript, pnpm, ESLint, and Jest.

## Packages

| Package | Description | Documentation |
|---------|-------------|---------------|
| [@monorepo/example](./packages/example) | Example package (demonstrates monorepo toolchain) | [Docs](./packages/example/README.md) |

## Quickstart

### Prerequisites

- [Node.js](https://nodejs.org/) v24+ (use [nvm](https://github.com/nvm-sh/nvm): `nvm use`)
- [pnpm](https://pnpm.io/) v10+

### Installation

```bash
# Use the correct Node version
nvm use

# Install pnpm (if not already installed)
npm install -g pnpm

# Install all dependencies
pnpm install
```

### Development Commands

```bash
# Build all packages
pnpm build

# Run tests for all packages
pnpm test

# Lint all packages
pnpm lint

# Run commands for a specific package
pnpm exec nx build @monorepo/example
pnpm exec nx test @monorepo/example
pnpm exec nx lint @monorepo/example

# Run only affected commands (since last commit)
pnpm exec nx affected --target=build
pnpm exec nx affected --target=test
```

## Technologies

| Technology | Version | Documentation |
|------------|---------|---------------|
| [NX](https://nx.dev) | 21.x | [NX Docs](https://nx.dev/getting-started/intro) |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | [TS Docs](https://www.typescriptlang.org/docs/) |
| [Node.js](https://nodejs.org/) | 24.x | [Node Docs](https://nodejs.org/en/docs) |
| [pnpm](https://pnpm.io/) | 10.x | [pnpm Docs](https://pnpm.io/motivation) |
| [ESLint](https://eslint.org/) | 9.x | [ESLint Docs](https://eslint.org/docs/latest/) |
| [Jest](https://jestjs.io/) | 29.x | [Jest Docs](https://jestjs.io/docs/getting-started) |
| [@jscutlery/semver](https://github.com/jscutlery/semver) | 5.x | [semver Docs](https://github.com/jscutlery/semver) |
| [Docker](https://www.docker.com/) | - | [Docker Docs](https://docs.docker.com/) |

## CI/CD

This repository uses [GitHub Actions](https://docs.github.com/en/actions) for continuous integration:

- **CI** (`.github/workflows/ci.yml`): Runs lint, test, and build on every push/PR using NX affected commands.
- **Release** (`.github/workflows/release.yml`): Automated semantic versioning and changelog generation on main branch pushes.
- **PR Labeler** (`.github/workflows/pr-labeler.yml`): Automatically labels PRs based on size (XS/S/M/L/XL).

### Semantic Versioning

Releases are managed with [@jscutlery/semver](https://github.com/jscutlery/semver) following [Conventional Commits](https://www.conventionalcommits.org/). Commit prefixes:

| Prefix | Release Type |
|--------|-------------|
| `fix:` | Patch (0.0.x) |
| `feat:` | Minor (0.x.0) |
| `feat!:` or `BREAKING CHANGE:` | Major (x.0.0) |
| `chore:`, `docs:`, `style:` | No release |

## Contributing

This is a private repository with no public contributions.
