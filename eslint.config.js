import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      "prefer-const": "warn",
      "no-empty": "off",
      "no-unused-vars": "off",
      "no-useless-assignment": "off",
      
      "@typescript-eslint/prefer-const": "warn",
      "@typescript-eslint/no-empty": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-useless-assignment": "off",
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])
