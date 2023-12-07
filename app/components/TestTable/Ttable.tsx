
// Define Props for the Table Component
export interface TableColumn {
  header: string;
  accessor: string; // Key matching with data object
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
}

// Table Component
const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="table min-w-full divide-y divide-neutral-400">
      <thead className='bg-neutral-300'>
        <tr>
          {columns.map((column, idx) => (
            <th key={idx} className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr className='rounded-bl-sm' key={idx}>
            {columns.map((column, colIdx) => (
              <td key={colIdx} className="px-4 py-2 whitespace-nowrap rounded-bl-sm">
                {/* Access the metadata property from row */}
                {row.metadata && row.metadata[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

