import Image from 'next/image';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-indigo-500 shadow-md p-5'>

      {/* left section */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image 
          src='/./../public/logo.png' 
          alt='company logo and name' 
          style={{objectFit:'contain', objectPosition:'left'}}
          height={50}
          width={50}
          priority
        />
      </div>

      {/* middle section */}
        <input type='text' placeholder='Search' />
      <div>

      </div>

      {/* right section */}
      <div>

      </div>
    </header>
  )
}

export default Header;