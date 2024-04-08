/**
 * Defines the List component.
 *
 * @file This file defines the List component, meant to be a reusable and accessible list.
 * @since 1.0.0
 */

import React, { ReactNode } from 'react';
import './List.css'; // Importing the CSS file for additional styling

/**
 * Defines the props for the List component.
 *
 * @prop {"ordered" | "unordered"} listType - Determines the list type.
 * @prop {boolean} styled - Determines if the list is styled with Tailwind CSS. When false, Tailwind's list-none is applied.
 * @prop {boolean} outlineStyle - Enables outline style for nested lists, applied through CSS.
 * @prop {"disc" | "circle" | "square" | "decimal" | "none"} bulletType - The type of bullet for unordered lists or the numbering style for ordered lists.
 * @prop {"list" | "listbox" | "group" | "directory" | "none"} role - ARIA role for the list.
 * @prop {string} className - Additional classes for the list component from Tailwind CSS.
 * @prop {string} title - Optional title for the list.
 * @prop {ReactNode} children - The children nodes of the list, typically list items.
 */
interface ListProps {
  listType?: 'ordered' | 'unordered';
  styled?: boolean;
  outlineStyle?: boolean;
  bulletType?: 'disc' | 'circle' | 'square' | 'decimal' | 'none';
  role?: 'list' | 'listbox' | 'group' | 'directory' | 'none';
  className?: string;
  title?: string;
  children: ReactNode;
}

/**
 * The List component that supports various styling options, including an outline style for nested lists.
 *
 * @param {ListProps} props - The props for the List component.
 * @returns {React.ReactElement} - The rendered list.
 */
const List: React.FC<ListProps> = ({
  listType = 'unordered',
  styled = true,
  outlineStyle = false,
  bulletType,
  role,
  className = '',
  title,
  children
}) => {
  const ListTag = listType === 'ordered' ? 'ol' : 'ul';
  const styledClass = styled
    ? listType === 'ordered'
      ? 'list-disc'
      : 'list-decimal'
    : '';
  const tailwindClasses = styled ? 'type' : 'type list-none';
  const outlineClass = outlineStyle ? 'list--outline' : '';
  const bulletTypeClass = bulletType && styled ? `list--${bulletType}` : '';

  return (
    <div className={className}>
      {title && <p className="mb-2 font-bold type">{title}</p>}
      <ListTag
        className={`${tailwindClasses} ${
          bulletTypeClass ? bulletTypeClass : styledClass
        } ${outlineClass}`}
        role={role}
      >
        {children}
      </ListTag>
    </div>
  );
};

export default List;
