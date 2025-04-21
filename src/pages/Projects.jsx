import React, { use, useContext, useEffect, useState } from 'react'
// import { projects, } from '../assets/assets'
import ViewGallery from '../components/ViewGallery';
import { PortfolioContext } from '../context/portfolioContext';
import { getData } from '../components/Utils/crud';

const Projects = () => {
  const { chunkProjects,refresh,api } = useContext(PortfolioContext);
 const [projects, setProjects] = useState([]);
 const [progress, setProgress] = useState([]);
  useEffect(() => {
        getData(`${api}?model=project&getAll=true&status=completed`,setProjects)  
        getData(`${api}?model=project&getAll=true&status=wip`,setProgress)  
    },[]);

  
  // setProjects(projects.filter((project) => project.status === 'completed'))
  const projectChunks = chunkProjects(projects, Math.ceil(projects.length/3));
  const progressChunks = chunkProjects(progress, Math.ceil(progress.length/3));
  return (
    <div  className='min-h-[70vh]'>
         <div className='flex flex-col items-center justify-center sm:max-w-[500px] gap-4 mx-auto'>
            <p className='text-gray-700 text-3xl'>Welcome to My Projects</p>
            <p className='text-gray-500 text-sm'>Here each piece tells a unique story. Experience the blend of creativity and passion through a visual journey that captivates minds and hearts.</p>
        </div>
       <ViewGallery projectChunks={projectChunks} type={'project'}/>
       <div className='my-10 flex flex-col items-center justify-center sm:max-w-[500px] gap-4 mx-auto'>
            <p className='text-gray-700 text-3xl'>Projects in Progress</p>    
        </div>
       <ViewGallery projectChunks={progressChunks} type={'project'}/>
       
    </div>
  )
}


export default Projects