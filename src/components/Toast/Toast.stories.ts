import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'Components/Data Display/Toast',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    children: 'Toast'
  }
};
