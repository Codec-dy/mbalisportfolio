import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PortfolioContext } from '../context/portfolioContext'


const CertificateCard = ({id,title,institute,date,img,txt, link}) => {
    const {setCert} = useContext(PortfolioContext)
  return (
    <Link onClick={()=>setCert(id)} to={`/certificate`} className="h-fit"><div className='relative text-left py-4 w-[320px] border-b border-t-0 transition-all duration-[200ms] before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-[500ms] hover:before:scale-x-100'>
        <div className='overflow-hidden'><img src={img} alt={title} className='w-full object-cover rounded-lg hover:scale-120 transition-all duration-[500ms]'/></div>
        <h3 className=' font-semibold my-4'>{title}</h3>
        <p className='text-gray-500 text-sm'>{institute}</p>
        <p className='text-gray-500 text-sm'>{txt}</p>
        <div className='mt-10 text-gray-600'>{date}</div>
    </div></Link>
  )
}

export default CertificateCard