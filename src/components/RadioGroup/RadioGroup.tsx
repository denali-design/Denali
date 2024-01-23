/**
 * @file   This file defines the RadioGroup composite component.
 * @since  1.0.0
 */

import { RadioGroup as AriaRadioGroup, Label } from 'react-aria-components';
import { Radio } from 'react-aria-components';
import type {
  RadioGroupProps as AriaRadioGroupProps,
  ValidationResult
} from 'react-aria-components';
import { Text, FieldError } from 'react-aria-components';
import '../../assets/css/App.css';
import './RadioGroup.css';

interface RadioProps {
  id: string;
  label: string;
  value?: string;
  description?: string;
}

export interface RadioGroupProps extends AriaRadioGroupProps {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  radios?: RadioProps[];
}

/**
 * Handles rendering a group of radio buttons with optional labels, descriptions, and error messages.
 *
 * @param {RadioGroupProps} props - Properties passed to the component.
 * @returns {JSX.Element} The rendered RadioGroup component.
 */
function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  radios,
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup {...props}>
      <Label className="radio-group__label">{label}</Label>
      {description && (
        <Text className="block text-sm" slot="description">
          {description}
        </Text>
      )}
      {/* Render radio buttons from the array if provided */}
      {radios &&
        radios.map((radio) => (
          <>
            <Radio
              key={radio.id}
              id={radio.id}
              value={radio.value || radio.id} // Use value if provided, otherwise fallback to id
            >
              {radio.label}
              {radio.description && (
                <p className="radio-group__radio-description">
                  {radio.description}
                </p>
              )}
            </Radio>
          </>
        ))}
      {/* If radio buttons are provided as children */}
      {children}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </AriaRadioGroup>
  );
}

export default RadioGroup;
