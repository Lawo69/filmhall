import React, { useEffect, useState } from 'react';
import banner1 from "/assets/image/banner1.png";
import banner2 from "/assets/image/banner2.png";
import banner3 from "/assets/image/banner3.png";

const slides = [banner1, banner2, banner3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img
        src={slides[currentIndex]}
        alt={`banner-${currentIndex}`}
        className='w-full h-full object-cover transition-all duration-700 ease-in-out'
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
  );
};

export default HeroSection;
