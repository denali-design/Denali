/**
 * Defines the RangeCalendar component.
 *
 * @file This file defines the RangeCalendar component, intended for selecting a range of dates within a calendar view.
 * @since 1.0.0
 */

import {
  Button,
  RangeCalendar as AriaRangeCalendar,
  CalendarCell,
  CalendarGrid,
  Heading
} from 'react-aria-components';
import type {
  RangeCalendarProps as AriaRangeCalendarProps,
  DateValue
} from 'react-aria-components';
import { Text } from 'react-aria-components';
import Icon from '../Icon/Icon';
import '../../assets/css/App.css';
import '../../assets/css/common-styles/forms/dates-and-times.css';

interface CalendarProps<T extends DateValue> extends AriaRangeCalendarProps<T> {
  errorMessage?: string;
  'aria-label'?: string;
}

function RangeCalendar<T extends DateValue>({
  errorMessage,
  ...props
}: CalendarProps<T>) {
  return (
    <AriaRangeCalendar className="calendar" {...props}>
      <header className="calendar__header">
        <Button slot="previous">
          <Icon color="default" name="icon-action-arrowhead-left" size="md" />
        </Button>
        <Heading className="calendar__heading" />
        <Button slot="next">
          <Icon color="default" name="icon-action-arrowhead-right" size="md" />
        </Button>
      </header>
      <CalendarGrid className="calendar__grid">
        {(date) => (
          <CalendarCell
            className="calendar__cell calendar__cell--range"
            date={date}
          />
        )}
      </CalendarGrid>
      {errorMessage && (
        <Text className="calendar__error-message" slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </AriaRangeCalendar>
  );
}

export default RangeCalendar;
