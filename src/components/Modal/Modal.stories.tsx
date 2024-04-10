import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Components/Data Display/Modal',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: 'Simple Modal',
    children: (
      <div className="prose">
        <img
          alt="A placeholder image"
          className="mx-auto block h-auto w-full"
          src="https://via.placeholder.com/800x600"
        />
        <p className="mx-6 text-lg">
          Modals can support any content you need to display. This example shows
          a simple paragraph of text along with an image.
        </p>
      </div>
    ),
    triggerButtonProps: {
      label: 'Open Modal',
      size: 'default',
      variety: 'black'
    }
  }
};
