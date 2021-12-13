import React, { useEffect, useState } from 'react'
import { selectors } from '@defencedigital/design-tokens'
import { useMediaQuery } from 'react-responsive'
import groupBy from 'lodash/groupBy'
import upperFirst from 'lodash/upperFirst'
import kebabCase from 'lodash/kebabCase'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BLOCKS } from '@contentful/rich-text-types'
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsItemProps,
} from '@defencedigital/react-component-library'
import { IconLightbulbOutline } from '@defencedigital/icon-library'

import Axure from '../public/Axure.svg'
import Storybook from '../public/Storybook.svg'
import GitHub from '../public/GitHub.svg'
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
} from '../components/presenters/Docs/Sidebar'
import { OnThisPage } from '../components/presenters/Docs/OnThisPage'
import { PageBanner } from '../components/presenters/Docs/PageBanner'
import { LayoutLegacy } from '../components/layouts/Legacy'
import { useDesignSystemVersion } from '../hooks/useDesignSystemVersion'
import { ComponentWithClass } from '../common/ComponentWithClass'
import { ContentBlockAdapter } from '../components/adapters/Docs/ContentBlockAdapter'
import { CodeBlockAdapter } from '../components/adapters/Docs/CodeBlockAdapter'
import { contentful } from '../services/contentful'
import {
  Page as PageType,
  Section as SectionType,
  Navigation as NavigationType,
  NavigationElement as NavigationElementType,
  ContentBlock as ContentBlockType,
} from '../graphql'
import NAVIGATION_BY_ID_QUERY from '../graphql/queries/NavigationByID.graphql'
import NAVIGATION_ELEMENTS_FLAT_QUERY from '../graphql/queries/NavigationElementsFlat.graphql'
import PAGE_BY_PATH_QUERY from '../graphql/queries/PageByPath.graphql'

export interface GenericPageProps extends ComponentWithClass {
  slugs: string[]
  page: PageType
  desktopNavigation: NavigationType
  mobileNavigation: NavigationType
  childrenCollection: NavigationElementType[]
  parentPage: NavigationElementType
}

/**
 * Fetch an individual page by path e.g. `/get-started/design`
 *
 */
async function fetchPageByPath(path: string): Promise<NavigationElementType> {
  const {
    navigationElementCollection: { items },
  } = await contentful(PAGE_BY_PATH_QUERY, { path })

  if (Array.isArray(items) && items.length) {
    return items[0]
  }

  return null
}

/**
 * Fetch desktop navigation from Contentful
 *
 */
async function fetchDesktopNavigation(): Promise<NavigationType> {
  const { navigation } = await contentful(NAVIGATION_BY_ID_QUERY, {
    id: '6ctO13HVlilgYwI5wgpJLf',
  })

  return navigation
}

/**
 * Fetch mobile navigation from Contentful
 *
 */
async function fetchMobileNavigation(): Promise<NavigationType> {
  const { navigation } = await contentful(NAVIGATION_BY_ID_QUERY, {
    id: '3tE4icMED8H3oRTFAQHeCr',
  })

  return navigation
}

/**
 * Fetch a flat collection of all routes from Contentful
 *
 */
async function fetchNavigationElements(): Promise<NavigationElementType[]> {
  const {
    navigationElementCollection: { items },
  } = await contentful(NAVIGATION_ELEMENTS_FLAT_QUERY)

  return items
}

/**
 * Fetch data from Contentful for static site generation (SSG)
 *
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const slugs = context.params.slug as string[]

  const desktopNavigation = await fetchDesktopNavigation()
  const mobileNavigation = await fetchMobileNavigation()
  const parentPage = await fetchPageByPath(`/${slugs[0]}`)
  const { page } = await fetchPageByPath(`/${slugs.join('/')}`)

  return {
    props: {
      slugs,
      page,
      parentPage,
      desktopNavigation,
      mobileNavigation,
      key: page.sys.id,
      childrenCollection: parentPage?.childrenCollection?.items || [],
    },
  }
}

/**
 * Specify dynamic routes to pre-render based on Contentful manifest
 *
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const items = await fetchNavigationElements()

  const paths = items
    .filter(({ page }) => !!page)
    .filter(({ path }) => !!path)
    .map(({ path }) => {
      const slug = path.split('/')
      slug.shift()

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
 * Generate `Breadcrumbs` based on URL structure
 *
 */
