import React from 'react'
import groupBy from 'lodash/groupBy'
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

import SIMPLE_PAGES_WITH_COMPONENT_TAGS from '../graphql/queries/SimplePagesWithComponentTags.graphql'
import SIMPLE_PAGE_BY_SLUG_QUERY from '../graphql/queries/SimplePageBySlug.graphql'
import { contentful } from '../services/contentful'

import { useDesignSystemVersion } from '../hooks/useDesignSystemVersion'

interface ComponentProps {
  componentPageCollection: any
  pageContent: any
}

/**
 * Fetch content for individual page from contentful by slug
 *
 */
const fetchPageContent = async (slug: string | string[]) => {
  const {
    contentPageCollection: { items },
  } = await contentful(SIMPLE_PAGE_BY_SLUG_QUERY, {
    slug,
  })

  if (Array.isArray(items) && items.length) {
    return items[0]
  }

  return null
}

/**
 * Fetch all component pages based on relevant tag(s)
 *
 */
const fetchComponentPages = async () => {
  const {
    contentPageCollection: { items },
  } = await contentful(SIMPLE_PAGES_WITH_COMPONENT_TAGS)

  return items || []
}

/**
 * Fetch data from Contentful for static site generation (SSG)
 *
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.slug

  return {
    props: {
      componentPageCollection: await fetchComponentPages(),
      pageContent: await fetchPageContent(slug),
    },
  }
}

/**
 * Specify dynamic routes to pre-render pages based on data
 *
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const componentPageCollection = await fetchComponentPages()

  const paths = componentPageCollection.map(({ slug }) => {
    return {
      params: { slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

/**
 * Generate Sidebar based on component tagging
 *
 */
function renderSidebarItems(componentPageCollection) {
  const grouped = groupBy(
    componentPageCollection,
    'contentfulMetadata.tags[0].name'
  )

  return Object.entries(grouped).map((group) => {
    const categoryTitle = group[0].split(': ')[1]

    return (
      <SidebarMenu key={categoryTitle} title={categoryTitle}>
        {group[1].map(({ title, slug }) => {
          return (
            <SidebarMenuItem link={<Link href={`/${slug}`}>{title}</Link>} />
          )
        })}
      </SidebarMenu>
    )
  })
}

/**
 * Render page using data from `getStaticProps`
 *
 */
export const Test: React.FC<ComponentProps> = ({
  componentPageCollection,
  pageContent,
}) => {
  const { version } = useDesignSystemVersion()
  const { bodyContent, isLegacy, title, storybookUrl } = pageContent || {}

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
    <Masthead version={version}>
      <MastheadMenu>
        <MastheadMenuItem link={<Link href="#reference">Reference</Link>}>
          <MastheadSubMenu>
            <MastheadSubMenuItem
              link={<Link href="/components">Components</Link>}
            />
          </MastheadSubMenu>
        </MastheadMenuItem>
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
      Version <Badge variant={BADGE_VARIANT.DARK}>{version}</Badge> has been
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
          link={
            <Link href={storybookUrl || 'https://storybook.royalnavy.io'}>
              Storybook
            </Link>
          }
        />
        <SidebarOverviewMenuItem
          icon={<IconBookmark />}
          link={<Link href="#axure-prototype-kit">Axure Prototype Kit</Link>}
        />
      </SidebarOverview>
      <SidebarFilter onChange={() => undefined} onSubmit={() => undefined} />
      {renderSidebarItems(componentPageCollection)}
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
