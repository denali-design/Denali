/**
 * @file   This file defines the Checkbox component.
 * @since  1.0.0
 */

import { Checkbox as AriaCheckbox } from 'react-aria-components';
import { Icon } from '../Icon/Icon';
import type { CheckboxProps as AriaCheckboxProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import '../../App.css';

export interface CheckboxProps extends AriaCheckboxProps {
  label: string;
  checkColor?: string;
}

const checkbox = tv({
  base: 'flex h-6 w-6 items-center justify-center rounded',
  variants: {
    state: {
      selected:
        'bg-brand-primary border border-brand-primary fill-current text-white',
      disabled: 'border-black border opacity-50 fill-current text-black',
      invalid: 'bg-white border border-danger-base fill-current text-danger',
      default: 'bg-white border border-black fill-current text-black'
    }
  },
  defaultVariants: {
    state: 'default'
  }
});

/**
 * Handles rendering a checkbox with dynamic styles based on its state.
 *
 * @param {CheckboxProps} props - Properties passed to the component.
 * @returns {JSX.Element} The rendered Checkbox component.
 */
function Checkbox({ ...props }: CheckboxProps) {
  return (
    <AriaCheckbox {...props} className="flex gap-2">
      {({ isIndeterminate, isSelected, isDisabled, isInvalid }) => {
        let state: 'default' | 'selected' | 'disabled' | 'invalid' = 'default';
        let icon: string | null = null;

        if (isSelected) {
          state = 'selected';
          icon = 'icon-control-check';
        } else if (isDisabled) {
          state = 'disabled';
          icon = 'icon-action-decline';
        } else if (isInvalid) {
          state = 'invalid';
        } else if (isIndeterminate) {
          icon = 'icon-control-remove';
        }

        return (
          <>
            <div className={checkbox({ state })}>
              {icon && (
                <Icon
                  aria-hidden="true"
                  className="no-pointer-events" // Add the new class here
                  color="default"
                  name={icon}
                  size="sm"
                />
              )}
            </div>
            {props.label}
          </>
        );
      }}
    </AriaCheckbox>
  );
}

export default Checkbox;
export { Checkbox };
