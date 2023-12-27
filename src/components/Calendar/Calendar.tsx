/**
 * Defines the Calendar component.
 *
 * @file This file defines the Calendar component, meant to be a reusable and accessible calendar.
 * @since 1.0.0
 */
import {
  Button,
  Calendar as AriaCalendar,
  CalendarCell,
  CalendarGrid,
  Heading
} from 'react-aria-components';
import type {
  CalendarProps as AriaCalendarProps,
  DateValue
} from 'react-aria-components';
import { Text } from 'react-aria-components';
import Icon from '../Icon/Icon';
import '../../assets/css/App.css';
import '../../assets/css/common-styles/forms/dates-and-times.css';

interface CalendarProps<T extends DateValue> extends AriaCalendarProps<T> {
  errorMessage?: string;
  'aria-label'?: string;
}

function Calendar<T extends DateValue>({
  errorMessage,
  ...props
}: CalendarProps<T>) {
  return (
    <AriaCalendar className="calendar" {...props}>
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
        {(date) => <CalendarCell className="calendar__cell" date={date} />}
      </CalendarGrid>
      {errorMessage && (
        <Text className="calendar__error-message" slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </AriaCalendar>
  );
}

export default Calendar;
