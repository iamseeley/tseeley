'use client'

import React, { useState, useMemo } from 'react';
import Table from './Ttable';

const data = [
    { type: 'project', title: 'Project 1', tags: ['React', 'JavaScript'] },
    { type: 'post', title: 'Post 1', tags: ['HTML', 'CSS'] },
    // ... more data ...
  ];

  const columns = [
    { header: 'Type', accessor: 'type' },
    { header: 'Title', accessor: 'title' },
    { header: 'Date', accessor: 'date' },
    { header: 'URL', accessor: 'url' },
    { header: 'Tags', accessor: 'tags' },
  ];
  
  

const MainComponent = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'projects', 'posts'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredData = useMemo(() => {
    return data
      .filter(item => {
        // Filter by type
        if (filter !== 'all' && item.type !== filter) return false;

        // Filter by search term
        if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;

        // Filter by tags
        if (selectedTags.length > 0 && !selectedTags.some(tag => item.tags.includes(tag))) return false;

        return true;
      });
  }, [filter, searchTerm, selectedTags]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTags(prevTags => [...prevTags, tag]);
  };

  // Render the filters, search bar, and table
  return (
    <div className='my-2  overscroll-none  bg-foreground rounded-md border border-neutral-400 overflow-x-auto'>
      <div className='sticky left-0'>
        <div className='px-4 pt-4 pb-1 flex flex-row justify-between mb-3 gap-4 '>
            <div>
            {/* <label className='font-medium' htmlFor='works'>Works </label> */}
            <select 
                className='bg-transparent border border-neutral-400 rounded-md pl-2 w-24 ' 
                id='works' 
                name='works'
                onChange={(e) => handleFilterChange(e.target.value)}  // Use onChange here
              >
              <option value='all'>All</option>
              <option value='project'>Projects</option>
              <option value='post'>Posts</option>
            </select>

            </div>
            <input className='pl-2  rounded-md w-32 border bg-transparent border-neutral-400' type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
      {/* Display tags and handle tag selection */}
        </div>
        </div>
        <div className='w-full'>
          <Table columns={columns} data={filteredData} />
        </div>
    </div>
  );
};

export default MainComponent;
