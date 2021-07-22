import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledMastheadMenu } from './partials/StyledMastheadMenu'

export const MastheadMenu: React.FC<ComponentWithClass> = ({ children }) => {
  return (
    <StyledMastheadMenu>
      <ol>{children}</ol>
    </StyledMastheadMenu>
  )
}

MastheadMenu.displayName = 'MastheadMenu'
