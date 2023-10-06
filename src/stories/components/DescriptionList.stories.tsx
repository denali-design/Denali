// DescriptionList.stories.ts

import type { Meta, StoryObj } from '@storybook/react';
import {
  DescriptionItem,
  DescriptionList
} from '../../components/DescriptionList';

const meta: Meta<typeof DescriptionList> = {
  component: DescriptionList,
  title: 'Components/Description List',
  tags: ['autodocs']
};
export default meta;

DescriptionList.displayName = 'DescriptionList';

type Story = StoryObj<typeof DescriptionList>;

export const UsingArray: Story = {
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

export const UsingChildren: Story = (args) => (
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
