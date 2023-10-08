// Heading.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../../../components/typography/Heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Typography/Heading',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Default Heading'
  }
};

export const LevelOne: Story = {
  args: {
    level: 1,
    children: 'H1 Level One'
  }
};

export const LevelTwo: Story = {
  args: {
    level: 2,
    children: 'H2 Level One'
  }
};

export const LevelThree: Story = {
  args: {
    level: 3,
    children: 'H3 Level Three'
  }
};

export const LevelFour: Story = {
  args: {
    level: 4,
    children: 'H4 Level Four'
  }
};

export const LevelFive: Story = {
  args: {
    level: 5,
    children: 'H5 Level Five'
  }
};

export const LevelSix: Story = {
  args: {
    level: 6,
    children: 'H6 Level Six'
  }
};
