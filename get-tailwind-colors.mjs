/**
 * Returns a color map, leveraging Tailwind's color palette.
 *
 * @file   This files defines the getTailwindColors and getTailwindCompatibleColors functions.
 * @since  1.0.0
 */

import colors from 'tailwindcss/colors';

/**
 * Returns the full color map including metadata like subtitles.
 *
 * @function
 * @returns {Object} The color map with metadata.
 */
const getTailwindColors = () => ({
  brand: {
    primary: colors.blue[600],
    secondary: colors.slate[600]
  },
  accent: {
    'light-slate': colors.slate[200],
    'medium-slate': colors.slate[400],
    'dark-slate': colors.slate[600]
  },
  success: {
    base: colors.green[700],
    focus: colors.green[800],
    action: colors.green[900]
  },
  danger: {
    base: colors.red[600],
    focus: colors.red[700],
    action: colors.red[800]
  },
  warning: {
    base: colors.yellow[500],
    focus: colors.yellow[600],
    action: colors.yellow[700]
  },
  info: {
    base: colors.blue[600],
    focus: colors.blue[700],
    action: colors.blue[800]
  }
});

export default getTailwindColors;
