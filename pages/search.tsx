import {useRouter} from 'next/dist/client/router';
import Header from './../components/Header.jsx';
import Footer from './../components/Footer.jsx';
import {format} from 'date-fns';

type Props = {};

const Search = (props: Props) => {
  const router = useRouter();
  const {location, startDate, endDate, noOfGuests} = router.query;
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`

  // console.log(router.query);

  return (
    <div>
      <Header />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} guests</p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation flexibility</p>
            <p className='button'>Place type</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and beds</p>
            <p className='button'>More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search;