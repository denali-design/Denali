/**
 * Defines the Flex layout component.
 *
 * Provides a flexible container for laying out items with Tailwind CSS utility classes.
 * Supports various alignment, justification, flex direction, and spacing options.
 *
 * @file   This file defines the Flex component.
 * @since  1.0.0
 */
import React, { ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import '../../App.css';

/**
 * Type definition for FlexProps
 *
 * @typedef {Object} FlexProps
 * @property {ReactNode} children - The content to be displayed inside the Flex container.
 * @property {string} [align='start'] - Sets the align-items property. Can be one of 'start', 'center', 'end', 'baseline', 'stretch'.
 * @property {string} [justify='center'] - Sets the justify-content property. Can be one of 'start', 'center', 'end', 'between', 'around', 'evenly'.
 * @property {string} [direction='row'] - Sets the flex-direction property. Can be one of 'row', 'row-reverse', 'col', 'col-reverse'.
 * @property {string} [gap='space-1'] - Sets the gap between flex items. Can be one of 'space-none', 'space-1', ..., 'space-7'.
 */
export interface FlexProps {
  children: ReactNode;
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  gap?:
    | 'space-none'
    | 'space-1'
    | 'space-2'
    | 'space-3'
    | 'space-4'
    | 'space-5'
    | 'space-6'
    | 'space-7';
}

/**
 * Defines the flex class name generator with Tailwind variants.
 */
const flex = tv({
  base: 'flex',
  variants: {
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch'
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    },
    direction: {
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
      col: 'flex-col',
      'col-reverse': 'flex-col-reverse'
    },
    gap: {
      'space-none': 'gap-0',
      'space-1': 'gap-1',
      'space-2': 'gap-2',
      'space-3': 'gap-3',
      'space-4': 'gap-4',
      'space-5': 'gap-5',
      'space-6': 'gap-6',
      'space-7': 'gap-7'
    }
  },
  defaultVariants: {
    align: 'start',
    justify: 'center',
    direction: 'row',
    gap: 'space-1'
  }
});

/**
 * Handles rendering of the Flex layout container.
 *
 * @param {FlexProps} props - The properties for configuring the Flex component.
 * @returns {ReactNode} The Flex container with applied styles.
 */
const Flex: React.FC<FlexProps> = ({
  children,
  align,
  justify,
  direction,
  gap
}) => {
  return (
    <div
      className={`flex ${flex({
        align,
        justify,
        direction,
        gap
      })} w-[32rem]`}
    >
      {children}
    </div>
  );
};

export default Flex;
export { Flex };
