/**
 * Flex Stories
 *
 * Defines stories for the Flex component for better visualization and testing.
 *
 * @file   This file defines stories for the Flex component.
 * @since  1.0.0
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Flex, FlexProps } from './Flex';

export default {
  component: Flex,
  title: 'Components/Layout/Flex',
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['start', 'center', 'end', 'baseline', 'stretch']
      },
      description: 'Defines the align-items property.'
    },
    justify: {
      control: {
        type: 'select',
        options: ['start', 'center', 'end', 'between', 'around', 'evenly']
      },
      description: 'Defines the justify-content property.'
    },
    direction: {
      control: {
        type: 'select',
        options: ['row', 'row-reverse', 'col', 'col-reverse']
      },
      description: 'Defines the flex-direction property.'
    },
    gap: {
      control: {
        type: 'select',
        options: [
          'space-none',
          'space-1',
          'space-2',
          'space-3',
          'space-4',
          'space-5',
          'space-6',
          'space-7'
        ]
      },
      description: 'Defines the gap between flex items.'
    }
  }
} as Meta;

type Story = StoryObj<FlexProps>;

export const Default: Story = {
  args: {
    children: ['Flex Item'],
    align: 'start', // Optional prop with default value
    justify: 'center', // Optional prop with default value
    direction: 'row', // Optional prop with default value
    gap: 'space-1' // Optional prop with default value
  }
};

export const CenterAlign: Story = {
  args: {
    children: ['Flex Item'],
    align: 'center',
    justify: 'center',
    direction: 'row',
    gap: 'space-1'
  }
};

export const SpaceBetween: Story = {
  args: {
    children: ['Flex Item'],
    align: 'start',
    justify: 'between',
    direction: 'row',
    gap: 'space-1'
  }
};

export const SpaceAround: Story = {
  args: {
    children: ['Flex Item'],
    align: 'start',
    justify: 'around',
    direction: 'row',
    gap: 'space-1'
  }
};
