import React from 'react'
import AboutCard from '../components/AboutCard'
import { aboutme, assets } from '../assets/assets'

const About = () => {
  return (
    <div className='min-h-[70vh] flex flex-col gap-10'>
      <AboutCard colType={'sm:flex-row'} title={'Background'} text={aboutme.background}/>
      <AboutCard colType={'sm:flex-row-reverse'} title={'Education'} text={aboutme.education} />
      <AboutCard colType={'sm:flex-row'} title={'Skills'} text={aboutme.skills} />
      <AboutCard colType={'sm:flex-row-reverse'} title={'Hobbies'} text={aboutme.hobbies} />



    </div>
  )
}

export default About