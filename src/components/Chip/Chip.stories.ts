import type { Meta, StoryObj } from '@storybook/react';

import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Components/Data Display/Chip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The chip component is used to display messages relevant to a user.'
      }
    },
    layout: 'fullscreen'
  }
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    iconName: 'icon-control-flag',
    message: 'Chip'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Reversed: Story = {
  args: {
    iconName: 'icon-control-flag',
    message: 'Chip',
    reverseIcon: true
  },
  parameters: {
    layout: 'padded'
  }
};

export const Info: Story = {
  args: {
    type: 'info',
    iconName: 'icon-control-information-circle',
    message: 'Chip'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Success: Story = {
  args: {
    type: 'success',
    iconName: 'icon-control-check-circle',
    message: 'Chip'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Warning: Story = {
  args: {
    type: 'warning',
    iconName: 'icon-alert-warning',
    message: 'Chip'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Danger: Story = {
  args: {
    type: 'danger',
    iconName: 'icon-alert-stop-warning',
    message: 'Chip'
  },
  parameters: {
    layout: 'padded'
  }
};

export const NoIcon: Story = {
  args: {
    message: 'Chip'
  },
  parameters: {
    layout: 'padded'
  }
};
