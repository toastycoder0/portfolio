/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      black: '#121417',
      white: '#FFFFFF',
      gray: '#9EABB8',
      'dark-gray': '#3D4754'
    },
    maxWidth: {
      container: '900px'
    },
    fontFamily: {
      manrope: 'Manrope, sans-serif'
    }
  },
  plugins: []
}
