import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

const meta: Meta<BreadcrumbsProps> = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    // Assuming tags should be inside parameters based on Storybook's config
    docs: {
      description: {
        component:
          'Breadcrumbs component that uses a JSON structure for navigation links.'
      }
    }
  }
};
export default meta;

// Define the props for the Default story
export const Default: StoryObj<BreadcrumbsProps> = {
  args: {
    breadcrumbs: [
      {
        link: '/',
        title: 'Home',
        icon: true,
        iconName: 'icon-control-home'
      },
      {
        link: '/portfolio',
        title: 'Portfolio',
        icon: false
      },
      {
        link: '/about',
        title: 'About',
        icon: false
      },
      {
        link: '/contact',
        title: 'Contact',
        icon: false
      }
    ],
    variety: 'plain' // or 'gray'
  }
};

export const ShortMenu: StoryObj<BreadcrumbsProps> = {
  args: {
    breadcrumbs: [
      {
        link: '/',
        title: 'Home',
        icon: true,
        iconName: 'icon-control-home'
      },
      {
        link: '/portfolio',
        title: 'Portfolio',
        icon: false
      }
    ],
    variety: 'plain' // or 'gray'
  }
};

export const NoIcon: StoryObj<BreadcrumbsProps> = {
  args: {
    breadcrumbs: [
      {
        link: '/',
        title: 'Home',
        icon: false
      },
      {
        link: '/portfolio',
        title: 'Portfolio',
        icon: false
      }
    ],
    variety: 'plain' // or 'gray'
  }
};

export const GrayBackground: StoryObj<BreadcrumbsProps> = {
  args: {
    breadcrumbs: [
      {
        link: '/',
        title: 'Home',
        icon: true,
        iconName: 'icon-control-home'
      },
      {
        link: '/portfolio',
        title: 'Portfolio',
        icon: false
      },
      {
        link: '/about',
        title: 'About',
        icon: false
      },
      {
        link: '/contact',
        title: 'Contact',
        icon: false
      }
    ],
    variety: 'gray' // or 'plain'
  }
};

export const Disabled: StoryObj<BreadcrumbsProps> = {
  args: {
    breadcrumbs: [
      {
        link: '/',
        title: 'Home',
        icon: true,
        iconName: 'icon-control-home'
      },
      {
        link: '/portfolio',
        title: 'Portfolio',
        icon: false
      },
      {
        link: '/about',
        title: 'About',
        icon: false
      },
      {
        link: '/contact',
        title: 'Contact',
        icon: false
      }
    ],
    variety: 'plain', // or 'gray',
    isDisabled: true
  }
};
