import React from 'react';
import { withThemeByClassName } from '@storybook/addon-themes';
import './style.css';

// Global parameters for Storybook
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  docs: {
    toc: true
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict'
    }
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Denali',
        ['Welcome', 'Getting Started', 'Design File', 'Contributing'],
        'Foundations',
        'Content',
        'Components'
      ],
      locales: ''
    }
  }
};

// Global decorators
export const decorators = [
  (Story) => (
    <div style={{ all: 'unset' }}>
      <Story />
    </div>
  ),
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark'
    },
    defaultTheme: 'light'
  })
];
