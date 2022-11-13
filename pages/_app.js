import Head from 'next/head';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  // for per-page layout
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <meta name="application-name" content="alibaba code challenge" />
        <meta name="description" content="alibaba code challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title> Home | Countries </title>
      </Head>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </>
  )
}

export default MyApp
