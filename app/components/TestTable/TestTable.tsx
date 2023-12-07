import { getPosts } from '@/app/db/posts';
import { getProjects } from '@/app/db/projects';
import Table from './Ttable';
import TableNav from './TableNav';
import filteredData from './TableNav'


// export async function getStaticProps() {
  
//   return { props: { initialData: data } };
// }



  const columns = [
    { header: 'Type', accessor: 'type' },
    { header: 'Title', accessor: 'title' },
    { header: 'Date', accessor: 'date' },
    { header: 'URL', accessor: 'link' },
  ];
  
  

export async function MainComponent()  {
  const projectData = await getProjects();
  const postData = await getPosts();

  const data = [...projectData, ...postData];
  
  // Render the filters, search bar, and table
  return (
    <div className='my-2  overscroll-none  bg-foreground rounded-md border border-neutral-400 overflow-x-auto'>
      {/* <div className='sticky left-0'>
        <div className='px-4 pt-4 pb-1 flex flex-row justify-between mb-3 gap-4 '>
            <div>
            
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
      
        </div>
        </div> */}
        <TableNav data={data} />
        <div className='w-full'>
          <Table columns={columns} data={data} />
        </div>
    </div>
  );
};

export default MainComponent;
