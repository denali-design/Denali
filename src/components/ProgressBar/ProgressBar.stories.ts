// ProgressBar.stories.ts
import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'Components/Data Display/ProgressBar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'This component extends the Adobe React ARIA Progress Bar. For a complete list of props, refer to [Adobe React ARIA Progress Bar Documentation](https://react-spectrum.adobe.com/react-aria/ProgressBar.html#props).'
      }
    },
    layout: 'fullscreen'
  }
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    label: 'Progress',
    value: 42
  },
  parameters: {
    layout: 'padded'
  }
};

export const Indeterminate: Story = {
  args: {
    label: 'Loading...',
    isIndeterminate: true
  },
  parameters: {
    layout: 'padded'
  }
};

export const IndeterminateLabelHidden: Story = {
  args: {
    'aria-label': 'Loading…',
    isIndeterminate: true
  },
  parameters: {
    layout: 'padded'
  }
};

export const CurrencyValue: Story = {
  args: {
    label: 'Budget',
    formatOptions: { style: 'currency', currency: 'JPY' },
    value: 720.8,
    minValue: 0,
    maxValue: 1000
  },
  parameters: {
    layout: 'padded'
  }
};

export const CurrencyValueUSD: Story = {
  args: {
    label: 'Budget',
    formatOptions: { style: 'currency', currency: 'USD' },
    value: 720.8,
    minValue: 0,
    maxValue: 1000
  },
  parameters: {
    layout: 'padded'
  }
};
