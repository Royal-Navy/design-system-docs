import React, { useState } from 'react'
import groupBy from 'lodash/groupBy'
import camelCase from 'lodash/camelCase'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BLOCKS } from '@contentful/rich-text-types'
import {
  Breadcrumbs,
  BreadcrumbsItem,
} from '@royalnavy/react-component-library'
import { IconLightbulbOutline } from '@royalnavy/icon-library'

import Axure from '../../public/Axure.svg'
import Storybook from '../../public/Storybook.svg'
import GitHub from '../../public/GitHub.svg'

import { Badge, BADGE_VARIANT } from '../../components/presenters/Docs/Badge'
import { ContentBanner } from '../../components/presenters/Docs/ContentBanner'
import { Footer } from '../../components/presenters/Docs/Footer'
import { FooterExternalLink } from '../../components/presenters/Docs/Footer/FooterExternalLink'
import {
  Masthead,
  MastheadMenu,
  MastheadMenuItem,
  MastheadSubMenu,
  MastheadSubMenuItem,
} from '../../components/presenters/Docs/Masthead'
import { OnThisPageItem } from '../../components/presenters/Docs/OnThisPage/OnThisPageItem'
import { SidebarFilter } from '../../components/presenters/Docs/Sidebar/SidebarFilter'
import {
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarOverview,
  SidebarOverviewMenuItem,
} from '../../components/presenters/Docs/Sidebar'
import { OnThisPage } from '../../components/presenters/Docs/OnThisPage'
import { PageBanner } from '../../components/presenters/Docs/PageBanner'
import { LayoutComponent } from '../../components/layouts/Docs'

import { ContentPage as ContentPageType } from '../../graphql'
import SIMPLE_PAGES_WITH_COMPONENT_TAGS from '../../graphql/queries/SimplePagesWithComponentTags.graphql'
import SIMPLE_PAGE_BY_SLUG_QUERY from '../../graphql/queries/SimplePageBySlug.graphql'
import { contentful } from '../../services/contentful'

import { useDesignSystemVersion } from '../../hooks/useDesignSystemVersion'

interface ComponentProps {
  contentPageCollection: ContentPageType[]
  contentPage: ContentPageType
}

/**
 * Fetch content for individual page from Contentful by slug
 *
 */
const fetchComponentPage = async (
  slug: string | string[]
): Promise<ContentPageType> => {
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
const fetchComponentPages = async (): Promise<ContentPageType[]> => {
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
      contentPageCollection: await fetchComponentPages(),
      contentPage: await fetchComponentPage(slug),
    },
  }
}

/**
 * Specify dynamic routes to pre-render based on Contentful manifest
 *
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const contentPageCollection = await fetchComponentPages()

  const paths = contentPageCollection.map(({ slug }) => {
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
 * Generate Sidebar based on component category tags (`Component Page: Forms`)
 *
 */
function renderSidebarItems(
  contentPageCollection: ContentPageType[]
): React.ReactElement | React.ReactElement[] {
  const grouped = groupBy(
    contentPageCollection,
    'contentfulMetadata.tags[0].name'
  )

  return Object.entries(grouped).map((group) => {
    const categoryTitle = group[0].split(': ')[1]

    return (
      <SidebarMenu key={categoryTitle} title={categoryTitle}>
        {group[1].map(({ title, slug }) => {
          return (
            <SidebarMenuItem
              key={title}
              link={<Link href={`/components/${slug}`}>{title}</Link>}
            />
          )
        })}
      </SidebarMenu>
    )
  })
}

/**
 * Generate `OnThisPage` items based on sub-headings within document
 *
 */
function renderOnThisPageItems(
  contentPage: ContentPageType
): React.ReactElement | React.ReactElement[] {
  const h2Collection = contentPage?.bodyContent?.json?.content.filter(
    ({ nodeType }) => {
      return nodeType === BLOCKS.HEADING_2
    }
  )

  const { push } = useRouter()

  return h2Collection.map((item: Record<string, any>, index: number) => {
    const title = item?.content[0]?.value
    const href = `#${camelCase(`${index + 1}${title}`)}`

    return (
      <OnThisPageItem key={href} onClick={(_) => push(href)}>
        {title}
      </OnThisPageItem>
    )
  })
}

/**
 * Compose page using data from `getStaticProps`
 *
 */
export const Component: React.FC<ComponentProps> = ({
  contentPageCollection,
  contentPage,
}) => {
  const [sidebarItems, setSidebarItems] = useState<ContentPageType[]>(
    contentPageCollection
  )
  const { version } = useDesignSystemVersion()
  const { bodyContent, isLegacy, title, storybookUrl } = contentPage || {}

  const handleSidebarFilter = (
    e: React.ChangeEvent<HTMLInputElement>,
    newValue: string
  ): void => {
    setSidebarItems(
      contentPageCollection.filter((item: ContentPageType) =>
        item?.title.toLowerCase().includes(newValue.toLowerCase())
      )
    )
  }

  const pageBanner = (
    <PageBanner>
      Version <Badge variant={BADGE_VARIANT.DARK}>{version}</Badge> has been
      released!&nbsp;
      <a href="/upgrade-guide">
        Read the <strong>upgrade guide</strong>
      </a>
    </PageBanner>
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

  const sidebar = (
    <Sidebar title="Components">
      <SidebarOverview>
        <SidebarOverviewMenuItem
          icon={<Storybook />}
          link={
            <Link href={storybookUrl || 'https://storybook.royalnavy.io'}>
              Storybook
            </Link>
          }
        />
        <SidebarOverviewMenuItem
          icon={<Axure />}
          link={<Link href="#axure-prototype-kit">Axure Prototype Kit</Link>}
        />
      </SidebarOverview>
      <SidebarFilter
        onChange={handleSidebarFilter}
        onClear={handleSidebarFilter}
      />
      {renderSidebarItems(sidebarItems)}
    </Sidebar>
  )

  const breadcrumbs = (
    <Breadcrumbs>
      <BreadcrumbsItem link={<Link href="/">Home</Link>} />
      <BreadcrumbsItem link={<Link href="/components">Components</Link>} />
      <BreadcrumbsItem
        link={<Link href={`/components/${title}`}>{title}</Link>}
      />
    </Breadcrumbs>
  )

  const onThisPage = (
    <OnThisPage>{renderOnThisPageItems(contentPage)}</OnThisPage>
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
          icon={<GitHub />}
          link={
            <Link href="https://github.com/Royal-Navy/design-system">
              GitHub
            </Link>
          }
        />,
        <FooterExternalLink
          icon={<Storybook />}
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

  return (
    <LayoutComponent
      title={title}
      pageBanner={pageBanner}
      masthead={masthead}
      sidebar={sidebar}
      breadcrumbs={breadcrumbs}
      onThisPage={onThisPage}
      contentBanner={isLegacy && contentBanner}
      richText={bodyContent}
      footer={footer}
    />
  )
}

export default Component
