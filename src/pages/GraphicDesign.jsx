import React, { useContext, useEffect, useState } from 'react';
import { graphicDesignImages, projects } from '../assets/assets';
import ProPageTop from '../components/ProPageTop';
import { PortfolioContext } from '../context/portfolioContext';
import ViewGallery from '../components/viewGallery';
import { useParams } from 'react-router-dom';

const GraphicDesign = () => {
    const [project, setProject] = useState(null)
    const { projectId,} = useContext(PortfolioContext);
    const {id} = useParams()
    useEffect(() => {
      console.log(id);
      const proj = projects.find(proj => proj.id === parseInt(id));
      setProject(proj);
      console.log(proj);
    }, [id]);
    

    return project?(
    <div className='min-h-[70vh]'>
      <ProPageTop project={project}/>
      <div className="mt-5"> <ViewGallery type={'graphicDesign'}/></div>
    </div>
  ):<div>Loading...</div>;
};

export default GraphicDesign;