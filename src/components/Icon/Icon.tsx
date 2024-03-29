/**
 * Icon Component
 *
 * This file defines a React component that renders an SVG icon with customizable size and color.
 *
 * @file   This file defines the Icon component.
 * @since  1.0.0
 */

import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import { tv } from 'tailwind-variants';
import '../../assets/css/App.css';

/** Map of size options to their respective CSS classes. */
const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-9 h-9',
  xl: 'w-12 h-12'
};

/** Props interface for the Icon component. */
interface IconProps {
  name: string;
  size?: keyof typeof sizeClasses;
  className?: string;
  overrideTitle?: string;
  color?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'on-vivid';
}

/** Mapping of icon variants to their respective tailwind CSS classes. */
const iconVariants = tv({
  variants: {
    color: {
      default: 'type',
      primary: 'type-primary',
      success: 'type-success',
      warning: 'type-warning',
      danger: 'type-danger',
      info: 'type-info',
      'on-vivid': 'type-on-vivid'
    }
  },
  defaultVariants: {
    color: 'default'
  }
});

/**
 * Renders an SVG icon.
 *
 * The Icon component allows for customization in terms of size, color, and additional class styling.
 *
 * @param {IconProps} props - Props for the Icon component.
 * @returns {JSX.Element} Rendered SVG icon.
 */
export const Icon: FC<IconProps> = ({
  name,
  size = 'md',
  className = '',
  overrideTitle,
  color = 'default'
}) => {
  const title = overrideTitle || name;
  const svgPath = `/assets/icons/${name}.svg`;

  return (
    <div className={`${sizeClasses[size]}`}>
      <ReactSVG
        src={svgPath}
        beforeInjection={(svg) => {
          // Remove fixed width and height attributes from the SVG
          svg.removeAttribute('width');
          svg.removeAttribute('height');

          // Add appropriate color and size classes to the SVG
          svg.classList.add(iconVariants({ color }));
          if (className) {
            svg.classList.add(className);
          }

          // Set all SVG paths' fill color to currentColor
          const paths = svg.querySelectorAll('path');
          paths.forEach((path) => {
            path.setAttribute('fill', 'currentColor');
          });

          // Append a title element to the SVG for accessibility
          const titleElement = document.createElement('title');
          titleElement.textContent = title;
          svg.prepend(titleElement);
        }}
        className={`${iconVariants({ color })} ${className}`}
        role="img"
        aria-label={title}
      />
    </div>
  );
};

export default Icon;
