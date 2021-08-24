import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledCard } from './partials/StyledCard'
import { StyledTitle } from './partials/StyledTitle'
import { Button, BUTTON_VARIANT } from '../Button'

export interface CardProps extends ComponentWithClass {
  title: string
  titleColor: '#C676FF' | '#6E72FF' | '#62DCF6' | '#5DE6B4'
  href: string
  anchorText: string
}

export const Card: React.FC<CardProps> = ({
  title,
  titleColor = '#C676FF',
  href,
  anchorText,
  children,
}) => {
  return (
    <StyledCard>
      <StyledTitle $titleColor={titleColor}>{title}</StyledTitle>
      <p>{children}</p>
      <Button
        variant={BUTTON_VARIANT.QUATERNARY}
        href={href}
        data-testid="card-anchor"
      >
        {anchorText}
      </Button>
    </StyledCard>
  )
}

Card.displayName = 'Card'
