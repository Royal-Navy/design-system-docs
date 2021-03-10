import React from 'react'
import { createGlobalStyle } from 'styled-components'
import '../global.scss'

const GlobalStyle = createGlobalStyle``

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
