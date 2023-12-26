import { useRef, useState } from 'react';
import {
  TextField as AriaTextField,
  FieldError,
  Label,
  Input
} from 'react-aria-components';
import { Icon } from '../Icon/Icon';
import '../../assets/css/App.css';
import '../../assets/css/common-styles/forms/inputs.css';

export type TextFieldProps = {
  label: string;
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
  type?: 'text' | 'search' | 'url' | 'tel' | 'email' | 'password';
};

function TextField({
  label = 'Default Label',
  inputMode = 'text',
  type = 'text'
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
    <AriaTextField className="w-full">
      <div className="form-group">
        <Input
          ref={inputRef}
          className="form-group__input has-value-stroke order-2"
          placeholder=" "
          type={type}
          inputMode={inputMode}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Label className="form-group__label form-group__label--dynamic">
          {label}
        </Label>
        {hasValue && (
          <button
            onClick={clearInput}
            className="form-group__shortcut has-value-stroke order-3"
          >
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
      <FieldError />
    </AriaTextField>
  );
}

export default TextField;
export { TextField };
