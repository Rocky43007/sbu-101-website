import Head from 'next/head'
import '../styles/globals.css'
import { Nav } from '../components/Nav'
import Footer from '../components/Footer'

function SBU101App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
        <meta charSet="utf-8" />
        <meta name="author" content="Rocky43007" />
        <meta name="twitter:creator" content="@Rocky43007" key="twhandle" />
        <meta property="og:site_name" content="Rocky43007's Portfolio" key="ogsitename" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>)
}


export default SBU101App
