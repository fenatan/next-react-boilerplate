import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/globals';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React com Next</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project with react and NextJS"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
