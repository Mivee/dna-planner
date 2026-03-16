import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import vue from "eslint-plugin-vue";
import globals from "globals";
import parser from "vue-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    "**/node_modules",
    "**/dist",
    "**/*.local",
    ".vscode/*",
    "!.vscode/extensions.json",
    "**/.idea",
    "**/.DS_Store",
    "**/*.suo",
    "**/*.ntvs*",
    "**/*.njsproj",
    "**/*.sln",
    "**/*.sw?",
]), {
    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
        vue,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: parser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            parser: "@typescript-eslint/parser",
        },
    },

    rules: {
        "vue/html-indent": "off",
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-explicit-any": "error",

        "@typescript-eslint/no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
        }],

        "no-console": "warn",
        "prefer-const": "error",
        "vue/html-self-closing": "off",
        "vue/html-closing-bracket-newline": ["error", {
            singleline: "never",
            multiline: "never",
        }],
        "vue/max-attributes-per-line": ["off", { singleline: 5 }],
        "vue/singleline-html-element-content-newline": "off",
    },
}]);