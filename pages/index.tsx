import React from 'react'

import { fetchContent } from '../services/contentful'
import { LayoutFramework } from '../components/layouts/Framework'
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
  sections: any
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
      sections: response?.sectionCollection?.items ?? [],
    },
  }
}

/**
 * Map content types to components using adapters
 *
 */
function renderPresenter(type: ContentType, fields: any): React.ReactElement {
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

export const Home: React.FC<HomeProps> = ({ sections }) => {
  const articleCollection = sections.flatMap(
    (item) => item?.articleCollection?.items ?? []
  )

  const contentCollection = articleCollection.flatMap(
    (item) => item?.contentCollection?.items ?? []
  )

  return (
    <LayoutFramework>
      {contentCollection.map(({ __typename, ...fields }: any) => {
        const { title: key } = fields
        return React.cloneElement(renderPresenter(__typename, fields), { key })
      })}
    </LayoutFramework>
  )
}

export default Home
