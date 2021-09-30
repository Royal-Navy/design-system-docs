import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledHeroCard } from './partials/StyledHeroCard'
import { StyledTitle } from './partials/StyledTitle'
import { StyledDescription } from './partials/StyledDescription'
import { StyledChildren } from './partials/StyledChildren'

export const HERO_CARD_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const

export type HeroCardVariantType =
  | typeof HERO_CARD_VARIANT.PRIMARY
  | typeof HERO_CARD_VARIANT.SECONDARY

export interface HeroCardProps extends ComponentWithClass {
  title?: string
  description?: string
  cta?: React.ReactElement
  variant?: HeroCardVariantType
}

export const HeroCard: React.FC<HeroCardProps> = ({
  title,
  description,
  children,
  cta,
  variant = HERO_CARD_VARIANT.PRIMARY,
}) => {
  return (
    <StyledHeroCard $variant={variant}>
      {title && <StyledTitle>{title}</StyledTitle>}
      {description && <StyledDescription>{description}</StyledDescription>}
      {children && <StyledChildren>{children}</StyledChildren>}
      {cta}
    </StyledHeroCard>
  )
}

HeroCard.displayName = 'HeroCard'
