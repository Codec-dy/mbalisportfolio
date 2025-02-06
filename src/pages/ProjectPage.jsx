import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../assets/assets'
import { PortfolioContext } from '../context/portfolioContext'
import ProPageTop from '../components/ProPageTop'

const ProjectPage = () => {
  const [project, setProject] = useState(null)
  const { projectId} = useContext(PortfolioContext);
  const {id} = useParams()
  useEffect(() => {
    console.log(id);
    const proj = projects.find(proj => proj.id === parseInt(id));
    setProject(proj);
    console.log(proj);
  }, [id]);
  
  return id?(
    <div>
      <ProPageTop project={project}/>
       <div className='sm:max-w-[70%] w-full mx-auto mt-10'><video className='w-full h-[300px] object-cover' src={project?project.vid:''} controls></video></div>
    </div>
  ):"<div>Loading...</div>"
}

export default ProjectPage