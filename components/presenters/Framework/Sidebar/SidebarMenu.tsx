import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledNavSection } from './partials/StyledNavSection'
import { StyledNavSectionTitle } from './partials/StyledNavSectionTitle'
import { StyledNavList } from './partials/StyledNavList'

interface SidebarMenuProps extends ComponentWithClass {
  title: string
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  children,
  title,
}) => {
  return (
    <StyledNavSection>
      <StyledNavSectionTitle data-testid="sidebar-menu-title">
        {title}
      </StyledNavSectionTitle>
      <StyledNavList>{children}</StyledNavList>
    </StyledNavSection>
  )
}
