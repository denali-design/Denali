/**
 * Defines the Figure component.
 *
 * This file defines the Figure component, meant to be a reusable,
 * flexible, and accessible figure element that leverages the Image component.
 *
 * @file   This file defines the Figure component.
 * @since  1.1.0
 */

import { FC, ReactNode } from 'react';
import Image, { ImageProps } from '../Image/Image';

export interface FigureProps {
  /**
   * The caption for the figure.
   */
  caption?: ReactNode;

  /**
   * The props to be passed to the Image component.
   */
  imageProps: ImageProps;
}

/**
 * Renders a figure with an image and an optional caption.
 *
 * @param {FigureProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered figure element.
 */
export const Figure: FC<FigureProps> = ({ caption, imageProps }) => {
  return (
    <figure>
      <Image {...imageProps} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default Figure;
