module.exports = {
    // ...
  
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
  
    parser: '@typescript-eslint/parser',
  
    parserOptions: {
      ecmaVersion: 2021, 
      sourceType: 'module',
    },
  
    plugins: [
      '@typescript-eslint',
    ],
    ignorePatterns: ['**/*.js'],

  
    rules: {
      // Add your custom rules here
    },
  };