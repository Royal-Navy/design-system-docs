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

export interface MastheadMenuItemProps extends ComponentWithClass {
  link?: React.ReactElement
}

const { breakpoint } = selectors

export const MastheadMenuItem: React.FC<MastheadMenuItemProps> = ({
  link,
  children,
}) => {
  const subMenuRef = useRef()
  const [showChildren, setShowChildren] = useState<boolean>(false)
  const hasChildren = !!children
  const mediumBreakpointWidth = Number(
    breakpoint('m').breakpoint.replace(/px/g, '')
  )

  useDocumentClick(subMenuRef, (_: Event) => {
    if (window.innerWidth >= mediumBreakpointWidth) {
      setShowChildren(false)
    }
  })

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
            if (window.innerWidth >= mediumBreakpointWidth) {
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
