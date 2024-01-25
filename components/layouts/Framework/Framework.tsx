import React, { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import { Masthead } from '../../presenters/Framework/Masthead'
import { Sidebar } from '../../presenters/Framework/Sidebar'
import { StyledMain } from './partials/StyledMain'
import { useDesignSystemVersion } from '../../../hooks/useDesignSystemVersion'

export interface LayoutFrameworkProps {
  children: React.ReactNode
  title?: string
  navigation: React.ReactNode | React.ReactNode[]
}

export const LayoutFramework: React.FC<LayoutFrameworkProps> = ({
  children,
  title = 'Royal Navy Design System',
  navigation,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { version } = useDesignSystemVersion()

  return (
    <>
      <Script src="/static/newrelic.js" strategy="beforeInteractive" />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Masthead
        title="Royal Navy Design System"
        version={version || '0.1.0'}
        onToggle={(_) => setIsOpen(!isOpen)}
      />
      <Sidebar
        title="Compound Timeline"
        onToggle={(_) => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        {navigation}
      </Sidebar>
      <StyledMain>{children}</StyledMain>
    </>
  )
}

LayoutFramework.displayName = 'LayoutFramework'
