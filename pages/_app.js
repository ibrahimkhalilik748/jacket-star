import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../component/Navigation';
import Footer from '../component/Footer';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
