import Image from 'next/image';

type Props = {}

const LargeCard = (props: {img: string, title: string, description: string, buttonText: string}) => {
  const {img, title, description, buttonText} = props;

  return (
    <section className='relative py-16 cursor-pointer'>
      <div className='relative h-96 min-w-[300px]'>
        <img src={img} alt='large card with vacation type info' className='rounded-2xl object-cover fill' />
      </div>
      <div className='absolute top-32 left-12'>
        <h3 className='text-4xl mb-3 w-64'>{title}</h3>
        <p>{description}</p>
        <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
      </div>
    </section>
  )
}

export default LargeCard;