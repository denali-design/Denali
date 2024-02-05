/**
 * Defines the SelectField component.
 *
 * @file This file defines the SelectField component, designed for single or multiple selections from a list.
 * @since 1.0.0
 */

import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue
} from 'react-aria-components';
import type {
  ListBoxItemProps,
  SelectProps,
  ValidationResult
} from 'react-aria-components';
import { FieldError, Text } from 'react-aria-components';
import Icon from '../Icon/Icon';
import './SelectField.css';
import '../../assets/css/App.css';
import '../../assets/css/common-styles/forms/inputs.css';
import '../../assets/css/common-styles/popover.css';

interface SelectFieldProps<T extends object>
  extends Omit<SelectProps<T>, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

function SelectField<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectFieldProps<T>) {
  return (
    <>
      <Select className="form-group form-group--select" {...props}>
        <Label className="form-group__label form-group__label--static px-3">
          {label}
        </Label>
        <Button className="has-value-stroke flex w-full items-center justify-between px-3 outline-none">
          <SelectValue className="no-inner-stroke" />
          <span aria-hidden="true">
            <Icon color="default" name="icon-action-arrowhead-down" size="md" />
          </span>
        </Button>
        <FieldError>{errorMessage}</FieldError>
        <Popover className="popover">
          <ListBox className="w-full outline-none" items={items}>
            {children}
          </ListBox>
        </Popover>
      </Select>
      {description && (
        <Text className="input-description" slot="description">
          {description}
        </Text>
      )}
    </>
  );
}

/**
 * Represents an item in the SelectField.
 *
 * @param {ListBoxItemProps} props - The properties passed to the ListBoxItem component.
 * @returns {JSX.Element} The ListBoxItem component for the SelectField.
 */
function SelectItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        `select-item w-full ${isFocused ? 'focused' : ''} ${
          isSelected ? 'selected' : ''
        }`
      }
    />
  );
}

export { SelectItem, SelectField as default };
