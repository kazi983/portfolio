import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import jsdoc from "eslint-plugin-jsdoc";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      jsdoc.configs["flat/recommended-typescript-error"],
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Require JSDoc only on exported functions, including arrow-function components
      "jsdoc/require-jsdoc": [
        "error",
        {
          publicOnly: true,
          require: {
            FunctionDeclaration: true,
            ArrowFunctionExpression: true,
          },
        },
      ],
      // Don't require @param tags for destructured props
      "jsdoc/require-param": ["error", { checkDestructured: false }],
      // Don't require @returns on every component
      "jsdoc/require-returns": "off",
      // Require a description in every JSDoc block (not included in the preset)
      "jsdoc/require-description": "error",
    },
  },
]);
