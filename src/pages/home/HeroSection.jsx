import React from 'react'
import banner from "/assets/image/banner.png"

const HeroSection = () => {
  return (
    <div>
      <img src={banner} alt="banner-image" className='w-full h-full' />

      <div className='bg-black-primary'>
        <div className='container mx-auto flex flex-col gap-4 py-14 px-6 md:px-8 lg:px-10'>
          <h1 className='font-dinAlternate text-5xl font-medium'>MOVIE LIBRARY</h1>
          <p className='font-openSans text-gray-400 max-w-md'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection