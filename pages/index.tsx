import React from 'react'
import { GetStaticProps } from 'next'
import camelCase from 'lodash/camelCase'

import { LayoutFramework } from '../components/layouts/Framework'
import { SidebarMenu, SidebarMenuItem } from '../components/presenters/Sidebar'

import { HeroAdapter } from '../components/adapters/HeroAdapter'
import { ContentBlockAdapter } from '../components/adapters/ContentBlockAdapter'
import { LiveExampleAdapter } from '../components/adapters/LiveExampleAdapter'
import { CodeBlockAdapter } from '../components/adapters/CodeBlockAdapter'
import { ApiTableAdapter } from '../components/adapters/ApiTableAdapter'

import { contentful } from '../services/contentful'
import { SectionCollection, Section, SectionContentItem } from '../graphql'
import PAGE_STRUCTURE_QUERY from '../graphql/queries/PageStructure.graphql'
import SECTION_CONTENT_QUERY from '../graphql/queries/SectionContent.graphql'

interface HomeProps {
  sectionCollection: SectionCollection
}

/**
 * Fetch a content collection for a parent entry (by ID)
 *
 */
async function fetchContentCollection(item: Section): Promise<Section> {
  const {
    sys: { id },
  } = item

  const {
    section: { contentCollection },
  } = await contentful(SECTION_CONTENT_QUERY, { id })

  return {
    ...item,
    contentCollection,
  }
}

/**
 * Hydrate a collection of entries with content collections
 *
 */
async function hydrateContentCollections(items: Section[]): Promise<Section[]> {
  return Promise.all(items.map((item) => fetchContentCollection(item)))
}

/**
 * Fetch data from Contentful for static site generation (SSG)
 *
 */
export const getStaticProps: GetStaticProps = async () => {
  const {
    page: {
      sectionCollection: { items },
    },
  } = await contentful(PAGE_STRUCTURE_QUERY, {
    id: '7ltwNe3eIZtPNZ2xrHMAuw',
  })

  return {
    props: {
      sectionCollection: {
        items: await hydrateContentCollections(items),
      },
    },
  }
}

/**
 * Generate navigation based on content structure
 *
 */
function renderNavigation(
  sectionCollection: SectionCollection
): React.ReactElement | React.ReactElement[] {
  return sectionCollection?.items?.map(({ title, contentCollection }) => {
    return (
      <SidebarMenu key={title} title={title}>
        {contentCollection?.items?.map(({ title: contentTitle }) => {
          return (
            <SidebarMenuItem
              key={contentTitle}
              href={`#${camelCase(contentTitle)}`}
              title={contentTitle}
            />
          )
        })}
      </SidebarMenu>
    )
  })
}

/**
 * Map content types to components using adapters
 *
 */
function renderPresenter(
  type: keyof SectionContentItem,
  fields: SectionContentItem
): React.ReactElement {
  const componentMap = {
    Hero: <HeroAdapter fields={fields} />,
    ContentBlock: <ContentBlockAdapter fields={fields} />,
    LiveExample: <LiveExampleAdapter fields={fields} />,
    CodeBlock: <CodeBlockAdapter fields={fields} />,
    ApiTable: <ApiTableAdapter fields={fields} />,
    // ...
  }

  return componentMap[type]
}

/**
 * Render page using data from `getStaticProps`
 *
 */
export const Home: React.FC<HomeProps> = ({ sectionCollection }) => {
  const contentCollection = sectionCollection?.items?.flatMap(
    (item) => item?.contentCollection?.items ?? []
  )

  return (
    <LayoutFramework navigation={renderNavigation(sectionCollection)}>
      {contentCollection.map(
        ({ __typename, ...fields }: SectionContentItem) => {
          const { title: key } = fields

          return React.cloneElement(
            renderPresenter(__typename as keyof SectionContentItem, fields),
            {
              key,
            }
          )
        }
      )}
    </LayoutFramework>
  )
}

export default Home
