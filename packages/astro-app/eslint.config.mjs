import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // Apply recommended Astro rules
  ...eslintPluginAstro.configs.recommended,
  {
    // Optional: Add any custom rules or overrides here
    rules: {
      // Example: customize Astro-specific rules if needed
      // 'astro/no-set-html-directive': 'error',
    },
  },
];
