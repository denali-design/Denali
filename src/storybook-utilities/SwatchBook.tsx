/**
 * Summary. Display a grid of semantic colors.
 *
 * Description. This component provides a grid to display all semantic colors by category,
 * along with their names and brief descriptions.
 *
 * @file   This file defines the SwatchBook component.
 * @since  1.0.0
 */

import React, { useState } from 'react';
import Swatch from './Swatch';
import Heading from '../components/Heading/Heading';
import { Icon } from '../components/Icon/Icon';
import ToggleButton from '../components/ToggleButton/ToggleButton';
import { semanticColorSwatches } from '../../get-tailwind-colors';
import '../App.css';

const SwatchBook: React.FC = () => {
  const [isDark, setIsDark] = useState(false); // Initialize with dark mode active

  /**
   * Toggles dark mode on and off.
   *
   * @param {boolean} isSelected - The current selected state of the toggle button.
   */
  const handleDarkModeToggle = (isSelected: boolean) => {
    console.log('handleDarkModeToggle triggered with:', isSelected);
    setIsDark(isSelected);
  };

  console.log('Current isDark state:', isDark);

  /**
   * Handles converting a string to title case.
   *
   * @param {string} str - The string to convert.
   * @return {string} - The string in title case.
   */
  const toTitleCase = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <section className={isDark ? 'dark' : ''}>
      <div className="canvas stroke-alt flex flex-col gap-12 rounded border p-6">
        <div className="flex">
          <ToggleButton
            onChange={handleDarkModeToggle}
            toggleTextUnselected={
              <Icon
                aria-hidden="true"
                color="vivid"
                name="icon-technology-moon-dark"
                size="md"
              />
            }
            toggleTextSelected={
              <Icon
                aria-hidden="true"
                color="vivid"
                name="icon-technology-sunlight-bright"
                size="md"
              />
            }
            toggleType="button"
            label="Toggle Light/Dark Mode"
          />
        </div>
        {Object.entries(semanticColorSwatches.semanticColors).map(
          ([category, colors]) => (
            <div key={category} className="flex flex-col gap-4">
              <Heading className="type" level={3}>
                {toTitleCase(category)}
              </Heading>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
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
    </section>
  );
};

export default SwatchBook;
