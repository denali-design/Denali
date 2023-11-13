import React from 'react';
import '../../App.css';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import { Icon } from '../Icon/Icon';

export interface PaginationProps {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) => {
  // Calculate the total number of pages
  const totalPageCount = Math.ceil(totalCount / pageSize);

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 items in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    // Ensure the next page does not exceed the total page count
    if (currentPage < totalPageCount) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    // Ensure the previous page does not go below 1
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Conditionally set the classes for list items based on paginationType
  const listItemClass =
    'flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-transparent';

  return (
    <ul
      className={classnames('flex items-center justify-center gap-4 p-2', {
        [className!]: className // Non-null assertion for optional className
      })}
    >
      <li>
        <a
          className={classnames(
            'flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-transparent',
            {
              disabled: currentPage === 1
            }
          )}
          onClick={(event) => {
            event.preventDefault();
            onPrevious();
          }}
          href="#"
        >
          <Icon
            aria-hidden="true"
            className="icon"
            name="icon-action-arrowhead-left"
            size="md"
          />
        </a>
      </li>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={`dots-${index}`} className={listItemClass}>
              <Icon
                aria-hidden="true"
                className="icon"
                name="icon-control-more-horizontal"
                size="md"
              />
            </li>
          );
        } else if (pageNumber !== DOTS) {
          return (
            <li key={pageNumber}>
              <a
                className={classnames(listItemClass, {
                  'stroke-secondary': pageNumber === currentPage
                })}
                onClick={(event) => {
                  event.preventDefault(); // Prevent the default link behavior
                  onPageChange(pageNumber as number);
                }}
                href="#"
              >
                {pageNumber}
              </a>
            </li>
          );
        }
      })}

      <li>
        <a
          className={classnames(
            'flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-transparent',
            { disabled: currentPage === totalPageCount }
          )}
          onClick={(event) => {
            event.preventDefault();
            onNext();
          }}
          href="#"
        >
          <Icon
            aria-hidden="true"
            className="icon"
            name="icon-action-arrowhead-right"
            size="md"
          />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
