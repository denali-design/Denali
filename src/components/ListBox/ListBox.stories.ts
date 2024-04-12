import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  component: ListBox,
  title: 'Components/Data Display/ListBox',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof ListBox>;

export const Default: Story = {
  args: {
    children: 'ListBox'
  }
};
