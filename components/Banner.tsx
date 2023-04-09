import React from 'react';
import Image from 'next/image';

type Props = {}

const Banner = (props: Props) => {
  return (
    <div>
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