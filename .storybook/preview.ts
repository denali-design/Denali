import './style.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*", },
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
      order: ['Welcome', 'Getting Started', 'Contributing', 'Principles', 'Design File', 'Styling', 'Components'],
    },
  },
};

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
