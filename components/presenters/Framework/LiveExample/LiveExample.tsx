import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledLiveExample } from './partials/StyledLiveExample'
import { StyledHeader } from './partials/StyledHeader'
import { StyledTitle } from './partials/StyledTitle'

export interface LiveExampleProps extends ComponentWithClass {
  title?: string
}

export const LiveExample: React.FC<LiveExampleProps> = ({
  title,
  children,
}) => (
  <StyledLiveExample data-testid="live-example">
    {title && (
      <StyledHeader>
        <StyledTitle data-testid="live-example-title">{title}</StyledTitle>
      </StyledHeader>
    )}
    {children}
  </StyledLiveExample>
)

LiveExample.displayName = 'LiveExample'
