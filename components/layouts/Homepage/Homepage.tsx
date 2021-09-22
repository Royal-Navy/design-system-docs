import React from 'react'
import Head from 'next/head'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { FooterProps } from '../../presenters/Docs/Footer'
import { MastheadProps } from '../../presenters/Docs/Masthead'
import { StyledBody } from '../Legacy/partials/StyledBody'
import { StyledMain } from './partials/StyledMain'
import { StyledMastheadWrapper } from '../Legacy/partials/StyledMastheadWrapper'
import { StyledPageWrapper } from '../Legacy/partials/StyledPageWrapper'

export interface LayoutHomepageProps {
  footer: React.ReactElement<FooterProps>
  masthead: React.ReactElement<MastheadProps>
  pageBanner?: React.ReactElement<ComponentWithClass>
  title: string
}

export const LayoutHomepage: React.FC<LayoutHomepageProps> = ({
  children,
  footer,
  masthead,
  pageBanner,
  title,
}) => (
  <>
    <Head>
      <title>{title} | Royal Navy Design System</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script type="text/javascript" src="/static/newrelic.js" />
    </Head>
    <StyledPageWrapper>
      {pageBanner}
      <StyledMastheadWrapper>{masthead}</StyledMastheadWrapper>
      <StyledBody>
        <StyledMain>{children}</StyledMain>
      </StyledBody>
      {footer}
    </StyledPageWrapper>
  </>
)

LayoutHomepage.displayName = 'LayoutHomepage'