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
    // Используем flat/recommended для Svelte, который уже включает парсер
    ...sveltePlugin.configs['flat/recommended'], 
    prettier,
    ...sveltePlugin.configs['flat/prettier'], // Используем flat/prettier для Svelte
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                // <--- ДОБАВЛЕНО: Явно объявляем руны как глобальные для ESLint
                // Это помогает ESLint понять, что эти символы не являются неопределенными
                '$props': 'readonly',
                '$slots': 'readonly',
                '$state': 'readonly',
                '$derived': 'readonly',
                '$effect': 'readonly',
                '$host': 'readonly',
                '$browser': 'readonly',
                '$render_effect': 'readonly'
            }
        },
        rules: { 
            // 'no-undef': 'off', // <--- Можно попробовать удалить, если globals с рунами сработают
                               // Если ошибки по no-undef все еще есть, верните эту строку.
            // 'no-unused-vars': 'off', // Опционально: если ESLint жалуется на неиспользуемые переменные, связанные с рунами
        }
    },
    {
        files: ['**/*.svelte'], // Применяем эти настройки только к Svelte-файлам
        languageOptions: {
            parserOptions: {
                // projectService: true, // Опционально: может замедлять, если не нужно
                extraFileExtensions: ['.svelte'],
                parser: ts.parser, // Svelte-парсер будет использовать TypeScript-парсер
                project: true // <--- КРИТИЧЕСКИ ВАЖНО для TypeScript в ESLint
            }
        }
    },
    {
        // Игнорируем папки, которые не должны линтиться
        ignores: ["build/", ".svelte-kit/", "node_modules/", "dist/"]
    }
);