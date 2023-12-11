'use client'

import React, { useState, useMemo } from 'react';
import Table from './Ttable';

const columns = [
  { header: 'Type', accessor: 'type' },
  { header: 'Title', accessor: 'title' },
  { header: 'URL', accessor: 'link' },
  { header: 'Description', accessor: 'description' },
  { header: 'Date', accessor: 'date' },
  
];

export default function TableNav({ data }) {
  const [filter, setFilter] = useState('all'); // 'all', 'projects', 'posts'
  const [searchTerm, setSearchTerm] = useState('');


  const filteredData = useMemo(() => {
    return data.filter(item => {
      // Filter by type
      if (filter !== 'all') {
        const itemType = item.metadata?.type?.toLowerCase();
        if (!itemType || itemType !== filter.toLowerCase()) {
          return false;
        }
      }
  
      // Filter by search term
      if (searchTerm) {
        // Accessing title inside metadata
        const title = item.metadata?.title?.toLowerCase() || '';
        if (!title.includes(searchTerm.toLowerCase())) {
          return false;
        }
      }
  
      return true;
    });
  }, [filter, searchTerm, data]);
  

 
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <>
        <div className='sticky left-0'>
          <div className='px-4 pt-4 pb-1 flex flex-row justify-between mb-3 gap-4 '>
            <div>
            
            <select 
                className='bg-transparent border border-neutral-400 rounded-md pl-2 py-1 w-24 ' 
                id='works' 
                name='works'
                onChange={(e) => handleFilterChange(e.target.value)}  // Use onChange here
              >
              <option value='all'>All</option>
              <option value='project'>Projects</option>
              <option value='post'>Posts</option>
            </select>

            </div>
            {/* <input className='pl-2  rounded-md w-32 border bg-transparent border-neutral-400' type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} /> */}
      
          </div>
        </div>
        <div className='w-full'>
          <Table columns={columns} data={filteredData} />
        </div>
        
    </>
  )
}

