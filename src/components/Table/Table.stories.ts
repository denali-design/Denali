import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Components/Table',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: 'Table'
  }
};
