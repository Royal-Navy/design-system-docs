import React from 'react'
import { LinkProps } from 'next/link'

import { StyledOverviewNavLink } from './partials/StyledOverviewNavLink'
import { StyledSidebarMenuItem } from './partials/StyledSidebarMenuItem'

export interface SidebarOverviewItemProps {
  icon: React.ReactElement
  link: React.ReactElement<React.PropsWithChildren<LinkProps>>
}

export const SidebarOverviewMenuItem: React.FC<SidebarOverviewItemProps> = ({
  icon,
  link,
}) => {
  return (
    <StyledSidebarMenuItem>
      {React.cloneElement(link, {
        ...link.props,
        children: (
          <StyledOverviewNavLink data-testid="sidebar-overview-link">
            <>
              {icon}
              <span>{link.props.children}</span>
            </>
          </StyledOverviewNavLink>
        ),
        passHref: true,
      })}
    </StyledSidebarMenuItem>
  )
}

SidebarOverviewMenuItem.displayName = 'SidebarOverviewMenuItem'
