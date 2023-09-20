import React from 'react'
import beachvid from '../assets/beachVid.mp4'
const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
          <video className='w-full h-full object-cover' src={beachvid} 
          autoPlay
           loop 
           muted/>
    </div>
  )
}

export default Hero
