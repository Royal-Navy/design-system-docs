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
import { Section } from '../components/presenters/Section'

import {
  SectionCollection as SectionCollectionType,
  Section as SectionType,
  SectionContentItem as SectionContentItemType,
  SectionContentCollection as SectionContentCollectionType,
} from '../graphql'

import PAGE_STRUCTURE_QUERY from '../graphql/queries/PageStructure.graphql'
import SECTION_CONTENT_QUERY from '../graphql/queries/SectionContent.graphql'
import { contentful } from '../services/contentful'

interface HomeProps {
  sectionCollection: SectionCollectionType
}

/**
 * Fetch a content collection for a parent entry (by ID)
 *
 */
async function fetchContentCollection(item: SectionType): Promise<SectionType> {
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
async function hydrateContentCollections(
  items: SectionType[]
): Promise<SectionType[]> {
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
  sectionCollection: SectionCollectionType
): React.ReactElement | React.ReactElement[] {
  return sectionCollection?.items?.map(({ title, contentCollection }) => {
    return (
      <SidebarMenu key={title} title={title}>
        {contentCollection?.items?.map(
          ({ __typename, title: contentTitle }) => {
            return (
              <SidebarMenuItem
                key={contentTitle}
                href={`#${camelCase(contentTitle)}`}
                title={contentTitle}
                isCode={__typename === 'ApiTable'}
              />
            )
          }
        )}
      </SidebarMenu>
    )
  })
}

/**
 * Map content types to components using adapters
 *
 */
function renderPresenter(
  type: keyof SectionContentItemType,
  fields: SectionContentItemType
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
 * Render content collection using presenters
 *
 */
function renderContentCollection(
  contentCollection: SectionContentCollectionType
): React.ReactElement | React.ReactElement[] {
  return contentCollection?.items.map(
    ({ __typename, ...fields }: SectionContentItemType) => {
      const { title: key } = fields

      return React.cloneElement(
        renderPresenter(__typename as keyof SectionContentItemType, fields),
        {
          key,
        }
      )
    }
  )
}

/**
 * Render page using data from `getStaticProps`
 *
 */
export const Home: React.FC<HomeProps> = ({ sectionCollection }) => {
  return (
    <LayoutFramework
      title="Compound Timeline | Royal Navy Design System"
      navigation={renderNavigation(sectionCollection)}
    >
      {sectionCollection?.items.map(({ title, contentCollection }) => {
        return (
          <Section key={title}>
            {renderContentCollection(contentCollection)}
          </Section>
        )
      })}
    </LayoutFramework>
  )
}

export default Home
