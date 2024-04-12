// Button.stories.ts
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Navigation/Button',
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

export const IconLeft: Story = {
  args: {
    label: 'Icon Left',
    iconColor: 'on-vivid',
    iconLeft: 'icon-control-heart-like'
  }
};

export const IconRight: Story = {
  args: {
    label: 'Icon Right',
    iconColor: 'on-vivid',
    iconRight: 'icon-control-heart-like',
    variety: 'black'
  }
};

export const IconOnly: Story = {
  args: {
    label: 'Icon Only',
    iconColor: 'on-vivid',
    iconRight: 'icon-control-heart-like',
    variety: 'black',
    iconOnly: true
  }
};

export const IconOnlyNoPadding: Story = {
  args: {
    label: 'No Padding Icon Only',
    iconColor: 'default',
    iconRight: 'icon-action-arrowhead-down',
    variety: 'plain',
    iconOnly: true,
    size: 'none',
    iconSize: 'lg'
  }
};

export const Black: Story = {
  args: {
    label: 'Black',
    size: undefined,
    variety: 'black'
  }
};

export const Outline: Story = {
  args: {
    label: 'Outline',
    size: undefined,
    variety: 'outline'
  }
};

export const OutlineGray: Story = {
  args: {
    label: 'Outline Gray',
    size: undefined,
    variety: 'outline-gray'
  }
};

export const Plain: Story = {
  args: {
    label: 'Plain',
    size: undefined,
    variety: 'plain'
  }
};

export const Jumbo: Story = {
  args: {
    label: 'Jumbo Button',
    size: 'jumbo'
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
