import type { Meta, StoryObj } from '@storybook/react';

import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Components/Data Entry/DatePicker',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

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
