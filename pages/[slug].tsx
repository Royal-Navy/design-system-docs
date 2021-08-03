import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import {
  Breadcrumbs,
  BreadcrumbsItem,
} from '@royalnavy/react-component-library'
import { IconBookmark, IconLightbulbOutline } from '@royalnavy/icon-library'

import { Badge, BADGE_VARIANT } from '../components/presenters/Docs/Badge'
import { ContentBanner } from '../components/presenters/Docs/ContentBanner'
import { Footer } from '../components/presenters/Docs/Footer'
import { FooterExternalLink } from '../components/presenters/Docs/Footer/FooterExternalLink'
import {
  Masthead,
  MastheadMenu,
  MastheadMenuItem,
  MastheadSubMenu,
  MastheadSubMenuItem,
} from '../components/presenters/Docs/Masthead'
import { OnThisPageItem } from '../components/presenters/Docs/OnThisPage/OnThisPageItem'
import { SidebarFilter } from '../components/presenters/Docs/Sidebar/SidebarFilter'
import {
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarOverview,
  SidebarOverviewMenuItem,
} from '../components/presenters/Docs/Sidebar'
import { OnThisPage } from '../components/presenters/Docs/OnThisPage'
import { PageBanner } from '../components/presenters/Docs/PageBanner'
import { LayoutComponent } from '../components/layouts/Docs'

import SIMPLE_PAGE_BY_SLUG_QUERY from '../graphql/queries/SimplePageBySlug.graphql'
import { contentful } from '../services/contentful'

interface ComponentProps {
  bodyContent: any
  isLegacy: boolean
  title: string
}

/**
 * Fetch data from Contentful for static site generation (SSG)
 *
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.slug

  const {
    contentPageCollection: { items },
  } = await contentful(SIMPLE_PAGE_BY_SLUG_QUERY, {
    slug,
  })

  const { bodyContent, isLegacy, title } = items[0]

  return {
    props: {
      bodyContent,
      isLegacy,
      title,
    },
  }
}

/**
 * Specify dynamic routes to  pre-render pages based on data
 *
 */
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'sidebar' } }, { params: { slug: 'alert' } }],
    fallback: false,
  }
}

/**
 * Generate navigation based on content structure
 *
 */
function renderNavigation(
  data: any
): React.ReactElement | React.ReactElement[] {
  return null
}

/**
 * Render page using data from `getStaticProps`
 *
 */
