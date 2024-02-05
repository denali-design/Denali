import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Navigation/Accordion',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    children: 'Accordion'
  }
};
