/**
 * This file defines the semanticColors Tailwind plugin.
 *
 * This plugin dynamically generates utility classes for
 * semantic color handling based on provided configurations.
 *
 * @file   This file defines the Tailwind semanticColors plugin.
 * @since  1.0.0
 */

const plugin = require('tailwindcss/plugin');

const semanticColors = plugin(
  function ({ addUtilities, theme, variants, e }) {
    const values = theme('semanticColors');
    addUtilities(
      [
        Object.entries(values).map(([key, value]) => {
          let defaultClasses = {};
          let defaultClassesDark = {};

          // Determine the default class based on the 'use' key
          if (value.use === 'bg') {
            defaultClasses = {
              [`.${e(`${key}`)}`]: {
                backgroundColor: `${value.light.bg}`,
                color: `${value.light.txt}`
              }
            };
            defaultClassesDark = {
              [`.${e(`${key}`)}`]: {
                backgroundColor: `${value.dark.bg}`,
                color: `${value.dark.txt}`
              }
            };
          } else if (value.use === 'border') {
            defaultClasses = {
              [`.${e(`${key}`)}`]: {
                borderColor: `${value.light.bg}`
              }
            };
            defaultClassesDark = {
              [`.${e(`${key}`)}`]: {
                borderColor: `${value.dark.bg}`
              }
            };
          } else if (value.use === 'text') {
            defaultClasses = {
              [`.${e(`${key}`)}`]: {
                color: `${value.light.bg}`
              }
            };
            defaultClassesDark = {
              [`.${e(`${key}`)}`]: {
                color: `${value.dark.bg}`
              }
            };
          }

          return {
            ...defaultClasses,
            [`.type-${e(`${key}`)}`]: {
              color: `${value.light.bg}`
            },
            [`.canvas-${e(`${key}`)}`]: {
              backgroundColor: `${value.light.bg}`
            },
            [`.stroke-${e(`${key}`)}`]: {
              borderColor: `${value.light.bg}`
            },
            '.dark': {
              ...defaultClassesDark,
              [`& .type-${e(`${key}`)}`]: {
                color: `${value.dark.bg}`
              },
              [`& .canvas-${e(`${key}`)}`]: {
                backgroundColor: `${value.dark.bg}`
              },
              [`& .stroke-${e(`${key}`)}`]: {
                borderColor: `${value.dark.bg}`
              }
            }
          };
        })
      ],
      variants('semanticColors')
    );
  },
  {
    variants: {
      semanticColors: [
        'hover',
        'dark',
        'responsive',
        'active',
        'focus',
        'required',
        'invalid',
        'disabled',
        'file',
        'marker',
        'selection'
      ]
    }
  }
);

module.exports = semanticColors;
