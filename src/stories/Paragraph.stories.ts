// Paragraph.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from '../components/atoms/Paragraph';

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  title: 'Components/Typography/Paragraph',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'Default Paragraph'
  }
};

export const BaseSize: Story = {
  args: {
    fontSize: 'base',
    children: 'Base Size Paragraph'
  }
};

export const LargeSize: Story = {
  args: {
    fontSize: 'lg',
    children: 'Large Size Paragraph'
  }
};

export const ExtraLargeSize: Story = {
  args: {
    fontSize: 'xl',
    children: 'Extra Large Size Paragraph'
  }
};

export const SuccessColor: Story = {
  args: {
    color: 'success',
    children: 'Success Colored Paragraph'
  }
};

export const WarningColor: Story = {
  args: {
    color: 'warning',
    children: 'Warning Colored Paragraph'
  }
};

export const DangerColor: Story = {
  args: {
    color: 'danger',
    children: 'Danger Colored Paragraph'
  }
};

export const InfoColor: Story = {
  args: {
    color: 'info',
    children: 'Info Colored Paragraph'
  }
};
