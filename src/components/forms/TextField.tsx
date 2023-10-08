/**
 * TextField Component
 *
 * Provides a styled and customizable text field component.
 * Supports different input modes and optional icon display.
 *
 * @file   This file defines the TextField component.
 * @since  1.0.0
 */

import { useEffect, useRef } from 'react';
import {
  TextField as AriaTextField,
  Label,
  Input
} from 'react-aria-components';
import '../../App.css';

/**
 * @typedef {Object} TextFieldProps
 *
 * @property {string} label - Label for the text field.
 * @property {string} [placeholder] - Placeholder text for the text field.
 * @property {('none'|'text'|'tel'|'url'|'email'|'numeric'|'decimal'|'search')} [inputMode] - The input mode of the text field.
 */
export type TextFieldProps = {
  label: string;
  placeholder?: string;
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
};

/**
 * Renders a text field with optional icon based on input mode.
 *
 * @param {TextFieldProps} props - Properties for the text field.
 * @property {string} [props.label] - Specifies the label for the text field.
 * @property {string} [props.placeholder] - Specifies the placeholder for the text field.
 * @property {string} [props.inputMode] - Specifies the input mode for the text field.
 */
function TextField({
  label = 'Default Label',
  placeholder = 'Type here...',
  inputMode = 'text'
}: TextFieldProps) {
  /**
   * Determines the icon source and alt text based on the input mode.
   */
  let iconSrc: string | null = null;
  let iconAlt: string | null = null;

  if (inputMode === 'search') {
    iconSrc = 'icons/search.svg';
    iconAlt = 'A magnifying glass';
  }

  /**
   * A reference to the input element for programmatically focusing on it.
   */
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    /**
     * Handles the keydown event to focus the input when 'cmd+k' or 'alt+k' is pressed.
     *
     * @param {KeyboardEvent} event - The keydown event.
     */
    function handleKeyDown(event: KeyboardEvent) {
      if (inputMode !== 'search') {
        return;
      }

      if (
        (event.metaKey && event.key === 'k') ||
        (event.altKey && event.key === 'k')
      ) {
        inputRef.current?.focus();
      }
    }

    if (inputMode === 'search') {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputMode]);

  return (
    <AriaTextField className="border-primary relative flex w-full items-center rounded-lg border bg-white px-2 py-1.75 text-black focus-within:outline focus-within:outline-offset-2 focus-within:outline-brand-primary">
      {iconSrc && iconAlt && (
        <img
          src={iconSrc}
          alt={iconAlt}
          className="fill-black"
          width={16}
          height={16}
        />
      )}
      <Label className="sr-only">{label}</Label>
      <Input
        className="ml-2 block w-full placeholder-black focus:outline-none"
        ref={inputRef}
        placeholder={placeholder}
        inputMode={inputMode}
      />
      {inputMode === 'search' && <p> &#8984;K </p>}
    </AriaTextField>
  );
}

export default TextField;
export { TextField };
