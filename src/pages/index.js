import Head from 'next/head';
import Hero from '../screens/hero';
import Layout from '../screens/layout';
import MoreInfo from "../screens/moreInfo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Toa Chai | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Hero />
          <MoreInfo />
      </Layout>
    </>
  );
}
