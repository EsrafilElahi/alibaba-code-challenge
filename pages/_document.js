import Document, { Html, Head, Main, NextScript } from 'next/document';


class LocalizedDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // locale is in ctx.locale
    return { ...initialProps, locale: ctx?.locale || 'fa' };
  }

  render = () => (
    <Html dir={this.props.locale === 'en-US' ? 'ltr' : 'rtl'} lang={this.props.locale}>
      <Head>
        <meta name="application-name" content="alibaba code challenge" />
        <meta name="description" content="alibaba code challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <body className='w-full h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default LocalizedDocument;
