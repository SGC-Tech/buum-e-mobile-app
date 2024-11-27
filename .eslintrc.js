module.exports = {
  extends: ['expo', 'plugin:prettier/recommended', 'plugin:@dword-design/import-alias/recommended'],
  plugins: ['prettier', 'module-resolver', '@tanstack/query'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // Place custom rules at the end to ensure they are applied last
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    '@dword-design/import-alias/prefer-alias': [
      'error',
      {
        alias: {
          '#': './src',
        },
      },
    ],
    // this is for sorting imports
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'no-useless-escape': 'off',
    'no-case-declarations': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
    radix: 'off',
  },
};
