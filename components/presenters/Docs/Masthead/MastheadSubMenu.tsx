import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledMastheadSubMenu } from './partials/StyledMastheadSubMenu'

export const MastheadSubMenu: React.FC<ComponentWithClass> = ({ children }) => {
  return (
    <StyledMastheadSubMenu>
      <ol>{children}</ol>
    </StyledMastheadSubMenu>
  )
}

MastheadSubMenu.displayName = 'MastheadSubMenu'
