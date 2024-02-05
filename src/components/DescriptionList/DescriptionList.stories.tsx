/**
 * DescriptionList Stories
 *
 * @file   This file defines stories for the DescriptionList component.
 * @since  x.x.x
 */

import { Meta } from '@storybook/react';
import { ComponentProps } from 'react'; // Import ComponentProps
import { DescriptionItem, DescriptionList } from './DescriptionList';

export default {
  component: DescriptionList,
  title: 'Components/Data Display/DescriptionList',
  tags: ['autodocs']
} as Meta;

export const UsingArray = {
  args: {
    items: [
      {
        term: 'Serif',
        description:
          'A type of font characterized by small decorative lines (called "serifs") added as embellishments to the basic characters.'
      },
      {
        term: 'Sans-serif',
        description:
          'A type of font that lacks the small decorative lines or features at the end of strokes in letters, symbols, and numbers.'
      }
    ]
  }
};

// Use ComponentProps to infer the props type for DescriptionList
export const UsingChildren = (args: ComponentProps<typeof DescriptionList>) => (
  <DescriptionList {...args}>
    <DescriptionItem
      term="Serif"
      description="A type of font characterized by small decorative lines (called 'serifs') added as embellishments to the basic characters."
    />
    <DescriptionItem
      term="Sans-serif"
      description="A type of font that lacks the small decorative lines or features at the end of strokes in letters, symbols, and numbers."
    />
  </DescriptionList>
);
