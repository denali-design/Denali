/**
 * Defines the Image component.
 *
 * This file defines the Image component, meant to be a reusable,
 * flexible, and accessible image element.
 *
 * @file   This file defines the Image component.
 * @since  1.1.0
 */

import { FC, ImgHTMLAttributes } from 'react';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The source URL of the image.
   */
  src: string;

  /**
   * The alt text for the image.
   */
  alt: string;

  /**
   * Additional ARIA roles to improve accessibility.
   */
  role?: string;

  /**
   * Custom event for handling image click.
   */
  onClick?: () => void;

  /**
   * Custom event for handling image load errors.
   */
  onError?: () => void;
}

/**
 * Renders an image with given src and alt text.
 *
 * @param {ImageProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered image element.
 */
export const Image: FC<ImageProps> = ({
  src,
  alt,
  role,
  onClick,
  onError,
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={alt}
      role={role}
      onClick={onClick}
      onError={onError}
      {...rest}
    />
  );
};

export default Image;
