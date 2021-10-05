import React, { useRef } from 'react'
import { IconClose } from '@royalnavy/icon-library'
import { useDocumentClick } from '@royalnavy/react-component-library'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledMastheadMenu } from './partials/StyledMastheadMenu'
import { StyledMastheadMobile } from './partials/StyledMastheadMobile'
import { StyledMenuButton } from './partials/StyledMenuButton'
import RNDSMobileLogo from '../../../../public/RNDSMobileLogo.svg'

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
        <RNDSMobileLogo />
        <StyledMenuButton onClick={onClose}>
          <IconClose />
        </StyledMenuButton>
      </StyledMastheadMobile>
      <ol>{children}</ol>
    </StyledMastheadMenu>
  )
}

MastheadMenu.displayName = 'MastheadMenu'
