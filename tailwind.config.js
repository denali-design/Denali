/** @type {import('tailwindcss').Config} */
const getTailwindCompatibleColors = require('./get-tailwind-colors.mjs');

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: getTailwindCompatibleColors(),
      spacing: {
        1.75: ' 7px'
      }
    }
  },
  plugins: []
};
