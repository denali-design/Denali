import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Components/Navigation/Dropdown',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    children: 'Dropdown'
  }
};
