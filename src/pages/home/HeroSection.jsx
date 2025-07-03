import React from 'react'
import banner from "/assets/image/banner.png"

const HeroSection = () => {
  return (
    <div>
      <img
        src={banner}
        alt="banner-image"
        className='w-full h-full'
        data-aos="zoom-in"
        data-aos-duration="1000"
      />

      <div className='bg-black-primary'>
        <div className='container mx-auto flex flex-col gap-4 py-14 px-6 md:px-8 lg:px-10'>
          <h1
            className='font-dinAlternate text-5xl font-medium'
            data-aos="fade-up"
            data-aos-delay="200"
          >
            MOVIE LIBRARY
          </h1>
          <p
            className='font-openSans text-gray-400 max-w-md'
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection