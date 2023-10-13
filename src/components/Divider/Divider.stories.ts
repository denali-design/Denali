import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Components/Divider',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    children: 'Divider'
  }
};
