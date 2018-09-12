module.exports = {
  extends: 'airbnb-base',
  env: {
    mocha: true,
  },
  rules: {
    'implicit-arrow-linebreak': 'off',
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_.*' }],
  },
};
