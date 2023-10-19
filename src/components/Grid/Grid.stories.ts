/**
 * Grid Stories
 *
 * @file   This file defines stories for the Grid component.
 * @since  1.0.0
 */

import { Meta, StoryObj } from '@storybook/react';
import Grid, { GridProps } from './Grid';
export default {
  component: Grid,
  title: 'Components/Layout/Grid',
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      description: 'Defines the number of columns in the grid.'
    },
    gap: {
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6]
      },
      description: 'Defines the gap between grid items.'
    }
  }
} as Meta;

type Story = StoryObj<GridProps>;

export const Default: Story = {
  args: {
    children: ['Grid Item'],
    cols: 1, // Optional prop with default value
    gap: 4 // Optional prop with default value
  }
};

export const NoGap: Story = {
  args: {
    children: ['Grid Item'],
    cols: 4,
    gap: 0
  }
};

export const WideGap: Story = {
  args: {
    children: ['Grid Item'],
    cols: 4,
    gap: 4
  }
};
