import type { Meta, StoryObj } from '@storybook/react';
import { Lead } from './Lead';

const meta: Meta<typeof Lead> = {
  component: Lead,
  title: 'Components/Data Display/Lead',
  tags: ['autodocs'],
  argTypes: {
    variety: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary']
      }
    },
    className: {
      control: 'text'
    }
  }
};
export default meta;

type Story = StoryObj<typeof Lead>;

export const Default: Story = {
  args: {
    children: 'This is an example of a lead',
    variety: 'default',
    className: ''
  }
};
