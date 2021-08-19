import React, { useState } from 'react'
import { IconMenu } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledMasthead } from './partials/StyledMasthead'
import { StyledMenuButton } from './partials/StyledMenuButton'
import { Badge } from '../Badge'
import RNDSLogo from '../../../../public/RNDSLogo.svg'

export interface MastheadProps extends ComponentWithClass {
  version?: string
}

export const Masthead: React.FC<MastheadProps> = ({
  children,
  version = '0.1.0',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <StyledMasthead $isOpen={isOpen}>
      <div>
        <RNDSLogo />
        <Badge variant="light">{version}</Badge>
      </div>
      <div>
        {React.Children.map(children, (child: React.ReactElement) => {
          return React.cloneElement(child, {
            isOpen,
            onClose: (_: React.MouseEvent<HTMLButtonElement>) =>
              setIsOpen(false),
          })
        })}
        <StyledMenuButton
          type="button"
          onClick={(_) => setIsOpen(!isOpen)}
          data-testid="masthead-toggle-button"
        >
          <IconMenu width={22} height={22} />
        </StyledMenuButton>
      </div>
    </StyledMasthead>
  )
}

Masthead.displayName = 'Masthead'
