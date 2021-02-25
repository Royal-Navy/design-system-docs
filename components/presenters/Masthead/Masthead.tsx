import React, { useState } from 'react'
import { Badge } from '@royalnavy/react-component-library'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { StyledMasthead } from './partials/StyledMasthead'
import { StyledButton } from './partials/StyledButton'
import { StyledTitle } from './partials/StyledTitle'
import { StyledContent } from './partials/StyledContent'

interface MastheadProps extends ComponentWithClass {
  title: string
  version: string
}

export const Masthead: React.FC<MastheadProps> = ({ title, version }) => {
  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <StyledMasthead>
      <StyledButton type="button" onClick={() => setMenuToggle(!menuToggle)}>
        Menu
      </StyledButton>
      <StyledContent>
        <StyledTitle className="rn_mr-4" data-testid="masthead-title">
          {title}
        </StyledTitle>
        <Badge color="action" data-testid="masthead-version">
          v{version}
        </Badge>
      </StyledContent>
    </StyledMasthead>
  )
}
