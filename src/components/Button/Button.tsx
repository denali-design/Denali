/**
 * @file   This file defines the Button component.
 * @since  1.0.0
 */

import { useRef } from 'react';
import { Button as AriaButton } from 'react-aria-components';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
import Icon from '../Icon/Icon';
import { tv } from 'tailwind-variants';
import '../../App.css';

export interface ButtonProps extends AriaButtonProps {
  label: string;
  size?: 'jumbo';
  iconOnly?: boolean;
  variety?:
    | 'default'
    | 'black'
    | 'outline'
    | 'outline-gray'
    | 'plain'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info';
  iconColor?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'on-vivid';
  iconLeft?: string;
  iconRight?: string;
}

const button = tv({
  base: 'rounded focus:outline focus:focus-stroke-info-vivid focus:outline-2 focus:outline-offset-2',
  variants: {
    color: {
      default:
        'canvas-primary hover:canvas-primary-hover active:canvas-primary-pressed focus:canvas-primary-focus',
      black:
        'canvas-secondary hover:canvas-secondary-hover active:canvas-secondary-pressed focus:canvas-secondary-focus',
      outline:
        'canvas border stroke-secondary hover:canvas-hover active:canvas-pressed focus:canvas',
      'outline-gray':
        'canvas border stroke hover:canvas-hover active:canvas-pressed focus:canvas',
      plain: 'canvas hover:canvas-hover active:canvas-pressed focus:canvas',
      success:
        'canvas-success-vivid hover:canvas-success-vivid-hover active:canvas-success-vivid-pressed focus:canvas-success-vivid-focus disabled:canvas-success-vivid-disabled',
      warning:
        'canvas-warning-vivid hover:canvas-warning-vivid-hover active:canvas-warning-vivid-pressed focus:canvas-warning-vivid-focus disabled:canvas-warning-vivid-disabled',
      danger:
        'canvas-danger-vivid hover:canvas-danger-vivid-hover active:canvas-danger-vivid-pressed focus:canvas-danger-vivid-focus disabled:canvas-danger-vivid-disabled',
      info: 'canvas-info-vivid hover:canvas-info-vivid-hover active:canvas-info-vivid-pressed focus:canvas-info-vivid-focus disabled:canvas-info-vivid-disabled'
    },
    size: {
      jumbo: 'py-2 px-8 text-lg',
      default: 'py-2 px-4'
    }
  },
  defaultVariants: {
    size: 'default',
    color: 'default',
    iconColor: 'default'
  }
});

const defaultProps = {
  iconOnly: false
};

function Button({
  iconOnly,
  label,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) {
  const ref = useRef(null);
  const colorVariant: keyof typeof button.variants.color =
    props.variety || 'default';

  // Handles rendering of the icons, if provided.
  const renderIcon = (iconName: string) => (
    <Icon color={props.iconColor || 'default'} name={iconName} size="sm" />
  );

  return (
    <AriaButton
      ref={ref}
      {...props}
      aria-label={iconOnly ? label : undefined}
      className={`${button({
        size: props.size || 'default',
        color: colorVariant
      })} flex items-center gap-2`}
    >
      {iconLeft && renderIcon(iconLeft)}
      {!iconOnly && label}
      {iconRight && renderIcon(iconRight)}
    </AriaButton>
  );
}

Button.defaultProps = defaultProps;

export default Button;
export { Button };
