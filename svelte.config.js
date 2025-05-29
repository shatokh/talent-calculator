import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Svelte preprocessing support
    preprocess: vitePreprocess(),

    kit: {
        // Vercel requires a special adapter
        adapter: adapter(),

        // Aliases for convenient imports
        alias: {
            $lib: resolve('./src/lib')
            // You can add additional aliases if needed
        }
    }
};

export default config;
