import React from 'react'
import { isNil, isString } from 'lodash'

import { ApiTableFunctionParameterProps } from './ApiTableFunctionParameter'
import { StyledBodyRow } from './partials/StyledBodyRow'
import { StyledBodyRowItem } from './partials/StyledBodyRowItem'
import { StyledBodyRowValue } from './partials/StyledBodyRowValue'
import { StyledParameter } from './partials/StyledParameter'
import { StyledParameterName } from './partials/StyledParameterName'
import { StyledParameters } from './partials/StyledParameters'
import { StyledParameterType } from './partials/StyledParameterType'

export interface ApiTableDefaultValueProps {
  children?:
    | string
    | React.ReactElement<ApiTableFunctionParameterProps>
    | React.ReactElement<ApiTableFunctionParameterProps>[]
}

export const ApiTableDefaultValue: React.FC<ApiTableDefaultValueProps> = ({
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
        <code>Function</code>
        <StyledParameters>{children}</StyledParameters>
      </StyledBodyRowValue>
    </StyledBodyRow>
  )
}

ApiTableDefaultValue.displayName = 'ApiTableDefaultValue'
