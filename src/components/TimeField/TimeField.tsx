/**
 * Defines the TimeField component.
 *
 * @file This file defines the TimeField component, meant to be a reusable and accessible time input field.
 * @since 1.0.0
 */

import {
  TimeField as AriaTimeField,
  Label,
  DateInput,
  DateSegment
} from 'react-aria-components';
import type {
  TimeFieldProps as AriaTimeFieldProps,
  TimeValue,
  ValidationResult
} from 'react-aria-components';
import { FieldError, Text } from 'react-aria-components';
import '../../assets/css/App.css';
import '../../assets/css/common-styles/forms/inputs.css';

interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function TimeField<T extends TimeValue>({
  label,
  description,
  errorMessage,
  ...props
}: TimeFieldProps<T>) {
  return (
    <AriaTimeField {...props}>
      <div className="form-group">
        <Label className="form-group__label form-group__label--static">
          {label}
        </Label>
        <DateInput className="has-value-stroke flex">
          {(segment) => (
            <DateSegment className="num-field__segment" segment={segment} />
          )}
        </DateInput>
      </div>
      {description && (
        <Text className="input-description" slot="description">
          {description}
        </Text>
      )}
      <FieldError className="input-description input-description--invalid">
        {errorMessage}
      </FieldError>
    </AriaTimeField>
  );
}

export default TimeField;
