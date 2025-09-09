/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    preflight: true
  },
  // Prevent Tailwind base styles from affecting markdown content
  safelist: [
    {
      pattern: /^markdown-body/,
      variants: ['responsive', 'hover', 'focus']
    }
  ]
}
