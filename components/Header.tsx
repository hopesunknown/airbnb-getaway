import Image from 'next/image';

type Props = {}

const Header = (props: Props) => {
  return (
    <header>

      {/* left section */}
      <div>
        <Image src='' alt='company logo and name' fill/>
      </div>

      {/* middle section */}
      <div>

      </div>

      {/* right section */}
      <div>

      </div>
    </header>
  )
}

export default Header;