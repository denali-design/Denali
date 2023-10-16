import type { Meta, StoryObj } from '@storybook/react';

import { ComboBox } from './ComboBox';

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  title: 'Components/Data Entry/ComboBox',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof ComboBox>;

export const Default: Story = {
  args: {
    children: 'ComboBox'
  }
};
