import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledSidebar } from './partials/StyledSidebar'
import { StyledSidebarMenu } from './partials/StyledSidebarMenu'
import { StyledTitle } from './partials/StyledTitle'

interface SidebarProps extends ComponentWithClass {
  title: string
}

export const Sidebar: React.FC<SidebarProps> = ({ children, title }) => {
  return (
    <StyledSidebar>
      <StyledTitle data-testid="sidebar-title">{title}</StyledTitle>
      <StyledSidebarMenu>{children}</StyledSidebarMenu>
    </StyledSidebar>
  )
}
