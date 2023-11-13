import type { Meta, StoryObj } from '@storybook/react';
import PaginationSimple, { PaginationSimpleProps } from './PaginationSimple';

const meta: Meta<PaginationSimpleProps> = {
  title: 'Components/Navigation/Pagination (Simple)',
  component: PaginationSimple,
  tags: ['autodocs'],
  args: {
    totalCount: 8, // Total number of items to paginate
    pageSize: 1, // Number of items per page
    currentPage: 1, // Current active page
    onPageChange: () => {} // Placeholder function for page change
  },
  parameters: {
    // Any additional Storybook parameters you want to set globally for the stories of this component
  }
};

export default meta;

// Story for the Default Pagination
export const Default: StoryObj<PaginationSimpleProps> = {
  // Args for the Default story
  args: {
    ...meta.args // Spread the global args here
  }
};
