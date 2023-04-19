import Head from 'next/head';
import {InferGetStaticPropsType} from 'next';
import Image from 'next/image';
import Header from './../components/Header';
import Banner from './../components/Banner';
import SmallCard from './../components/SmallCard';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData
    }
  }
}

export default function Home({exploreData}: InferGetStaticPropsType<typeof getStaticProps>) {
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
          <div>

          </div>
          {exploreData?.map((item) => (
            <SmallCard 
              key={item.img}
              img={item.img} 
              distance={item.distance} 
              location={item.location}
            />
          ))}
        </section>
      </main>
    </>
  )
}
