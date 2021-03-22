import React from 'react'
import camelCase from 'lodash/camelCase'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ContentPanel, LeftCol, RightCol } from '../presenters/ContentPanel'

interface ContentBlockAdapterProps extends ComponentWithClass {
  fields: any
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
        {description?.json && documentToReactComponents(description.json)}
      </LeftCol>
      <RightCol />
    </ContentPanel>
  )
}
