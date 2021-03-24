import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import camelCase from 'lodash/camelCase'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ContentPanel, LeftCol, RightCol } from '../presenters/ContentPanel'

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

const { spacing, color } = selectors

const StyledImage = styled.img`
  margin-top: ${spacing('12')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${color('neutral', '100')};
  border-radius: 3px;
`

function getRichTextRenderOptions(links) {
  const assetBlockMap = new Map<string, AssetType>(
    links?.assets?.block?.map((asset) => [asset.sys.id, asset])
  )

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { description, url, height, width } = assetBlockMap.get(
          node.data.target.sys.id
        )

        return (
          <StyledImage
            alt={description}
            src={url}
            height={height}
            width={width}
          />
        )
      },
    },
  }
}

export const ContentBlockAdapter: React.FC<ContentBlockAdapterProps> = ({
  fields,
}) => {
  const { title, description } = fields
  const id = camelCase(title)

  return (
    <ContentPanel id={id}>
      <LeftCol>
        {title && <h2>{title}</h2>}
        {description?.json &&
          documentToReactComponents(
            description.json,
            getRichTextRenderOptions(description.links)
          )}
      </LeftCol>
      <RightCol />
    </ContentPanel>
  )
}
