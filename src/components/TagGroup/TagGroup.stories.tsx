import type { Meta, StoryObj } from '@storybook/react';

import TagGroup from './TagGroup';
import { Tag } from './TagGroup';

const meta: Meta<typeof TagGroup> = {
  component: TagGroup,
  title: 'Components/Data Entry/TagGroup',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof TagGroup>;

export const Default: Story = {
  render: (args) => (
    <TagGroup {...args}>
      <Tag>Chocolate</Tag>
      <Tag>Mint</Tag>
      <Tag>Strawberry</Tag>
      <Tag>Vanilla</Tag>
    </TagGroup>
  ),
  args: {
    label: 'Ice cream flavor',
    selectionMode: 'single'
  }
};

export const MultiSelect: Story = {
  render: (args) => (
    <TagGroup {...args}>
      <Tag>Chocolate</Tag>
      <Tag>Mint</Tag>
      <Tag>Strawberry</Tag>
      <Tag>Vanilla</Tag>
    </TagGroup>
  ),
  args: {
    label: 'Ice cream flavor',
    selectionMode: 'multiple'
  }
};
