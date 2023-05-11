import Header from './../components/Header.jsx';
import Footer from './../components/Footer.jsx';

type Props = {};

const Search = (props: Props) => {
  return (
    <div>
      <Header />
      <main className='flex'>
        <section>
          <p>300+ Stays for 5 number of guests</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search;