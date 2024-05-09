import React from 'react'
import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import kebabCase from 'lodash/kebabCase'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import IframeResizer from 'iframe-resizer-react'
import { stringify } from 'query-string'

import { MarkdownTable } from '../../presenters/Docs/MarkdownTable'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { CodeBlock } from '../../presenters/Framework/CodeBlock'
import { Swatch, SwatchColour } from '../../presenters/Docs/Swatch'
import { StorybookStory } from '../../../graphql'

export const STORYBOOK_BASE_URL = (
  process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL ||
  'https://storybook.design-system.navy.digital.mod.uk'
).replace(/\/$/, '')

interface ContentBlockAdapterProps extends ComponentWithClass {
  fields: Record<string, any>
}

export type AssetType = {
  fileName: string
  title: string
  description: string
  url: string
  height: number
  width: number
}

type MarkdownTableType = {
  __typename: string
  markdown: string
}

export type CodeBlockType = {
  __typename: string
  sourceCode: string
}

type HyperlinkType = {
  url: string
}

type SwatchColourType = {
  name: string
  colour: string
  isDark: boolean
}

type SwatchType = {
  __typename: string
  colourCollection: {
    items: SwatchColourType[]
  }
}

const { color, fontSize, spacing } = selectors

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`

const StyledH2 = styled.h2`
  display: flex;
  align-items: center;
  padding-top: 150px;
  margin-top: -120px !important;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${color('neutral', '200')};
    border-radius: 5px;
    font-size: ${fontSize('s')};
    padding: ${spacing('4')};
    height: 1.5rem;
    margin-right: ${spacing('5')};
  }
`

function getEntryMap<T>(links, linkType, entryType = 'block') {
  return new Map<string, T>(
    links?.[linkType]?.[entryType]?.map((entry) => [entry.sys.id, entry])
  )
}

const StyledIframeResizer = styled(IframeResizer)`
  border: none;
  width: 100%;
  display: block;
`

function getRichTextRenderOptions(links) {
  let h2Index = 0

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const assetBlockMap = getEntryMap<AssetType>(links, 'assets')
        const { description, url, height, width } = assetBlockMap.get(
          node.data.target.sys.id
        )

        return (
          <StyledImage
            alt={description}
            src={url}
            height={height}
            width={width}
            data-testid="content-block-img"
          />
        )
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const entryBlockMap = getEntryMap<
          CodeBlockType | MarkdownTableType | SwatchType | StorybookStory
        >(links, 'entries')
        const entry = entryBlockMap.get(node.data.target.sys.id)

        if (entry.__typename === 'CodeBlock') {
          return (
            <CodeBlock language="scss">
              {(entry as CodeBlockType).sourceCode}
            </CodeBlock>
          )
        }

        if (entry.__typename === 'MarkdownTable') {
          return (
            <MarkdownTable>
              {(entry as MarkdownTableType).markdown}
            </MarkdownTable>
          )
        }

        if (entry.__typename === 'Swatch') {
          return (
            <Swatch>
              {(entry as SwatchType).colourCollection.items.map(
                ({ colour, isDark, name }) => (
                  <SwatchColour colour={colour} isDark={isDark} key={colour}>
                    {name}
                  </SwatchColour>
                )
              )}
            </Swatch>
          )
        }

        if (entry.__typename === 'StorybookStory') {
          const story = entry as StorybookStory
          const query = {
            viewMode: 'story',
            id: story.storyId,
            args: story.args,
          }

          return (
            <StyledIframeResizer
              title={story.title}
              height={0}
              src={`${STORYBOOK_BASE_URL}/iframe.html?${stringify(query)}`}
            />
          )
        }

        return null
      },
      [BLOCKS.HEADING_2]: (_: unknown, content: string[]) => {
        h2Index += 1

        return (
          <StyledH2
            id={kebabCase(h2Index + content.toString())}
            data-testid="content-block-h2"
          >
            <span>{h2Index}</span>
            {content.toString()}
          </StyledH2>
        )
      },
      [INLINES.ASSET_HYPERLINK]: (node) => {
        const hyperlinksMap = getEntryMap<HyperlinkType>(
          links,
          'assets',
          'hyperlink'
        )
        const hyperlink = hyperlinksMap.get(node.data.target.sys.id)

        return <a href={hyperlink.url}>{node.content[0].value}</a>
      },
    },
  }
}

export const ContentBlockAdapter: React.FC<ContentBlockAdapterProps> = ({
  fields,
}) => {
  const { title, description, image } = fields

  return (
    <>
      {title && <p data-testid="content-block-title">{title}</p>}
      {description?.json &&
        documentToReactComponents(
          description.json,
          getRichTextRenderOptions(description.links)
        )}
      {image && (
        <StyledImage
          alt={image.title}
          src={image.url}
          data-testid="content-block-image"
        />
      )}
    </>
  )
}
