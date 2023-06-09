import {useRouter} from 'next/dist/client/router';
import Header from './../components/Header.jsx';
import Footer from './../components/Footer.jsx';
import InfoCard from './../components/InfoCard.jsx';
import {format} from 'date-fns';

type Props = {};

interface Data {
  img: string;
  location: string;
  title: string;
  description: string;
  star: string;
  price: string;
  total: string;
}

const Search = ({searchResults}) => {
  const router = useRouter();
  const {location, startDate, endDate, noOfGuests} = router.query;
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`

  // console.log(router.query);
  // console.log(searchResults);

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
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

          <div className='flex flex-col'>
            {searchResults?.map((item: Data) => (
              <InfoCard 
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());

  return {
    props: {
      searchResults,
    }
  }
}