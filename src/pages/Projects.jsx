import React, { useContext } from 'react'
import { projects, } from '../assets/assets'
import ViewGallery from '../components/viewGallery';
import { PortfolioContext } from '../context/portfolioContext';

const Projects = () => {
  const { chunkProjects } = useContext(PortfolioContext);

  const projectChunks = chunkProjects(projects, Math.ceil(projects.length/3));

  return (
    <div  className='min-h-[70vh]'>
         <div className='flex flex-col items-center justify-center sm:max-w-[500px] gap-4 mx-auto'>
            <p className='text-gray-700 text-3xl'>My Portfolio</p>
            <p className='text-gray-500 text-sm'>Welcome to my portfolio. Here you’ll find a selection of my work. Explore my projects to learn more about what I do.</p>
        </div>
       <ViewGallery projectChunks={projectChunks} type={'project'}/>
    </div>
  )
}
            {/* {projects.map(project => <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} img={project.img}/>)}   */}

export default Projects