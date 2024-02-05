import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Components/Data Display/Modal',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: 'Modal'
  }
};
