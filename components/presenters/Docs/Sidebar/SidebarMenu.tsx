import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledNavList } from './partials/StyledNavList'
import { StyledNavSection } from './partials/StyledNavSection'
import { StyledNavSectionTitle } from './partials/StyledNavSectionTitle'

interface SidebarMenuProps extends ComponentWithClass {
  title?: string
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  children,
  title,
}) => {
  return (
    <StyledNavSection>
      {title && (
        <StyledNavSectionTitle data-testid="sidebar-menu-title">
          {title}
        </StyledNavSectionTitle>
      )}
      <StyledNavList>{children}</StyledNavList>
    </StyledNavSection>
  )
}
