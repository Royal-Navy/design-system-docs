import React, { useRef } from 'react'
import { IconClose } from '@defencedigital/icon-library'
import { useDocumentClick } from '@defencedigital/react-component-library'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledMastheadMenu } from './partials/StyledMastheadMenu'
import { StyledMastheadMobile } from './partials/StyledMastheadMobile'
import { StyledMenuButton } from './partials/StyledMenuButton'
import MODUKDesignSystemLogomark from '../../../../public/MODUKDesignSystemLogomark.svg'

export interface MastheadMenuProps extends ComponentWithClass {
  isOpen?: boolean
  onClose?: (e: Event) => void
}

export const MastheadMenu: React.FC<MastheadMenuProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  const mastheadMenuRef = useRef()

  useDocumentClick(mastheadMenuRef, onClose)

  return (
    <StyledMastheadMenu $isOpen={isOpen} ref={mastheadMenuRef}>
      <StyledMastheadMobile>
        <MODUKDesignSystemLogomark height={25} width="auto" />
        <StyledMenuButton onClick={onClose}>
          <IconClose />
        </StyledMenuButton>
      </StyledMastheadMobile>
      <ol>{children}</ol>
    </StyledMastheadMenu>
  )
}

MastheadMenu.displayName = 'MastheadMenu'
