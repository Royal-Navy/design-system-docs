import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, shadow, spacing } = selectors

export const StyledItem = styled.div`
  border: 1px solid ${color('neutral', '100')};
  border-radius: 3px;
  box-shadow: ${shadow('1')};
  margin-top: ${spacing('12')};
  & + & {
    margin-top: ${spacing('9')};
  }
  max-width: 750px;
  overflow: hidden;
`
