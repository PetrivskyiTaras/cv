import { fixupPluginRules } from '@eslint/compat';
import TypeScriptESLint from 'typescript-eslint';
import ESLint from '@eslint/js';
import ESLintPluginStylistic from '@stylistic/eslint-plugin';
import ESLintPluginCompat from 'eslint-plugin-compat';
import ESLintPluginReact from 'eslint-plugin-react';
import ESLintPluginImport from 'eslint-plugin-import';
import ESLintPluginReactHooks from 'eslint-plugin-react-hooks';
import ESLintPluginNext from '@next/eslint-plugin-next';

import GENERAL_RULES from './eslint.general-rules.mjs';
import TYPESCRIPT_RULES from './eslint.typescript-rules.mjs';

const GLOB_PATTERNS = {
  all_files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  typescript_files: ['**/*.ts', '**/*.tsx'],
  all_ignores: ['*.js', '*.mjs', '*.ts', '.husky', '.next', 'src/pages/api/health.ts'],
};

const CONFIGS = {
  general: [
    ESLint.configs.recommended,
    ESLintPluginCompat.configs['flat/recommended'],
    ESLintPluginStylistic.configs['recommended-flat'],
    ESLintPluginReact.configs.flat.recommended,
    ESLintPluginReact.configs.flat['jsx-runtime'],
    ESLintPluginImport.flatConfigs.recommended,
    ESLintPluginImport.flatConfigs.react,
    ESLintPluginImport.flatConfigs.typescript,
    {
      plugins: {
        'react-hooks': fixupPluginRules(ESLintPluginReactHooks),
        '@next/next': fixupPluginRules(ESLintPluginNext),
      },
      settings: {
        'react': { version: 'detect' },
        'import/resolver': { typescript: true },
      },
      rules: {
        ...ESLintPluginReactHooks.configs.recommended.rules,
        ...ESLintPluginNext.configs.recommended.rules,
      },
    }
  ],
  typescript: [
    ...TypeScriptESLint.configs.strictTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    }
  ],
  test: [],
};

const override = (configs, override) => {
  return configs.map((config, index) => {
    return { ...config, ...override, name: `${ override.name }: ${ config.name || `#${ index + 1 }` }` };
  });
};

/** @type { Array<import("eslint").Linter.Config> } */
const ESLintConfigs = [
  ...override(CONFIGS.general, { name: 'general-config', files: GLOB_PATTERNS.all_files }),
  ...override(CONFIGS.typescript, { name: 'typescript-config', files: GLOB_PATTERNS.typescript_files }),
  { name: 'general-rules', files: GLOB_PATTERNS.all_files, rules: GENERAL_RULES },
  { name: 'typescript-rules', files: GLOB_PATTERNS.typescript_files, rules: TYPESCRIPT_RULES },
  { name: 'general-ignores', ignores: GLOB_PATTERNS.all_ignores },
];

export default ESLintConfigs;
