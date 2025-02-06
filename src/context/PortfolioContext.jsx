import { createContext, useEffect, useState } from "react"


export const PortfolioContext = createContext();



const PortfolioContextProvider = (props) => {
  const [projectId, setProjectId] = useState(0);
  const [displayProject,setDisplayProject] = useState(false);
  const [cert, setCert] = useState(1);
  
  const chunkProjects = (arr, size) => {
      const chunks = [];
      for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
      }
      return chunks;
    };

  const value = {projectId, setProjectId,displayProject,setDisplayProject,cert,setCert,chunkProjects}
  return (
    <PortfolioContext.Provider value={value}>
      {props.children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioContextProvider