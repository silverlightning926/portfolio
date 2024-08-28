import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "amplify-adapter";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			runtime: "nodejs20.x",
		}),
	},
};

export default config;
