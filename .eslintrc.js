module.exports = {
  root: true,
  env: {
    'browser': true,
    'node': true,
    'es6': true,
    'worker': true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    'standard',
    "@typescript-eslint",
    'compat',
    'import',
    'json',
    'node',
    'promise',
    'security',
    'unicorn',
  ],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:unicorn/recommended'
  ],
  rules: {
    'comma-dangle': ['error', 'always'],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': ['error', 'always'],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'max-len': ['warn', {
      code: 80,
      ignoreComments: false,
      ignoreTrailingComments: false
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // EXP: Enhanced by @typescript-eslint/no-unused-vars
    'no-unused-vars': 'off',
    'no-var': 'error',
    'prefer-const': ['error', {
      destructuring: 'all',
      ignoreReadBeforeAssign: false
    }],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'varsIgnorePattern': '^_',
        'argsIgnorePattern': '^_'
      }
    ],
    'compat/compat': 'off', // Takes too long to lint
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'security/detect-object-injection': 'off',
    'standard/array-bracket-even-spacing': 'off',
    'standard/object-curly-even-spacing': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
  },
  settings: {}
}
