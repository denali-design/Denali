import type { Meta, StoryObj } from '@storybook/react';

import NumberField from './NumberField';

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  title: 'Components/Data Entry/NumberField',
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof NumberField>;

export const Default: Story = {
  args: {
    label: 'Quantity',
    description: 'How many cats do you have?'
  }
};

export const Percents: Story = {
  args: {
    label: 'Sales Tax',
    description: 'Enter the sales tax in percent',
    defaultValue: 0.05,
    minValue: 0,
    formatOptions: {
      style: 'percent'
    }
  }
};

export const Currency: Story = {
  args: {
    label: 'Total Costs',
    defaultValue: 42,
    step: 0.1,
    minValue: 0,
    formatOptions: {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'code',
      currencySign: 'accounting'
    }
  }
};

export const Invalid: Story = {
  args: {
    label: 'Quantity',
    isInvalid: true,
    errorMessage: 'Enter a valid number.'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Quantity',
    isDisabled: true
  }
};
