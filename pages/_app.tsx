import type { AppProps } from 'next/app'
import "../styles/tailwind.css"
import "../styles/fonts.css"
import Navbar from '../components/Navbar'
import { AnimatePresence, motion   } from 'framer-motion';


function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          id="root"
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: { opacity: 0, },
            pageAnimate: {
              opacity: 1,
              transition: { duration: 0.3, ease: 'easeInOut' }
            },
            pageExit: {
              opacity: 0,
              transition: { duration: 0.3, ease: 'easeInOut' }
            }
          }}
        >
          <div style={{ "height":"63px" }}></div>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp
