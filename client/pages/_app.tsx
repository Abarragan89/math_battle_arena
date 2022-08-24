import '../styles/globals.css'
import Layout from '../components/Layout'
import React from 'react'
import SocketsProvider from '../context/socket.context';

function MyApp({ Component, pageProps }) {
  return (
    <SocketsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SocketsProvider>

  )
}

export default MyApp
