export default {
  // '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],
  '@typescript-eslint/ban-ts-comment': ['error', {
    'ts-expect-error': 'allow-with-description',
    'ts-ignore': 'allow-with-description',
    'ts-nocheck': 'allow-with-description',
    'ts-check': 'allow-with-description',
  }],
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/consistent-type-imports': ['error', {
    disallowTypeAnnotations: false,
    fixStyle: 'inline-type-imports',
  }],
  // '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
  '@typescript-eslint/no-extraneous-class': 'off',
  '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-useless-empty-export': 'error',
  '@typescript-eslint/parameter-properties': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/restrict-template-expressions': ['error', { allowBoolean: true, allowNumber: true }],
  '@typescript-eslint/switch-exhaustiveness-check': ['error', { considerDefaultExhaustiveForUnions: true }],
};
