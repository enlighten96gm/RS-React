module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    plugins: ["@typescript-eslint"],
    extends:  [
      'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions:  {
      ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
      sourceType:  "module",  // Allows for the use of imports
      project: './tsconfig.json',
      ecmaFeatures:  {
        jsx:  true,  // Allows for the parsing of JSX
      },
    },
    rules:  {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    },
    settings:  {
      react:  {
        version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
    extends: [
      "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
      'airbnb-typescript'
    ],  // Uses the recommended rules from airbnb-typescript
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    ignorePatterns: [
      'node_modules/',
      'build/',
      'dist/',
      'e2e/'
    ],
  };