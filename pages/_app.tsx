import type { AppProps } from 'next/app'
import "../styles/tailwind.css"
import "../styles/fonts.css"
import { motion, AnimatePresence } from "framer-motion"
import Layout from '../components/Layout';


function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
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
            transition: { duration: 0.8, ease: 'easeInOut' }
          },
          pageExit: {
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
          }
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
