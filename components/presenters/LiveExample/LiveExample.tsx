import React from 'react'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { StyledLiveExample } from './partials/StyledLiveExample'

export const LiveExample: React.FC<ComponentWithClass> = (props) => (
  <StyledLiveExample {...props} />
)

LiveExample.displayName = 'LiveExample'
