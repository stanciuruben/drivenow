import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Cards from '@/components/Cards';
import Info from '@/components/Info';
import Fleet from '@/components/Fleet';

export default function Home () {
  return (
    <>
      <Head>
        <title>Drivenow</title>
        <meta name="description" content="Rental Cars at Low, Affordable Rates | Explore our current deals and promotions or start a reservation to find the right vehicle at everyday low rates. Email Offers Don't miss an excuse to hit the road: our latest offers delivered to your inbox. DRIVENOW" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overflow-x-hidden'>
        <Navbar />
        <Header />
        <Cards />
        <Info />
        <Fleet />
      </main>
    </>
  )
}