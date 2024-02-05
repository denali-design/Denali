import type { Meta, StoryObj } from '@storybook/react';

import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Components/Data Display/Dialog',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    children: 'Dialog'
  }
};
