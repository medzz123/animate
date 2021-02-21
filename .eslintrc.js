module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',

    // Prettier plugin and recommended rules
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Include .prettierrc.js rules
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],

    // suppress jsx in scope
    'react/react-in-jsx-scope': 'off',

    // Ignore underscore vars
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],

    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'simple-import-sort/imports': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
