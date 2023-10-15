/**
 * Summary. Display a grid of semantic colors.
 *
 * Description. This component provides a grid to display all semantic colors by category,
 * along with their names and brief descriptions.
 *
 * @file   This file defines the SwatchBook component.
 * @since  1.0.0
 */

import React from 'react';
import Swatch from './Swatch';
import Heading from '../components/Heading/Heading';
import { semanticColorSwatches } from '../../get-tailwind-colors';
import '../App.css';

const SwatchBook: React.FC = () => {
  /**
   * Handles converting string to title case.
   *
   * @param {string} str - The string to convert.
   * @return {string} - The string in title case.
   */
  const toTitleCase = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex flex-col gap-12">
      {Object.entries(semanticColorSwatches.semanticColors).map(
        ([category, colors]) => (
          <div key={category} className="flex flex-col gap-4">
            <Heading fontWeight="bold" level={2} styleLevel={4}>
              {toTitleCase(category)}
            </Heading>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {Object.keys(colors).map((colorKey) => (
                <Swatch
                  key={colorKey}
                  className={colorKey}
                  description={colors[colorKey]?.desc || ''}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SwatchBook;
