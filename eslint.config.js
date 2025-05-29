// eslint.config.js
import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import sveltePlugin from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
    includeIgnoreFile(gitignorePath),
    js.configs.recommended,
    ...ts.configs.recommended,
    // Use flat/recommended for Svelte, which already includes the parser
    ...sveltePlugin.configs['flat/recommended'],
    prettier,
    ...sveltePlugin.configs['flat/prettier'], // Use flat/prettier for Svelte
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                // Explicitly declare runes as globals for ESLint
                // This helps ESLint understand that these symbols are not undefined
                $props: 'readonly',
                $slots: 'readonly',
                $state: 'readonly',
                $derived: 'readonly',
                $effect: 'readonly',
                $host: 'readonly',
                $browser: 'readonly',
                $render_effect: 'readonly'
            }
        },
        rules: {
            // 'no-undef': 'off', // You can try removing this if globals for runes work
            // If you still get no-undef errors, add this line back.
            // 'no-unused-vars': 'off', // Optional: if ESLint complains about unused variables related to runes
        }
    },
    {
        files: ['**/*.svelte'], // Apply these settings only to Svelte files
        languageOptions: {
            parserOptions: {
                // projectService: true, // Optional: may slow down if not needed
                extraFileExtensions: ['.svelte'],
                parser: ts.parser, // Svelte parser will use TypeScript parser
                project: true // CRITICALLY IMPORTANT for TypeScript in ESLint
            }
        }
    },
    {
        // Ignore folders that should not be linted
        ignores: ['build/', '.svelte-kit/', 'node_modules/', 'dist/']
    }
);
