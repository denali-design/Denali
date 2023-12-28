import type { Meta, StoryObj } from '@storybook/react';
import { Time, parseZonedDateTime } from '@internationalized/date';
import TimeField from './TimeField';

const meta: Meta<typeof TimeField> = {
  component: TimeField,
  title: 'Components/Data Entry/TimeField',
  tags: ['autodocs']
};
export default meta;

const defaultValue = new Time(8, 30);
const minValue = new Time(11, 30);
const maxValue = new Time(15, 30);
const defaultValueTimezone = parseZonedDateTime(
  '2024-04-20T16:20[America/Los_Angeles]'
);

type Story = StoryObj<typeof TimeField>;

export const Default: Story = {
  args: {
    label: 'Appointment Time'
  }
};

export const DefaultValue: Story = {
  args: {
    label: 'Appointment Time',
    defaultValue: defaultValue
  }
};

export const DefaultValueWithTimezone: Story = {
  args: {
    label: 'Appointment Time',
    defaultValue: defaultValueTimezone
  }
};

export const MinAndMaxTimes: Story = {
  args: {
    label: 'Appointment Time',
    minValue: minValue,
    maxValue: maxValue,
    description: 'Choose a time between 11:30 a.m. and 3:30 p.m.'
  }
};

export const WithSeconds: Story = {
  args: {
    label: 'Appointment Time',
    granularity: 'second'
  }
};

export const HoursOnly: Story = {
  args: {
    label: 'Appointment Time',
    granularity: 'hour'
  }
};

export const TwentyFourHourClock: Story = {
  args: {
    label: 'Appointment Time',
    hourCycle: 24
  }
};

export const Invalid: Story = {
  args: {
    label: 'Appointment Time',
    isInvalid: true,
    errorMessage: 'Enter a valid time.'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Appointment Time',
    isDisabled: true
  }
};
