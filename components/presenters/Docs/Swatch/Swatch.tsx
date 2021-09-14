import React from 'react'

import { StyledSwatch } from './partials/StyledSwatch'

export const Swatch: React.FC = (props) => {
  return <StyledSwatch data-testid="swatch" {...props} />
}

Swatch.displayName = 'Swatch'
