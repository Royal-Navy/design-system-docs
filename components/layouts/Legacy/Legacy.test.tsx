import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  Breadcrumbs,
  BreadcrumbsItem,
} from '@defencedigital/react-component-library'
import {
  IconBookmark,
  IconLightbulbOutline,
} from '@defencedigital/icon-library'
import Link from 'next/link'
import { render, RenderResult } from '@testing-library/react'

import { LayoutLegacy } from './Legacy'
import { ContentBanner } from '../../presenters/Docs/ContentBanner'
import { Footer } from '../../presenters/Docs/Footer'
import { FooterExternalLink } from '../../presenters/Docs/Footer/FooterExternalLink'
import {
  Masthead,
  MastheadMenu,
  MastheadMenuItem,
} from '../../presenters/Docs/Masthead'
import { OnThisPage } from '../../presenters/Docs/OnThisPage'
import { OnThisPageItem } from '../../presenters/Docs/OnThisPage/OnThisPageItem'
import { PageBanner } from '../../presenters/Docs/PageBanner'
import {
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
} from '../../presenters/Docs/Sidebar'

describe('Component docs layout', () => {
  let wrapper: RenderResult

  describe('all props', () => {
    beforeEach(() => {
      const breadcrumbs = (
        <Breadcrumbs>
          <BreadcrumbsItem link={<Link href="#link-1">Link 1</Link>} />
          <BreadcrumbsItem link={<Link href="link-2">Link 2</Link>} />
        </Breadcrumbs>
      )

      const contentBanner = (
        <ContentBanner
          icon={<IconLightbulbOutline />}
          title="Content banner title"
        >
          Banner
        </ContentBanner>
      )

      const footer = (
        <Footer
          description="description"
          externalLinks={[
            <FooterExternalLink
              icon={<IconBookmark />}
              link={<Link href="#link-3">Link 3</Link>}
            />,
          ]}
          license="license"
          siteLinks={[<Link href="#link-4">Link 4</Link>]}
        />
      )

      const masthead = (
        <Masthead version="3.0.0">
          <MastheadMenu>
            <MastheadMenuItem link={<Link href="#link-5">Link 5</Link>} />
          </MastheadMenu>
        </Masthead>
      )

      const onThisPage = (
        <OnThisPage>
          <OnThisPageItem onClick={() => undefined}>Item 1</OnThisPageItem>
          <OnThisPageItem onClick={() => undefined}>Item 2</OnThisPageItem>
        </OnThisPage>
      )

      const pageBanner = <PageBanner>Page banner</PageBanner>

      const sidebar = (
        <Sidebar title="Components">
          <SidebarMenu title="Menu 1">
            <SidebarMenuItem link={<Link href="#Link 6">Link 6</Link>} />
          </SidebarMenu>
        </Sidebar>
      )

      wrapper = render(
        <LayoutLegacy
          breadcrumbs={breadcrumbs}
          contentBanner={contentBanner}
          footer={footer}
          masthead={masthead}
          onThisPage={onThisPage}
          pageBanner={pageBanner}
          sidebar={sidebar}
          title="Page title"
        >
          Content
        </LayoutLegacy>
      )
    })

    it('should render the breadcrumbs', () => {
      expect(wrapper.getByText('Link 1')).toBeInTheDocument()
      expect(wrapper.getByText('Link 2')).toBeInTheDocument()
    })

    it('should render the content banner', () => {
      expect(wrapper.getByText('Banner')).toBeInTheDocument()
    })

    it('should render the footer', () => {
      expect(wrapper.getByText('description')).toBeInTheDocument()
    })

    it('should render the masthead', () => {
      expect(wrapper.getByText('Link 5')).toBeInTheDocument()
    })

    it('should render `On This Page`', () => {
      expect(wrapper.getByText('On this page')).toBeInTheDocument()
    })

    it('should render the page banner', () => {
      expect(wrapper.getByText('Page banner')).toBeInTheDocument()
    })

    it('should render the side bar items', () => {
      expect(wrapper.getByText('Link 6')).toBeInTheDocument()
    })

    it('should render the title', () => {
      expect(wrapper.getByText('Page title')).toBeInTheDocument()
    })

    it('should render the content', () => {
      expect(wrapper.getByText('Content')).toBeInTheDocument()
    })
  })
})
