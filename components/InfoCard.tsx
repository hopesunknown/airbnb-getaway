import Image from 'next/image';

type Props = {}

const InfoCard = (props: {img: string, location: string, title: string, description: string, star: string, price: string, total: string}) => {
  const {img, location, title, description, star, price, total} = props;
  
  return (
    <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
      <Image alt='information card room image' src={img} fill className='objectFit'/>
    </div>
  )
}

export default InfoCard