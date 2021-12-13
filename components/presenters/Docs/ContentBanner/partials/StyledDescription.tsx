import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledDescription = styled.p`
  color: ${color('neutral', '500')};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`
