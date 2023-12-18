import type { Meta, StoryObj } from '@storybook/react';
import Calendar from './Calendar';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Components/Data Entry/Calendar',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    'aria-label': 'Select a Date'
  }
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Calendar Disabled',
    isDisabled: true
  }
};
