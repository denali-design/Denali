/**
 * CheckboxGroup Stories
 *
 * @file   This file defines stories for the CheckboxGroup composite component.
 * @since  1.0.0
 */

import { Meta } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroup';
import { Checkbox } from '../Checkbox/Checkbox';

export default {
  component: CheckboxGroup,
  title: 'Components/Data Entry/Checkbox Group',
  tags: ['autodocs']
} as Meta;

export const UsingArray = {
  args: {
    checkboxes: [
      {
        id: 'ham',
        label: 'Ham',
        value: 'ham'
      },
      {
        id: 'pineapple',
        label: 'Pineapple',
        value: 'pineapple'
      }
    ]
  }
};

export const UsingChildren = (args: any) => (
  <CheckboxGroup {...args}>
    <Checkbox id="ham" label="Ham" value="ham" />
    <Checkbox id="pineapple" label="Pineapple" value="pineapple" />
  </CheckboxGroup>
);
