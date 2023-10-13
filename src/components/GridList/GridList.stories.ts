import type { Meta, StoryObj } from '@storybook/react';

import { GridList } from './GridList';

const meta: Meta<typeof GridList> = {
  component: GridList,
  title: 'Components/GridList',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof GridList>;

export const Default: Story = {
  args: {
    children: 'GridList'
  }
};
