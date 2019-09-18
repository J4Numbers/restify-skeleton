module.exports = {
  ...require('@j4numbers/eslint-base-config'),
  plugins: ['mocha'],
  "globals": {
    "describe": true,
    "it": true,
    "sinon": true,
    "expect": true,
    "request": true,
    "resolveModule": true,
    "testRequire": true,
  },
  overrides: [
    {
      files: ['*_spec.js'],
      rules: {
        'no-unused-expressions': 'off',
        'mocha/no-mocha-arrows': 'error',
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-skipped-tests': 'warn',
        'func-names': 'off',
        'prefer-arrow-callback': 'off',
        'quote-props': 'off',
        'global-require': 'off',
      },
    },
  ],
};
