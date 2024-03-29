import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { fontSize, color } = selectors

export const StyledPageDescription = styled.p`
  &&& {
    font-size: ${fontSize('l')};
    margin-bottom: 0;
  }

  font-weight: 400;
  color: ${color('neutral', '400')};
`
