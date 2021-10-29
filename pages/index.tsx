import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import Hero from '../components/hero/hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Buf | The CLI</title>
      </Head>

      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
