import Header from './../components/Header.jsx';
import Footer from './../components/Footer.jsx';

type Props = {};

const Search = (props: Props) => {
  return (
    <div>
      <Header />
      <main className='flex'>
        <section>
          <p className='text-xs'>300+ Stays for 5 number of guests</p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in Mars</h1>

          <div className='hidden lg:inline-flex'>
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