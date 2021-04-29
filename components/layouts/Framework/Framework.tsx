/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import { Masthead } from '../../presenters/Masthead'
import { Sidebar } from '../../presenters/Sidebar'
import { StyledMain } from './partials/StyledMain'

interface LayoutFrameworkProps {
  children: React.ReactNode
  title?: string
  navigation?: React.ReactNode | React.ReactNode[]
}

async function getDesignSystemVersion(): Promise<string | null> {
  try {
    const res = await fetch(
      'https://api.github.com/repos/Royal-Navy/design-system/releases/latest'
    )

    const { tag_name } = await res.json()

    return tag_name
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Failed to fetch the Design System version!', e)
  }

  return null
}

export const LayoutFramework: React.FC<LayoutFrameworkProps> = ({
  children,
  title = 'Royal Navy Design System',
  navigation,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [version, setVersion] = useState(null)

  useEffect(() => {
    ;(async () => {
      setVersion(await getDesignSystemVersion())
    })()
  }, [])

  return (
    <>
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
