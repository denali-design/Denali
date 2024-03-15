/**
 * Defines the GridListItem component.
 *
 * @file This file defines the GridListItem component.
 * @since 1.0.0
 */

import {
  Button,
  GridListItem as AriaGridListItem
} from 'react-aria-components';
import Checkbox from '../Checkbox/Checkbox';
import type { GridListItemProps as AriaGridListItemProps } from 'react-aria-components';

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

export default GridListItem;