export const Test: React.FC<ComponentProps> = ({
  bodyContent,
  isLegacy,
  title,
}) => {
  const breadcrumbs = (
    <Breadcrumbs>
      <BreadcrumbsItem link={<Link href="/">Home</Link>} />
      <BreadcrumbsItem link={<Link href="/components">Components</Link>} />
      <BreadcrumbsItem
        link={<Link href={`/components/${title}`}>{title}</Link>}
      />
    </Breadcrumbs>
  )

  const contentBanner = (
    <ContentBanner
      icon={<IconLightbulbOutline />}
      title="The documentation on this page is considered legacy."
    >
      We will be updating this content to our new principle-based format in the
      near future.
    </ContentBanner>
  )

  const footer = (
    <Footer
      description="The Royal Navy Design System provides guidance and tools for building
      high–quality Services within the Royal Navy. This project is open source
      and its source code is available on GitHub."
      externalLinks={[
        <FooterExternalLink
          icon={<IconBookmark />}
          link={
            <Link href="https://github.com/Royal-Navy/design-system">
              GitHub
            </Link>
          }
        />,
        <FooterExternalLink
          icon={<IconBookmark />}
          link={<Link href="https://storybook.royalnavy.io">Storybook</Link>}
        />,
      ]}
      license="All content is available under the Apache 2.0 licence, except where
      otherwise stated."
      siteLinks={[
        <Link href="#accessibility">Accessibility</Link>,
        <Link href="#privacy-policy">Privacy Policy</Link>,
        <Link href="#contact">Contact</Link>,
      ]}
    />
  )

  const masthead = (
    <Masthead version="3.0.0">
      <MastheadMenu>
        <MastheadMenuItem link={<Link href="#guidance">Guidance</Link>} />
        <MastheadMenuItem link={<Link href="#principles">Principles</Link>} />
        <MastheadMenuItem link={<Link href="#reference">Reference</Link>}>
          <MastheadSubMenu>
            <MastheadSubMenuItem
              link={<Link href="#design-tokens">Design Tokens</Link>}
            />
            <MastheadSubMenuItem
              link={<Link href="#components">Components</Link>}
            />
            <MastheadSubMenuItem
              link={<Link href="#patterns">Patterns</Link>}
            />
            <MastheadSubMenuItem
              link={<Link href="#frameworks">Frameworks</Link>}
            />
          </MastheadSubMenu>
        </MastheadMenuItem>
        <MastheadMenuItem link={<Link href="#resources">Resources</Link>} />
        <MastheadMenuItem link={<Link href="#help">Help</Link>} />
        <MastheadMenuItem link={<Link href="#blog">Blog</Link>} />
      </MastheadMenu>
    </Masthead>
  )

  const onThisPage = (
    <OnThisPage>
      <OnThisPageItem onClick={() => undefined}>Overview</OnThisPageItem>
      <OnThisPageItem onClick={() => undefined}>Usage</OnThisPageItem>
      <OnThisPageItem onClick={() => undefined}>Anatomy</OnThisPageItem>
      <OnThisPageItem onClick={() => undefined}>
        Hierarchy &amp; placement
      </OnThisPageItem>
      <OnThisPageItem onClick={() => undefined}>
        Sizing &amp; spacing
      </OnThisPageItem>
    </OnThisPage>
  )

  const pageBanner = (
    <PageBanner>
      Version <Badge variant={BADGE_VARIANT.DARK}>3.0.0</Badge> has been
      released!&nbsp;
      <a href="/upgrade-guide">
        Read the <strong>upgrade guide</strong>
      </a>
    </PageBanner>
  )

  const sidebar = (
    <Sidebar title="Components">
      <SidebarOverview>
        <SidebarOverviewMenuItem
          icon={<IconBookmark />}
          link={<Link href="#storybook">Storybook</Link>}
        />
        <SidebarOverviewMenuItem
          icon={<IconBookmark />}
          link={<Link href="#axure-prototype-kit">Axure Prototype Kit</Link>}
        />
      </SidebarOverview>
      <SidebarFilter onChange={() => undefined} onSubmit={() => undefined} />
      <SidebarMenu>
        <SidebarMenuItem link={<Link href="#alert">Alert</Link>} />
        <SidebarMenuItem link={<Link href="#avatar">Avatar</Link>} />
        <SidebarMenuItem link={<Link href="#badge">Badge</Link>} />
        <SidebarMenuItem link={<Link href="#breadcrumbs">Breadcrumbs</Link>} />
        <SidebarMenuItem link={<Link href="#button">Button</Link>} />
      </SidebarMenu>
      <SidebarMenu title="Banners">
        <SidebarMenuItem
          link={<Link href="#dismissible-banner">Dismissible Banner</Link>}
        />
        <SidebarMenuItem
          link={<Link href="#phase-banner">Phase Banner</Link>}
        />
      </SidebarMenu>
      <SidebarMenu title="Cards">
        <SidebarMenuItem link={<Link href="#content">Content</Link>} />
        <SidebarMenuItem link={<Link href="#frame">Frame</Link>} />
      </SidebarMenu>
      <SidebarMenu title="Forms">
        <SidebarMenuItem link={<Link href="#checkbox">Checkbox</Link>} />
        <SidebarMenuItem link={<Link href="#date-picker">Date Picker</Link>} />
        <SidebarMenuItem
          link={<Link href="#number-input">Number Input</Link>}
        />
        <SidebarMenuItem link={<Link href="#radio">Radio</Link>} />
        <SidebarMenuItem link={<Link href="#select">Select</Link>} />
        <SidebarMenuItem link={<Link href="#text-input">Text Input</Link>} />
        <SidebarMenuItem link={<Link href="#text-area">Text Area</Link>} />
      </SidebarMenu>
    </Sidebar>
  )

  return (
    <LayoutComponent
      breadcrumbs={breadcrumbs}
      contentBanner={isLegacy && contentBanner}
      footer={footer}
      masthead={masthead}
      onThisPage={onThisPage}
      pageBanner={pageBanner}
      sidebar={sidebar}
      title={title}
      richText={bodyContent}
    />
  )
}

export default Test
