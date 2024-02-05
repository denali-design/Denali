/**
 * @file   This file defines the CheckboxGroup composite component.
 * @since  1.0.0
 */

import {
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps
} from 'react-aria-components';
import { Text } from 'react-aria-components';
import Checkbox from '../Checkbox/Checkbox';
import '../../assets/css/App.css';

interface CheckboxProps {
  id: string;
  label: string;
  value?: string;
  description?: string;
}

interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children'> {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string;
  checkboxes?: CheckboxProps[];
}

/**
 * Handles rendering a group of checkboxes with optional labels, descriptions, and error messages.
 *
 * @param {CheckboxGroupProps} props - Properties passed to the component.
 * @returns {JSX.Element} The rendered CheckboxGroup component.
 */
function CheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  checkboxes,
  ...props
}: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup {...props} className="flex flex-col gap-2">
      {label}
      {/* Render checkboxes from the array if provided */}
      {checkboxes &&
        checkboxes.map((checkbox) => (
          <Checkbox
            key={checkbox.id}
            id={checkbox.id}
            value={checkbox.value || checkbox.id} // Use value if provided, otherwise fallback to id
          >
            {checkbox.label}
          </Checkbox>
        ))}
      {/* If checkboxes are provided as children */}
      {children}
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </AriaCheckboxGroup>
  );
}

export { CheckboxGroup, Checkbox };
