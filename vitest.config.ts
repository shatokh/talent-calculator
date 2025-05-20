import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		svelte(),
		tsconfigPaths() // <-- подтягиваем aliases из tsconfig.json
	],
	test: {
		globals: true, // describe/it/expect становятся доступными
		environment: 'jsdom',
		setupFiles: 'src/setupTests.ts', // если у вас есть setupTests
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
