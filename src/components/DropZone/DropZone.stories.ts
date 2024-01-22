import type { Meta, StoryObj } from '@storybook/react';

import DropZone from './DropZone';

const meta: Meta<typeof DropZone> = {
  component: DropZone,
  title: 'Components/Data Entry/DropZone',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'This component extends the Adobe React ARIA DropZone with a FileTrigger. For a complete list of props, refer to [Adobe React ARIA DropZone Documentation](https://react-spectrum.adobe.com/react-aria/DropZone.html#filetrigger).'
      }
    },
    layout: 'fullscreen'
  }
};
export default meta;

type Story = StoryObj<typeof DropZone>;

export const Default: Story = {
  args: {
    acceptsMultiple: true,
    acceptedFileTypes: ['image/png'],
    description: 'Click to upload or drag and drop',
    maxFileSize: 20971520
  },
  parameters: {
    layout: 'padded'
  }
};

export const NoFileTypeLimit: Story = {
  args: {
    acceptsMultiple: true,
    description: 'Click to upload or drag and drop',
    maxFileSize: 4700000
  },
  parameters: {
    layout: 'padded'
  }
};

export const NoSizeLimit: Story = {
  args: {
    acceptsMultiple: true,
    acceptedFileTypes: ['image/png'],
    description: 'Click to upload or drag and drop'
  },
  parameters: {
    layout: 'padded'
  }
};

export const NoTypeOrSizeLimits: Story = {
  args: {
    acceptsMultiple: true,
    description: 'Click to upload or drag and drop'
  },
  parameters: {
    layout: 'padded'
  }
};

export const SingleFileUpload: Story = {
  args: {
    description: 'Click to upload or drag and drop'
  },
  parameters: {
    layout: 'padded'
  }
};
