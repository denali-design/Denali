/**
 * Defines the Lead component.
 *
 * @file This file defines the Lead component, meant to be a reusable component for that perfect lead intro text.
 * @since 1.0.0
 */

import React, { ReactNode, HTMLProps } from 'react';
import { tv } from 'tailwind-variants';
import '../../App.css';

export interface LeadProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  variety?: 'default' | 'primary' | 'secondary';
}

const lead = tv({
  base: 'text-2xl',
  variants: {
    variety: {
      default: 'type',
      primary: 'type-primary',
      secondary: 'type-secondary'
    }
  },
  defaultVariants: {
    variety: 'default'
  }
});

/**
 * Displays emphasized lead text.
 *
 * @function
 * @param {LeadProps} props - React properties.
 * @returns {React.ReactNode} The rendered lead text.
 */
export const Lead: React.FC<LeadProps> = ({
  children,
  variety,
  className,
  ...rest
}) => {
  const leadClass = lead({ variety: variety || 'default' });

  return (
    <p className={`${leadClass} ${className || ''}`} {...rest}>
      {children}
    </p>
  );
};

export default Lead;
