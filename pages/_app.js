import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../component/Navigation';
import Footer from '../component/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navigation />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
