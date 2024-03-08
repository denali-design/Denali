/**
 * Defines the Switch component.
 *
 * @file This file defines the Switch component, meant to be a reusable and accessible switch control.
 * @since 1.0.0
 */

import { Switch as AriaSwitch } from 'react-aria-components';
import type { SwitchProps as AriaSwitchProps } from 'react-aria-components';
import '../../assets/css/App.css';
import './Switch.css';

interface SwitchProps extends Omit<AriaSwitchProps, 'children'> {
  children: React.ReactNode;
}

function Switch({ children, ...props }: SwitchProps) {
  return (
    <AriaSwitch className="switch" {...props}>
      <div className="switch__indicator" />
      {children}
    </AriaSwitch>
  );
}

export default Switch;
