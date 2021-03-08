import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, color } = selectors

export const StyledPageDescription = styled.p`
  font-size: ${fontSize('l')};
  font-weight: 400;
  color: ${color('neutral', '400')};
`
