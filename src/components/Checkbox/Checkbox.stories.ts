// Checkbox.stories.ts
import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Data Entry/Checkbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'This component extends the Adobe React ARIA Checkbox. For a complete list of props, refer to [Adobe React ARIA Checkbox Documentation](https://react-spectrum.adobe.com/react-aria/Checkbox.html#props).'
      }
    },
    layout: 'fullscreen'
  }
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    children: 'I agree'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Description: Story = {
  args: {
    children: 'I agree',
    description: 'Pineapple goes great on pizza.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    isSelected: true,
    isReadOnly: true
  },
  parameters: {
    layout: 'padded'
  }
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true
  },
  parameters: {
    layout: 'padded'
  }
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    isInvalid: true,
    isSelected: true
  },
  parameters: {
    layout: 'padded'
  }
};

export const InvalidWithDescription: Story = {
  args: {
    ...Default.args,
    isInvalid: true,
    isSelected: true,
    description: 'Oops, you forgot to do something.'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Indeterminate: Story = {
  args: {
    ...Default.args,
    isIndeterminate: true
  },
  parameters: {
    layout: 'padded'
  }
};
