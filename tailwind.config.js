/** @type {import('tailwindcss').Config} */
const {
  getTailwindCompatibleSemanticColors
} = require('./get-tailwind-colors');
const generateSafelist = require('./tailwind-plugins/generate-safelist');

export default {
  darkMode: 'class',
  content: [
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [...generateSafelist()],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000'
      },
      semanticColors: getTailwindCompatibleSemanticColors(),
      spacing: {
        1.75: ' 7px'
      }
    }
  },
  plugins: [require('./tailwind-plugins/semantic-colors')]
};
