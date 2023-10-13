import type { Meta, StoryObj } from '@storybook/react';

import { DateRangePicker } from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  title: 'Components/DateRangePicker',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  args: {
    children: 'DateRangePicker'
  }
};
