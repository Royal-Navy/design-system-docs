import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, fontSize } = selectors

export const StyledTitle = styled.h1`
  color: ${color('neutral', 'white')};
  margin: ${spacing('6')} 0 0 0;
  font-size: ${fontSize('xl')};
  font-weight: 500;
`
