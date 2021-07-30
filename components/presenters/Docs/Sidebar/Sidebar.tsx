import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { SidebarOverviewProps } from './SidebarOverview'
import { StyledSidebar } from './partials/StyledSidebar'
import { StyledSidebarMenu } from './partials/StyledSidebarMenu'
import { StyledTitle } from './partials/StyledTitle'
import { SidebarFilterProps } from './SidebarFilter'
import { SidebarMenuProps } from './SidebarMenu'

export interface SidebarProps extends ComponentWithClass {
  children:
    | React.ReactElement<SidebarOverviewProps>
    | React.ReactElement<SidebarFilterProps>
    | React.ReactElement<SidebarMenuProps>
    | React.ReactElement<SidebarMenuProps>[]
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
