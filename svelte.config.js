import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Поддержка Svelte preprocessing
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),

    // Здесь прописываем алиасы для удобных импортов
    alias: {
      // Теперь $lib резолвится в src/lib
      $lib: resolve('./src/lib')
      // при необходимости можно добавить и другие:
      // $components: resolve('./src/lib/components')
    }
  }
};

export default config;
