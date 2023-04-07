import Image from 'next/image';
import {MagnifyingGlassCircleIcon} from '@heroicons/react/24/solid';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

      {/* left section */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image 
          src='/./../public/logo.png' 
          alt='company logo and name' 
          // style={{objectFit:'contain', objectPosition:'left'}}
          height={50}
          width={50}
          priority
        />
      </div>

      {/* middle section */}
      <div className='flex-grow items-center md:border-2 rounded-full py-2 md:shadow-xl'>
        <input className='pl-5 bg-transparent outline-none' type='text' placeholder='Search' />
        <MagnifyingGlassCircleIcon className='hidden md:inline-flex h-8 bg-sky-600 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      {/* right section */}
      <div>

      </div>
    </header>
  )
}

export default Header;