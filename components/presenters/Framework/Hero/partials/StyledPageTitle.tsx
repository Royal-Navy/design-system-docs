import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { fontSize, spacing, color } = selectors

export const StyledPageTitle = styled.h1`
  font-size: ${fontSize('display-l')};
  font-weight: 700;
  margin: ${spacing('8')} 0;
  color: ${color('neutral', '600')};
  letter-spacing: -1px;
`
