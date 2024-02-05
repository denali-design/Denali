import type { Meta, StoryObj } from '@storybook/react';
import Pagination, { PaginationProps } from './Pagination';

const meta: Meta<PaginationProps> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    totalCount: 150, // Total number of items to paginate
    pageSize: 10, // Number of items per page
    siblingCount: 1, // Number of page buttons to show around the current page
    currentPage: 1, // Current active page
    onPageChange: () => {} // Placeholder function for page change
  },
  parameters: {
    // Any additional Storybook parameters you want to set globally for the stories of this component
  }
};

export default meta;

// Story for the Default Pagination
export const Default: StoryObj<PaginationProps> = {
  // Args for the Default story
  args: {
    ...meta.args // Spread the global args here
  }
};

export const ManySiblings: StoryObj<PaginationProps> = {
  // Args for the Default story
  args: {
    siblingCount: 3
  }
};
