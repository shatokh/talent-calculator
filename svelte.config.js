import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Поддержка Svelte preprocessing
	preprocess: vitePreprocess(),

	kit: {
		// Vercel требует специальный адаптер
		adapter: adapter(),

		// Алиасы для удобных импортов
		alias: {
			$lib: resolve('./src/lib')
			// Можно добавить дополнительные алиасы при необходимости
		}
	}
};

export default config;
