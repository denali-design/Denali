/**
 * Display a single semantic color.
 *
 * This component provides a box to display a single semantic color
 * with its name and a brief description.
 *
 * @file   This file defines the Swatch component.
 * @since  1.0.0
 */

import React, { useRef, useEffect, useState } from 'react';
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

  const colorDivRef = useRef<HTMLDivElement>(null);
  const [hexColor, setHexColor] = useState('');

  /**
   * Converts RGB color to HEX code and sets it in state.
   *
   * This effect runs when className changes, extracts the background color from
   * the referenced div element, and then converts it to HEX format.
   *
   * @since 1.0.0
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (colorDivRef.current) {
        const computedBgColor = window.getComputedStyle(
          colorDivRef.current
        ).backgroundColor;
        const match = computedBgColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

        if (match) {
          const hex =
            '#' +
            [1, 2, 3]
              .map((i) => parseInt(match[i], 10).toString(16).padStart(2, '0'))
              .join('');

          setHexColor(hex);
        }
      }
    }, 100); // 100ms delay to allow for styles to be applied

    return () => clearTimeout(timeout); // Cleanup
  }, [className]);

  return (
    <div>
      <div
        ref={colorDivRef}
        className={`${className} h-16 rounded border p-4 text-center font-bold`}
      ></div>
      <p className="font-bold capitalize" style={{ marginBottom: '0' }}>
        {toTitleCase(className)}
      </p>
      <p className="uppercase" style={{ margin: '0' }}>
        {hexColor && `${hexColor}`}
      </p>
      <p className="sr-only">{description}</p>
    </div>
  );
};

export default Swatch;
