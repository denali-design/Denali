import { useRef, useState } from 'react';
import {
  TextField as AriaTextField,
  FieldError,
  Label,
  Input
} from 'react-aria-components';
import useFocusType from '../../hooks/useFocusTypes.ts';
import { Icon } from '../Icon/Icon';
import '../../assets/css/App.css';
import './TextField.css';

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
  const { isTabFocused, isClickFocused, handleFocus, handleBlur } =
    useFocusType();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setHasValue(value.length > 0);
  };

  const clearInput = () => {
    setInputValue('');
    setHasValue(false);
  };

  let formGroupClass = 'form-group';
  if (hasValue && !isTabFocused && !isClickFocused) {
    formGroupClass += ' form-group--has-value';
  }
  if (isTabFocused) {
    formGroupClass += ' form-group--is-tab-focused';
  }
  if (isClickFocused) {
    formGroupClass += ' form-group--is-click-focused';
  }

  return (
    <AriaTextField className="w-full">
      <div className={formGroupClass}>
        <Input
          ref={inputRef}
          className="form-group__input"
          placeholder=" "
          type={type}
          inputMode={inputMode}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Label className="form-group__label">{label}</Label>
        {hasValue && (
          <button onClick={clearInput} className="form-group__shortcut">
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
