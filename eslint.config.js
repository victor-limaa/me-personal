const expoConfig = require('eslint-config-expo/flat');
const eslintConfigPrettier = require('eslint-config-prettier/flat');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  {
    ignores: [
      '.expo/**',
      'android/**',
      'dist/**',
      'ios/**',
      'node_modules/**',
      'web-build/**',
      'expo-env.d.ts',
    ],
  },
  expoConfig,
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  eslintConfigPrettier,
]);
