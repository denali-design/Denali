/**
 * Storybook stories for the Figure component.
 *
 * @file This file defines the Storybook stories for the Figure component.
 * @since 1.1.0
 */

import type { Meta, StoryObj } from '@storybook/react';
import Figure from './Figure';

const meta: Meta<typeof Image> = {
  title: 'Components/Data Display/Figure',
  component: Figure,
  tags: ['autodocs'],
  argTypes: {
    imageProps: { control: 'object' },
    caption: { control: 'text' }
  }
} as Meta;

export default meta;

type Story = StoryObj<typeof Figure>;
export const Default: Story = {
  args: {
    imageProps: {
      src: 'https://placehold.co/400x300',
      alt: 'Example image'
    },
    caption: 'This is an example caption.'
  }
};
