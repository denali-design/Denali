/**
 * Defines the GridList component.
 *
 * @file This file defines the GridList component, designed to display items in a grid layout.
 * @since 1.0.0
 */

import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem
} from 'react-aria-components';

import type {
  CheckboxProps as AriaCheckboxProps,
  GridListItemProps as AriaGridListItemProps,
  GridListProps as AriaGridListProps
} from 'react-aria-components';
import { Button, Checkbox as AriaCheckbox } from 'react-aria-components';

function GridList<T extends object>({
  children,
  ...props
}: AriaGridListProps<T>) {
  return (
    <AriaGridList {...props}>
      <>{children}</>
    </AriaGridList>
  );
}

function GridListItem({ children, ...props }: AriaGridListItemProps) {
  let textValue = typeof children === 'string' ? children : undefined;
  return (
    <AriaGridListItem textValue={textValue} {...props}>
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && <Button slot="drag">≡</Button>}
          {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
            <Checkbox slot="selection" />
          )}
          {children}
        </>
      )}
    </AriaGridListItem>
  );
}

function Checkbox({ children, ...props }: AriaCheckboxProps) {
  return (
    <AriaCheckbox {...props}>
      {({ isIndeterminate }) => (
        <>
          <div className="checkbox">
            <svg viewBox="0 0 18 18" aria-hidden="true">
              {isIndeterminate ? (
                <rect x={1} y={7.5} width={15} height={3} />
              ) : (
                <polyline points="1 9 7 14 15 4" />
              )}
            </svg>
          </div>
          {children}
        </>
      )}
    </AriaCheckbox>
  );
}

export default GridList;
