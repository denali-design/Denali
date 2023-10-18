import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: 'Components/Layout/Flex',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    children: 'Flex'
  }
};
