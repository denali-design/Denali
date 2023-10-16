import type { Meta, StoryObj } from '@storybook/react';

import { SelectField } from './SelectField';

const meta: Meta<typeof SelectField> = {
  component: SelectField,
  title: 'Components/Data Entry/SelectField',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
  args: {
    children: 'SelectField'
  }
};
