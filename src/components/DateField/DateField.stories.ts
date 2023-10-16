import type { Meta, StoryObj } from '@storybook/react';

import { DateField } from './DateField';

const meta: Meta<typeof DateField> = {
  component: DateField,
  title: 'Components/Data Entry/DateField',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof DateField>;

export const Default: Story = {
  args: {
    children: 'DateField'
  }
};
