import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Components/Data Entry/Textarea',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  args: {
    label: 'Label',
    description: 'Input description.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Invalid: Story = {
  args: {
    label: 'Description',
    isInvalid: true,
    errorMessage: 'Enter a valid description.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    isDisabled: true,
    description: 'Please complete step 1 before filling out this form.'
  },
  parameters: {
    layout: 'padded'
  }
};
