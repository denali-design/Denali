import type { Meta, StoryObj } from '@storybook/react';

import SearchField from './SearchField';

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  title: 'Components/Data Entry/SearchField',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {
    label: 'Search',
    description: 'Input description.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Invalid: Story = {
  args: {
    label: 'Search',
    description: 'Input description.',
    isInvalid: true
  },
  parameters: {
    layout: 'padded'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Search',
    description: 'Input description.',
    isDisabled: true
  },
  parameters: {
    layout: 'padded'
  }
};
