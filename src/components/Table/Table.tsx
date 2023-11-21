import React from 'react';
import {
  Table as AriaTable,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell
} from 'react-aria-components';
import type { TableProps as AriaTableProps } from 'react-aria-components';
import '../../App.css';

export interface TableColumn {
  name: string;
  key: string;
  isRowHeader?: boolean;
}

export interface TableRow {
  id: string | number;
  [key: string]: any;
}

export interface TableProps extends AriaTableProps {
  columns: TableColumn[];
  rows: TableRow[];
}

const MyTableHeader = ({ columns }: { columns: TableColumn[] }) => (
  <TableHeader className="border-b stroke-alt">
    {columns.map((column) => (
      <Column
        className="py-2"
        key={column.key}
        isRowHeader={column.isRowHeader}
      >
        {column.name}
      </Column>
    ))}
  </TableHeader>
);

const MyRow = ({
  item,
  columns
}: {
  item: TableRow;
  columns: TableColumn[];
}) => (
  <Row>
    {columns.map((column) => (
      <Cell className="border-b py-2 stroke-alt" key={column.key}>
        {item[column.key]}
      </Cell>
    ))}
  </Row>
);

export const Table: React.FC<TableProps> = ({ columns, rows, ...props }) => {
  return (
    <AriaTable
      aria-label="Dynamic Table"
      {...props}
      className="test w-full text-left"
    >
      <MyTableHeader columns={columns} />
      <TableBody items={rows}>
        {(item) => <MyRow item={item} columns={columns} />}
      </TableBody>
    </AriaTable>
  );
};

export default Table;
