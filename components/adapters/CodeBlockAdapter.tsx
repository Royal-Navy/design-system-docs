import React from 'react'
import camelCase from 'lodash/camelCase'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ContentPanel, LeftCol } from '../presenters/Framework/ContentPanel'
import { CodeBlock } from '../presenters/Framework/CodeBlock'

interface CodeBlockAdapterProps extends ComponentWithClass {
  fields: Record<string, any>
}

export const CodeBlockAdapter: React.FC<CodeBlockAdapterProps> = ({
  fields,
}) => {
  const { title, description, sourceCode, filename } = fields
  const id = camelCase(title)

  return (
    <ContentPanel id={id}>
      <LeftCol>
        {title && <h2>{title}</h2>}
        {description?.json && documentToReactComponents(description.json)}
      </LeftCol>
      <CodeBlock filename={filename}>{sourceCode}</CodeBlock>
    </ContentPanel>
  )
}