function renderBreadcrumb(slugs: string[]): React.ReactElement {
  const children = slugs.map((slug: string) => {
    return (
      <BreadcrumbsItem
        key={slug}
        link={
          <Link href={`/${slug}`}>{upperFirst(slug.replace(/-/g, ' '))}</Link>
        }
        data-testid="breadcrumb-item"
      />
    )
  })

  return (
    <Breadcrumbs>
      {[
        <BreadcrumbsItem
          key="/"
          link={<Link href="/">Home</Link>}
          data-testid="breadcrumb-item"
        />,
        ...(React.Children.toArray(
          children
        ) as React.ReactElement<BreadcrumbsItemProps>[]),
      ]}
    </Breadcrumbs>
  )
}

/**
 * Generate Sidebar based on page category tags (`Component Page: Forms`)
 *
 */
function renderSidebarItems(
  childrenCollection: NavigationElementType[]
): React.ReactElement | React.ReactElement[] {
  const grouped = groupBy(childrenCollection, 'contentfulMetadata.tags[0].name')
  const noGroup = grouped.undefined
  delete grouped.undefined
  let pathname

  if (typeof window !== 'undefined') {
    pathname = window.location.pathname
  }

  return (
    <>
      {noGroup && (
        <SidebarMenu key="noGroup">
          {noGroup.map(({ title, path, externalUri }) => {
            return (
              <SidebarMenuItem
                key={title}
                link={<Link href={path || externalUri}>{title}</Link>}
                isActive={path === pathname}
              />
            )
          })}
        </SidebarMenu>
      )}
      {Object.entries(grouped).map((group) => {
        const groupTitle = group[0].split(': ')[1]

        return (
          <SidebarMenu key={group[0].split(': ')[1]} title={groupTitle}>
            {group[1].map(({ title, path, externalUri }) => {
              return (
                <SidebarMenuItem
                  key={title}
                  link={<Link href={path || externalUri}>{title}</Link>}
                  isActive={path === pathname}
                />
              )
            })}
          </SidebarMenu>
        )
      })}
    </>
  )
}

/**
 * Map content types to components using adapters
 *
 */
function renderPresenter(
  type: keyof SectionType,
  fields: SectionType
): React.ReactElement {
  const componentMap = {
    ContentBlock: <ContentBlockAdapter fields={fields} />,
    CodeBlock: <CodeBlockAdapter fields={fields} />,
    // ...
  }

  return componentMap[type]
}

function mapMenuItem({
  title: parentTitle,
  path: parentPath,
  externalUri: parentExternalUri,
  page: parentPage,
  childrenCollection: children,
}: NavigationElementType) {
  const parentHref = parentPage ? parentPath : parentExternalUri

  return (
    <MastheadMenuItem
      key={parentPath}
      link={<Link href={parentHref || '#'}>{parentTitle}</Link>}
    >
      {children.items.length > 0 && (
        <MastheadSubMenu>
          {children.items.map(
            ({
              title: childTitle,
              path: childPath,
              externalUri: childExternalUri,
              page: childPage,
            }) => {
              const childHref = childPage ? childPath : childExternalUri

              return (
                <MastheadSubMenuItem
                  key={childPath}
                  link={<Link href={childHref || '#'}>{childTitle}</Link>}
                />
              )
            }
          )}
        </MastheadSubMenu>
      )}
    </MastheadMenuItem>
  )
}

const { breakpoint } = selectors

interface OnThisPageItemsProps {
  contentBlock: ContentBlockType
}

/**
 * Generate `OnThisPage` items based on sub-headings within document
 *
 */
const OnThisPageItems: React.FC<OnThisPageItemsProps> = ({ contentBlock }) => {
  const [currentSectionNumber, setCurrentSectionNumber] = useState<number>(1)

  const h2Collection = contentBlock?.description?.json?.content.filter(
    ({ nodeType }) => {
      return nodeType === BLOCKS.HEADING_2
    }
  )

  const { push } = useRouter()

  function getCurrentSectionNumber() {
    if (typeof window === 'undefined') {
      return 1
    }

    return parseInt(window.location.hash.split('-')[0].substring(1), 10) || 1
  }

  useEffect(() => {
    setCurrentSectionNumber(getCurrentSectionNumber())
  }, [])

  return h2Collection.map((item: Record<string, any>, index: number) => {
    const title = item?.content[0]?.value
    const sectionNumber = index + 1
    const href = `#${kebabCase(`${sectionNumber}${title}`)}`

    return (
      <OnThisPageItem
        isActive={currentSectionNumber === sectionNumber}
        key={href}
        onClick={(_) => {
          push(href)
          setCurrentSectionNumber(getCurrentSectionNumber())
        }}
      >
        {title}
      </OnThisPageItem>
    )
  })
}

