import React from 'react'
import Button from '../components/Button'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const FrontHomepage = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:items-start items-center justify-center gap-4'>
        <div>
            <img src={assets.hero_img} alt="umage" />
        </div>
        <div className='flex flex-col gap-4 justify-between h-[100%]'>
            <p className='text-left prata-regular text-gray-500 text-sm leading-[2]'>Welcome to Mbali's Portfolio, where each piece tells a unique story. Experience the blend of creativity and passion through a visual journey that captivates minds and hearts.</p>
            <Link to='/projects'><Button text='Explore' /></Link>
        </div>
    </div>
  )
}

export default FrontHomepage