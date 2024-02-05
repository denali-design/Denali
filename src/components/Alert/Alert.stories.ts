import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Components/Data Display/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The alert component is used to display messages relevant to a user.'
      }
    },
    layout: 'fullscreen'
  }
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: 'An Alert Title',
    message: 'You should probably read this alert message.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Info: Story = {
  args: {
    type: 'info',
    title: 'An Alert Title',
    message: 'You should probably read this alert message.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'An Alert Title',
    message: 'You should probably read this alert message.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'An Alert Title',
    message: 'You should probably read this alert message.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Danger: Story = {
  args: {
    type: 'danger',
    title: 'An Alert Title',
    message: 'You should probably read this alert message.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const NoMessage: Story = {
  args: {
    title: 'An Alert Title'
  },
  parameters: {
    layout: 'padded'
  }
};
