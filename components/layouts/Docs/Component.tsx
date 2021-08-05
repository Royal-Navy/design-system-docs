import React from 'react'
import camelCase from 'lodash/camelCase'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
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

import { Maybe, ContentPageBodyContent } from '../../../graphql'

export interface LayoutComponentProps {
  breadcrumbs: React.ReactElement<Nav<BreadcrumbsItemProps>>
  contentBanner: React.ReactElement<ContentBannerProps>
  footer: React.ReactElement<FooterProps>
  masthead: React.ReactElement<MastheadProps>
  onThisPage: React.ReactElement<OnThisPageProps>
  pageBanner?: React.ReactElement<ComponentWithClass>
  sidebar: React.ReactElement<SidebarProps>
  title: string
  richText?: Maybe<ContentPageBodyContent>
}

export type AssetType = {
  fileName: string
  title: string
  description: string
  url: string
  height: number
  width: number
}

const { color, fontSize, spacing } = selectors

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`

const StyledH2 = styled.h2`
  display: flex;
  align-items: center;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${color('neutral', '200')};
    border-radius: 5px;
    font-size: ${fontSize('s')};
    padding: ${spacing('4')};
    height: 1.5rem;
    margin-right: ${spacing('5')};
  }
`

function getRichTextRenderOptions(links) {
  const assetBlockMap = new Map<string, AssetType>(
    links?.assets?.block?.map((asset) => [asset.sys.id, asset])
  )

  let h2Index = 0

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { description, url, height, width } = assetBlockMap.get(
          node.data.target.sys.id
        )

        return (
          <StyledImage
            alt={description}
            src={url}
            height={height}
            width={width}
          />
        )
      },
      [BLOCKS.HEADING_2]: (_: unknown, content: string[]) => {
        h2Index += 1

        return (
          <StyledH2 id={camelCase(h2Index + content.toString())}>
            <span>{h2Index}</span>
            {content.toString()}
          </StyledH2>
        )
      },
    },
  }
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({
  breadcrumbs,
  contentBanner,
  children,
  footer,
  masthead,
  onThisPage,
  pageBanner,
  sidebar,
  title,
  richText,
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
              <StyledTitle>{title}</StyledTitle>
              {contentBanner}
              <StyledContent>
                {children}
                {richText?.json &&
                  documentToReactComponents(
                    richText.json,
                    getRichTextRenderOptions(richText.links)
                  )}
              </StyledContent>
            </div>
            <StyledOnThisPageWrapper>{onThisPage}</StyledOnThisPageWrapper>
          </StyledArticle>
        </StyledMain>
      </StyledBody>
      {footer}
    </StyledPageWrapper>
  </>
)

LayoutComponent.displayName = 'LayoutComponent'
