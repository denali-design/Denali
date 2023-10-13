import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'Components/RadioGroup',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    children: 'RadioGroup'
  }
};
