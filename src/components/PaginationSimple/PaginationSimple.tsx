import React from 'react';
import '../../assets/css/App.css';
import classnames from 'classnames';

export interface PaginationSimpleProps {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const PaginationSimple: React.FC<PaginationSimpleProps> = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
  className
}) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);

  // Generate page numbers
  const pageNumbers = Array.from({ length: totalPageCount }, (_, i) => i + 1);

  // If there's only one page, don't render the component
  if (totalPageCount <= 1) {
    return null;
  }

  return (
    <ul
      className={classnames(
        'flex items-center justify-center gap-4 p-2',
        className
      )}
    >
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber} className="p-2">
          <a
            className={classnames(
              'block h-1 w-1 rounded-full p-2 canvas-alt-pressed',
              {
                'ring ring-black ring-offset-2 canvas-secondary':
                  pageNumber === currentPage
              }
            )}
            onClick={(event) => {
              event.preventDefault();
              onPageChange(pageNumber);
            }}
            href="#"
          >
            <span className="sr-only">{`Page ${pageNumber}`}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PaginationSimple;
