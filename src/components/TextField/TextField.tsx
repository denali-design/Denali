import { useRef, useState } from 'react';
import type {
  TextFieldProps as AriaTextFieldProps,
  ValidationResult
} from 'react-aria-components';
import {
  TextField as AriaTextField,
  FieldError,
  Text,
  Label,
  Input
} from 'react-aria-components';
import { Icon } from '../Icon/Icon';
import '../../assets/css/App.css';
import '../../assets/css/common-styles/forms/inputs.css';

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function TextField({
  label,
  description,
  errorMessage,
  ...props
}: TextFieldProps) {
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
    <AriaTextField className="w-full" {...props}>
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
      {description && (
        <Text className="input-description" slot="description">
          {description}
        </Text>
      )}
      <FieldError className="input-description input-description--invalid">
        {errorMessage}
      </FieldError>
    </AriaTextField>
  );
}

export default TextField;
