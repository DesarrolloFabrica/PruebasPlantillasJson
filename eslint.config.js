import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
// 1. IMPORTAR EL PLUGIN DE TAILWIND CSS
import tailwind from 'eslint-plugin-tailwindcss'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    // 2. AGREGAR EL PLUGIN Y LA REGLA
    plugins: {
      // 2a. Añadir el plugin al array de plugins
      tailwindcss: tailwind,
    },
    rules: {
      // 2b. Desactivar la regla que sugiere los cambios canónicos (la alerta que quieres eliminar)
      "tailwindcss/suggest-canonical-classes": "off",
      
      // NOTA: Si necesitas otras reglas de Tailwind, también irían aquí.
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])