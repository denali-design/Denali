import type { Meta, StoryObj } from '@storybook/react';

import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Components/Data Entry/Switch',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    value: 'Switch',
    name: 'Switch'
  }
};

export const Disabled: Story = {
  args: {
    value: 'Switch',
    name: 'Switch',
    isDisabled: true
  }
};

export const ReadOnly: Story = {
  args: {
    value: 'Switch',
    name: 'Switch',
    isReadOnly: true
  }
};
