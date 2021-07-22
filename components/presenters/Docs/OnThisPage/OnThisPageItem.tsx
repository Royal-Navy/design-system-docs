import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledItem } from './partials/StyledItem'

export interface OnThisPageItemProps extends ComponentWithClass {
  children: string
  isActive?: boolean
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const OnThisPageItem: React.FC<OnThisPageItemProps> = ({
  isActive,
  ...rest
}) => (
  <StyledItem $isActive={isActive} data-testid="on-this-page-item" {...rest} />
)

OnThisPageItem.displayName = 'OnThisPageItem'
