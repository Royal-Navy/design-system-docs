import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledHeroCardChild } from './partials/StyledHeroCardChild'

export const HeroCardChild: React.FC<ComponentWithClass> = ({
  children,
  ...rest
}) => (
  <StyledHeroCardChild data-testid="hero-card-child" {...rest}>
    {children}
  </StyledHeroCardChild>
)

HeroCardChild.displayName = 'HeroCardChild'
