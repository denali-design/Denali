import type { Meta, StoryObj } from '@storybook/react';

import { TimeField } from './TimeField';

const meta: Meta<typeof TimeField> = {
  component: TimeField,
  title: 'Components/TimeField',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof TimeField>;

export const Default: Story = {
  args: {
    children: 'TimeField'
  }
};
