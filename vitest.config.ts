// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        svelte(), // compiles .svelte files in web mode
        tsconfigPaths(), // resolves your aliases from tsconfig
        svelteTesting() // adds support for @testing-library/svelte
    ],

    resolve: {
        dedupe: ['svelte'] // ensure a single copy of Svelte
    },

    test: {
        environment: 'jsdom', // browser-like environment
        globals: true, // describe/it/expect without import
        setupFiles: 'src/setupTests.ts', // your setup file
        include: ['src/**/*.{test,spec}.{js,ts,svelte}']
    }
});
