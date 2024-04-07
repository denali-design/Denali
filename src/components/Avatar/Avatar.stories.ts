import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays an avatar image with fallbacks to icons or initials if the image is not available. Supports multiple sizes and modes. Designed to be accessible and meet WCAG 2.1 AA and Section 508 requirements.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select', options: ['lg', 'md', 'sm'] },
      description: 'Sets the size of the avatar.',
    },
    mode: {
      control: { type: 'select', options: ['photo', 'icon', 'initial'] },
      description: 'Determines the mode of the avatar: displaying a photo, an icon, or initials.',
    },
    fallbackMode: {
      control: { type: 'select', options: ['icon', 'initial'] },
      description: 'Specifies the fallback mode used when the primary content (image or icon) is not available.',
      defaultValue: 'initial',
    },
    name: { 
      control: 'text',
      description: 'The name of the person or entity represented by the avatar. Used for alt text and initials.',
    },
    imageUrl: { 
      control: 'text',
      description: 'URL of the avatar image.',
    },
    onPress: {
      description: 'Handler for the press event, demonstrating interactivity.',
    },
  },
};
export default meta;


type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: 'Denali Avatar',
    size: 'lg',
    mode: 'photo',
    imageUrl: 'https://fastly.picsum.photos/id/237/64/64.jpg?hmac=X2TqfZbF_z3IKVgBxfyhQe8zZCTFJNwJbUTlpJLP0hc',
    fallbackMode: 'initial',
    onPress: () => alert('OnPress event triggered'),
  },
  parameters: {
    docs: {
      storyDescription: 'The default large avatar displaying a photo. Demonstrates the `lg` size with a photo mode and includes an onPress event handler.',
    },
  },
};

export const Medium: Story = {
  args: {
    name: 'Denali Avatar',
    size: 'md',
    mode: 'photo',
    imageUrl: 'https://fastly.picsum.photos/id/237/64/64.jpg?hmac=X2TqfZbF_z3IKVgBxfyhQe8zZCTFJNwJbUTlpJLP0hc',
    fallbackMode: 'initial',
    onPress: () => alert('OnPress event triggered')
  }
};

export const Small: Story = {
  args: {
    name: 'Denali Avatar',
    size: 'sm',
    mode: 'photo',
    imageUrl: 'https://fastly.picsum.photos/id/237/64/64.jpg?hmac=X2TqfZbF_z3IKVgBxfyhQe8zZCTFJNwJbUTlpJLP0hc',
    fallbackMode: 'initial',
    onPress: () => alert('OnPress event triggered')
  }
};

export const NoImageLarge: Story = {
  args: {
    name: 'Denali Avatar',
    size: 'lg',
    mode: 'photo',
    imageUrl: '',
    fallbackMode: 'initial',
    onPress: () => alert('OnPress event triggered')
  }
};

export const NoImageMedium: Story = {
  args: {
    name: 'Denali Avatar',
    size: 'md',
    mode: 'photo',
    imageUrl: '',
    fallbackMode: 'initial',
    onPress: () => alert('OnPress event triggered')
  }
};

export const NoImageSmall: Story = {
  args: {
    name: 'Denali Avatar',
    size: 'sm',
    mode: 'photo',
    imageUrl: '',
    fallbackMode: 'initial',
    onPress: () => alert('OnPress event triggered')
  }
};

export const IconLarge: Story = {
  args: {
    name: 'Denali Avatar',
    size: 'lg',
    mode: 'icon',
    onPress: () => alert('OnPress event triggered')
  }
};

export const IconMedium: Story = {
  args: {
    name: 'Denali Avatar',
    size: 'md',
    mode: 'icon',
    onPress: () => alert('OnPress event triggered')
  }
};

export const IconSmall: Story = {
  args: {
    name: 'Denali Avatar',
    size: 'sm',
    mode: 'icon',
    onPress: () => alert('OnPress event triggered')
  }
};