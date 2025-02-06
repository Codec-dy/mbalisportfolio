import React, { useContext, useState } from 'react'
import ProjectCard from './ProjectCard';
import { use } from 'react';
import { graphicDesignImages } from '../assets/assets';
import { PortfolioContext } from '../context/portfolioContext';

const ViewGallery = ({projectChunks,type}) => {
    const [middle, setMiddle] = useState(false);
  const{ chunkProjects} = useContext(PortfolioContext);
    const imgChunks = chunkProjects(Object.keys(graphicDesignImages), Math.ceil(Object.keys(graphicDesignImages).length/3));
    const chunks = type === 'project' ? projectChunks : imgChunks;
  return (
    <div className='flex flex-wrap gap-1 max-w-[1200px] mx-auto'>
    {chunks.map((chunk, index) => {
      const isFirstMiddle = index === 1 && !middle;
      if (isFirstMiddle) {
        setMiddle(true);  
      }
    return (
      <div key={index} className='flex flex-[50%] sm:flex-[30%] flex-col justify-start h-fit'>
        {chunk.map(project => {
        if(type==='project'){
            return <ProjectCard key={project.id} link={project.link?project.link:''} index={middle?index:''} id={project.id} title={project.title} description={project.description} img={project.img}/>
        }else{
            const imageUrl = new URL(project, import.meta.url).href;
            return <img key={project} src={imageUrl} className='max-w-full'  />
        }
        }) }
        
      </div>)
    }       )}
      
  </div>
  )
}

export default ViewGallery