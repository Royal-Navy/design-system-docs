import React from 'react'
import { IconClose } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledMastheadMenu } from './partials/StyledMastheadMenu'
import { StyledMastheadMobile } from './partials/StyledMastheadMobile'
import { StyledMenuButton } from './partials/StyledMenuButton'
import RNDSMobileLogo from '../../../../public/RNDSMobileLogo.svg'

export interface MastheadMenuProps extends ComponentWithClass {
  isOpen?: boolean
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const MastheadMenu: React.FC<MastheadMenuProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <StyledMastheadMenu $isOpen={isOpen}>
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
