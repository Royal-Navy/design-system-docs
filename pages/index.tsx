import React from 'react'
import camelCase from 'lodash/camelCase'

import { fetchContent } from '../services/contentful'

import { LayoutFramework } from '../components/layouts/Framework'
import { SidebarMenu, SidebarMenuItem } from '../components/presenters/Sidebar'

import { HeroAdapter } from '../components/presenters/Hero/adapters/HeroAdapter'
import { ContentBlockAdapter } from '../components/presenters/ContentPanel/adapters/ContentBlockAdapter'
import { LiveExampleAdapter } from '../components/presenters/LiveExample/adapters/LiveExampleAdapter'
import { CodeBlockAdapter } from '../components/presenters/CodeBlock/adapters/CodeBlockAdapter'
import { ApiTableAdapter } from '../components/presenters/ApiTable/adapters/ApiTableAdapter'

export type ContentType =
  | 'Hero'
  | 'ContentBlock'
  | 'LiveExample'
  | 'CodeBlock'
  | 'ApiTable'

interface HomeProps {
  sectionCollection: any
}

export async function getStaticProps() {
  const response = await fetchContent(`
    {
      sectionCollection(limit: 5) {
        items {
          title
          articleCollection(limit: 10) {
            items {
              ... on Article {
                title
                contentCollection(limit: 10) {
                  items {
                    __typename
                    ... on Hero {
                      title
                      heroDescription: description
                    }
                    ... on ContentBlock {
                      title
                      description {
                        json
                      }
                    }
                    ... on LiveExample {
                      title
                      description {
                        json
                      }
                    }
                    ... on CodeBlock {
                      title
                      description {
                        json
                      }
                      filename
                      sourceCode
                    }
                    ... on ApiTable {
                      title
                      apiTableDescription: description
                      apiFieldCollection(limit: 10) {
                        items {
                          ... on ApiField {
                            name
                            dataType
                            defaultValue
                            description
                            required
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return {
    props: {
      sectionCollection: response?.sectionCollection?.items ?? [],
    },
  }
}

/**
 * Generate navigation based on content structure
 *
 */
function renderNavigation(sectionCollection: any): React.ReactElement {
  return (
    sectionCollection &&
    sectionCollection.map(({ title, articleCollection }) => {
      return (
        <SidebarMenu key={title} title={title}>
          {articleCollection?.items &&
            articleCollection?.items.map(({ title: articleTitle }) => {
              return (
                <SidebarMenuItem
                  key={articleTitle}
                  href={`#${camelCase(articleTitle)}`}
                  title={articleTitle}
                />
              )
            })}
        </SidebarMenu>
      )
    })
  )
}

/**
 * Map content types to components using adapters
 *
 */
function renderPresenter(type: ContentType, fields: any): React.ReactElement {
  const componentMap = {
    Hero: <HeroAdapter id="home" fields={fields} />,
    ContentBlock: <ContentBlockAdapter fields={fields} />,
    LiveExample: <LiveExampleAdapter fields={fields} />,
    CodeBlock: <CodeBlockAdapter fields={fields} />,
    ApiTable: <ApiTableAdapter fields={fields} />,
    // ...
  }

  return componentMap[type]
}

export const Home: React.FC<HomeProps> = ({ sectionCollection }) => {
  const articleCollection = sectionCollection.flatMap(
    (item) => item?.articleCollection?.items ?? []
  )

  const contentCollection = articleCollection.flatMap(
    (item) => item?.contentCollection?.items ?? []
  )

  return (
    <LayoutFramework navigation={renderNavigation(sectionCollection)}>
      {contentCollection.map(({ __typename, ...fields }: any) => {
        const { title: key } = fields
        return React.cloneElement(renderPresenter(__typename, fields), { key })
      })}
    </LayoutFramework>
  )
}

export default Home
