import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },

  preprocess: [sveltePreprocess({
    scss: {
      prependData: `@import './src/root.scss';`
    }
  }), mdsvex(mdsvexConfig)],
};

export default config;
