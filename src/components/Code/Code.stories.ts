import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';

const meta: Meta<typeof Code> = {
  component: Code,
  title: 'Components/Code',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    children: 'Code'
  }
};
