import React from 'react'
import { Badge } from '@royalnavy/react-component-library'
import { IconChevronLeft } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledFrame } from './partials/StyledFrame'
import { StyledSidebar } from './partials/StyledSidebar'
import { StyledHomeLink } from './partials/StyledHomeLink'
import { StyledHeader } from './partials/StyledHeader'
import { StyledTitle } from './partials/StyledTitle'
import { StyledButton } from './partials/StyledButton'
import { StyledSidebarMenu } from './partials/StyledSidebarMenu'

interface SidebarProps extends ComponentWithClass {
  title: string
  isOpen?: boolean
  onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  title,
  isOpen = false,
  onToggle,
}) => {
  return (
    <StyledFrame data-testid="sidebar" $isOpen={isOpen}>
      <StyledSidebar>
        <div>
          <StyledHomeLink href="https://docs.royalnavy.io">
            <IconChevronLeft />
            Back to docs
          </StyledHomeLink>
          <StyledHeader>
            <Badge color="action" colorVariant="solid" size="small">
              Framework
            </Badge>
            <StyledTitle data-testid="sidebar-title">{title}</StyledTitle>
          </StyledHeader>
          <StyledButton
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onToggle(e)}
            data-testid="sidebar-toggle-button"
          >
            Close
          </StyledButton>
        </div>
        <StyledSidebarMenu>{children}</StyledSidebarMenu>
      </StyledSidebar>
    </StyledFrame>
  )
}
