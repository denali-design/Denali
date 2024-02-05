import type { Meta, StoryObj } from '@storybook/react';
import SelectField, { SelectItem } from './SelectField';

const meta: Meta<typeof SelectField> = {
  title: 'Components/Data Entry/SelectField',
  component: SelectField,
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
  args: {
    label: 'Ice cream flavor',
    children: [
      <SelectItem key="chocolate">Chocolate</SelectItem>,
      <SelectItem key="mint">Mint</SelectItem>,
      <SelectItem key="strawberry">Strawberry</SelectItem>,
      <SelectItem key="vanilla">Vanilla</SelectItem>
    ]
  }
};

export const Description: Story = {
  args: {
    label: 'Ice cream flavor',
    description: "What is your favorite ice cream flavor?",
    children: [
      <SelectItem key="chocolate">Chocolate</SelectItem>,
      <SelectItem key="mint">Mint</SelectItem>,
      <SelectItem key="strawberry">Strawberry</SelectItem>,
      <SelectItem key="vanilla">Vanilla</SelectItem>
    ]
  }
};