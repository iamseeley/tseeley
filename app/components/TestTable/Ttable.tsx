import Link from "next/link";
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
            <th 
            key={idx} 
            className={`px-4  py-2 text-left text-xs font-medium uppercase tracking-wider ${
              column.accessor === 'title' ? 'sticky left-0 bg-neutral-300 ' : ''
            }`}
          >
           {column.header}
           {/* {column.accessor === 'title' ? (
        <div className=" bg-neutral-300">{column.header}</div>
      ) : (
        column.header
      )}
             */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
      {data.map((row, idx) => (
          <tr className='rounded-bl-sm' key={idx}>
            {columns.map((column, colIdx) => (
              <td 
              key={colIdx} 
              className={`px-4 py-2 whitespace-nowrap ${
                column.accessor === 'title' ? 'sticky left-0 even:bg-neutral-300 odd:bg-foreground opacity-100 z-10' : ''
              }`}
            >
                {column.accessor === 'link' ? (
                  row.metadata.type === 'project' ? (
                  
                  <Link className='hover:border-2 border-2 border-transparent hover:border-brand bg-neutral-100 shadow-sm py-1 w-7 flex justify-center rounded-full' href={row.metadata?.[column.accessor]} target="_blank" rel="noopener noreferrer">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </Link>
                ) : (
                  <Link className='hover:border-2 border-2 border-transparent hover:border-brand bg-neutral-100 shadow-sm py-1 w-67 flex justify-center rounded-full' href={row.metadata?.[column.accessor]} rel="noopener noreferrer">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </Link>
                )
                ) : (
                 
                  row.metadata?.[column.accessor]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

