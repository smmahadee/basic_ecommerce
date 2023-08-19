import React, { createContext, useContext, ReactNode } from 'react';

interface TableContextProps {
  columns: string;
}

const TableContext = createContext<TableContextProps | undefined>(undefined);

interface TableProps {
  columns: string;
  children: ReactNode;
  className?: string;
}

function Table({ columns, children, className }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div role='table' className={`bg-white rounded-md ${className}`}>
        {children}
      </div>
    </TableContext.Provider>
  );
}

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

function Header({ children, className }: HeaderProps) {
  const { columns } = useContext(TableContext)!;
  const headerStyle = {
    gridTemplateColumns: columns,
  };

  return (
    <div
      role='row'
      className={`grid gap-6 items-center transition-none  uppercase border-b border-grey-300 ${className}`}
      style={headerStyle}
    >
      {children}
    </div>
  );
}

interface RowProps {
  children: ReactNode;
  className?: string;
}

function Row({ children, className }: RowProps) {
  const { columns } = useContext(TableContext)!;
  const rowStyle = {
    gridTemplateColumns: columns,
  };

  return (
    <div
      role='row'
      className={`grid gap-6 items-center transition-none py-[15px] px-3 text-sm font-medium border-b border-grey-100 ${className}`}
      style={rowStyle}
    >
      {children}
    </div>
  );
}

interface BodyProps<T> {
  data: T[];
  render: (item: T, index: number) => ReactNode;
  emptyMessage?: string;
}

function Body<T>({
  data,
  render,
  emptyMessage = 'No data to show at the moment',
}: BodyProps<T>) {
  if (!data?.length) return <p className='py-4 text-center'>{emptyMessage}</p>;

  return <section className='overflow-auto'>{data.map(render)}</section>;
}

interface FooterProps {
  children: ReactNode;
}

function Footer({ children }: FooterProps) {
  return <footer className='flex justify-center p-4'>{children}</footer>;
}

interface TableComponent extends React.FC<TableProps> {
  Header: React.FC<HeaderProps>;
  Row: React.FC<RowProps>;
  Body: <T>(props: BodyProps<T>) => JSX.Element;
  Footer: React.FC<FooterProps>;
}

const TableComponent: TableComponent = Table as TableComponent;
TableComponent.Header = Header;
TableComponent.Row = Row;
TableComponent.Body = Body;
TableComponent.Footer = Footer;

export default TableComponent;
