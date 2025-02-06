import React from 'react'
import { Link } from 'react-router-dom'
import Landing from '../pages/Landing'

const Footer = () => {
  return (
    <div className='prata-regular text-left mt-10'>
        <hr className='w-full'/>
        <div className='flex flex-col py-3  justify-between sm:flex-row'>
            <div className='text-xl font-bold'>MBALI'S PORTFOLIO</div>
            <div className='flex flex-col gap-10 text-sm text-gray-600 justify-between  sm:flex-row'>
                <div>+1 765 542 8987<br/><Link to='/'>mbalisportfolio.com</Link><br/></div>
                <div>801 West Road<br/>Richmond, IN, 47374<br/>USA</div>
            </div>
        </div>
    </div>
  )
}

export default Footer