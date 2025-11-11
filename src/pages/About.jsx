import React from 'react'
import AboutCard from '../components/AboutCard'
import { aboutme, assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col gap-10 bg-white py-10 '>
      <AboutCard colType={'sm:flex-row'} title={'Background'} img={assets.mbali1} text={aboutme.background}/>
      <AboutCard colType={'sm:flex-row-reverse'} title={'Education'} img={aboutme.eduimg} text={aboutme.education} />
      <AboutCard colType={'sm:flex-row'} title={'Skills'} text={aboutme.skills} img={aboutme.skillImg} />
      <AboutCard colType={'sm:flex-row-reverse'} title={'Hobbies'} text={aboutme.hobbies} img={aboutme.hobPic}/>



    </div>
  )
}

export default About