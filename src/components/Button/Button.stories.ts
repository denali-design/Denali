// Button.stories.ts
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Default',
    size: undefined
  }
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large'
  }
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small'
  }
};

export const Success: Story = {
  args: {
    label: 'Success',
    variety: 'success'
  }
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    variety: 'warning'
  }
};

export const Danger: Story = {
  args: {
    label: 'Danger',
    variety: 'danger'
  }
};

export const Info: Story = {
  args: {
    label: 'Info',
    variety: 'info'
  }
};
