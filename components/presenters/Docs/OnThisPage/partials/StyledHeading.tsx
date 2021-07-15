import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledHeading = styled.h1`
  color: ${color('neutral', '500')};
  font-size: ${fontSize('l')};
  margin-bottom: ${spacing('7')};
`
