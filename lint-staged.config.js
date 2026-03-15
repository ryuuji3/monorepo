const path = require('path');

/**
 * lint-staged configuration for the Nx monorepo.
 *
 * For each staged file, `nx affected` determines which projects are impacted
 * and runs the `lint` target for those projects. This ensures that each
 * package's own ESLint configuration is respected.
 */
module.exports = {
  '**/*.{ts,tsx,js,jsx,mjs,cjs}': (files) => {
    const relativeFiles = files
      .map((f) => path.relative(process.cwd(), f))
      .join(',');
    return `pnpm exec nx affected --target=lint --files=${relativeFiles}`;
  },
};
