import React from 'react'
import camelCase from 'lodash/camelCase'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ContentPanel, LeftCol, RightCol } from '../presenters/ContentPanel'
import {
  ApiTable,
  ApiTableItem,
  ApiTableDefaultValue,
  ApiTableFunctionParameter,
  ApiTableDescription,
} from '../presenters/ApiTable'

type ApiFieldDefaultValueType = {
  type: string
  value?: string | number | boolean
  args?: Record<string, string>[]
}

interface ApiTableAdapterProps extends ComponentWithClass {
  fields: Record<string, any>
}

function renderDefaultValue(
  defaultValue: ApiFieldDefaultValueType
): React.ReactElement {
  const { value, args } = defaultValue || {}

  if (args) {
    return (
      <ApiTableDefaultValue>
        {args.map(({ type, name }) => {
          return (
            <ApiTableFunctionParameter key={name} type={type}>
              {name}
            </ApiTableFunctionParameter>
          )
        })}
      </ApiTableDefaultValue>
    )
  }

  return <ApiTableDefaultValue>{String(value)}</ApiTableDefaultValue>
}

function mapApiTableItem({
  dataType,
  defaultValue,
  description,
  name,
  required,
}) {
  return (
    <ApiTableItem key={name} isRequired={required} name={name} type={dataType}>
      {renderDefaultValue(defaultValue)}
      {description && <ApiTableDescription>{description}</ApiTableDescription>}
    </ApiTableItem>
  )
}

export const ApiTableAdapter: React.FC<ApiTableAdapterProps> = ({ fields }) => {
  const { title, apiTableDescription, apiFieldCollection } = fields
  const id = camelCase(title)
  const hasApiFieldItems =
    apiFieldCollection && !!apiFieldCollection.items.length

  return (
    <ContentPanel id={id}>
      <LeftCol>
        {title && <h2>{title}</h2>}
        <p>{apiTableDescription}</p>
        {hasApiFieldItems && (
          <ApiTable>{apiFieldCollection.items.map(mapApiTableItem)}</ApiTable>
        )}
      </LeftCol>
      <RightCol />
    </ContentPanel>
  )
}
