import Head from 'next/head';
import Image from 'next/image';
import Header from './../components/Header';
import Banner from './../components/Banner';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>GetAway | Vacation Homes Rental</title>
        <meta name="description" content="GetAway Vacation Homes Rental Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* Pull data from a server - API endpoints */}
        </section>
      </main>

    </>
  )
}
export async function getStaticProps(){
  
}
