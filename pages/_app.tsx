import type { AppProps } from 'next/app'
import "../styles/tailwind.css"
import "../styles/fonts.css"
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div style={{ "height":"63px" }}></div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
