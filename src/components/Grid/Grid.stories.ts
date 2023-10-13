import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'Components/Grid',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    children: 'Grid'
  }
};
