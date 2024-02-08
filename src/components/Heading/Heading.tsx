/**
 * @file   This file defines the Heading component.
 * @since  1.0.0
 */

import { ElementType, forwardRef, HTMLAttributes, memo } from 'react';
import { tv } from 'tailwind-variants';
import '../../assets/css/App.css';

/**
 * @typedef {Object} HeadingProps
 * @extends {HTMLAttributes<HTMLElement>}
 *
 * @property {1|2|3|4|5|6} [level] - The semantic level of the heading.
 * @property {h1|h2|h3|h4|h5|h6|title|body|label} [size] - The visual style level of the heading.
 * @property {'article'|'app'|'display'} [type] - The type of heading, which defines the style.
 */
export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'title' | 'body' | 'label';
  type?: 'article' | 'app' | 'display';
  id?: string;
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
 * @property {number} [props.size] - Specifies the visual style level of the heading.
 * @property {React.Ref} ref - A reference to the wrapped heading element.
 *
 * @returns {React.Element} The rendered heading element.
 */
export const Heading = memo(
  forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    const {
      children,
      level = 1,
      size,
      type = 'app',
      className,
      id = '',
      ...domProps
    } = props;

    const effectiveSize = size || HeadingTagMap[level];

    // Configuration object for Tailwind Variants, defined internally.
    const headingStyles = tv({
      base: '',
      variants: {
        type: {
          article: {
            h1: 'text-6xl my-4 font-bold',
            h2: 'text-3xl mt-6 mb-3 font-medium',
            h3: 'text-2xl my-2 font-medium',
            h4: 'text-xl my-2 font-medium',
            h5: 'text-lg my-1 font-medium',
            h6: 'text-base my-1 font-medium',
            body: 'text-sm font-normal',
            title: 'text-sm font-bold',
            label: 'text-xs font-normal'
          },
          app: {
            h1: 'text-4xl font-bold',
            h2: 'text-2xl font-bold',
            h3: 'text-xl font-medium',
            h4: 'text-lg font-medium',
            h5: 'text-base font-medium',
            h6: 'text-base font-normal',
            body: 'text-sm font-normal',
            title: 'text-sm font-bold',
            label: 'text-xs font-normal'
          },
          display: {
            h1: 'text-9xl font-bold',
            h2: 'text-8xl font-bold',
            h3: 'text-7xl font-bold',
            h4: 'text-6xl font-bold',
            h5: 'text-5xl font-bold',
            h6: 'text-4xl font-bold',
            body: 'text-sm font-normal',
            title: 'text-sm font-bold',
            label: 'text-xs font-normal'
          }
        }
      }
    });

    /**
     * Determines the appropriate HTML tag for the heading level.
     */
    const Element = HeadingTagMap[level];

    /**
     * Computes the Tailwind CSS class string based on the given props using the headingStyles object.
     */
    const computedClass =
      headingStyles.variants.type[type]?.[effectiveSize] || headingStyles.base;

    return (
      <Element
        {...domProps}
        className={`${computedClass} ${className || ''}`}
        ref={ref}
        id={id || undefined}
      >
        {children}
      </Element>
    );
  })
);

export default Heading;
