/**
 * Renders the color palette.
 *
 * @file   This files defines the ColorPaletteStory component.
 * @since  1.0.0
 */

import React from 'react';
import { Meta, ColorPalette, ColorItem } from '@storybook/blocks';
import getTailwindColors from '../../../get-tailwind-colors';

/**
 * Converts a string to title case.
 * @param {string} str - The string to convert.
 * @returns {string} The title-cased string.
 */
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

/**
 * ColorPaletteStory
 *
 * @component
 *
 * @returns {React.Element} Rendered ColorPaletteStory component.
 */
export const ColorPaletteStory = () => {
  const groupedColors = getTailwindColors();

  return (
    <>
      <Meta title="Styling/Colors" />
      <ColorPalette>
        {Object.keys(groupedColors).map((status) => {
          const statusColors = groupedColors[status];
          return (
            <ColorItem
              key={status}
              title={toTitleCase(status)}
              colors={Object.keys(statusColors).reduce((acc, key) => {
                const kebabKey = `${status}-${key}`.toLowerCase();
                acc[kebabKey] = statusColors[key];
                return acc;
              }, {})}
            />
          );
        })}
      </ColorPalette>
    </>
  );
};

export default ColorPaletteStory;
