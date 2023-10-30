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
import { Icon } from '../Icon/Icon';
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
 * @returns {JSX.Element} The rendered TextField component.
 */
function TextField({
  label = 'Default Label',
  placeholder = 'Type here...',
  inputMode = 'text'
}: TextFieldProps) {
  let iconName: string | null = null;

  if (inputMode === 'search') {
    iconName = 'icon-control-search';
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
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
    <AriaTextField className="border-primary focus-within:outline-brand-primary relative flex w-full items-center rounded-lg border bg-white px-2 py-1.75 text-black focus-within:outline focus-within:outline-offset-2">
      {iconName && (
        <Icon
          aria-hidden="true"
          className="no-pointer-events"
          color="default"
          name={iconName}
          size="md"
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
