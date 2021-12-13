import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledFilterOuterWrapper = styled.div`
  background-color: ${color('neutral', 'white')};
  border: 1px solid ${color('neutral', '100')};
  border-radius: 8px;
`
