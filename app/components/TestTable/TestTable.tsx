import { getPosts } from '@/app/db/posts';
import { getProjects } from '@/app/db/projects';
import Table from './Ttable';
import TableNav from './TableNav';
import filteredData from './TableNav'





export async function MainComponent()  {
  const projectData = await getProjects();
  const postData = await getPosts();

  const data = [...projectData, ...postData];
  
  // Render the filters, search bar, and table
  return (
    <div className='my-2  overscroll-none  bg-foreground rounded-md border border-neutral-400 overflow-x-auto'>
        <TableNav data={data} />
    </div>
  );
};

export default MainComponent;
