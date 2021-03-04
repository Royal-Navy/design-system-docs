import React from 'react'

import { StyledParameter } from './partials/StyledParameter'
import { StyledParameterName } from './partials/StyledParameterName'
import { StyledParameterType } from './partials/StyledParameterType'

export interface ApiTableFunctionParameterProps {
  children: string
  type: string
}

export const ApiTableFunctionParameter: React.FC<ApiTableFunctionParameterProps> = ({
  children,
  type,
}) => (
  <StyledParameter>
    <StyledParameterName data-testid="api-table-parameter-name">
      {children}
    </StyledParameterName>
    <StyledParameterType data-testid="api-table-parameter-type">
      {type}
    </StyledParameterType>
  </StyledParameter>
)

ApiTableFunctionParameter.displayName = 'ApiTableFunctionParameter'
