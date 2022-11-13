import Head from 'next/head';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title> Home | Countries </title>
      </Head>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </>
  )
}

export default MyApp
