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
    dismissible: true,
    message: 'You should probably read this alert message.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const NotDismissable: Story = {
  args: {
    title: 'An Alert Title',
    dismissible: false,
    message: 'You should probably read this alert message.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Info: Story = {
  args: {
    dismissible: true,
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
    dismissible: true,
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
    dismissible: true,
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
    dismissible: true,
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
    dismissible: true,
    title: 'An Alert Title'
  },
  parameters: {
    layout: 'padded'
  }
};
