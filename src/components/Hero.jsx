import React from 'react'
import beachvid from '../assets/beachVid.mp4'
const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
          <video className='w-full h-full object-cover' src={beachvid} 
          autoPlay loop  muted />
          <div className=' absolute w-full h-full top-0 left-0 bg-gray-900/30'>
            <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                <h1>Nice Travel</h1>
                <h2>Top 1% Locations Worldwide</h2>
            </div>
          </div>
    </div>
  )
}

export default Hero
