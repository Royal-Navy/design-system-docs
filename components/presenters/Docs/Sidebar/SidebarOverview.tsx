import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { SidebarOverviewItemProps } from './SidebarOverviewMenuItem'
import { StyledNavList } from './partials/StyledNavList'
import { StyledOverview } from './partials/StyledOverview'
import { StyledOverviewTitle } from './partials/StyledOverviewTitle'

export interface SidebarOverviewProps extends ComponentWithClass {
  children:
    | React.ReactElement<SidebarOverviewItemProps>
    | React.ReactElement<SidebarOverviewItemProps>[]
}

export const SidebarOverview: React.FC<SidebarOverviewProps> = ({
  children,
}) => {
  return (
    <StyledOverview>
      <StyledOverviewTitle>Overview</StyledOverviewTitle>
      <StyledNavList data-testid="sidebar-overview-links">
        {children}
      </StyledNavList>
    </StyledOverview>
  )
}

SidebarOverview.displayName = 'SidebarOverview'
