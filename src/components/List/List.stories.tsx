import type { Meta } from '@storybook/react';
import { ComponentProps } from 'react';
import List from './List';

const meta: Meta<typeof List> = {
  component: List,
  title: 'Components/Data Display/List',
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    bulletType: {
      control: 'select',
      options: ['disc', 'circle', 'square', 'decimal', 'none']
    },
    styled: { control: 'boolean', defaultValue: true },
    outlineStyle: { control: 'boolean', defaultValue: false }
  }
};
export default meta;

export const DefaultStyledOL = (args: ComponentProps<typeof List>) => (
  <List listType="ordered" {...args}>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </List>
);

export const DefaultStyledUL = (args: ComponentProps<typeof List>) => (
  <List listType="unordered" {...args}>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </List>
);

export const UnstyledList = (args: ComponentProps<typeof List>) => (
  <List listType="unordered" styled={false} {...args}>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </List>
);

export const BulletStyleChange = (args: ComponentProps<typeof List>) => (
  <List listType="unordered" outlineStyle {...args}>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>
      Nested List
      <List listType="unordered">
        <li>Nested Item 1</li>
        <li>Nested Item 2</li>
      </List>
    </li>
  </List>
);

export const OutlineStyle = (args: ComponentProps<typeof List>) => (
  <List listType="unordered" outlineStyle {...args}>
    <li>Outline Item 1</li>
    <li>Outline Item 2</li>
    <li>
      Nested Outline List
      <List>
        <li>Nested Outline Item 1</li>
        <li>Nested Outline Item 2</li>
        <li>
          Deeply Nested
          <List>
            <li>Deeply Nested Item 1</li>
          </List>
        </li>
      </List>
    </li>
  </List>
);
