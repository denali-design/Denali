import type { Meta, StoryObj } from '@storybook/react';

import { VideoEmbed } from './VideoEmbed';

const meta: Meta<typeof VideoEmbed> = {
  component: VideoEmbed,
  title: 'Components/VideoEmbed',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof VideoEmbed>;

export const Default: Story = {
  args: {
    children: 'VideoEmbed'
  }
};
