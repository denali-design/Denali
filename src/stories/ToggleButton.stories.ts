// ToggleButton.stories.ts

// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { ToggleButton } from '../components/atoms/ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  title: 'Components/Atoms/ToggleButton',
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
