// module.exports = {
//   parser: "babel-eslint",
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true,
//       modules: true,
//     },
//   },
//   env: {
//     browser: true,
//     es6: true,
//   },
//   extends: [
//     "plugin:react-hooks/recommended",
//     // https://eslint.org/docs/rules/
//     "eslint:recommended",
//     "plugin:import/recommended",
//     "plugin:import/typescript",
//     // https://github.com/yannickcr/eslint-plugin-react/blob/master/.eslintrc
//     "plugin:react/recommended",
//     // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
//     "airbnb-base",
//   ],
//   rules: {
//     "react/prop-types": 0,
//     indent: [
//       1,
//       4,
//       {
//         SwitchCase: 1,
//       },
//     ],
//     "arrow-parens": "off",
//     semi: [2, "never"],
//     "linebreak-style": "off",
//     "max-len": [
//       "error",
//       {
//         code: 120,
//         ignoreTemplateLiterals: true,
//         ignoreStrings: true,
//         ignoreComments: true,
//         ignoreTrailingComments: true,
//       },
//     ],
//     quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: true }],
//     "no-nested-ternary": "off",
//     "prefer-promise-reject-errors": "off",
//     "spaced-comment": "off",
//     "react/jsx-filename-extension": [
//       1,
//       { extensions: [".tsx", ".jsx", ".js"] },
//     ],
//     "import/extensions": 0,
//     radix: "off",
//     "no-shadow": "warn",
//     "import/no-extraneous-dependencies": "off",
//     "import/prefer-default-export": "off",
//     "no-restricted-imports": "off",
//     "react/display-name": "off",
//     "local-rules/end-api-functions-with-api": 2,
//     "jsx-quotes": ["error", "prefer-double"],
//     "react/destructuring-assignment": "error",
//     "react/jsx-curly-brace-presence": "error",
//     "import/no-unresolved": "error",
//     "prefer-template": "error",
//     "import/order": [
//       "error",
//       {
//         groups: ["builtin", "external", "internal"],
//         pathGroups: [
//           {
//             pattern: "react",
//             group: "external",
//             position: "before",
//           },
//         ],
//         pathGroupsExcludedImportTypes: ["react"],
//         "newlines-between": "always",
//         alphabetize: {
//           order: "asc",
//           caseInsensitive: true,
//         },
//       },
//     ],
//     "import/no-cycle": "off",
//     "react/self-closing-comp": [
//       "error",
//       {
//         component: true,
//         html: true,
//       },
//     ],
//     "react/jsx-max-props-per-line": [2, { maximum: 3, when: "multiline" }],
//     "brace-style": ["error", "allman"],
//     "newline-before-return": "error",
//   },
//   globals: {
//     google: true,
//     HASH: true,
//   },
//   plugins: [
//     "react",
//     "@typescript-eslint",
//     "import",
//   ],
//   settings: {
//     "import/parsers": {
//       "@typescript-eslint/parser": [".ts", ".tsx"],
//     },
//     react: {
//       createClass: "createReactClass",
//       pragma: "React",
//       version: "detect",
//     },
//     "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"],
//     propWrapperFunctions: [
//       "forbidExtraProps",
//       { property: "freeze", object: "Object" },
//       { property: "myFavoriteWrapper" },
//     ],
//     linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
//     "import/resolver": {
//       typescript: {
//         alwaysTryTypes: true,
//       },
//     },
//   },
//   overrides: [
//     {
//       files: ["**/*.ts", "**/*.tsx"],
//       env: { browser: true, es6: true, node: true },
//       extends: [
//         "eslint:recommended",
//         "plugin:react/recommended",
//         "plugin:@typescript-eslint/eslint-recommended",
//         "plugin:@typescript-eslint/recommended",
//       ],
//       rules: {
//         "@typescript-eslint/no-explicit-any": "off",
//         "@typescript-eslint/no-non-null-assertion": "off",
//         "react/prop-types": 0,
//         "no-return-await": "off",
//         "@typescript-eslint/explicit-module-boundary-types": "off",
//       },
//       parser: "@typescript-eslint/parser",
//       parserOptions: {
//         ecmaFeatures: { jsx: true },
//         ecmaVersion: 2018,
//         sourceType: "module",
//       },
//       plugins: ["react", "@typescript-eslint"],
//     },
//   ],
// };