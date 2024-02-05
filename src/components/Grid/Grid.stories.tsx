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
      description:
        'The number of columns in the grid for different screen sizes.',
      table: {
        type: {
          summary: 'object',
          detail: `{
            default: number, // Mandatory default columns
            sm?: number,     // Optional, 1-12 range
            md?: number,     // Optional, 1-12 range
            lg?: number,     // Optional, 1-12 range
            xl?: number      // Optional, 1-12 range
          }`
        }
      },
      control: { type: 'object' }
    },
    gap: {
      description:
        'The size of the gap between grid items for different screen sizes.',
      table: {
        type: {
          summary: 'object',
          detail: `{
            default: number, // Mandatory default gap
            sm?: number,     // Optional, 0-6 range
            md?: number,     // Optional, 0-6 range
            lg?: number,     // Optional, 0-6 range
            xl?: number      // Optional, 0-6 range
          }`
        }
      },
      control: { type: 'object' }
    }
  }
} as Meta<GridProps>;

type Story = StoryObj<GridProps>;

export const Default: Story = {
  args: {
    children: [
      <div key="1" className="rounded p-2 canvas-secondary type-on-vivid">
        Grid Item 1
      </div>,
      <div key="2" className="rounded p-2 canvas-secondary type-on-vivid">
        Grid Item 2
      </div>,
      <div key="3" className="rounded p-2 canvas-secondary type-on-vivid">
        Grid Item 3
      </div>
    ],
    cols: { default: 3, md: 6, xl: 12 },
    gap: { default: 4, md: 2, xl: 1 }
  }
};

export const NoGap: Story = {
  args: {
    children: [
      <div key="1" className="rounded p-2 canvas-secondary type-on-vivid">
        Grid Item 1
      </div>,
      <div key="2" className="rounded p-2 canvas-secondary type-on-vivid">
        Grid Item 2
      </div>,
      <div key="3" className="rounded p-2 canvas-secondary type-on-vivid">
        Grid Item 3
      </div>
    ],
    cols: { default: 3, md: 6, xl: 12 },
    gap: { default: 0 }
  }
};

export const WideGap: Story = {
  args: {
    children: [
      <div key="1" className="rounded p-2 canvas-secondary type-on-vivid">
        Grid Item 1
      </div>,
      <div key="2" className="rounded p-2 canvas-secondary type-on-vivid">
        Grid Item 2
      </div>,
      <div key="3" className="rounded p-2 canvas-secondary type-on-vivid">
        Grid Item 3
      </div>
    ],
    cols: { default: 3, md: 6, xl: 12 },
    gap: { default: 4, md: 4, xl: 6 }
  }
};
