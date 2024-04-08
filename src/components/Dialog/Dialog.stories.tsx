import type { Meta, StoryObj } from '@storybook/react';

import Dialog from './Dialog';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Components/Data Display/Dialog',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex flex-col items-center justify-center text-center">
        <Icon color="default" name="icon-alert-stop-urgent" size="lg" />
        <Heading
          level="h1"
          name="Are you sure you want to delete this product?"
          style="h3"
          type="app"
          className="mb-2"
        />
        <p className="text-center text-xs">
          You will not be able to recover this file after it has been deleted.
        </p>
      </div>
    ),
    yesText: "Yes, I'm sure",
    noText: 'No, cancel',
    onYes: action('confirmedDelete'),
    triggerButtonProps: {
      label: 'Open Dialog',
      size: 'default',
      variety: 'danger'
    }
    // Uncomment the following line to demonstrate navigating to a URL
    // yesUrl: "https://example.com"
  },
  argTypes: {
    onYes: { action: 'clicked' } // This makes the Storybook UI display an interactive part for the onYes prop
  }
};

export const OpenURLOnYes: Story = {
  args: {
    children: (
      <div className="flex flex-col items-center justify-center text-center">
        <Icon color="default" name="icon-alert-stop-urgent" size="lg" />
        <Heading
          level="h1"
          name="Are you sure you want to delete this product?"
          style="h3"
          type="app"
          className="mb-2"
        />
        <p className="text-center text-xs">
          You will not be able to recover this file after it has been deleted.
        </p>
      </div>
    ),
    yesText: "Yes, I'm sure",
    noText: 'No, cancel',
    triggerButtonProps: {
      label: 'Open Dialog',
      size: 'default',
      iconOnly: true,
      iconColor: 'on-vivid',
      iconLeft: 'icon-alert-stop-warning',
      variety: 'black'
    },
    yesUrl: 'https://example.com'
  }
};

export const Simple: Story = {
  args: {
    children: <p>This is a simple dialog box with simple text.</p>,
    yesText: 'Yes',
    noText: 'No',
    triggerButtonProps: {
      label: 'Open Dialog',
      size: 'none',
      variety: 'plain'
    },
    yesUrl: 'https://example.com'
  }
};
