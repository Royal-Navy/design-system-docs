import React from 'react'
import { LinkProps } from 'next/link'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledIconNavLink } from './partials/StyledIconNavLink'
import { StyledNavLink } from './partials/StyledNavLink'
import { StyledSidebarMenuItem } from './partials/StyledSidebarMenuItem'

export interface SidebarMenuItemProps extends ComponentWithClass {
  icon?: React.ReactElement
  link: React.ReactElement<React.PropsWithChildren<LinkProps>>
  isActive?: boolean
}

function getLink(link: React.ReactElement<React.PropsWithChildren<LinkProps>>) {
  return (
    <StyledNavLink data-testid="sidebar-link">
      {link.props.children}
    </StyledNavLink>
  )
}

function getIconLink(
  icon: React.ReactElement,
  link: React.ReactElement<React.PropsWithChildren<LinkProps>>
) {
  return (
    <StyledIconNavLink data-testid="sidebar-icon-link">
      <>
        {icon}
        <span>{link.props.children}</span>
      </>
    </StyledIconNavLink>
  )
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  icon,
  link,
  isActive,
}) => {
  return (
    <StyledSidebarMenuItem $isActive={isActive} aria-current={isActive}>
      {React.cloneElement(link, {
        ...link.props,
        children: icon ? getIconLink(icon, link) : getLink(link),
        passHref: true,
      })}
    </StyledSidebarMenuItem>
  )
}
