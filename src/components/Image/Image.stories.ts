/**
 * Storybook stories for the Image component.
 *
 * @file This file defines the Storybook stories for the Image component.
 * @since 1.0.0
 */

import type { Meta, StoryObj } from '@storybook/react';

import Image from './Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Data Display/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    role: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    onClick: { action: 'clicked' },
    onError: { action: 'error' }
  }
} as Meta;

export default meta;

type Story = StoryObj<typeof Image>;
export const Default: Story = {
  args: {
    src: 'https://placehold.co/400x300',
    alt: 'Example image'
  }
};

export const AltTextMissing: Story = {
  args: {
    src: 'https://placehold.co/400x300',
    alt: ''
  }
};

export const WithCustomRole: Story = {
  args: {
    src: 'https://placehold.co/400x300',
    alt: 'Example image',
    role: 'presentation'
  }
};

export const WithDimensions: Story = {
  args: {
    src: 'https://placehold.co/400x300',
    alt: 'Example image',
    width: 400,
    height: 300
  }
};
