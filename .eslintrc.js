import vuePlugin from 'eslint-plugin-vue';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        project: './tsconfig.json'
      }
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': typescriptPlugin
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/script-setup-uses-vars': 'error',
      'vue/no-setup-props-destructure': 'off'
    }
  },
  {
    files: ['**/__tests__/*.{j,t}s?', '**/tests/unit/**/*.spec.{j,t}s'],
    environment: {
      jest: true
    }
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      '*.config.js'
    ]
  }
];