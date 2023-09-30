// TextField.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '../../components/atoms/TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Components/Forms/TextField',
  tags: ['autodocs'],
  argTypes: {
    inputMode: {
      control: {
        type: 'select',
        options: [
          'none',
          'text',
          'tel',
          'url',
          'email',
          'numeric',
          'decimal',
          'search'
        ]
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {
    label: 'Default',
    placeholder: '',
    inputMode: 'text'
  }
};

export const Search: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search',
    inputMode: 'search'
  }
};