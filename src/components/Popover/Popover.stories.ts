import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'Components/Popover',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    children: 'Popover'
  }
};
