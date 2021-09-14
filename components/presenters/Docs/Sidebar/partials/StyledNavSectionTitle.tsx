import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, color, spacing } = selectors

export const StyledNavSectionTitle = styled.h2`
  font-size: ${fontSize('s')};
  color: ${color('neutral', '600')};
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 0 ${spacing('6')} 0;
`
