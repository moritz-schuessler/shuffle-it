import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default defineConfig([
  ...nextVitals,
  ...pluginQuery.configs['flat/recommended'],
  prettier,
  globalIgnores(['.next/**', 'next-env.d.ts']),
]);
