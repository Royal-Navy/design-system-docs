import React from 'react'
import camelCase from 'lodash/camelCase'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ContentPanel, LeftCol, RightCol } from '../presenters/ContentPanel'
import {
  ApiTable,
  ApiTableItem,
  ApiTableDefaultValue,
  ApiTableDescription,
} from '../presenters/ApiTable'

interface ApiTableAdapterProps extends ComponentWithClass {
  fields: any
}

export const ApiTableAdapter: React.FC<ApiTableAdapterProps> = ({ fields }) => {
  const { title, apiTableDescription, apiFieldCollection } = fields
  const id = camelCase(title)

  return (
    <ContentPanel id={id}>
      <LeftCol>
        {title && <h2>{title}</h2>}
        {apiTableDescription}
        <ApiTable>
          {apiFieldCollection &&
            apiFieldCollection.items.map(
              ({ dataType, defaultValue, description, name, required }) => {
                return (
                  <ApiTableItem
                    key={name}
                    isRequired={required}
                    name={name}
                    type={dataType}
                  >
                    <ApiTableDefaultValue>{defaultValue}</ApiTableDefaultValue>
                    {description && (
                      <ApiTableDescription>{description}</ApiTableDescription>
                    )}
                  </ApiTableItem>
                )
              }
            )}
        </ApiTable>
      </LeftCol>
      <RightCol />
    </ContentPanel>
  )
}
