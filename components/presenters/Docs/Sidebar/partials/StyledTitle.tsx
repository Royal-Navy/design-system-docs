import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing, fontSize } = selectors

export const StyledTitle = styled.h1`
  color: ${color('neutral', '700')};
  margin: ${spacing('4')} ${spacing('6')} ${spacing('6')};
  font-size: ${fontSize('xl')};
  font-weight: 500;
`
