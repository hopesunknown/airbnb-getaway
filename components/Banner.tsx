import React from 'react';
import Image from 'next/image';

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image 
        src='' 
        alt='banner image' 
        fill 
        style={{objectFit: 'cover'}} 
      />
    </div>
  )
}

export default Banner;