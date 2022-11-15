import Head from 'next/head';
import Script from "next/script";
import Router from 'next/router';
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import '../styles/globals.css';


// loading progress
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
          page_path: window.location.pathname,
          });
    `}
      </Script>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </>
  )
}

export default MyApp
