import React from 'react'
import { LinkProps } from 'next/link'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledNavLink } from './partials/StyledNavLink'
import { StyledSidebarMenuItem } from './partials/StyledSidebarMenuItem'

export interface SidebarMenuItemProps extends ComponentWithClass {
  link: React.ReactElement<React.PropsWithChildren<LinkProps>>
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ link }) => {
  return (
    <StyledSidebarMenuItem>
      {React.cloneElement(link, {
        ...link.props,
        children: (
          <StyledNavLink data-testid="sidebar-link">
            {link.props.children}
          </StyledNavLink>
        ),
        passHref: true,
      })}
    </StyledSidebarMenuItem>
  )
}
