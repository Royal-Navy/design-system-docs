import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledSection } from './partials/StyledSection'
import { StyledIndex } from './partials/StyledIndex'
import { StyledTitle } from './partials/StyledTitle'

export interface SectionProps extends ComponentWithClass {
  sectionIndex?: string
  title?: string
}

export const Section: React.FC<SectionProps> = ({
  sectionIndex,
  title,
  children,
}) => {
  return (
    <StyledSection>
      {sectionIndex && <StyledIndex>{sectionIndex}</StyledIndex>}
      {title && <StyledTitle data-testid="section-title">{title}</StyledTitle>}
      {children}
    </StyledSection>
  )
}
