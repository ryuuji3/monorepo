# Monorepo

A personal NX monorepo built with TypeScript, pnpm, ESLint, and Jest.

## Packages

| Package | Description | Documentation |
|---------|-------------|---------------|
| [@monorepo/example](./packages/example) | Example package (demonstrates monorepo toolchain) | [Docs](./packages/example/README.md) |
| [@monorepo/react-design-system](./packages/react-design-system) | React 19 component library (Tailwind CSS, layout, buttons, inputs, icons, typography, tokens) | [Docs](./packages/react-design-system/README.md) |

## Quickstart

### Prerequisites

- [Node.js](https://nodejs.org/) v24+ (use [nvm](https://github.com/nvm-sh/nvm): `nvm use`)
- [pnpm](https://pnpm.io/) v10+
- Git with a configured user name and email (required — all commits must be signed)

### Installation

```bash
# Use the correct Node version
nvm use

# Install pnpm (if not already installed)
npm install -g pnpm

# Install all dependencies (also installs git hooks via the prepare script)
pnpm install
```

### Git Configuration

All commits must include your name and email. Configure them if you haven't already:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
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
| [React](https://react.dev/) | 19.x | [React Docs](https://react.dev/learn) |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | [Tailwind Docs](https://tailwindcss.com/docs) |
| [NX](https://nx.dev) | 21.x | [NX Docs](https://nx.dev/getting-started/intro) |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | [TS Docs](https://www.typescriptlang.org/docs/) |
| [Node.js](https://nodejs.org/) | 24.x | [Node Docs](https://nodejs.org/en/docs) |
| [pnpm](https://pnpm.io/) | 10.x | [pnpm Docs](https://pnpm.io/motivation) |
| [ESLint](https://eslint.org/) | 9.x | [ESLint Docs](https://eslint.org/docs/latest/) |
| [Jest](https://jestjs.io/) | 29.x | [Jest Docs](https://jestjs.io/docs/getting-started) |
| [@jscutlery/semver](https://github.com/jscutlery/semver) | 5.x | [semver Docs](https://github.com/jscutlery/semver) |
| [husky](https://typicode.github.io/husky/) | 9.x | [Husky Docs](https://typicode.github.io/husky/) |
| [lint-staged](https://github.com/lint-staged/lint-staged) | 16.x | [lint-staged Docs](https://github.com/lint-staged/lint-staged) |
| [commitlint](https://commitlint.js.org/) | 20.x | [commitlint Docs](https://commitlint.js.org/) |
| [Docker](https://www.docker.com/) | - | [Docker Docs](https://docs.docker.com/) |

## Git Hooks

[Husky](https://typicode.github.io/husky/) installs the following hooks automatically when you run `pnpm install`:

| Hook | Tool | Purpose |
|------|------|---------|
| `pre-commit` | [lint-staged](https://github.com/lint-staged/lint-staged) | Lints staged files using each package's own ESLint configuration |
| `commit-msg` | [commitlint](https://commitlint.js.org/) | Enforces [Angular commit conventions](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit) |

### Commit Message Format

Commit messages must follow the [Angular Commit Message Format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit):

```
<type>(<scope>): <short summary>
```

**Allowed types:** `build`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`

Examples:

```bash
feat(react-design-system): add Button component
fix(example): resolve import resolution issue
docs: update README with setup instructions
build!: drop support for Node 18
```

## CI/CD

This repository uses [GitHub Actions](https://docs.github.com/en/actions) for continuous integration:

- **CI** (`.github/workflows/ci.yml`): Runs lint, test, and build on every push/PR using NX affected commands.
- **Release** (`.github/workflows/release.yml`): Automated semantic versioning and changelog generation on main branch pushes.
- **PR Labeler** (`.github/workflows/pr-labeler.yml`): Automatically labels PRs based on size (XS/S/M/L/XL).
- **PR Title** (`.github/workflows/pr-title.yml`): Validates that the PR title conforms to Angular commit conventions.

### Semantic Versioning

Releases are managed with [@jscutlery/semver](https://github.com/jscutlery/semver) following [Conventional Commits](https://www.conventionalcommits.org/). Commit prefixes:

| Prefix | Release Type |
|--------|-------------|
| `fix:` | Patch (0.0.x) |
| `feat:` | Minor (0.x.0) |
| `feat!:` or `BREAKING CHANGE:` | Major (x.0.0) |
| `build:`, `docs:`, `style:`, `refactor:`, `test:` | No release |

## Contributing

This is a private repository with no public contributions.
