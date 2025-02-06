import React, { useContext, useEffect, useRef, useState } from 'react'
import MiniProjections from './miniProjections'
import { assets } from '../assets/assets'
import ProjectCard from './ProjectCard';
import { PortfolioContext } from '../context/portfolioContext';
import {projects} from '../assets/assets'
import { use } from 'react';


const LatestWorks = () => {

const scrollContainerRef = useRef();
const {projectId, displayProject,setDisplayProject} = useContext(PortfolioContext);
const [proj, setProj] = useState(null);

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 215, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -215, behavior: 'smooth' });
    }
  };

  useEffect(() => {console.log(proj)}, [proj]);

  return (
    <div className='my-8 text-left'>
        <p>My Latest Works</p>
        <div className='border-y justify-between flex flex-row gap-4'>
        <div className='p-2 my-auto' onClick={handlePrev}><img src={assets.dropdown_icon} className='rotate-180' alt="" /></div>
          <div ref={scrollContainerRef} className='min-w-[70%] flex flex-row gap-4 overflow-hidden'>
          {projects.map((project,index)=>(<div key={index}  onClick={()=>{setProj(project)}} ><MiniProjections  project={project}/></div>))}
          
          </div>
          <div className='p-2 my-auto' onClick={handleNext}><img src={assets.dropdown_icon} className='' alt="" /></div>
          

        </div>
        <div onClick={()=>setDisplayProject(false)}  style={{ backgroundColor: 'rgba(0, 0, 0, 0.98)'}} className={`text-gray-50 w-full flex justify-center h-[100vh] z-10 top-0 left-[50%] transform translate-x-[-50%] ${displayProject?'fixed':'hidden'}`}>
          {proj?<ProjectCard img={proj.img} title={proj.title} link={proj.link?proj.link:''} description={proj.description} id={proj.id}/>:''}
        </div>
    </div>
  )
}

export default LatestWorks