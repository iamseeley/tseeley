import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const TableStyles = cva(
  'min-w-full divide-y divide-gray-200', // Basic table styles
  {
    variants: {
      striped: {
        true: 'divide-y divide-gray-200', // Add striping effect
      },
      // ... other variants like 'rounded', 'bordered', etc. ...
    },
    defaultVariants: {
      // Define default variants if needed
    },
  }
);

type TableSubs = {
    children: ReactNode,
}

export const TableHead: React.FC<TableSubs> = ({ children }) => <thead>{children}</thead>;
export const TableBody: React.FC<TableSubs> = ({ children }) => <tbody>{children}</tbody>;
export const TableRow: React.FC<TableSubs> = ({ children }) => <tr>{children}</tr>;
export const TableCell: React.FC<TableSubs> = ({ children }) => <td className="px-6 py-4">{children}</td>;


export interface TableProps extends VariantProps<typeof TableStyles> {
    children: ReactNode;
    // ... other custom props as needed ...
  }
  
  export default function Table({ children, ...props }: TableProps) {
    return (
      <table className={TableStyles(props)}>
        {children}
      </table>
    );
  }
  