/**
 * Generates a safelist of classes for PurgeCSS based on semantic color definitions.
 *
 * @file   This file defines the generateSafelist function.
 * @since  1.0.0
 * @requires '../get-tailwind-colors'
 */

import { semanticColorSwatches } from '../get-tailwind-colors'; // Adjust the import path according to your project structure

/**
 * Generates a safelist of classes for PurgeCSS.
 *
 * This function uses the keys of the semantic color definitions from getTailwindSemanticColors
 * to generate a list of classes that should be whitelisted by PurgeCSS.
 *
 * @returns {string[]} An array of class names to be whitelisted.
 */
const generateSafelist = (): string[] => {
  const { semanticColors } = semanticColorSwatches;
  const safelist: string[] = [];

  // Iterate through each category in semanticColors
  for (const [, category] of Object.entries(semanticColors)) {
    // Iterate through each colorKey (e.g., 'canvas', 'canvas-alt', etc.) in the category
    for (const colorKey of Object.keys(category)) {
      // The main class based on 'use'
      safelist.push(`${colorKey}`);

      // The variants: 'canvas-', 'type-', 'stroke-'
      safelist.push(`canvas-${colorKey}`);
      safelist.push(`type-${colorKey}`);
      safelist.push(`stroke-${colorKey}`);

      // Add dark mode variants
      safelist.push(`dark:${colorKey}`);
      safelist.push(`dark:canvas-${colorKey}`);
      safelist.push(`dark:type-${colorKey}`);
      safelist.push(`dark:stroke-${colorKey}`);
    }
  }

  return safelist;
};

export default generateSafelist;
