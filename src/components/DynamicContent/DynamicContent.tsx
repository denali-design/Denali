/**
 * Defines the WYSIWYG Content layout component.
 *
 * Provides a flexible container for dynamic content generated with a WYSIWYG.
 *
 * @file   This file defines the DynamicContent component.
 * @since  1.0.0
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/App.css';

/**
 * Type definition for DynamicContentProps
 *
 * @typedef {Object} DynamicContentProps
 * @property {string} htmlContent - The HTML content to be displayed inside the DynamicContent container.
 * @property {string} [className] - Additional CSS classes to apply to the container.
 */
export interface DynamicContentProps {
  htmlContent: string;
  className?: string;
}

/**
 * Renders the HTML content generated with a WYSIWYG editor; assumes santized/safe HTML
 *
 * @param {DynamicContentProps} props - The properties for configuring the DynamicContent component.
 * @returns {React.ReactElement} The DynamicContent container with applied styles and rendered HTML content.
 */
const DynamicContent: React.FC<DynamicContentProps> = ({
  htmlContent,
  className
}) => {
  const combinedClassName = `prose-sm md:prose-base w-full ${
    className || ''
  }`.trim();
  return (
    <div
      className={combinedClassName}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

// Using PropTypes for runtime type checking
DynamicContent.propTypes = {
  htmlContent: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default DynamicContent;
export { DynamicContent };
