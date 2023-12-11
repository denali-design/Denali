// TextField.stories.ts

import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Components/Data Entry/TextField',
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
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'search', 'url', 'tel', 'email', 'password']
      }
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {
    label: 'Label',
    inputMode: 'text',
    type: 'text'
  },
  parameters: {
    layout: 'padded'
  }
};
