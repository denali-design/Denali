import React from 'react';
import PropTypes from 'prop-types';

/**
 * Summary. A Lead component that displays emphasized lead text.
 *
 * @file   This files defines the Lead React component.
 * @since  1.0.0
 */

/**
 * Displays emphasized lead text.
 *
 * @function
 * @param {Object} props - React properties.
 * @param {React.ReactNode} props.children - The content to display within the lead text.
 * @returns {React.ReactNode} The rendered lead text.
 */
function Lead({ children }) {
  return (
    <p className="lead">
      {children}
    </p>
  );
}

Lead.propTypes = {
  /** The content to display within the lead text. */
  children: PropTypes.node.isRequired,
};

export default Lead;