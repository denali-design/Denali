import React from 'react';
import PropTypes from 'prop-types';
/**
 * Summary. A Subheading component that displays emphasized text.
 *
 * @file   This files defines the Subheading React component.
 * @since  1.0.0
 */

/**
 * Subheading text.
 *
 * @function
 * @param {Object} props - React properties.
 * @param {React.ReactNode} props.children - The content to display within the lead text.
 * @returns {React.ReactNode} The rendered lead text.
 */
const Subheading = ({ children }) => {
    return <p className="subheading"> {children}</p>;
}


Subheading.propTypes = {
  /** The content to display within the lead text. */
  children: PropTypes.node.isRequired,
};

export default Subheading;