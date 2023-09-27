/**
 * @file   This file defines the Button component.
 * @since  1.0.0
 */

import { useRef } from 'react';
import { Button as AriaButton } from 'react-aria-components';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import '../../App.css';

export interface ButtonProps extends AriaButtonProps {
  label: string;
  size?: 'small' | 'large';
  variety?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
}

const button = tv({
  base: 'bg-black rounded text-white',
  variants: {
    color: {
      default: 'bg-black text-white dark:bg-white dark:text-black',
      primary: 'bg-brand-primary text-white',
      success: 'bg-success text-white',
      warning: 'bg-warning text-black',
      danger: 'bg-danger text-white',
      info: 'bg-info text-white'
    },
    size: {
      small: 'py-2 px-2',
      large: 'py-2 px-8',
      default: 'py-2 px-6'
    }
  },
  defaultVariants: {
    size: 'default',
    color: 'default'
  }
});

function Button(props: ButtonProps) {
  let ref = useRef(null);
  let colorVariant: keyof typeof button.variants.color =
    props.variety || 'default';

  return (
    <AriaButton
      ref={ref}
      {...props}
      className={`${button({
        size: props.size || 'default',
        color: colorVariant
      })}`}
    >
      {props.label}
    </AriaButton>
  );
}

export default Button;
export { Button };
