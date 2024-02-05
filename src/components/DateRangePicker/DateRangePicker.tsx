/**
 * Defines the DateRangePicker component.
 *
 * @file This file defines the DateRangePicker component, designed for selecting a range of dates.
 * @since 1.0.0
 */

import {
  Button,
  DateInput,
  DateRangePicker as AriaDateRangePicker,
  DateSegment,
  Dialog,
  Group,
  Label,
  Popover
} from 'react-aria-components';
import type {
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
  ValidationResult
} from 'react-aria-components';
import { FieldError, Text } from 'react-aria-components';
import RangeCalendar from '../RangeCalendar/RangeCalendar';
import Icon from '../Icon/Icon';

interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  isDisabled,
  ...props
}: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker {...props} isDisabled={isDisabled}>
      <div className="form-group">
        <Label className="form-group__label form-group__label--static">
          {label}
        </Label>
        <Group className="has-value-stroke flex w-full justify-between">
          <div className="flex gap-2">
            <DateInput className="flex" slot="start">
              {(segment) => (
                <DateSegment className="num-field__segment" segment={segment} />
              )}
            </DateInput>
            <span aria-hidden="true">–</span>
            <DateInput className="flex" slot="end">
              {(segment) => (
                <DateSegment className="num-field__segment" segment={segment} />
              )}
            </DateInput>
          </div>
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
          <RangeCalendar />
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  );
}

export default DateRangePicker;
