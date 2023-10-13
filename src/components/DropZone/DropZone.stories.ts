import type { Meta, StoryObj } from '@storybook/react';

import { DropZone } from './DropZone';

const meta: Meta<typeof DropZone> = {
  component: DropZone,
  title: 'Components/DropZone',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof DropZone>;

export const Default: Story = {
  args: {
    children: 'DropZone'
  }
};
