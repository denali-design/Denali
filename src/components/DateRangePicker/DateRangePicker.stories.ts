import type { Meta, StoryObj } from '@storybook/react';

import DateRangePicker from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  title: 'Components/Data Entry/DateRangePicker',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  args: {
    label: 'Select a Date'
  }
};

export const DateAndTime: Story = {
  args: {
    label: 'Appointment',
    granularity: 'minute'
  }
};

export const TwentyFourHourClock: Story = {
  args: {
    label: 'Appointment',
    granularity: 'minute',
    hourCycle: 24
  }
};

export const Invalid: Story = {
  args: {
    label: 'Birth Date',
    isInvalid: true,
    errorMessage: 'Enter a valid date.'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Birth Date',
    isDisabled: true
  }
};
