import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs'
    }),
    paths: {
      base: dev ? '' : '/cravacuore.github.io',
    },
  },
  preprocess: [ preprocess({
      postcss: true,
    }),
  ]
};

export default config;