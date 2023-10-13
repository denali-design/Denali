import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Components/Slider',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    children: 'Slider'
  }
};
