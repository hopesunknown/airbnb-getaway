import React from 'react';
import Image from 'next/image';

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image 
        src='/./../public/vacationhomebanner.jpeg' 
        alt='banner image' 
        fill 
        style={{objectFit: 'cover'}} 
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>GetAway there fast and then take it slow.</p>
        <p className='text-sm sm:text-lg'>Find your next adventure.</p>
        <button className='text-sky-600 bg-white px-8 py-4 my-3 shadow-md rounded-full font-bold hover:shadow-lg hover:scale-105 transition duration-150'>Explore Rentals</button>
      </div>
    </div>
  )
}

export default Banner;