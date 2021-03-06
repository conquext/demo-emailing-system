import * as React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'

import '@styles/main.css'
import '@styles/nprogress.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loadingmask/dist/react-loadingmask.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
