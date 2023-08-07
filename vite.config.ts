import { defineConfig } from 'vite';
import inlangPlugin from '@inlang/sdk-js/adapter-sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [inlangPlugin(), sveltekit()],
});
