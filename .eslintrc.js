module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: ['jest'],
  // add your custom rules here
  // rules: {
  //   '@typescript-eslint/no-explicit-any': 'none',
  // },
  // overrides: [
  //   {
  //     files: [
  //       '**/__tests__/*.{j,t}s?(x)',
  //       '**/tests/unit/**/*.spec.{j,t}s?(x)',
  //       '**/*.spec.*',
  //     ],
  //     env: {
  //       jest: true,
  //     },
  //   },
  //   {
  //     /* Files excluded on sonar-project.properties */
  //     files: [
  //       '**/__tests__/*.{j,t}s?(x)',
  //       '**/*.spec.{j,t}s?(x)',
  //       '**/*.spec.*',
  //     ],
  //     /* Override rules. We can improve it in the future */
  //     rules: {
  //       'sonarjs/no-duplicate-string': 'off',
  //       '@typescript-eslint/no-explicit-any': 'warn',
  //     },
  //   },
  // ],
}
