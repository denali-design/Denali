/**
 * @file   This file defines the Checkbox component.
 * @since  1.0.0
 */

import { Checkbox as AriaCheckbox } from 'react-aria-components';
import type { CheckboxProps as AriaCheckboxProps } from 'react-aria-components';
import { Icon } from '../Icon/Icon';
import '../../assets/css/App.css';
import './Checkbox.css';

// Extend the CheckboxProps from 'react-aria-components' to include a description prop
interface CheckboxProps extends AriaCheckboxProps {
  description?: string;
}

function Checkbox({ children, description, ...props }: CheckboxProps) {
  return (
    <div>
      <AriaCheckbox {...props}>
        {({ isIndeterminate }) => (
          <>
            <div className="checkbox">
              {isIndeterminate ? (
                <Icon
                  aria-hidden="true"
                  className="no-pointer-events"
                  color="on-vivid"
                  name="icon-control-remove"
                  size="sm"
                />
              ) : (
                <Icon
                  aria-hidden="true"
                  className="no-pointer-events"
                  color="on-vivid"
                  name="icon-control-check"
                  size="sm"
                />
              )}
            </div>
            {children}
          </>
        )}
      </AriaCheckbox>
      {description && <p className="checkbox-description">{description}</p>}
    </div>
  );
}

export default Checkbox;
