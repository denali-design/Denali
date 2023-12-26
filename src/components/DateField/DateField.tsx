/**
 * Defines the DateField component.
 *
 * @file This file defines the DateField component, intended for date input.
 * @since 1.0.0
 */
import {
  DateField as AriaDateField,
  Label,
  DateInput,
  DateSegment
} from 'react-aria-components';
import type {
  DateFieldProps as AriaDateFieldProps,
  DateValue,
  ValidationResult
} from 'react-aria-components';
import { FieldError, Text } from 'react-aria-components';
import '../../assets/css/App.css';
import '../../assets/css/common-styles/forms/inputs.css';

interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  return (
    <AriaDateField {...props}>
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
    </AriaDateField>
  );
}

export default DateField;
