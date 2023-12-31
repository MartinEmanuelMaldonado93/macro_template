/** @type import('eslint').Config */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'prettier.config.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'storybook'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': ['error', ],
    'no-unused-vars': "off",
    "@typescript-eslint/no-unused-vars": "warn"
  },
}
