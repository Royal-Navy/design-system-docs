import React from 'react'
import { Badge } from '@royalnavy/react-component-library'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { StyledMasthead } from './partials/StyledMasthead'
import { StyledButton } from './partials/StyledButton'
import { StyledTitle } from './partials/StyledTitle'
import { StyledContent } from './partials/StyledContent'

interface MastheadProps extends ComponentWithClass {
  title: string
  version: string
  onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Masthead: React.FC<MastheadProps> = ({
  title,
  version,
  onToggle,
}) => {
  return (
    <StyledMasthead>
      <StyledButton
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => onToggle(e)}
        data-testid="masthead-toggle-button"
      >
        Menu
      </StyledButton>
      <StyledContent>
        <StyledTitle data-testid="masthead-title">{title}</StyledTitle>
        <Badge color="action" data-testid="masthead-version">
          v{version}
        </Badge>
      </StyledContent>
    </StyledMasthead>
  )
}
