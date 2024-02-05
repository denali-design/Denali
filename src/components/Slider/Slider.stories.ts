import type { Meta, StoryObj } from '@storybook/react';

import Slider from './Slider';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Components/Data Entry/Slider',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: 'Opacity'
  }
};

export const MinMaxValues: Story = {
  args: {
    label: 'Opacity',
    minValue: 60,
    maxValue: 360
  }
};

export const Currency: Story = {
  args: {
    label: 'Amount',
    formatOptions: { style: 'currency', currency: 'USD' },
    minValue: 1,
    maxValue: 5,
    step: 0.01,
    defaultValue: 3
  }
};

export const NoLabel: Story = {
  args: {
    'aria-label': 'Opacity'
  }
};

export const RangeSlider: Story = {
  args: {
    label: 'Range',
    thumbLabels: ['start', 'end'],
    defaultValue: [200, 800],
    minValue: 100,
    maxValue: 1000
  }
};

export const RangeSliderMultiplePoints: Story = {
  args: {
    label: 'Range',
    thumbLabels: ['start', 'mid', 'end'],
    defaultValue: [30, 50, 60],
    minValue: 0,
    maxValue: 100
  }
};

export const Vertical: Story = {
  args: {
    label: 'Opacity',
    minValue: 0,
    maxValue: 100,
    orientation: 'vertical'
  }
};

export const VerticalRange: Story = {
  args: {
    label: 'Opacity',
    thumbLabels: ['start', 'end'],
    defaultValue: [30, 60],
    orientation: 'vertical'
  }
};

export const VerticalNoLabel: Story = {
  args: {
    'aria-label': 'Opacity',
    orientation: 'vertical'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Opacity',
    isDisabled: true
  }
};
