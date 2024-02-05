import { Meta } from '@storybook/react';
import { ComponentProps } from 'react';
import { Radio } from 'react-aria-components';
import RadioGroup from './RadioGroup';

export default {
  component: RadioGroup,
  title: 'Components/Data Entry/RadioGroup',
  tags: ['autodocs']
} as Meta;

export const Default = {
  args: {
    label: 'Favorite Sport',
    description: 'Choose your favorite sport from the options below.',
    radios: [
      {
        id: 'soccer',
        label: 'Soccer',
        value: 'soccer',
        description: 'Kick a ball around.'
      },
      {
        id: 'baseball',
        label: 'Baseball',
        value: 'baseball',
        description: 'Hit a ball around.'
      },
      {
        id: 'football',
        label: 'Football',
        value: 'football',
        description: 'Chase a ball around.'
      }
    ]
  }
};

export const UsingChildren = (args: ComponentProps<typeof RadioGroup>) => (
  <RadioGroup {...args}>
    <Radio value="soccer">Soccer</Radio>
    <Radio value="baseball">Baseball</Radio>
    <Radio value="basketball">Basketball</Radio>
  </RadioGroup>
);

UsingChildren.args = {
  label: 'Favorite sport',
  description: 'Choose your favorite sport from the options below.'
};

UsingChildren.parameters = {
  docs: {
    source: {
      code: `
<RadioGroup
  description="Choose your favorite sport from the options below."
  label="Favorite sport"
>
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball">Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</RadioGroup>
      `
    }
  }
};

export const UsingArray = {
  args: {
    label: 'Favorite Pet',
    radios: [
      {
        id: 'dog',
        label: 'Dog',
        value: 'dog'
      },
      {
        id: 'cat',
        label: 'Cat',
        value: 'cat'
      }
    ]
  }
};

export const UsingArrayWithDescriptions = {
  args: {
    label: 'Favorite Pet',
    description: 'Which do you prefer?',
    radios: [
      {
        id: 'dog',
        label: 'Dog',
        value: 'dog',
        description: 'Loyal and hard working'
      },
      {
        id: 'cat',
        label: 'Cat',
        value: 'cat',
        description: 'Curious and playful'
      }
    ]
  }
};

export const Horizontal = {
  args: {
    label: 'Favorite Pet',
    orientation: 'horizontal',
    radios: [
      {
        id: 'dog',
        label: 'Dog',
        value: 'dog'
      },
      {
        id: 'cat',
        label: 'Cat',
        value: 'cat'
      }
    ]
  }
};
