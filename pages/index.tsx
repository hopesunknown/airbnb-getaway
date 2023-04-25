import Head from 'next/head';
import {InferGetStaticPropsType} from 'next';
import Image from 'next/image';
import Header from './../components/Header';
import Banner from './../components/Banner';
import SmallCard from './../components/SmallCard';
import MediumCard from './../components/MediumCard';
import LargeCard from './../components/LargeCard';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Key } from 'react';

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').
  then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').
  then(
    (res) => res.json()
  )

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}

export default function Home({exploreData, cardsData}: InferGetStaticPropsType<typeof getStaticProps>) {
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
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item: { img: string; distance: string; location: string; }) => (
              <SmallCard 
                key={item.img}
                img={item.img} 
                distance={item.distance} 
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map((item: { img: string; title: string; }) => (
              <MediumCard 
              key={item.img}
              img={item.img} 
              title={item.title}
              />
            ))}
          </div>
        </section>

        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Great Outdoors'
          description='Wishlists curated by GetAway'
          buttonText='Get Inspired'
        />
      </main>
    </>
  )
}
