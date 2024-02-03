import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Data Display/Card',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h2 className="mb-2 font-bold">Card Title</h2>
        <p>
          This is a paragraph inside the Card component. It demonstrates the
          usage of the Card as a container for various elements.
        </p>
      </div>
    )
  }
};

export const CustomClass: Story = {
  args: {
    className: 'canvas-secondary type-on-vivid',
    children: (
      <div>
        <h2 className="mb-2 font-bold">Card Title</h2>
        <p>
          This is a paragraph inside the Card component. It demonstrates the
          usage of the Card as a container for various elements.
        </p>
      </div>
    )
  }
};
