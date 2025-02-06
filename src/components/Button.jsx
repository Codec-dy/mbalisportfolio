import React from 'react'

const Button = ({text}) => {
  return (
    <div className='bg-gray-900 max-w-fit py-2 px-10 text-gray-100 hover:bg-white hover:text-black hover:border transition-all duration-[500ms]'>{text}</div>
  )
}

export default Button