import type { Meta, StoryObj } from '@storybook/react';

import FileTrigger from './FileTrigger';

const meta: Meta<typeof FileTrigger> = {
  component: FileTrigger,
  title: 'Components/Data Entry/FileTrigger',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof FileTrigger>;

export const Default: Story = {
  args: {
    children: 'FileTrigger'
  }
};
