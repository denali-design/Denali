import type { Meta, StoryObj } from '@storybook/react';

import { ActionGroup } from './ActionGroup';

const meta: Meta<typeof ActionGroup> = {
  component: ActionGroup,
  title: 'Components/ActionGroup',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof ActionGroup>;

export const Default: Story = {
  args: {
    children: 'ActionGroup'
  }
};
