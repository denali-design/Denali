import type { Meta, StoryObj } from '@storybook/react';

import RangeCalendar from './RangeCalendar';

const meta: Meta<typeof RangeCalendar> = {
  component: RangeCalendar,
  title: 'Components/Data Entry/RangeCalendar',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof RangeCalendar>;

export const Default: Story = {
  args: {
    children: 'RangeCalendar'
  }
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Calendar Disabled',
    isDisabled: true
  }
};
