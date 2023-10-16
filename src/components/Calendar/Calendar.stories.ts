// Calendar.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Components/Data Entry/Calendar',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    children: 'Calendar'
  }
};