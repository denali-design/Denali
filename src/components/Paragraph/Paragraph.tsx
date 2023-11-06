/**
 * @file   This file defines the Paragraph component.
 * @since  1.0.0
 */

import { forwardRef, HTMLAttributes, memo } from 'react';
import { tv } from 'tailwind-variants';
import '../../App.css';

/**
 * @typedef {Object} ParagraphProps
 * @extends {HTMLAttributes<HTMLParagraphElement>}
 *
 * @property {('4xl'|'3xl'|'2xl'|'xl'|'lg'|'base'|'sm'|'xs')} [fontSize] - Specifies the font size of the paragraph.
 * @property {('thin'|'extralight'|'light'|'normal'|'medium'|'semibold'|'bold'|'extrabold'|'black')} [fontWeight] - Specifies the font weight of the paragraph.
 * @property {('black'|'success'|'warning'|'danger'|'info')} [color] - Specifies the text color of the paragraph.
 */
export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  fontSize?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'base' | 'sm' | 'xs';
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
  color?: 'black' | 'success' | 'warning' | 'danger' | 'info';
}

/**
 * Renders a styled paragraph element with configurable properties.
 *
 * @param {ParagraphProps} props - The properties of the paragraph.
 * @property {string} [props.fontSize] - Specifies the font size of the paragraph.
 * @property {string} [props.fontWeight] - Specifies the font weight of the paragraph.
 * @property {string} [props.color] - Specifies the text color of the paragraph.
 * @property {React.Ref} ref - A reference to the wrapped paragraph element.
 *
 * @returns {React.Element} The rendered paragraph element.
 */
export const Paragraph = memo(
  forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {
    const {
      children,
      fontSize = 'base',
      fontWeight = 'normal',
      color = 'black',
      className,
      ...domProps
    } = props;

    // Configuration object for Tailwind Variants, defined internally.
    const paragraphStyles = tv({
      base: 'font-normal dark:text-white text-black',
      variants: {
        size: {
          '4xl': 'text-4xl',
          '3xl': 'text-3xl',
          '2xl': 'text-2xl',
          xl: 'text-xl',
          lg: 'text-lg',
          base: 'text-base',
          sm: 'text-sm',
          xs: 'text-xs'
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
        },
        color: {
          black: 'type',
          success: 'type-success',
          warning: 'type-warning',
          danger: 'type-danger',
          info: 'type-info'
        }
      }
    });

    /**
     * Computes the Tailwind CSS class string based on the given props.
     */
    const computedClass = paragraphStyles({
      size: fontSize,
      weight: fontWeight,
      color: color
    });

    return (
      <p
        {...domProps}
        className={`${computedClass} ${className || ''}`}
        ref={ref}
      >
        {children}
      </p>
    );
  })
);

export default Paragraph;
