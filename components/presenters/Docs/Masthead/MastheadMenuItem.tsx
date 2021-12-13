/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { IconExpandLess, IconExpandMore } from '@defencedigital/icon-library'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledMastheadMenuButton } from './partials/StyledMastheadMenuButton'
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
  const {
    ariaLabel,
    mediumBreakpointWidth,
    buttonRef,
    setShowChildren,
    showChildren,
    subMenuRef,
  } = useMastheadMenuItem()
  const hasChildren = !!children

  return (
    <StyledMastheadMenuItem $hasChildren={hasChildren}>
      <div>
        {link.props.href === '#' ? (
          <StyledMastheadMenuButton
            aria-label={ariaLabel}
            data-testid="masthead-menu-link"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault()
              setShowChildren(!showChildren)
            }}
            ref={buttonRef}
          >
            {link.props.children}
          </StyledMastheadMenuButton>
        ) : (
          React.cloneElement(link, {
            passHref: true,
            children: (
              <StyledMastheadMenuLink data-testid="masthead-menu-link">
                {link.props.children}
              </StyledMastheadMenuLink>
            ),
          })
        )}
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
