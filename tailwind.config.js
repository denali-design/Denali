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
        'space-none': '0px',
        'space-1': '0.125rem',
        'space-2': '0.25rem',
        'space-3': '0.5rem',
        'space-4': '1rem',
        'space-5': '1.5rem',
        'space-6': '2rem',
        'space-7': '2.5rem'
      }
    }
  },
  plugins: [require('./tailwind-plugins/semantic-colors')]
};
