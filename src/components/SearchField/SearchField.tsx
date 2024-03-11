/**
 * Defines the SearchField component.
 *
 * @file This file defines the SearchField component, meant to be a reusable and accessible search field.
 * @since 1.0.0
 */
import { useRef, useState } from 'react';
import {
  SearchField as AriaSearchField,
  Label,
  Input
} from 'react-aria-components';
import { Icon } from '../Icon/Icon';
import '../../assets/css/App.css';
import '../../assets/css/common-styles/forms/inputs.css';

import type {
  SearchFieldProps as AriaSearchFieldProps,
  ValidationResult
} from 'react-aria-components';
import { FieldError, Text } from 'react-aria-components';

interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function SearchField({
  label,
  description,
  errorMessage,
  ...props
}: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [hasValue, setHasValue] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setHasValue(value.length > 0);
  };

  const clearInput = () => {
    setInputValue('');
    setHasValue(false);
  };

  return (
    <AriaSearchField {...props}>
      <div className="form-group">
        <Input
          ref={inputRef}
          className="form-group__input has-value-stroke order-2"
          placeholder=""
          value={inputValue}
          onChange={handleInputChange}
        />
        <Label className="form-group__label form-group__label--dynamic">
          {label}
        </Label>
        {hasValue && (
          <button onClick={clearInput} className="form-group__shortcut order-3">
            <Icon
              aria-hidden="true"
              className="no-pointer-events"
              color="default"
              name="icon-control-close-circle"
              size="sm"
            />
          </button>
        )}
      </div>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </AriaSearchField>
  );
}

export default SearchField;
