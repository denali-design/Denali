import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Components/Navigation/Tabs',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    children: 'Tabs'
  }
};
