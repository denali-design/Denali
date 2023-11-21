/**
 * Dynamic Content Stories
 *
 * Defines stories for the DynamicContent component for better visualization and testing.
 *
 * @file   This file defines stories for the DynamicContent component.
 * @since  1.0.0
 */

import type { Meta, StoryObj } from '@storybook/react';
import { DynamicContent, DynamicContentProps } from './DynamicContent';

export default {
  component: DynamicContent,
  title: 'Components/Data Display/Dynamic Content',
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

type Story = StoryObj<DynamicContentProps>;

export const Default: Story = {
  args: {
    htmlContent: `
      <h2>Level Two heading</h2>
      <p>Lorem <a href="https://example.com" target="_blank">ipsum</a>...</p>
    `
  }
};

export const WithCustomClasses: Story = {
  args: {
    htmlContent: `
      <h2>Level Two heading</h2>
      <p>Lorem <a href="https://example.com" target="_blank">ipsum</a>...</p>
    `,
    className: 'p-8 canvas-alt'
  }
};
