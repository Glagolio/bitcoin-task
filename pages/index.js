import Price from '../components/Price/Price';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bitcoin</title>
      </Head>
      <Price />
    </>
  );
}
