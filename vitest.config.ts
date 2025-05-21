// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    svelte(),         // компилирует .svelte-файлы в web-режиме
    tsconfigPaths(),  // резолвит ваши алиасы из tsconfig
    svelteTesting()   // добавляет поддержку @testing-library/svelte
  ],

  resolve: {
    dedupe: ['svelte']  // гарантируем одну копию Svelte
  },

  test: {
    environment: 'jsdom',                   // браузерное окружение
    globals: true,                          // describe/it/expect без импорта
    setupFiles: 'src/setupTests.ts',        // ваш setup-файл
    include: ['src/**/*.{test,spec}.{js,ts,svelte}']
  }
});