export const GenericPage: React.FC<GenericPageProps> = ({
  slugs,
  page,
  childrenCollection,
  desktopNavigation,
  mobileNavigation,
  parentPage,
}) => {
  const [filterString, setFilterString] = useState<string>(null)
  const { version } = useDesignSystemVersion()
  const {
    title,
    sectionCollection,
    hideContentBanner,
    contentBannerTitle,
    contentBannerDescription,
  } = page

  const pageBanner = (
    <PageBanner>
      Version <Badge variant={BADGE_VARIANT.DARK}>{version}</Badge> has been
      released!&nbsp;
      <a href="/upgrade-guide">
        Read the <strong>upgrade guide</strong>
      </a>
    </PageBanner>
  )

  const isDesktop = useMediaQuery({
    query: `(min-width: ${breakpoint('m').breakpoint})`,
  })

  const navigation = isDesktop ? desktopNavigation : mobileNavigation

  const masthead = (
    <Masthead version={version}>
      <MastheadMenu>
        {navigation.childrenCollection.items.map(mapMenuItem)}
      </MastheadMenu>
    </Masthead>
  )

  const sidebar = (
    <Sidebar title={parentPage?.title}>
      <SidebarMenu>
        {parentPage ? (
          <SidebarMenuItem
            link={<Link href={parentPage.path}>Overview</Link>}
          />
        ) : null}
        <SidebarMenuItem
          icon={<Storybook />}
          link={<Link href="https://storybook.royalnavy.io">Storybook</Link>}
        />
        <SidebarMenuItem
          icon={<Axure />}
          link={<Link href="/guidance/design">Axure design libraries</Link>}
        />
      </SidebarMenu>
      <SidebarFilter
        onChange={(_: React.ChangeEvent<HTMLInputElement>, newValue: string) =>
          setFilterString(newValue.toLowerCase())
        }
      />
      {renderSidebarItems(
        childrenCollection.filter((item: NavigationElementType) => {
          if (!filterString) {
            return true
          }

          return item?.title.toLowerCase().includes(filterString)
        })
      )}
    </Sidebar>
  )

  const onThisPage = (
    <OnThisPage>
      <OnThisPageItems
        contentBlock={sectionCollection.items[0] as ContentBlockType}
      />
    </OnThisPage>
  )

  const contentBanner = hideContentBanner ? null : (
    <ContentBanner
      icon={<IconLightbulbOutline />}
      title={
        contentBannerTitle ||
        'The documentation on this page is considered legacy.'
      }
    >
      {contentBannerDescription ||
        'We will be updating this content to our new principle-based format in the near future.'}
    </ContentBanner>
  )

  const footer = (
    <Footer
      description="The MOD.UK Design System provides guidance and tools for building
      high–quality Services within the UK Ministry of Defence. This project is open source
      and its source code is available on GitHub."
      externalLinks={[
        <FooterExternalLink
          icon={<GitHub />}
          link={
            <Link href="https://github.com/defencedigital/mod-uk-design-system">
              GitHub
            </Link>
          }
        />,
        <FooterExternalLink
          icon={<Storybook />}
          link={
            <Link href="https://storybook.design-system.digital.mod.uk/">
              Storybook
            </Link>
          }
        />,
      ]}
      license="All content is available under the Apache 2.0 licence, except where
      otherwise stated."
      siteLinks={[
        <Link href="/accessibility">Accessibility</Link>,
        <Link href="/privacy-policy">Privacy Policy</Link>,
        <Link href="/contact">Contact</Link>,
      ]}
    />
  )

  return (
    <LayoutLegacy
      title={title}
      pageBanner={pageBanner}
      masthead={masthead}
      sidebar={sidebar}
      breadcrumbs={renderBreadcrumb(slugs)}
      onThisPage={onThisPage}
      contentBanner={contentBanner}
      footer={footer}
    >
      {sectionCollection?.items.map(({ __typename, ...fields }) => {
        return (
          <section key={fields.title}>
            {renderPresenter(
              __typename as keyof SectionType,
              fields as SectionType
            )}
          </section>
        )
      })}
    </LayoutLegacy>
  )
}

export default GenericPage
