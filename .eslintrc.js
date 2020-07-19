module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    jest: true

  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'

  },
  rules: {
    'no-unused-vars': 'off',
    'no-trailing-spaces': 'off',
    'no-useless-constructor': 'off'
  }
}
