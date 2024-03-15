import type { Meta, StoryObj } from '@storybook/react';

import GridList from './GridList';
import GridListItem from './GridListItem';

const meta: Meta<typeof GridList> = {
  component: GridList,
  title: 'Components/Data Entry/GridList',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof GridList>;

export const Default: Story = {
  args: {
    selectionMode: 'multiple',
    children: [
      <>
        <GridListItem key="GridListItem">Chocolate</GridListItem>
        <GridListItem key="GridListItem">Mint</GridListItem>
        <GridListItem key="GridListItem">Strawberry</GridListItem>
        <GridListItem key="GridListItem">Vanilla</GridListItem>
      </>
    ]
  }
};
