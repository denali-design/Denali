import type { Meta, StoryObj } from '@storybook/react';

import { Empty } from './Empty';

const meta: Meta<typeof Empty> = {
  component: Empty,
  title: 'Components/Empty',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  args: {
    children: 'Empty'
  }
};
