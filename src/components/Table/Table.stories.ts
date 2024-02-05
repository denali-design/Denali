import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableProps } from './Table';

const meta: Meta<TableProps> = {
  title: 'Components/Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Table component that renders data from given JSON structures for columns and rows.'
      }
    }
  }
};
export default meta;

// Define the props for the Default story
export const Default: StoryObj<TableProps> = {
  args: {
    columns: [
      { name: 'Name', key: 'name', isRowHeader: true },
      { name: 'Animal', key: 'animal' },
      { name: 'Age', key: 'age' }
    ],
    rows: [
      { id: 1, name: 'Butters', age: '8', animal: 'Dog' },
      { id: 2, name: 'Ralph', age: '1', animal: 'Cat' },
      { id: 3, name: 'Samantha', age: '1', animal: 'Cat' }
    ],
    selectionMode: 'multiple'
  }
};

export const SingleSelect: StoryObj<TableProps> = {
  args: {
    columns: [
      { name: 'Name', key: 'name', isRowHeader: true },
      { name: 'Animal', key: 'animal' },
      { name: 'Age', key: 'age' }
    ],
    rows: [
      { id: 1, name: 'Butters', age: '8', animal: 'Dog' },
      { id: 2, name: 'Ralph', age: '1', animal: 'Cat' },
      { id: 3, name: 'Samantha', age: '1', animal: 'Cat' }
    ],
    selectionMode: 'single'
  }
};

export const MultiSelect: StoryObj<TableProps> = {
  args: {
    columns: [
      { name: 'Name', key: 'name', isRowHeader: true },
      { name: 'Animal', key: 'animal' },
      { name: 'Age', key: 'age' }
    ],
    rows: [
      { id: 1, name: 'Butters', age: '8', animal: 'Dog' },
      { id: 2, name: 'Ralph', age: '1', animal: 'Cat' },
      { id: 3, name: 'Samantha', age: '1', animal: 'Cat' }
    ],
    selectionMode: 'multiple'
  }
};

export const Empty: StoryObj<TableProps> = {
  args: {
    columns: [
      { name: 'Name', key: 'name', isRowHeader: true },
      { name: 'Type', key: 'type' },
      { name: 'Date Modified', key: 'date' }
    ],
    rows: []
  }
};
