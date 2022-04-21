import Footer from './Footer'
import Navbar from './Navbar'
import fav from '../public/images/favicon.ico'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={fav} />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main> {children}</main>
      <Footer />
    </>
  )
}
