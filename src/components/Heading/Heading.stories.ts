// Heading.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Data Display/Heading',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    type: 'app',
    level: 'h1',
    style: 'h1',
    name: 'Default Heading'
  }
};

export const LevelOne: Story = {
  args: {
    type: 'app',
    level: 'h1',
    style: 'h1',
    name: 'H1 Level One'
  }
};

export const LevelTwo: Story = {
  args: {
    type: 'app',
    level: 'h2',
    style: 'h2',
    name: 'H2 Level One'
  }
};

export const LevelThree: Story = {
  args: {
    type: 'app',
    level: 'h3',
    style: 'h3',
    name: 'H3 Level Three'
  }
};

export const LevelFour: Story = {
  args: {
    type: 'app',
    level: 'h4',
    style: 'h4',
    name: 'H4 Level Four'
  }
};

export const LevelFive: Story = {
  args: {
    type: 'app',
    level: 'h5',
    style: 'h5',
    name: 'H5 Level Five'
  }
};

export const LevelSix: Story = {
  args: {
    type: 'app',
    level: 'h6',
    style: 'h6',
    name: 'H6 Level Six'
  }
};

export const Title: Story = {
  args: {
    type: 'app',
    level: 'h1',
    style: 'title',
    name: 'Title Heading'
  }
};

export const Body: Story = {
  args: {
    type: 'app',
    level: 'h2',
    style: 'body',
    name: 'Body Heading'
  }
};

export const Label: Story = {
  args: {
    type: 'app',
    level: 'h3',
    style: 'label',
    name: 'Label Heading'
  }
};
