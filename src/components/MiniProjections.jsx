import React, { useContext, useState } from 'react'
import { assets,projects } from '../assets/assets'
import { PortfolioContext } from '../context/portfolioContext';
import ProjectCard from './ProjectCard';


const MiniProjections = ({project}) => {
    const { setProjectId,setDisplayProject } = useContext(PortfolioContext);
  return project?(
    <div onClick={()=>{setProjectId(project.id); setDisplayProject(true)}} className='my-8 text-left max-w-[110px] sm:max-w-[200px]'>
        <img src={project.img} className='max-w-[200px] h-[100px]' alt="" />
        <p className='text-sm font-semibold text-gray-500'>{project.title}</p>
        
    </div>
  ):''
}

export default MiniProjections