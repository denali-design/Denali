/**
 * @file   This file defines the ToggleButton component.
 * @since  1.0.0
 */
import { useState } from 'react';
import {
  ToggleButton as AriaToggleButton,
  ToggleButtonProps as AriaToggleButtonProps
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import '../../assets/css/App.css';

/**
 * Defines the properties for the ToggleButton component.
 *
 * @interface ToggleButtonProps
 */
export interface ToggleButtonProps extends AriaToggleButtonProps {
  toggleType: 'switch' | 'button';
  label: string;
  toggleTextSelected?: React.ReactNode;
  toggleTextUnselected?: React.ReactNode;
}

/**
 * Defines the base and variant styles for the ToggleButton component.
 *
 * @constant toggleButton
 */
const toggleButton = tv({
  base: 'transition duration-200 ease-in-out',
  variants: {
    toggleType: {
      switch: {
        base: 'relative flex w-12 items-center justify-start rounded-full border-2 border-gray-400 bg-gray-400',
        toggleStates: {
          selected: 'border-green-500 bg-green-500',
          unselected: 'bg-blue-900'
        }
      },
      button: {
        base: 'rounded px-4 py-2 type-on-vivid',
        toggleStates: {
          selected: 'canvas-secondary',
          unselected: 'canvas-secondary'
        }
      }
    }
  }
});

/**
 * Creates a toggle button with extended styling and accessibility features.
 *
 * @param {ToggleButtonProps} props - The properties of the ToggleButton component.
 * @returns {JSX.Element} The ToggleButton component.
 */
function ToggleButton({
  toggleType,
  toggleTextSelected,
  toggleTextUnselected,
  label,
  onChange, // Extract onChange from props
  ...ariaProps
}: ToggleButtonProps) {
  const [isSelected, setSelected] = useState(false);

  /**
   * Handles the toggle state change.
   *
   * @param {boolean} newIsSelected - The new selected state of the toggle button.
   */
  const handleToggleChange = (newIsSelected: boolean) => {
    setSelected(newIsSelected); // Update local state

    // Call external onChange handler if provided
    if (onChange) {
      onChange(newIsSelected);
    }
  };

  const circlePosition = isSelected ? 'translate-x-6' : 'translate-x-0';
  const baseStyle = toggleButton.variants.toggleType[toggleType].base;
  const toggleStateVariant = isSelected
    ? toggleButton.variants.toggleType[toggleType].toggleStates.selected
    : toggleButton.variants.toggleType[toggleType].toggleStates.unselected;

  return (
    <AriaToggleButton
      isSelected={isSelected}
      {...ariaProps}
      {...{ label }}
      onChange={handleToggleChange}
      className={`${toggleButton.base} ${baseStyle} ${toggleStateVariant}`}
      aria-label={label}
    >
      {toggleType === 'switch' ? (
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition duration-200 ease-in-out ${circlePosition}`}
        ></span>
      ) : isSelected ? (
        toggleTextSelected
      ) : (
        toggleTextUnselected
      )}
    </AriaToggleButton>
  );
}

export default ToggleButton;
export { ToggleButton };
