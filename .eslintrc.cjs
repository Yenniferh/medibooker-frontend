module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "/src/vite-env.d.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-refresh", "@typescript-eslint", "prettier", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "spaced-comment": "error",
    quotes: ["error", "double"],
    "no-duplicate-imports": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off", // We will use TypeScript's types for component props instead
  },
  settings: { react: { version: "detect" } },
};
