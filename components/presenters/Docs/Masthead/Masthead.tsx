import React from 'react'
import { IconMenu } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledMasthead } from './partials/StyledMasthead'
import { StyledMenuButton } from './partials/StyledMenuButton'
import { Badge } from '../Badge'
import { ReactComponent as RNDSLogo } from '../../../../public/RNDSLogo.svg'

export interface MastheadProps extends ComponentWithClass {
  version?: string
  onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Masthead: React.FC<MastheadProps> = ({
  children,
  version = '0.1.0',
  onToggle,
}) => {
  return (
    <StyledMasthead>
      <div>
        <RNDSLogo />
        <Badge variant="light">{version}</Badge>
      </div>
      <div>
        {children}
        <StyledMenuButton
          type="button"
          onClick={onToggle}
          data-testid="masthead-toggle-button"
        >
          <IconMenu width={22} height={22} />
        </StyledMenuButton>
      </div>
    </StyledMasthead>
  )
}

Masthead.displayName = 'Masthead'
