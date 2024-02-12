/**
 * Summary. Defines a Heading component with dynamic tag, class, and ID.
 *
 * Description. This component accepts `level`, `style`, `type`, `name`, and `className` props
 * to render a heading element with dynamically generated class names and an ID in kebab-case.
 * The `style` and `type` props are optional, allowing for flexible styling options.
 *
 * @file   This file defines the Heading component.
 * @since  1.0.0
 */

import React from 'react';
import '../../assets/css/App.css';
import './Heading.css';

type HeadingProps = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'title' | 'body' | 'label';
  type: 'article' | 'app' | 'display';
  name: string;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({
  level,
  style,
  type,
  name,
  className
}) => {
  // Converts name to kebab-case for the ID.
  const generateId = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

  // Generates class names based on props.
  const generateClassNames = () => {
    const classNames = [];
    if (className) classNames.push(className);
    classNames.push(`heading-type-${type}-${style}`);
    return classNames.join(' ');
  };

  // Dynamically selects the heading tag based on the level prop.
  const Tag = level as keyof JSX.IntrinsicElements;

  return (
    <Tag className={generateClassNames()} id={generateId(name)}>
      {name}
    </Tag>
  );
};

export default Heading;
