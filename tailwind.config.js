/** @type {import('tailwindcss').Config} */
const getTailwindColors = require('./get-tailwind-colors.mjs');

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: getTailwindColors(),
      spacing: {
        1.75: ' 7px'
      }
    }
  },
  plugins: []
};
