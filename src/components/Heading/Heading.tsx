/**
 * Heading Component
 *
 * Provides a styled and customizable heading component.
 * Allows flexibility to maintain semantic HTML structure while applying optional styles.
 *
 * @file   This file defines the Heading component.
 * @since  1.0.0
 */

import { ElementType, forwardRef, HTMLAttributes, memo } from 'react';
import { tv } from 'tailwind-variants';
import '../../App.css';

/**
 * Configuration object for Tailwind Variants, defining the styles for the Heading component.
 */
export const heading = tv({
  base: '',
  variants: {
    level: {
      1: 'text-5xl my-2 font-bold',
      2: 'text-3xl mt-4 mb-2 font-medium',
      3: 'text-xl font-semibold',
      4: 'text-xl',
      5: 'text-lg',
      6: 'text-base'
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black'
    }
  }
});

/**
 * @typedef {Object} HeadingProps
 * @extends {HTMLAttributes<HTMLElement>}
 *
 * @property {1|2|3|4|5|6} [level] - The semantic level of the heading.
 * @property {1|2|3|4|5|6} [styleLevel] - The visual style level of the heading.
 * @property {('thin'|'extralight'|'light'|'normal'|'medium'|'semibold'|'bold'|'extrabold'|'black')} [fontWeight] - Specifies the font weight of the heading.
 */
export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  styleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  fontWeight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
}

/**
 * Maps heading levels to HTML heading tags.
 */
const HeadingTagMap: Record<1 | 2 | 3 | 4 | 5 | 6, ElementType> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6'
};

/**
 * Renders a heading element (`h1` to `h6`) with optional styles.
 *
 * @param {HeadingProps} props - The properties of the heading.
 * @property {number} [props.level] - Specifies the semantic level of the heading.
 * @property {number} [props.styleLevel] - Specifies the visual style level of the heading.
 * @property {string} [props.fontWeight] - Specifies the font weight of the heading.
 * @property {React.Ref} ref - A reference to the wrapped heading element.
 *
 * @returns {React.Element} The rendered heading element.
 */
export const Heading = memo(
  forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    const {
      children,
      level = 1,
      styleLevel = level,
      fontWeight,
      className,
      ...domProps
    } = props;

    /**
     * Determines the appropriate HTML tag for the heading level.
     */
    const Element = HeadingTagMap[level];

    /**
     * Determines the applied style level, defaulting to the semantic level.
     */
    const appliedStyleLevel = styleLevel || level;

    /**
     * Computes the Tailwind CSS class string based on the given props.
     */
    const computedClass = heading({
      level: appliedStyleLevel,
      weight: fontWeight
    });

    return (
      <Element
        {...domProps}
        className={`${computedClass} ${className || ''}`}
        ref={ref}
      >
        {children}
      </Element>
    );
  })
);

export default Heading;
