import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledHero } from './partials/StyledHero'
import { StyledCTA } from './partials/StyledCTA'
import { StyledReleaseText } from './partials/StyledReleaseText'
import { StyledTitle } from './partials/StyledTitle'
import { StyledDescription } from './partials/StyledDescription'
import { StyledSpacer } from './partials/StyledSpacer'
import NelsonLogomark from '../../../../public/NelsonLogomark.svg'

export interface HeroProps extends ComponentWithClass {
  title?: string
  description?: string
  cta1?: React.ReactElement
  cta2?: React.ReactElement
  version: string
}

export const Hero: React.FC<HeroProps> = ({
  cta1,
  cta2,
  title,
  description,
  version,
}) => {
  const ctaExists = !!cta1 || !!cta2

  return (
    <StyledHero>
      <NelsonLogomark height={100} width={60} />
      {title && <StyledTitle>{title}</StyledTitle>}
      {description && <StyledDescription>{description}</StyledDescription>}
      {ctaExists && (
        <StyledCTA>
          {cta1}
          {cta2}
        </StyledCTA>
      )}
      <StyledReleaseText>
        <span>
          Current version{' '}
          <a href="https://github.com/Royal-Navy/design-system/releases/latest">
            <strong>{version}</strong>
          </a>
          <StyledSpacer />
          <a href="https://github.com/Royal-Navy/design-system/releases">
            All releases
          </a>
        </span>
      </StyledReleaseText>
    </StyledHero>
  )
}

Hero.displayName = 'Hero'
