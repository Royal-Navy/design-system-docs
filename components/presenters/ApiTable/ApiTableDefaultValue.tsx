import React from 'react'

import { StyledBodyRow } from './partials/StyledBodyRow'
import { StyledBodyRowItem } from './partials/StyledBodyRowItem'
import { StyledBodyRowValue } from './partials/StyledBodyRowValue'

export interface ApiTableDefaultValueProps {
  children?: string
}

export const ApiTableDefaultValue: React.FC<ApiTableDefaultValueProps> = ({
  children,
}) => (
  <StyledBodyRow>
    <StyledBodyRowItem>Default Value</StyledBodyRowItem>
    <StyledBodyRowValue>
      <code>{children || '-'}</code>
    </StyledBodyRowValue>
  </StyledBodyRow>
)

ApiTableDefaultValue.displayName = 'ApiTableDefaultValue'
