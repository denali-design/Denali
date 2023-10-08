// Icon.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../../../components/iconography/Icon';

/** Meta information for the Icon stories. */
const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Components/Iconography/Icon',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Icon>;

/**
 * Default story for the Icon component.
 */
export const Default: Story = {
  args: {
    name: 'icon-control-home',
    size: 'md',
    color: 'default'
  }
};

/**
 * Small size icon story.
 */
export const SmallSize: Story = {
  args: {
    name: 'icon-control-home',
    size: 'sm',
    color: 'default'
  }
};

/**
 * Large size icon story.
 */
export const LargeSize: Story = {
  args: {
    name: 'icon-control-home',
    size: 'lg',
    color: 'default'
  }
};

/**
 * Primary colored icon story.
 */
export const PrimaryColor: Story = {
  args: {
    name: 'icon-control-home',
    size: 'md',
    color: 'primary'
  }
};

/**
 * Success colored icon story.
 */
export const SuccessColor: Story = {
  args: {
    name: 'icon-control-home',
    size: 'md',
    color: 'success'
  }
};

/**
 * Warning colored icon story.
 */
export const WarningColor: Story = {
  args: {
    name: 'icon-control-home',
    size: 'md',
    color: 'warning'
  }
};

/**
 * Danger colored icon story.
 */
export const DangerColor: Story = {
  args: {
    name: 'icon-control-home',
    size: 'md',
    color: 'danger'
  }
};

/**
 * Info colored icon story.
 */
export const InfoColor: Story = {
  args: {
    name: 'icon-control-home',
    size: 'md',
    color: 'info'
  }
};
