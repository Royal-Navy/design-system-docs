import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledMastheadMenuLink } from './partials/StyledMastheadMenuLink'

export interface MastheadSubMenuItemProps extends ComponentWithClass {
  link: React.ReactElement
}

export const MastheadSubMenuItem: React.FC<MastheadSubMenuItemProps> = ({
  link,
}) => {
  return (
    <li>
      {React.cloneElement(link, {
        passHref: true,
        children: (
          <StyledMastheadMenuLink>{link.props.children}</StyledMastheadMenuLink>
        ),
      })}
    </li>
  )
}

MastheadSubMenuItem.displayName = 'MastheadSubMenuItem'
