import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, color, spacing } = selectors

export const StyledNavSectionTitle = styled.h4`
  font-size: ${fontSize('s')};
  color: ${color('neutral', '200')};
  text-transform: uppercase;
  margin: 0 0 ${spacing('6')} 0;
  font-weight: 400;
  padding: 0 ${spacing('12')};
`
