/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react'
import { selectors } from '@royalnavy/design-tokens'
import { IconExpandMore, IconExpandLess } from '@royalnavy/icon-library'
import { useDocumentClick } from '@royalnavy/react-component-library'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledMastheadMenuItem } from './partials/StyledMastheadMenuItem'
import { StyledMastheadMenuLink } from './partials/StyledMastheadMenuLink'
import { StyledExpandButton } from './partials/StyledExpandButton'
import { useMastheadMenuItem } from './hooks/useMastheadMenuItem'

export interface MastheadMenuItemProps extends ComponentWithClass {
  link?: React.ReactElement
}

export const MastheadMenuItem: React.FC<MastheadMenuItemProps> = ({
  link,
  children,
}) => {
  const { isNotMobile, setShowChildren, showChildren, subMenuRef } =
    useMastheadMenuItem()
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
        {hasChildren && (
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
      {hasChildren && showChildren && (
        <div
          ref={subMenuRef}
          onClick={(_: React.MouseEvent<HTMLDivElement>) => {
            if (isNotMobile) {
              setShowChildren(false)
            }
          }}
          data-testid="masthead-sub-menu"
        >
          {children}
        </div>
      )}
    </StyledMastheadMenuItem>
  )
}
