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
import '../../assets/css/App.css';

/**
 * Describes the props for the Grid component with responsive design options.
 *
 * @property {ReactNode} children - The child elements to include in the grid.
 * @property {ResponsiveValue<number>} cols - The number of columns in the grid for different screen sizes.
 * @property {ResponsiveValue<number>} gap - The size of the gap between grid items for different screen sizes.
 */
interface ResponsiveValue<T> {
  default: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

export interface GridProps {
  children: ReactNode;
  cols: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  gap: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6>;
}

/**
 * Responsive Grid component that adapts to screen sizes.
 */
const Grid: React.FC<GridProps> = ({ children, cols, gap }) => {
  const baseColClass = `grid-cols-${cols.default}`;
  const responsiveColClasses = Object.entries(cols)
    .filter(([key]) => key !== 'default')
    .map(([key, value]) => `${key}:grid-cols-${value}`)
    .join(' ');

  const baseGapClass = `gap-${gap.default}`;
  const responsiveGapClasses = Object.entries(gap)
    .filter(([key]) => key !== 'default')
    .map(([key, value]) => `${key}:gap-${value}`)
    .join(' ');

  return (
    <div
      className={`grid ${baseColClass} ${responsiveColClasses} ${baseGapClass} ${responsiveGapClasses}`}
    >
      {children}
    </div>
  );
};

export default Grid;
export { Grid };
