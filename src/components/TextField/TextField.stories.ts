// TextField.stories.ts

import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Components/Data Entry/TextField',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {
    label: 'Label',
    description: 'Input description.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Email: Story = {
  args: {
    label: 'Email Address',
    inputMode: 'email',
    type: 'email'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Invalid: Story = {
  args: {
    label: 'City',
    isInvalid: true,
    errorMessage: 'Enter a city name.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    isDisabled: true
  },
  parameters: {
    layout: 'padded'
  }
};
