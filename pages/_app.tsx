import React from 'react'
import type { AppProps } from 'next/app'
import '@royalnavy/fonts'
import { createGlobalStyle } from 'styled-components'

import '../global.scss'

const GlobalStyle = createGlobalStyle``

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
