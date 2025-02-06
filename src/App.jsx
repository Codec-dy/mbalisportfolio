import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProjectPage from './pages/ProjectPage'
import Certificates from './pages/Certificates'
import Certificate from './pages/Certificate'
import Footer from './components/Footer'
import GraphicDesign from './pages/GraphicDesign'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 sm:px-[5vw] '>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/project/graphicdesign/:id" element={<GraphicDesign/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
