import React from 'react'
import camelCase from 'lodash/camelCase'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { fetchContent } from '../services/contentful'
import { LayoutFramework } from '../components/layouts/Framework'
import { Hero } from '../components/presenters/Hero'
import { ContentPanel, LeftCol } from '../components/presenters/ContentPanel'

export type ContentType =
  | 'Hero'
  | 'ContentBlock'
  | 'LiveExample'
  | 'CodeBlock'
  | 'APITable'

interface HomeProps {
  sections: any
}

export async function getStaticProps() {
  const response = await fetchContent(`
    {
      sectionCollection(limit: 10) {
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
      sections: response.sectionCollection.items,
    },
  }
}

/**
 * Map content types to components and fields to props
 *
 */
function renderPresenter(type: ContentType, fields: any): React.ReactElement {
  const id = camelCase(fields.title)

  const componentMap = {
    Hero: (
      <Hero id={id} title={fields.title} description={fields.heroDescription} />
    ),
    ContentBlock: (
      <ContentPanel id={id}>
        <LeftCol>
          {fields.title && <h2>{fields.title}</h2>}
          {fields?.description?.json &&
            documentToReactComponents(fields.description.json)}
        </LeftCol>
      </ContentPanel>
    ),
    // ...
  }

  return componentMap[type]
}

export const Home: React.FC<HomeProps> = ({ sections }) => {
  const articleCollection = sections.flatMap(
    (item) => item.articleCollection.items
  )

  const contentCollection = articleCollection.flatMap(
    (item) => item.contentCollection.items
  )

  return (
    <LayoutFramework>
      {contentCollection.map(({ __typename, ...fields }: any) => {
        return renderPresenter(__typename, { ...fields })
      })}
    </LayoutFramework>
  )
}

export default Home
