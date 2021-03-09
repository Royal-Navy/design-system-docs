import React from 'react'

import { fetchContent } from '../services/contentful'
import { LayoutFramework } from '../components/layouts/Framework'
import { Hero } from '../components/presenters/Hero'
import {
  ContentPanel,
  LeftCol,
  RightCol,
} from '../components/presenters/ContentPanel'

/**
 * Map content types to components and fields to props
 *
 */
function getPresenter(type, fields) {
  const componentMap = {
    Hero: (
      <Hero id="" title={fields.title} description={fields.heroDescription} />
    ),
    ContentBlock: (
      <ContentPanel id="">
        <LeftCol>LeftCol</LeftCol>
        <RightCol>RightCol</RightCol>
      </ContentPanel>
    ),
    // ...
  }

  return componentMap[type]
}

export default function Home({ sections }) {
  const articleCollection = sections.flatMap(
    (item) => item.articleCollection.items
  )

  const contentCollection = articleCollection.flatMap(
    (item) => item.contentCollection.items
  )

  return (
    <LayoutFramework>
      {contentCollection.map(({ __typename, ...fields }: any) => {
        return getPresenter(__typename, { ...fields })
      })}
    </LayoutFramework>
  )
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
