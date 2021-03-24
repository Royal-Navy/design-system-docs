import React from 'react'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { StyledSection } from './partials/StyledSection'

export const Section: React.FC<ComponentWithClass> = (props) => {
  return <StyledSection {...props} />
}
