// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://teixe.es",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap(), svelte()],
});