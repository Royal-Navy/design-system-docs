import React from 'react'
import { isNil, isString } from 'lodash'

import { ApiTableFunctionParameterProps } from './ApiTableFunctionParameter'
import { StyledBodyRow } from './partials/StyledBodyRow'
import { StyledBodyRowItem } from './partials/StyledBodyRowItem'
import { StyledBodyRowValue } from './partials/StyledBodyRowValue'
import { StyledParameters } from './partials/StyledParameters'

export interface ApiTableDefaultValueProps {
  type?: string
  children?:
    | string
    | React.ReactElement<ApiTableFunctionParameterProps>
    | React.ReactElement<ApiTableFunctionParameterProps>[]
}

export const ApiTableDefaultValue: React.FC<ApiTableDefaultValueProps> = ({
  type,
  children,
}) => {
  if (isNil(children) || isString(children)) {
    return (
      <StyledBodyRow>
        <StyledBodyRowItem>Default Value</StyledBodyRowItem>
        <StyledBodyRowValue>
          <code>{children || '-'}</code>
        </StyledBodyRowValue>
      </StyledBodyRow>
    )
  }

  return (
    <StyledBodyRow>
      <StyledBodyRowItem>Default Value</StyledBodyRowItem>
      <StyledBodyRowValue>
        <code data-testid="api-table-default-value-type">
          {type || 'Function'}
        </code>
        <StyledParameters>{children}</StyledParameters>
      </StyledBodyRowValue>
    </StyledBodyRow>
  )
}

ApiTableDefaultValue.displayName = 'ApiTableDefaultValue'
