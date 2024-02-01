/**
 * Defines the TagGroup component.
 *
 * @file This file defines the TagGroup component, designed to group a collection of tags together.
 * @since 1.0.0
 */

import {
  TagGroup as AriaTagGroup,
  TagList,
  Tag as AriaTag,
  Label
} from 'react-aria-components';
import type {
  TagGroupProps,
  TagListProps,
  TagProps
} from 'react-aria-components';
import { Button, Text } from 'react-aria-components';
import '../../assets/css/App.css';
import './TagGroup.css';

interface AriaTagGroupProps<T>
  extends Omit<TagGroupProps, 'children'>,
    Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

function TagGroup<T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: AriaTagGroupProps<T>) {
  return (
    <AriaTagGroup className="tag-group" {...props}>
      <Label className="tag-group__label">{label}</Label>
      <TagList
        className="tag-group__list"
        items={items}
        renderEmptyState={renderEmptyState}
      >
        {children}
      </TagList>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </AriaTagGroup>
  );
}

function Tag({ children, ...props }: TagProps) {
  let textValue = typeof children === 'string' ? children : undefined;
  return (
    <AriaTag className="tag-group__tag" textValue={textValue} {...props}>
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && <Button slot="remove">ⓧ</Button>}
        </>
      )}
    </AriaTag>
  );
}

export default TagGroup;
export { Tag };
