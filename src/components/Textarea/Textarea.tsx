/**
 * Defines the Textarea component.
 *
 * @file This file defines the Textarea component, designed for multiline text input.
 * @since 1.0.0
 */
import {
  TextField,
  Label,
  TextArea as AriaTextArea
} from 'react-aria-components';
import type { TextFieldProps, ValidationResult } from 'react-aria-components';
import { FieldError, Text } from 'react-aria-components';
import '../../assets/css/App.css';
import '../../assets/css/common-styles/forms/inputs.css';

interface TextAreaProps extends TextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function TextArea({
  label,
  description,
  errorMessage,
  ...props
}: TextAreaProps) {
  return (
    <TextField className="w-full" {...props}>
      <div className="form-group form-group--text-area">
        <AriaTextArea
          className="form-group__input form-group__input--text-area has-value-stroke order-2 resize-none"
          placeholder=""
        />
        <Label className="form-group__label form-group__label--text-area order-1">
          {label}
        </Label>
      </div>
      {description && (
        <Text className="input-description" slot="description">
          {description}
        </Text>
      )}
      <FieldError className="input-description input-description--invalid">
        {errorMessage}
      </FieldError>
    </TextField>
  );
}

export default TextArea;
