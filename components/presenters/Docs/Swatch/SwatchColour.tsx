import React from 'react'

import { StyledColour } from './partials/StyledColour'
import { StyledLabel } from './partials/StyledLabel'

export interface SwatchColourProps {
  colour: string
  isDark?: boolean
}

export const SwatchColour: React.FC<SwatchColourProps> = ({
  children,
  colour,
  isDark,
}) => (
  <StyledColour
    $backgroundColor={colour}
    $isDark={isDark}
    data-testid="swatch-colour"
  >
    <StyledLabel>{children}</StyledLabel>
    <StyledLabel>{colour}</StyledLabel>
  </StyledColour>
)

SwatchColour.displayName = 'ColourSwatchItem'
