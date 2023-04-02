import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Cards from '@/components/Cards';
import Info from '@/components/Info';
import Fleet from '@/components/Fleet';
import Partners from '@/components/Partners';
import Cards2 from '@/components/Cards2';
import Chart from '@/components/Chart';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

export default function Home () {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDarkMode(document.getElementsByTagName('html')[0].classList.contains('dark'));
  }, [])

  return (
    <>
      <Head>
        <title>Drivenow</title>
        <meta name="description" content="Rental Cars at Low, Affordable Rates | Explore our current deals and promotions or start a reservation to find the right vehicle at everyday low rates. Email Offers Don't miss an excuse to hit the road: our latest offers delivered to your inbox. DRIVENOW" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-[120rem] mx-auto overflow-x-hidden'>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Header />
        <Cards />
        <Info />
        <Fleet />
        <Partners />
        <Cards2 />
        <Chart isDarkMode={isDarkMode} />
        <Footer />
      </main>
    </>
  )
}