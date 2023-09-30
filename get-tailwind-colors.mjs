/**
 * Returns a color map leveraging Tailwind's color palette.
 *
 * @file   This file defines the getTailwindColors and getTailwindCompatibleColors functions.
 * @since  1.0.0
 */

import colors from 'tailwindcss/colors';

/**
 * Returns the full color map including metadata like subtitles.
 *
 * This is the Denali source of truth for colors. The color object below is used
 * by Storybook to automatically generate a color palette preview along with titles
 * and subtitles. It is also used by `getTailwindCompatibleColors()` to drop the
 * desc value and import only the colors to the Tailwind config file.
 *
 * @function
 * @returns {Object} The color map with metadata.
 */
const getTailwindColors = () => ({
  brand: {
    desc: 'Use for branding related content.',
    primary: colors.blue[600],
    secondary: colors.slate[600]
  },
  canvas: {
    desc: 'Use for backgrounds.',
    light: '#fff',
    medium: colors.slate[300],
    dark: '#000'
  },
  accent: {
    desc: 'Use for accents, like borders and shadows.',
    light: colors.slate[200],
    medium: colors.slate[400],
    dark: colors.slate[900]
  },
  success: {
    desc: 'Use for successful validation.',
    base: colors.green[700],
    focus: colors.green[800],
    action: colors.green[900]
  },
  danger: {
    desc: 'Use for failed validation.',
    base: colors.red[600],
    focus: colors.red[700],
    action: colors.red[800]
  },
  warning: {
    desc: 'Use for alerts and warnings.',
    base: colors.yellow[500],
    focus: colors.yellow[600],
    action: colors.yellow[700]
  },
  info: {
    desc: 'Use for alerts and notifications.',
    base: colors.blue[600],
    focus: colors.blue[700],
    action: colors.blue[800]
  }
});

export default getTailwindColors;

/**
 * Returns the Tailwind-compatible color map without metadata.
 *
 * @function
 * @returns {Object} The color map for Tailwind.
 */
export const getTailwindCompatibleColors = () => {
  const allColors = getTailwindColors();
  const compatibleColors = {};

  Object.keys(allColors).forEach((key) => {
    compatibleColors[key] = {};
    Object.keys(allColors[key]).forEach((subKey) => {
      if (subKey !== 'desc') {
        compatibleColors[key][subKey] = allColors[key][subKey];
      }
    });
  });

  return compatibleColors;
};
