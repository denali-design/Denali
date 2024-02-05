import type { Meta, StoryObj } from '@storybook/react';

import DateField from './DateField';

const meta: Meta<typeof DateField> = {
  component: DateField,
  title: 'Components/Data Entry/DateField',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof DateField>;

export const Default: Story = {
  args: {
    label: 'Birth Date'
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
