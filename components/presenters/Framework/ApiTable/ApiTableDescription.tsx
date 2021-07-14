import React from 'react'

import { StyledBodyRow } from './partials/StyledBodyRow'
import { StyledBodyRowItem } from './partials/StyledBodyRowItem'
import { StyledBodyRowValue } from './partials/StyledBodyRowValue'

export interface ApiTableDescriptionProps {
  children: string
}

export const ApiTableDescription: React.FC<ApiTableDescriptionProps> = ({
  children,
}) => (
  <StyledBodyRow>
    <StyledBodyRowItem>Description</StyledBodyRowItem>
    <StyledBodyRowValue as="p">{children}</StyledBodyRowValue>
  </StyledBodyRow>
)

ApiTableDescription.displayName = 'ApiTableDescription'
