import React from 'react'
import { assets } from '../assets/assets'

const AboutCard = ({colType,title,text}) => {
  return (
    <div className={`w-full flex flex-col ${colType} items-start gap-2 max-w-[420px] justify-center m-auto`}>
        <div className='w-300'>
            <img src={assets.mbali_pic} alt="" className='rounded-full w-24 h-24'/>
        </div>
        <div className='flex flex-col'>
            <p className='text-gray-700 text-2xl font-semibold'>{title}</p>
            <p className='text-gray-500 text-sm'>{text}</p>
        </div>
    </div>
  )
}

export default AboutCard