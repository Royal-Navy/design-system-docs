import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { CodeHighlighter } from '../../presenters/Docs/CodeHighlighter'

interface CodeBlockAdapterProps extends ComponentWithClass {
  fields: Record<string, any>
}

export const CodeBlockAdapter: React.FC<CodeBlockAdapterProps> = ({
  fields,
}) => {
  const { title, description, sourceCode } = fields

  return (
    <>
      <h2>{title}</h2>
      {description?.json && documentToReactComponents(description.json)}
      <CodeHighlighter language="javascript" source={sourceCode} />
    </>
  )
}
