// Checkbox.stories.ts
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../../../components/forms/Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Forms/Checkbox',
  tags: ['autodocs'],
  argTypes: {
    isSelected: {
      control: 'boolean'
    },
    isDisabled: {
      control: 'boolean'
    },
    isInvalid: {
      control: 'boolean'
    },
    isIndeterminate: {
      control: 'boolean'
    }
  }
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'I Agree'
  }
};

export const Selected: Story = {
  args: {
    ...Default.args,
    isSelected: true
  }
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true
  }
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    isInvalid: true,
    isSelected: true
  }
};

export const Indeterminate: Story = {
  args: {
    ...Default.args,
    isIndeterminate: true
  }
};
