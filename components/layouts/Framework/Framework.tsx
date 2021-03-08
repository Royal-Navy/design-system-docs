import React, { useState } from 'react'
import Head from 'next/head'

import { Masthead } from '../../presenters/Masthead'
import { Sidebar, SidebarMenu, SidebarMenuItem } from '../../presenters/Sidebar'
import { StyledMain } from './partials/StyledMain'

interface LayoutFrameworkProps {
  children: React.ReactNode
  title?: string
}

export const LayoutFramework: React.FC<LayoutFrameworkProps> = ({
  children,
  title = 'Royal Navy Design System',
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Masthead
        title={title}
        version="2.36.3"
        onToggle={(_) => setIsOpen(!isOpen)}
      />
      <Sidebar
        title="Compound Timeline"
        onToggle={(_) => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <SidebarMenu title="Introduction">
          <SidebarMenuItem href="#home" title="Home" />
        </SidebarMenu>
      </Sidebar>
      <StyledMain>{children}</StyledMain>
    </>
  )
}
