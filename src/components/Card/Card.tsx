/**
 * Defines the Card component.
 *
 * @file This file defines the Card component. It's designed to be a container for child objects, including other React components.
 * The component supports custom class names through props.
 * @since 1.0.0
 */
import React from 'react';
import '../../assets/css/App.css';
import './Card.css';

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  const classes = `card canvas type ${className || ''}`.trim();
  return <div className={classes}>{children}</div>;
};

export default Card;
