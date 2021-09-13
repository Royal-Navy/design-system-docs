import React from 'react'

import { StyledSwatch } from './partials/StyledSwatch'

export const Swatch: React.FC = (props) => {
  return <StyledSwatch {...props} />
}

Swatch.displayName = 'Swatch'
