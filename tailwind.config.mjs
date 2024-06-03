/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      black: '#0A0A0A',
      white: '#FFFFFF',
      gray: '#9EABB8',
      blue: '#4493f8',
      'dark-gray': '#3D4754',
      'light-blue': '#7FB3FB'
    },
    maxWidth: {
      container: '950px'
    },
    fontFamily: {
      manrope: 'Manrope, sans-serif'
    }
  }
}
