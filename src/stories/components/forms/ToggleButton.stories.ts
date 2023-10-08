// ToggleButton.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import { ToggleButton } from '../../../components/forms/ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  title: 'Components/Buttons/ToggleButton',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  args: {
    label: 'Save Progress',
    toggleType: 'button',
    toggleTextUnselected: 'Save',
    toggleTextSelected: 'Saved'
  }
};

export const Switch: Story = {
  args: {
    label: 'Default',
    toggleType: 'switch'
  }
};
