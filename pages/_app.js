import '../styles/build/styles.css'
import  "../styles/layout.css"

import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
