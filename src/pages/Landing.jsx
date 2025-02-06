import React from 'react'
import Button from '../components/Button'
import {assets} from '../assets/assets'
import FrontHomepage from '../components/frontHomepage'
import LatestWorks from '../components/LatestWorks'

const Landing = () => {
  return (
    <div >
       <FrontHomepage />
       <LatestWorks />
    </div>
  )
}

export default Landing