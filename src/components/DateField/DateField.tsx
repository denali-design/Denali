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
import './DateField.css';

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
        <Label className="date-field__label">{label}</Label>
        <DateInput className="date-input">
          {(segment) => (
            <DateSegment className="date-field__segment" segment={segment} />
          )}
        </DateInput>
        {description && <Text slot="description">{description}</Text>}
      </div>
      <FieldError>{errorMessage}</FieldError>
    </AriaDateField>
  );
}

export default DateField;
