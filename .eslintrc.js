module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 0,
    'no-console': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0
  }
}
