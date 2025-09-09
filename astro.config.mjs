// @ts-check
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://teixe.es',

  prefetch: true,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap(), svelte()]
})
