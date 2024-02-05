import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Components/Navigation/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'This component extends the Adobe React ARIA Tabs. For a complete list of props, refer to [Adobe React ARIA Tabs Documentation](https://react-spectrum.adobe.com/react-aria/Tabs.html#props).'
      }
    },
    layout: 'fullscreen'
  }
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabStyle: 'lines', // or 'pills'
    tabLayout: 'horizontal', // or 'vertical'
    tabLabel: 'Tab Label',
    tabsData: [
      { id: 'home', title: 'Home', content: 'Home paragraph copy.' },
      {
        id: 'projects',
        title: 'Projects',
        content: 'Projects copy.'
      },
      { id: 'about', title: 'About', content: 'About copy.' }
    ],
    isDisabled: false
  },
  parameters: {
    layout: 'padded'
  }
};

export const Vertical: Story = {
  args: {
    tabStyle: 'pills',
    tabLayout: 'vertical',
    tabLabel: 'Tab Label',
    tabsData: [
      { id: 'home', title: 'Home', content: 'Home paragraph copy.' },
      {
        id: 'projects',
        title: 'Projects',
        content: 'Projects copy.'
      },
      { id: 'about', title: 'About', content: 'About copy.' }
    ],
    isDisabled: false
  },
  parameters: {
    layout: 'padded'
  }
};

export const DisabledTab: Story = {
  args: {
    tabStyle: 'lines',
    tabLayout: 'horizontal',
    tabLabel: 'Tab Label',
    tabsData: [
      { id: 'home', title: 'Home', content: 'Home paragraph copy.' },
      {
        id: 'projects',
        title: 'Projects',
        content: 'Projects copy.',
        isDisabled: false
      },
      { id: 'about', title: 'About', content: 'About copy.' }
    ],
    disabledKeys: ['about'],
    isDisabled: false
  },
  parameters: {
    layout: 'padded'
  }
};

export const AllDisabled: Story = {
  args: {
    tabStyle: 'lines',
    tabLayout: 'horizontal',
    tabLabel: 'Tab Label',
    tabsData: [
      { id: 'home', title: 'Home', content: 'Home paragraph copy.' },
      {
        id: 'projects',
        title: 'Projects',
        content: 'Projects copy.'
      },
      { id: 'about', title: 'About', content: 'About copy.' }
    ],
    isDisabled: true
  },
  parameters: {
    layout: 'padded'
  }
};

export const AllDisabledPills: Story = {
  args: {
    tabStyle: 'pills',
    tabLayout: 'horizontal',
    tabLabel: 'Tab Label',
    tabsData: [
      { id: 'home', title: 'Home', content: 'Home paragraph copy.' },
      {
        id: 'projects',
        title: 'Projects',
        content: 'Projects copy.',
        isDisabled: false
      },
      { id: 'about', title: 'About', content: 'About copy.' }
    ],
    isDisabled: true
  },
  parameters: {
    layout: 'padded'
  }
};
