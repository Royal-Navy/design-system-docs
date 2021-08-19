import React from 'react'
import { BreadcrumbsItemProps } from '@royalnavy/react-component-library'
import Head from 'next/head'
import { Nav } from '@royalnavy/react-component-library/dist/types/common/Nav'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { ContentBannerProps } from '../../presenters/Docs/ContentBanner'
import { FooterProps } from '../../presenters/Docs/Footer'
import { MastheadProps } from '../../presenters/Docs/Masthead'
import { OnThisPageProps } from '../../presenters/Docs/OnThisPage'
import { SidebarProps } from '../../presenters/Docs/Sidebar'
import { StyledArticle } from './partials/StyledArticle'
import { StyledBody } from './partials/StyledBody'
import { StyledContent } from './partials/StyledContent'
import { StyledMain } from './partials/StyledMain'
import { StyledMastheadWrapper } from './partials/StyledMastheadWrapper'
import { StyledOnThisPageWrapper } from './partials/StyledOnThisPageWrapper'
import { StyledPageWrapper } from './partials/StyledPageWrapper'
import { StyledSidebarWrapper } from './partials/StyledSidebarWrapper'
import { StyledTitle } from './partials/StyledTitle'

export interface LayoutComponentProps {
  breadcrumbs: React.ReactElement<Nav<BreadcrumbsItemProps>>
  contentBanner: React.ReactElement<ContentBannerProps>
  footer: React.ReactElement<FooterProps>
  masthead: React.ReactElement<MastheadProps>
  onThisPage: React.ReactElement<OnThisPageProps>
  pageBanner?: React.ReactElement<ComponentWithClass>
  sidebar: React.ReactElement<SidebarProps>
  title: string
}

export const LayoutLegacy: React.FC<LayoutComponentProps> = ({
  breadcrumbs,
  contentBanner,
  children,
  footer,
  masthead,
  onThisPage,
  pageBanner,
  sidebar,
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
        <StyledSidebarWrapper>{sidebar}</StyledSidebarWrapper>
        <StyledMain>
          <StyledArticle>
            <div>
              {breadcrumbs}
              <StyledTitle data-testid="layout-legacy-h1">{title}</StyledTitle>
              {contentBanner}
              <StyledContent>{children}</StyledContent>
            </div>
            <StyledOnThisPageWrapper>{onThisPage}</StyledOnThisPageWrapper>
          </StyledArticle>
        </StyledMain>
      </StyledBody>
      {footer}
    </StyledPageWrapper>
  </>
)

LayoutLegacy.displayName = 'LayoutLegacy'
