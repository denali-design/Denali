import type { Meta, StoryObj } from '@storybook/react';

import { NumberField } from './NumberField';

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  title: 'Components/NumberField',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof NumberField>;

export const Default: Story = {
  args: {
    children: 'NumberField'
  }
};