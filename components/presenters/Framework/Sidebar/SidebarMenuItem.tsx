import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledSidebarMenuItem } from './partials/StyledSidebarMenuItem'
import { StyledNavLink } from './partials/StyledNavLink'

interface SidebarMenuItemProps extends ComponentWithClass {
  href: string
  title: string
  isCode?: boolean
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  href,
  title,
  isCode,
}) => {
  return (
    <StyledSidebarMenuItem>
      <StyledNavLink $isCode={isCode} href={href} data-testid="sidebar-link">
        {title}
      </StyledNavLink>
    </StyledSidebarMenuItem>
  )
}
