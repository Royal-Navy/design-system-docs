import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledHeroCardChild } from './partials/StyledHeroCardChild'

export const HeroCardChild: React.FC<ComponentWithClass> = ({
  children,
  ...rest
}) => {
  return <StyledHeroCardChild {...rest}>{children}</StyledHeroCardChild>
}

HeroCardChild.displayName = 'HeroCardChild'
