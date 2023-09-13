module.exports = {
    // ...
  
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
  
    parser: '@typescript-eslint/parser',
  
    parserOptions: {
      ecmaVersion: 2021, 
      sourceType: 'module',
    },
  
    plugins: [
      '@typescript-eslint',
    ],
    ignorePatterns: ['**/*.js','**/generated/**'],

  
    rules: {
      'prettier/prettier': 'error',
    },
  };