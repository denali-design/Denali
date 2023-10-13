import type { Meta, StoryObj } from '@storybook/react';

import { Stats } from './Stats';

const meta: Meta<typeof Stats> = {
  component: Stats,
  title: 'Components/Stats',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Stats>;

export const Default: Story = {
  args: {
    children: 'Stats'
  }
};
