import Head from 'next/head';
import Layout from '../components/layout';
import { siteTitle } from '../common/site-title';

import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle()}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
