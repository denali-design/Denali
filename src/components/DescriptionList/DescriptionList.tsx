/**
 * DescriptionList Component
 *
 * Represents a styled and customizable description list.
 *
 * @file   This file defines the DescriptionList component.
 * @since  1.0.0
 */

import React, {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  Children,
  isValidElement
} from 'react';

import '../../App.css';

/** Base styles for the DescriptionList component. */
const descriptionListStyles = {
  base: 'text-left',
  dt: 'font-bold',
  dd: 'text-gray-500 mb-2'
};

interface DescriptionItemProps extends HTMLAttributes<HTMLElement> {
  term: ReactNode;
  description: ReactNode;
  termClassName?: string;
  descriptionClassName?: string;
}

/**
 * Represents an individual term-description pair.
 */
const DescriptionItem: React.FC<DescriptionItemProps> = React.memo(
  ({ term, description, termClassName = '', descriptionClassName = '' }) => (
    <>
      <dt className={`${descriptionListStyles.dt} ${termClassName}`}>{term}</dt>
      <dd className={`${descriptionListStyles.dd} ${descriptionClassName}`}>
        {description}
      </dd>
    </>
  )
);

interface DescriptionListProps extends HTMLAttributes<HTMLElement> {
  items?: {
    term: ReactNode;
    description: ReactNode;
    termClassName?: string;
    descriptionClassName?: string;
  }[];
}

/**
 * Represents a styled and customizable description list.
 */
const DescriptionList: React.FC<DescriptionListProps> = forwardRef<
  HTMLDListElement,
  DescriptionListProps
>(({ children, items, className = '', ...domProps }, ref) => {
  const renderedItemsFromProp = items?.map((item, index) => (
    <DescriptionItem key={index} {...item} />
  ));

  const renderedChildren = Children.toArray(children).filter(
    (child) => isValidElement(child) && child.type === DescriptionItem
  );

  return (
    <dl
      {...domProps}
      className={`${descriptionListStyles.base} ${className}`}
      ref={ref}
    >
      {renderedItemsFromProp}
      {renderedChildren}
    </dl>
  );
});

export { DescriptionList, DescriptionItem };
