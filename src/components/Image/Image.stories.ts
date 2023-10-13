import type { Meta, StoryObj } from '@storybook/react';

import { Image } from './Image';

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'Components/Image',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    children: 'Image'
  }
};