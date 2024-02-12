/**
 * Defines the SelectItem component.
 *
 * @file This file defines the SelectItem component, used for making selections from a list.
 * @since 1.0.0
 */

import { ListBoxItem } from 'react-aria-components';
import type { ListBoxItemProps } from 'react-aria-components';
import '../../assets/css/App.css';
import '../../assets/css/common-styles/forms/inputs.css';

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

export default SelectItem;
