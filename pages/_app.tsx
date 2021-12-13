import React from 'react'
import type { AppProps } from 'next/app'
import '@defencedigital/fonts'
import { selectors } from '@defencedigital/design-tokens'
import { GlobalStyleProvider } from '@defencedigital/react-component-library'
import { createGlobalStyle } from 'styled-components'

const { color } = selectors

const AppGlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-size: 100% !important;
  }

  a {
    color: ${color('action', '500')};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <GlobalStyleProvider>
      <AppGlobalStyle />
      <Component {...pageProps} />
    </GlobalStyleProvider>
  )
}
