import type { Meta, StoryObj } from '@storybook/react';

import { TagGroup } from './TagGroup';

const meta: Meta<typeof TagGroup> = {
  component: TagGroup,
  title: 'Components/TagGroup',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof TagGroup>;

export const Default: Story = {
  args: {
    children: 'TagGroup'
  }
};
