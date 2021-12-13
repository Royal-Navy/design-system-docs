import React from 'react'
import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import camelCase from 'lodash/camelCase'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import {
  ContentPanel,
  LeftCol,
  RightCol,
} from '../../presenters/Framework/ContentPanel'

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

/**
 * Rich Text Field embedded asset rendering has been disabled
 * for now because it dramatically increases query complexity.
 *
 * In the meantime, ensure that assets have their own fields.
 *
 * https://www.contentful.com/developers/docs/references/graphql/#/introduction/query-complexity-limits
 *
 */
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
  const { title, description, image } = fields
  const id = camelCase(title)

  return (
    <ContentPanel id={id}>
      <LeftCol>
        {title && <h2>{title}</h2>}
        {description?.json &&
          documentToReactComponents(
            description.json
            // getRichTextRenderOptions(description.links)
          )}
        {image && (
          <StyledImage
            alt={image.title}
            src={image.url}
            data-testid="content-block-image"
          />
        )}
      </LeftCol>
      <RightCol />
    </ContentPanel>
  )
}
