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
    <div className='my-2  bg-foreground rounded-md border border-neutral-400 overflow-x-auto'>
        <div className='px-4 pt-4 flex flex-row justify-between mb-4 gap-4 sticky left-0'>
            <div>
            {/* <label className='font-medium' htmlFor='works'>Works </label> */}
            <select className=' bg-transparent border border-neutral-400 rounded-md pl-2 py-1 focus:outline-none focus:border-gray-500' id='works' name='works'>
              
                <option onClick={() => handleFilterChange('all')}>All</option>
                <option onClick={() => handleFilterChange('project')}>Projects</option>
                <option onClick={() => handleFilterChange('post')}>Posts</option>
            </select>
            </div>
            <input className='pl-2 rounded-md w-40 border bg-transparent border-neutral-400' type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
      {/* Display tags and handle tag selection */}
        </div>
        <div className='table-fixed w-full '>
      <Table columns={columns} data={filteredData} />
      </div>
    </div>
  );
};

export default MainComponent;
