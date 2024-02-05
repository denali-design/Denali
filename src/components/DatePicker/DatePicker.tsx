/**
 * Defines the DatePicker component.
 *
 * @file This file defines the DatePicker component, intended for picking dates.
 * @since 1.0.0
 */
import {
  Button,
  DateInput,
  DatePicker as AriaDatePicker,
  DateSegment,
  Dialog,
  Group,
  Label,
  Popover
} from 'react-aria-components';
import type {
  DatePickerProps as AriaDatePickerProps,
  DateValue,
  ValidationResult
} from 'react-aria-components';
import { FieldError, Text } from 'react-aria-components';
import Calendar from '../Calendar/Calendar';
import Icon from '../Icon/Icon';

interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  isDisabled,
  ...props
}: DatePickerProps<T>) {
  return (
    <AriaDatePicker {...props} isDisabled={isDisabled}>
      <div className="form-group">
        <Label className="form-group__label form-group__label--static">
          {label}
        </Label>
        <Group className="has-value-stroke flex w-full justify-between">
          <DateInput className="flex">
            {(segment) => (
              <DateSegment className="num-field__segment" segment={segment} />
            )}
          </DateInput>
          <Button isDisabled={isDisabled}>
            <Icon color="default" name="icon-action-arrowhead-down" size="md" />
          </Button>
        </Group>
      </div>
      {description && (
        <Text className="input-description" slot="description">
          {description}
        </Text>
      )}
      <FieldError className="input-description input-description--invalid">
        {errorMessage}
      </FieldError>
      <Popover>
        <Dialog>
          <Calendar />
        </Dialog>
      </Popover>
    </AriaDatePicker>
  );
}

export default DatePicker;
