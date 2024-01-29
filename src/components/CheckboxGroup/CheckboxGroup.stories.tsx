/**
 * CheckboxGroup Stories
 *
 * @file   This file defines stories for the CheckboxGroup composite component.
 * @since  1.0.0
 */

import { Meta } from '@storybook/react';
import { ComponentProps } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import Checkbox from '../Checkbox/Checkbox';

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

export const UsingChildren = (args: ComponentProps<typeof CheckboxGroup>) => (
  <CheckboxGroup {...args}>
    <Checkbox id="ham" value="ham">
      Ham
    </Checkbox>
    <Checkbox id="pineapple" value="pineapple">
      Pineapple
    </Checkbox>
  </CheckboxGroup>
);
