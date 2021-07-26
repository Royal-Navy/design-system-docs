import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledMastheadSubMenuItem } from './partials/StyledMastheadSubMenuItem'
import { StyledMastheadMenuLink } from './partials/StyledMastheadMenuLink'

export interface MastheadSubMenuItemProps extends ComponentWithClass {
  link: React.ReactElement
}

export const MastheadSubMenuItem: React.FC<MastheadSubMenuItemProps> = ({
  link,
}) => {
  return (
    <StyledMastheadSubMenuItem>
      {React.cloneElement(link, {
        passHref: true,
        children: (
          <StyledMastheadMenuLink>{link.props.children}</StyledMastheadMenuLink>
        ),
      })}
    </StyledMastheadSubMenuItem>
  )
}

MastheadSubMenuItem.displayName = 'MastheadSubMenuItem'
