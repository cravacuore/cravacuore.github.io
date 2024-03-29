import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs'
    }),
  },
  preprocess: [ preprocess({
      postcss: true,
    }),
  ]
};

export default config;
