import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Add unused-imports rules
      'react/react-in-jsx-scope': 'off', // Disable React import requirement
      'unused-imports/no-unused-imports': 'warn', // Warns about unused imports
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all', // Warns for all unused variables
          varsIgnorePattern: '^_', // Ignore variables starting with "_"
          args: 'after-used', // Only warn for unused arguments after the last used one
          argsIgnorePattern: '^_', // Ignore arguments starting with "_"
        },
      ],
    },
  },
]
