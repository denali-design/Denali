// Divider.stories.ts
import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Components/Layout/Divider',
  tags: ['autodocs'],
  argTypes: {
    strokeColor: {
      control: {
        type: 'select',
        options: [
          'default',
          'alt',
          'success',
          'success-vivid',
          'warning',
          'warning-vivid',
          'info',
          'info-vivid',
          'danger',
          'danger-vivid',
          'primary',
          'secondary'
        ]
      }
    },
    labelColor: {
      control: {
        type: 'select',
        options: [
          'default',
          'alt',
          'success',
          'warning',
          'info',
          'danger',
          'primary',
          'secondary'
        ]
      }
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    strokeColor: undefined
  }
};

export const WithLabel: Story = {
  args: {
    label: 'Section Title',
    strokeColor: 'danger-vivid',
    labelColor: 'danger'
  }
};

export const WithIcon: Story = {
  args: {
    icon: 'icon-control-heart-like',
    strokeColor: 'primary',
    labelColor: 'primary'
  }
};

export const JustifyStart: Story = {
  args: {
    strokeColor: 'secondary',
    label: 'Justify Start',
    justify: 'start'
  }
};

export const JustifyEnd: Story = {
  args: {
    strokeColor: 'secondary',
    label: 'Justify End',
    justify: 'end'
  }
};
