import React from 'react'
import { assets } from '../assets/assets'

const ContactsWidget = ({title,text,img}) => {
  return (
    <div className='flex flex-col items-center self-center justify-start text-white text-wrap px-4 gap-1 h-fit'>
        <img className='w-[30px]' src={img} alt="" />
        <p className='text-xs sm:text-sm'>{title}</p>
        <p className='text-xs sm:text-sm'>{text}</p>
    </div>
  )
}

export default ContactsWidget