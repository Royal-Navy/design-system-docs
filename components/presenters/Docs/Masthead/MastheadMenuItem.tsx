import React, { useState } from 'react'
import { IconExpandMore, IconExpandLess } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledMastheadMenuItem } from './partials/StyledMastheadMenuItem'
import { StyledMastheadMenuLink } from './partials/StyledMastheadMenuLink'
import { StyledExpandButton } from './partials/StyledExpandButton'

export interface MastheadMenuItemProps extends ComponentWithClass {
  link?: React.ReactElement
}

export const MastheadMenuItem: React.FC<MastheadMenuItemProps> = ({
  link,
  children,
}) => {
  const [showChildren, setShowChildren] = useState<boolean>(false)
  const hasChildren = !!children

  return (
    <StyledMastheadMenuItem $hasChildren={hasChildren}>
      <div>
        {React.cloneElement(link, {
          passHref: true,
          children: (
            <StyledMastheadMenuLink>
              {link.props.children}
            </StyledMastheadMenuLink>
          ),
        })}
        {children && (
          <StyledExpandButton
            onClick={(_: React.MouseEvent<HTMLButtonElement>) =>
              setShowChildren(!showChildren)
            }
            data-testid="masthead-menu-expand-button"
          >
            {!showChildren ? <IconExpandMore /> : <IconExpandLess />}
          </StyledExpandButton>
        )}
      </div>
      {hasChildren && showChildren && children}
    </StyledMastheadMenuItem>
  )
}
