import React, { useState } from 'react'
import Head from 'next/head'

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
  title = 'MOD.UK Design System',
  navigation,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { version } = useDesignSystemVersion()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script type="text/javascript" src="/static/newrelic.js" />
      </Head>
      <Masthead
        title="MOD.UK Design System"
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
