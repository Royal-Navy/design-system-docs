import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import camelCase from 'lodash/camelCase'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { MarkdownTable } from '../../presenters/Docs/MarkdownTable'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { CodeBlock } from '../../presenters/Framework/CodeBlock'

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

type CodeBlockType = {
  __typename: string
  sourceCode: string
}

const { color, fontSize, spacing } = selectors

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`

const StyledH2 = styled.h2`
  display: flex;
  align-items: center;

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
        const entryBlockMap = getEntryMap<MarkdownTableType>(links, 'entries')
        const entry = entryBlockMap.get(node.data.target.sys.id)

        if (entry.__typename === 'MarkdownTable') {
          return <MarkdownTable>{entry.markdown}</MarkdownTable>
        }

        return null
      },
      [BLOCKS.HEADING_2]: (_: unknown, content: string[]) => {
        h2Index += 1

        return (
          <StyledH2
            id={camelCase(h2Index + content.toString())}
            data-testid="content-block-h2"
          >
            <span>{h2Index}</span>
            {content.toString()}
          </StyledH2>
        )
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const entryInlineMap = getEntryMap<CodeBlockType>(
          links,
          'entries',
          'inline'
        )
        const entry = entryInlineMap.get(node.data.target.sys.id)

        if (entry.__typename === 'CodeBlock') {
          return <CodeBlock language="scss">{entry.sourceCode}</CodeBlock>
        }

        return null
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
