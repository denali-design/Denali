/**
 * Summary. Display a single semantic color.
 *
 * Description. This component provides a box to display a single semantic color
 * with its name and a brief description.
 *
 * @file   This file defines the Swatch component.
 * @since  1.0.0
 */

import React from 'react';
import '../App.css';

interface SwatchProps {
  /**
   * The CSS class name for the color.
   */
  className: string;

  /**
   * A brief description of when to use the color.
   */
  description: string;
}

const Swatch: React.FC<SwatchProps> = ({ className, description }) => {
  /**
   * Handles converting string to title case.
   *
   * @param {string} str - The string to convert.
   * @return {string} - The string in title case.
   */
  const toTitleCase = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className={`${className} rounded p-4`}>
        <p>{toTitleCase(className)}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Swatch;
