/**
 * Defines the Grid component.
 *
 * The Grid component is a flexible and easy-to-use layout component based on Tailwind CSS.
 * It simplifies the process of creating grid-based layouts in React applications.
 *
 * @file This file defines the Grid component.
 * @since 1.0.0
 */
import React, { ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import '../../App.css';

/**
 * Describes the props for the Grid component.
 *
 * @property {ReactNode} children - The child elements to include in the grid.
 * @property {number} [cols] - The number of columns in the grid. Optional.
 * @property {number} [gap] - The size of the gap between grid items. Optional.
 */
export interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Specifies the Tailwind CSS classes for the grid layout.
 *
 * Defines a set of Tailwind CSS classes that are conditionally applied based on the `cols` and `gap` properties.
 */
const grid = tv({
  base: 'grid',
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12'
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6'
    }
  },
  defaultVariants: {
    cols: 1,
    gap: 4
  }
});

/**
 * Creates a grid layout using the provided properties.
 *
 * @param {ReactNode} children - The child elements to render within the grid.
 * @param {number} [cols] - The number of columns in the grid. Optional.
 * @param {number} [gap] - The gap size between grid items. Optional.
 */
const Grid: React.FC<GridProps> = ({ children, cols, gap }) => {
  return (
    <div
      className={`${grid({
        cols,
        gap
      })}`}
    >
      {children}
    </div>
  );
};

export default Grid;
export { Grid };
