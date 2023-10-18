import React from 'react';
import './style.css';


// Global parameters for Storybook
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  docs: {
    toc: true,
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Denali', ['Welcome', 'Getting Started', 'Design File', 'Contributing'], 'Foundations', 'Content', 'Components'],
      locales: '',
    },
  },
};

// Global decorators
export const decorators = [
  (Story) => (
    <div style={{ all: 'unset' }}>
      <Story />
    </div>
  ),
];
// Global types
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};
